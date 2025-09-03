import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import TestimonialCard from "../Card/TestimonialCard";

interface IUserDataProps {
  avatar: string;
  name: string;
  location: string;
}

interface ISlidesDataProps {
  message: string;
  rating: number;
  user: IUserDataProps;
  highlight: string;
}

type CarouselProps = {
  slides: ISlidesDataProps[];
};

const TestimonialCarousel: React.FC<CarouselProps> = ({ slides }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full">
      {/* Slides */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
            >
              <TestimonialCard {...slide} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-white scale-110"
                : "bg-[var(--color-gray-10)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
