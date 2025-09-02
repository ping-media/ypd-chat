import Chat from "@/components/chat/Chat";
import Header from "@/components/layout/Header";
import { Award, Music, Trophy, Zap } from "lucide-react";

const ChatScreen = () => {
  return (
    <>
      <Header
        title="CVP Lite™ - Values & Work Preferences"
        subtitle="Identify core values, work motivators, and life priorities."
        badges={[
          { icon: <Music />, label: "" },
          { icon: <Trophy />, label: "Level 2" },
          { icon: <Zap />, label: "Step: 2" },
          { icon: <Award />, label: "No Badge" },
        ]}
      />
      <Chat />
    </>
  );
};

export default ChatScreen;
