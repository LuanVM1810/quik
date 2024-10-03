import { useEffect, useState } from "react";
import { slider } from "../../constants";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

type Props = {
  autoSlide: boolean;
};

const ImageSlider = ({ autoSlide }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (autoSlide === true) {
      setTimeout(() => {
        const isLastSlide = currentIndex === slider.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }, 2500);
    }
  }, [currentIndex, autoSlide]);

  const prevSilde = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

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
              currentIndex === slide.id && `text-[#506DF7]`
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
