import { useEffect, useMemo, useRef } from "react";
import { cn, prepareMessages } from "@/lib/utils";
// import { dummyChats } from "@/lib/constant";
import ChatForm from "./ChatForm";
import { ScrollArea } from "../ui/scroll-area";
import { usePageData } from "@/hooks/usePageData";
import AssessmentForm from "../form/AssessmentForm";
import Text from "../Text";
import useChat from "@/hooks/use-chat";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import { Sparkle } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Chat = () => {
  const { fetchData } = useChat();
  const { first_step } = useSelector(
    (state: RootState) => state.productSession
  );
  const { dataList, loading } = usePageData();

  useEffect(() => {
    if (first_step !== "") {
      fetchData(first_step);
    }
  }, [first_step]);

  const { introMessages, questions, completionMessage } = useMemo(
    () => prepareMessages(dataList),
    [dataList]
  );

  const { displayedMessages, currentMessage, messageIndex } =
    useTypingEffect(introMessages);

  const introFinished = messageIndex >= introMessages.length;

  const endRef = useRef<HTMLDivElement | null>(null);

  // scroll to bottom whenever messages update
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [displayedMessages, currentMessage]);

  return (
    <>
      <section className="flex h-full gap-6">
        <div
          className={cn(
            "bg-primary-foreground dark:bg-transparent w-full flex-1 flex-col transition-all duration-200 sm:static flex"
          )}
        >
          {/* Conversation */}
          <div className="flex flex-1 flex-col gap-2 rounded-md px-4 pt-0 pb-4">
            <div className="flex size-full flex-1">
              <div className="chat-text-container relative -mr-4 flex flex-1 flex-col overflow-y-hidden">
                <ScrollArea className="chat-flex flex h-40 w-full grow flex-col-reverse justify-start gap-4 py-2 pr-4 pb-4">
                  {loading ? (
                    <div>
                      <div className="w-full p-4">
                        <Text className="flex items-center gap-1 animate-pulse text-green-100">
                          <Sparkle className="size-4" /> Thinking...
                        </Text>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 w-full">
                      {displayedMessages.map((msg, i) => (
                        <div key={i} className="p-3">
                          {msg}
                        </div>
                      ))}

                      {currentMessage && <Text>{currentMessage}</Text>}

                      {introFinished && questions.length > 0 && (
                        <AssessmentForm data={questions} />
                      )}

                      {introFinished && completionMessage && (
                        <Text>{completionMessage}</Text>
                      )}
                      <div ref={endRef} />
                    </div>
                  )}
                  {/* {[...dummyChats].reverse().map((msg) => (
                    <div key={msg.id}>
                      {msg.sender === "ai" ? (
                        <div className="w-full p-4">
                          Structured AI Message
                          <h2 className="text-green-700 font-semibold text-lg">
                            Welcome back, Yash!
                          </h2>
                          <p className="text-sm mt-2">
                            In Step 1, we discovered your natural interests and
                            strengths – that was about WHAT you enjoy doing. Now
                            we're going deeper to understand WHY certain things
                            matter to you.
                          </p>
                          <h3 className="text-green-700 font-semibold mt-4">
                            What We're Exploring Today:
                          </h3>
                          <ul className="list-disc ml-5 text-sm mt-1">
                            <li>
                              Your core values - What principles guide your
                              decisions?
                            </li>
                            <li>
                              What motivates you - What makes you want to work
                              hard?
                            </li>
                            <li>
                              Your priorities - When forced to choose, what
                              wins?
                            </li>
                            <li>
                              Success definitions - What would make you feel
                              truly fulfilled?
                            </li>
                          </ul>
                          <h3 className="text-green-700 font-semibold mt-4">
                            Why This Matters for Your Career:
                          </h3>
                          <p className="text-sm mt-1">
                            Two people can have the same interests but very
                            different values. One might prioritize financial
                            security, while another values creative freedom.
                            Understanding YOUR values ensures you find a career
                            path that doesn't just match your skills, but also
                            fulfills your deeper needs.
                          </p>
                          <h3 className="text-green-700 font-semibold mt-4">
                            How We'll Explore This:
                          </h3>
                          <p className="text-sm mt-1">
                            I'll present real-life scenarios where you have to
                            make choices. These aren't right or wrong – they're
                            about discovering what feels most authentic to YOU.
                          </p>
                          <p className="text-sm mt-1">
                            Ready to uncover what drives you at your core?
                          </p>
                        </div>
                      ) : (
                        <div className="flex justify-end">
                          <div className="bg-[var(--color-green-30)] border-[var(--color-green-30)]/10 dark:bg-white/20 dark:backdrop-blur-lg dark:border-white/10 dark:shadow-lg dark:shadow-black/20 max-w-[70%] p-3 rounded-[16px_16px_0_16px] shadow-md">
                            {msg.message}
                            <div className="text-right text-xs mt-1 text-gray-400 dark:text-gray-300">
                              {new Date(msg.timestamp).toLocaleTimeString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))} */}
                </ScrollArea>
              </div>
            </div>
            <ChatForm />
          </div>
        </div>
      </section>
    </>
  );
};

export default Chat;
