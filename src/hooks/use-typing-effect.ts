import { useEffect, useState } from "react";

export const useTypingEffect = (
  messages: string[],
  minSpeed = 20,
  maxSpeed = 50,
  delayBetween = 800
) => {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (messageIndex >= messages.length) return;

    const currentFullMessage = messages[messageIndex];
    const dynamicSpeed = Math.max(
      minSpeed,
      Math.min(maxSpeed, Math.floor(currentFullMessage.length / 5))
    );

    if (charIndex < currentFullMessage.length) {
      const timeout = setTimeout(() => {
        setCurrentMessage((prev) => prev + currentFullMessage[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, dynamicSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedMessages((prev) => [...prev, currentFullMessage]);
        setCurrentMessage("");
        setMessageIndex((prev) => prev + 1);
        setCharIndex(0);
      }, delayBetween);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, messageIndex, messages, minSpeed, maxSpeed, delayBetween]);

  return { displayedMessages, currentMessage, messageIndex };
};
