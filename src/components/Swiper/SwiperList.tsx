// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import UuDaiImg from "../../assets/ưu đãi cuối tuần 1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./SwiperList.css";

// import PercentImg from "../../assets/PERCE%T Coffee_TBinh.png";
// import SerepokImg from "../../assets/serepokq1.png";
// import TheXiCafe from "../../assets/The Xi Cafe.png";
// import SahaImg from "../../assets/Saha Coffee.png";
// import PLanTripImg from "../../assets/Plantrip Thé Des Arts.png";

const slider = [
  {
    id: 1,
    name: "PERCE%T Coffee",
    img: "https://s3-alpha-sig.figma.com/img/71ff/2ceb/c6e43fb82b4cb6173e08aa191727a584?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TCfAMICbolMUND~MTW~EuzqpHDxEd0vPHufq0Bcl90gHDiFYFZwSc8dOvvUaM8KGJqsBLVCMp1O2S938t8rozGlXER76wt90ik1CqWYBpciSLOn1E6kFEjvEvsTox5mbwFquvbmjPl2E8yGyG~-gNaValVUX0pzmLiedVDHuIAkR2c7OhHrjomsOWKukZ3-fLe~WQPo~bve1ErWYLui0Aux8YCm4dqil81mp9UF41QFHc8m79EnQ4eqFXUfvCRNthlOrxsJSyvq4UXAwvoy0nk15ozK6C8bajqiotO9nB~lAuQys6fDXE7VdbX4Uix7nlphlDqU7BBD9I71dhK6-Fw__",
    rating: "4.5",
  },
  {
    id: 2,
    name: "Serepok",
    img: "https://s3-alpha-sig.figma.com/img/1694/703a/fe6ad41e206e0fa26e518b5ee404ac96?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nzebEaWdEPlK6O2VB7MQq7P3AbPadC5ol1b2fbW8n2sIB8Jd9gbngBJMIbyXP0Fej1E3Cln2yKKUxwoMgmSIJ0wRTNprq9LQQEZfC5lwu-k7gtQd~fRrQNzJx5xJSg9OJP9JVbwAm7TlCjtE0F7mD570WgDIlLHFHAgwgQRMe6J61-DbQTYnM8hbfD5nNrEfwk0B1iVrMbQ~oWaXFsMsRzHGjpZbsnuWtsVSiAR54ztOJuBti-f1FnPGKHEg2tNRAyT00z~7wVf79tVUpzGASO1ZjBekKDzRy~1mXFDj9Px-v0eROr051XNd9vhgVxJZ~YLJoWEumZLL8t4U92hNEw__",
    rating: "4.3",
  },
  {
    id: 3,
    name: "The Xi Cafe",
    img: "https://s3-alpha-sig.figma.com/img/f27d/c8f7/71b8db6b0cb031909dee264eaf0505ca?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Havl3b7SCm~ZpAgDfacX7QFr62~ZZSUETMsPe-Wb25Q7smRftiTMGfde3LR8Swc2H4qA8doXYJVJ6X9wBK2Vq10Z0kAIKw23BrT3cHx6vUcI79BMupAsRKdqnKy1twTAmHJBj8NBWxAjlNudGDJcGCRWjiwHZj3L76cPHWZRlDiV5EmIh~tToGjBMP3nQqJHWOBhD4w4R~Nz~sfJnisFm7oSQOYq~usVE7IUqlkXDDn-FLwAGzbUDDP7kdHV-UjdZuZyxw5g~BSyCkwNRT4ddypWZoPqjlxbbkyFabsrcq77ATymRdobrEEv0aG4Z3l6A2~rfZWYvdRbmTNW47bofA__",
    rating: "4.8",
  },
  {
    id: 4,
    name: "Saha Coffee",
    img: "https://s3-alpha-sig.figma.com/img/cee8/1493/6b305fa030f83d6a394ab58c1cf572a2?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZ~frKXpXIgCtwfHSFVbAM067TwKLwKcm1rCBypK~B8KgWMHlmH0u27N7w8dAAs6pUpRKO82xKX0OCL3Fxpbl4~hgroQZHVFRxhER1JzjdML7Ip7CTp7JamvRX6K~1vy2Wv8nagfl6KsaNrLxl9s-jOvQnngHpDWB61FpAKWC05afqrlqQrBlbdlD6TAl0rxB-L52kmAPUZfqFdnMdockXee5xEU9Gksox-YN~WrTOS6Q6PqVM4d9hj9w9513FA9ZJlhAvO0Pl8zn4YwHx~xT~XtAMsJof0qbg2yKzXzwBQSEg~rmYgSBY4TrLlUClfEr0XnjP9TVXWIwzB1XPidSg__",
    rating: "4.9",
  },
  {
    id: 5,
    name: "Plantrip Thé Des Arts",
    img: "https://s3-alpha-sig.figma.com/img/d3de/4573/4b812486a0846f4312b31d4432701a96?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nnKyZ-aYiGjbD4AZjYZjREX0noyB0rTjtChmT3krJ7MdD3ni15Kx7ZbNhFZOCYkr4tbINSwc007RpeuX6wIUWUxiVsDL8SyWVdVAArGsQlIWQ3wTBqi90Zr-3z105qyZNbvxy8Sl-9KaUbnu9MUKN39dOSDour8lyo1jPQ~OIJjR-Zi10k72ywR0S3oJxQj1nvXU3-w2lvmbFQYu7-IhWzpKeUxwJXQObg-OiCSqyvLkRrevkcAt4A56m63OONSWwXNQMUPyH1vNdFP4~1sxEGZl62Ef8GwJfVcIFr2e8d~18MDz91x6VCt5HD~HTyLnF6G2EXbeNMQ4HuVVCs7o4Q__",
    rating: "4.2",
  },
];

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function SwiperList() {
  return (
    <div className="py-10 bg-quik-purple mx-[-16px] lg:mx-[-32px]">
      <div className="flex justify-center">
        <img src={UuDaiImg} alt="" />
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="
        mySwiper"
      >
        {slider.map((item) => (
          <SwiperSlide>
            <div key={item.id} className="relative rounded-[24px]">
              <div className="absolute flex items-center gap-2 top-4 left-4 px-[8px] bg-white/30 rounded-[50px] py-[4px]">
                <FaStar size={14} color="#FFCC00" />
                <p className="text-[14px] text-white">{item.rating}</p>
              </div>
              <div className="absolute top-4 right-4">
                <AiOutlineHeart size={28} color="white" />
              </div>
              <img className="shadow-btn" src={item.img} />
              <div className="my-2 flex justify-between w-[300px] font-bold size-[18px] text-white">
                <p className=" font-bold">{item.name}</p>
                <p className="text-[#C49C74] font-extrabold">$ 920</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
