import { useEffect, useState } from "react";
import { slider } from "../../constants";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

type Props = {
  autoSlide: boolean;
  autoSlideInterval: number;
};

const ImageSlider = ({ autoSlide, autoSlideInterval }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSilde = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? slider.length - 1 : currentIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === slider.length - 1 ? 0 : currentIndex + 1
    );
  };
  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  const gotoSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[600px] lg:h-[650px] w-full m-auto max-lg:py-8 px-4 relative group">
      <div
        style={{ backgroundImage: `url(${slider[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow*/}
      <div
        onClick={prevSilde}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactLeft size={30} />
      </div>
      {/* Right Arrow*/}
      <div
        onClick={nextSlide}
        className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </div>
      <div className={`flex top-4 justify-center py-2`}>
        {slider.map((slide) => (
          <div
            key={slide.id}
            onClick={() => {
              gotoSlide(slide.id);
            }}
            className={` ${
              currentIndex === slide.id &&
              `text-quik-purple scale-150 transition-all duration-500`
            } text-2xl cursor-pointer`}
          >
            <RxDotFilled key={slide.url} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
