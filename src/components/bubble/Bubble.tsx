interface IBubbleProps {
  message: string;
}

const Bubble = ({ message }: IBubbleProps) => {
  return (
    <div className="absolute top-10 right-10">
      <div className="relative w-64 h-fit dark:bg-white/20 dark:backdrop-blur-lg dark:border dark:border-white/10 dark:shadow-lg dark:shadow-black/20 rounded-xl p-4">
        <p className="text-center text-sm">{message}</p>

        {/* Tail with clip-path */}
        <div
          className="absolute -bottom-[1.55rem] left-3 w-8 h-6 dark:bg-white/20 border-l border-b border-white/10"
          style={{
            clipPath:
              "polygon(38% 0, 100% 0, 99% 28%, 95% 54%, 83% 72%, 56% 87%, 0 100%, 26% 74%, 39% 55%, 41% 30%)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Bubble;
