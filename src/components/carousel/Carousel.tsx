import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import QuotesCard from "../Card/quotesCard";

interface ISlidesDataProps {
  message: string;
  name: string;
}

type CarouselProps = {
  data: (string | ISlidesDataProps)[];
};

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

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

  const isQuote = (
    slide: string | ISlidesDataProps
  ): slide is ISlidesDataProps =>
    (slide as ISlidesDataProps).message !== undefined;

  return (
    <div className="relative w-full">
      {/* Slides */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {data.map((slide, index) => (
            <div className="flex-[0_0_100%] relative" key={index}>
              {isQuote(slide) ? (
                <QuotesCard {...slide} />
              ) : (
                <img
                  src={slide}
                  alt={`Slide ${index}`}
                  className="w-full h-64 object-cover rounded-2xl"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === selectedIndex ? "bg-white" : "bg-[var(--color-gray-10)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
