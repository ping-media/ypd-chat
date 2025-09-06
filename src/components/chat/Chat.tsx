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

const Chat = ({ id }: { id?: string }) => {
  const { fetchData } = useChat();
  const { dataList, loading } = usePageData();

  useEffect(() => {
    if (id !== "" && id !== undefined) {
      fetchData(id);
    }
  }, [id]);

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
                      <div className="w-full">
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
