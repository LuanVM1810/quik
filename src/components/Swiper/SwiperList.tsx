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
    img: "https://s3-alpha-sig.figma.com/img/71ff/2ceb/c6e43fb82b4cb6173e08aa191727a584?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XqhJEEL3P1KeusEVUjtfNRqxABFGS8suzlV24rGiss9TKSQrPmtUyaxMLCazaTUk8VqCeF9egqOagf-iOxoGVEjauW4Zmm8dT5aStWy3BU3iV0e1N3ua-iNnsrXcuLugsgbnQsRtf0b6sT3OqYO-hbe5G-wxGk67LuF5yIDW~f4ZHuRcv23ZDVpII-NMbaA9mH2mdUexTUL~rijuE8O5wchTJoDlnDtnlKe8ab-Ns~rg7xC3IllotLX3w4UZDyyEzl9muu4FxzntxlPjR505zRMoZh~Q8UXW6h~it~CUR9jVdRI9j-Qq8qHKUxLjr3G6TQ9GLEzZdJ7QfdSnBEmxUQ__",
    rating: "4.5",
  },
  {
    id: 2,
    name: "Serepok",
    img: "https://s3-alpha-sig.figma.com/img/1694/703a/fe6ad41e206e0fa26e518b5ee404ac96?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MuJAS7SJsecSSc-XRcGhumTc1t5dQPw6ALq5zSHC1VTyVsGAjNnNYe4~CHM7vnAdMhzN3FcjrRQgnVxCCfUBt8tYG83coyEG-TgO7KGU69~DK0Ws-CXJMnExbZx6frpgRP6DcG0n44oEN71-zLVWouWZKKlO0pEpA86ofIvLP9QY9U4IpHlTVqBXqIinsIXtHHiSJcxfTjxO7lOf8nr~CaiXcNmwgcVodnLmCE~4j-I7wI3pwfp3o6QDBjCcUE3n0gKnvtQJvULZzAtv8AOaBxCzEKh6jzB~ATbvBeVtz21-g~0yldd1snicHET0Af4N2jujoomRlyyO1bw0QsVD-A__",
    rating: "4.3",
  },
  {
    id: 3,
    name: "The Xi Cafe",
    img: "https://s3-alpha-sig.figma.com/img/f27d/c8f7/71b8db6b0cb031909dee264eaf0505ca?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fceXrGObIsdwKp~0hrpYCyWkBS~EB5sdlTtjZJbHtuU7AIPhPDWoI23mcLNu4334F2a7m4uWcKiOMon6eYa1wQjG02f2hSaa844g6lqdgqv-fR79YRpXM7C7jRcURIGN~UMeZPjswHkj7Huk0caiQ7VJsY59g7uMiCEF6QZBi-Iq-nn7UJrkA0-J2cHqvJWoyL4NmVuOPnSma6VW-XvgSNxQOfckQr9oe8GiYKSQJlWgHU792OVPc~i5Sj1GyOJuCXHag~E6IPvA~3fBxgDAuwxAGJJj44tA9Ecw6e8bFUK9V834~Rg1FX4irVY8D5ks-k~7Y8N1tn2uNs61RhjU9A__",
    rating: "4.8",
  },
  {
    id: 4,
    name: "Saha Coffee",
    img: "https://s3-alpha-sig.figma.com/img/cee8/1493/6b305fa030f83d6a394ab58c1cf572a2?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yk3de9O1WwuODUyBtlikakuBaj4~XvMgn5~5qB9tMFZIg0qdoV--k9TROCxixyvpIml9pk1S6JgC7UBYjKcU7tLYZ5ZcAqMjJQwE-Cfk88VS~2W0yiCmIc1RS5VQ2-IqXNGNZgeDnb8rfzsI3pOZ3lBdTVwEHbTuBX4HwGbNFWSfONoBU2XFm7FJyUslUOjo5Fh8ysCVUO98-uo6R74c0ZwWsXb3M5zQDc3Q5U9a~Djl335W0Iz~S~1~MHcWf8W-sx~DvTmhfQUxS3QXmdnWIBuYCXk3xHBeWkwJn6Ex-Cr6axkA01HlBpASooNkhzRZ6cXnYKZwCMbyhGZtnEZnkg__",
    rating: "4.9",
  },
  {
    id: 5,
    name: "Plantrip Thé Des Arts",
    img: "https://s3-alpha-sig.figma.com/img/d3de/4573/4b812486a0846f4312b31d4432701a96?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BYE8wdT-VHHEGYcgIIFPoYN3qa8KtqgMJoBorirKXxsV6m3r92xQKf~TKZV9Y6Yl1e-jMp1kBDL8aeFsUqTb8z5sG7X9MTDtkwLOBddXUvjC9Wqv92bcXPmY44ZJr~Caw-1VIgekYn2cRmaYtNv-qwdiK0ipZ3AxwbHTKkpUO-BCDWJEZIU9N-UHw0jL0CwultXqxqQ9JL1xgqQJanW4aNt~05bKFwG26OUr81Vh4ENj5FmVE8HuoPz5GPJwj~tHAcJMuzClAJQp6nN9zvJ0PRjh~8L1GicyKPW7Swl7nh24YTG6-gVREg~BLL6Zp~IGXPcKdmacZk0AxtBkRyZ9Pg__",
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
