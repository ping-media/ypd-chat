import ProfileSetupForm from "@/components/form/ProfileSetupForm";
import Header from "@/components/layout/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Award, Music, Target, Trophy } from "lucide-react";

const ProfileSetup = () => {
  return (
    <>
      <Header
        title="Profile Setup"
        subtitle="Lorem ipsum dolor sit amet consectetur."
        badges={[
          { icon: <Music className="size-4" />, label: "" },
          { icon: <Trophy className="size-4" />, label: "Level 2" },
          { icon: <Target className="size-4" />, label: "Step: 2" },
          { icon: <Award className="size-4" />, label: "No Badge" },
        ]}
      />
      <ScrollArea className="w-full h-40 flex-1 p-3 md:p-4 lg:p-6">
        <ProfileSetupForm />
      </ScrollArea>
    </>
  );
};

export default ProfileSetup;
