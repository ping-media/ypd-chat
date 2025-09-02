import { images } from "@/lib/constant";
import UserAvatar from "../animation-props/UserAvatar";
const PrepareScreen = () => {
  return (
    <>
      <div className="flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto text-center px-4 relative overflow-hidden">
        {/* Avatar */}
        <UserAvatar image={images.avatar} />

        {/* Title */}
        <h1 className="mt-8 text-3xl md:text-5xl font-semibold leading-normal">
          We’re preparing a tailored <br />
          simulation experience just for you.
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-muted-foreground">
          Based on your interests, goals, and preferences, our AI mentor is
          crafting a personalized career journey to help you explore the path
          that suits you best.
        </p>

        {/* Dots loader */}
        <div className="flex gap-2 mt-8">
          <span className="w-3 h-3 bg-grey-300 dark:bg-white rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-grey-300 dark:bg-white rounded-full animate-bounce [animation-delay:-.2s]"></span>
          <span className="w-3 h-3 bg-grey-300 dark:bg-white rounded-full animate-bounce [animation-delay:-.4s]"></span>
        </div>

        {/* Loading text */}
        <p className="mt-4 text-green-100 text-sm italic">
          Analyzing your profile...
        </p>
      </div>
    </>
  );
};

export default PrepareScreen;
