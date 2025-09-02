import { cn } from "@/lib/utils";

type UserAvatarProps = {
  image: string;
  className?: string;
};

const UserAvatar = ({ image, className }: UserAvatarProps) => {
  return (
    <div className={cn("relative w-28 h-28", className)}>
      <div className="w-full h-full rounded-full flex items-center justify-center bg-[var(--color-green-20)] shadow-lg">
        <img
          src={image}
          alt="Avatar"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      {/* Glow / pulse effect */}
      <div className="absolute inset-0 rounded-full border-4 border-green-100 animate-ping"></div>
    </div>
  );
};

export default UserAvatar;
