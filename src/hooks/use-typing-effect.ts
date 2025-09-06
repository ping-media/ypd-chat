import { useEffect, useState } from "react";

export const useTypingEffect = (
  messages: string[],
  minSpeed = 5,
  maxSpeed = 20,
  delayBetween = 500
) => {
  const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (messageIndex >= messages.length) return;

    const currentFullMessage = messages[messageIndex];
    const dynamicSpeed = Math.floor(
      Math.random() * (maxSpeed - minSpeed + 1) + minSpeed
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
