// import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import { Divider, Rating, TextField } from "@mui/material";
import { MdOutlineMeetingRoom } from "react-icons/md";
import { FaDoorOpen } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { useState } from "react";
import { useEffect } from "react";
import { Dayjs } from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { CiClock2 } from "react-icons/ci";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useParams } from "react-router-dom";
import workingSpaceApi from "../../services/WorkingSpaceApi";
import { WorkingSpaceDetail } from "../../interfaces/WorkingSpaceInterface";
import reviewApi from "../../services/ReviewApi";
import { Review } from "../../interfaces/ReviewInterface";
import parseDate from "../../utils/parseDate";

export default function RoomDetail() {
  const { roomId } = useParams();
  const [numberRoom, setNumberRoom] = useState<number | null>(null);
  const [numberPeople, setNumberPeople] = useState<number | null>(null);
  const [date, setDate] = useState<Dayjs | null>(null);
  const [roomDetail, setRoomDetail] = useState<WorkingSpaceDetail>();
  const [reviews, setReviews] = useState<Review>();

  // console.log(roomId);
  // console.log(date);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomDetail = await workingSpaceApi.getById(roomId);
        const review = await reviewApi.getReviewById(roomId);
        setRoomDetail(roomDetail.data);
        setReviews(review.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [roomId, roomDetail, reviews]);

  const onChangeNumberRoom = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNumberRoom(parseInt(e.target.value));
  };

  const onChangeNumberPeople = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNumberPeople(parseInt(e.target.value));
  };

  return (
    <div className="text-[#111111] min-h-screen py-[40px] lg:px-[150px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-5">
        <div className="text-lg lg:row-span-1 lg:text-xl">
          <div className="flex gap-2 items-center">
            <p className="text-white font-semibold p-1 text-xs lg:text-sm rounded-md bg-[#506DF7]">
              Không gian làm việc
            </p>
            <p className="font-semibold">{roomDetail?.title}</p>
          </div>
          <p className="py-5 font-medium text-quik-black text-xl">
            Từ{" "}
            <span className="text-quik-purple font-bold">
              {roomDetail?.pricePerHour}
            </span>{" "}
            <span className="text-quik-purple font-bold">đ</span>/giờ
          </p>
        </div>
        <div className="w-full lg:row-span-2 lg:col-span-2 lg:justify-start">
          <ImageSlider autoSlide={true} autoSlideInterval={2500} />
        </div>
        <div className="mt-5 lg:row-start-2">
          <div className="flex gap-5 pt-[8px] mb-5 items-center">
            <p className="flex">
              <FaDoorOpen size={"30px"} />
            </p>
            <TextField
              className="w-[270px]"
              value={numberRoom}
              onChange={onChangeNumberRoom}
              label="Số lượng phòng"
              placeholder="Chỉ nhập số"
              size="medium"
              type="number"
              required
            />
          </div>
          <div className="flex gap-5 pt-[8px] mb-5 items-center">
            <p className="flex">
              <GoPeople size={"30px"} />
            </p>
            <TextField
              className="w-[270px]"
              value={numberPeople}
              onChange={onChangeNumberPeople}
              label="Số lượng người"
              placeholder="Chỉ nhập số"
              size="medium"
              required
              type="number"
            />
          </div>
          <div className="mb-5 flex gap-5 items-center">
            <p className="flex items-center">
              <CiClock2 size={"30px"} />
            </p>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DateTimePicker", "DateTimePicker"]}>
                <DateTimePicker
                  label="Chọn ngày và giờ"
                  value={date}
                  onChange={(newValue) => setDate(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>

          <button className="bg-[#506DF7] hover:opacity-80 py-2 rounded-3xl w-full font-medium text-base text-white">
            Đặt ngay
          </button>
          <p className="py-5 text-left leading-8">
            Phòng này hiện đại và ấm áp với sự kết hợp giữa tông màu trắng và
            nâu tạo cảm giác thoáng đãng. Ánh sáng tự nhiên từ cửa sổ lớn chiếu
            vào phòng, tôn vẻ đẹp của nội thất. Sàn nhà lát gạch men trắng sáng,
            tạo cảm giác sạch sẽ và sang trọng. Tranhs trừu tượng trên tường
            trắng, ghế sofa màu nâu êm ái gần cửa sổ, tạo không gian thư giãn.
          </p>
        </div>
        <div className="my-5 lg:col-start-1">
          <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<MdExpandMore size={"30px"} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="text-[20px]">Tiện nghi</p>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <div className="pb-6">
                  <p className="flex gap-2 mb-2">
                    <GoPeople size={"24px"} /> {roomDetail?.capacity} người
                  </p>
                  <p className="flex gap-2 mb-2">
                    <MdOutlineMeetingRoom size={"24px"} /> 1 phòng
                  </p>
                </div>
                <Divider variant="fullWidth" />
                <div className="my-4">
                  <p className="font-bold mb-3">Tiện nghi phòng</p>
                  <ul className="list-disc ml-7">
                    {roomDetail?.amenities.map((amentity) => (
                      <li>{amentity.amenityText}</li>
                    ))}
                  </ul>
                </div>
                {/* <Divider variant="fullWidth" />
                <div className="my-4">
                  <p className="font-bold mb-3">Trang bị phòng tắm</p>
                  <ul className="list-disc ml-7">
                    <li>Bồn tắm</li>
                    <li>Vòi tắm đứng</li>
                    <li>Bộ vệ sinh cá nhân</li>
                  </ul>
                </div> */}
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
            <AccordionSummary
              expandIcon={<MdExpandMore size={"30px"} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="text-[20px] flex items-center gap-10 lg:gap-[40px]">
                Đánh giá ({reviews?.reviews.length})
                <Rating
                  sx={{ marginLeft: "auto", color: "#506df7" }}
                  value={4.5}
                  precision={0.1}
                  readOnly
                />
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <div className="flex gap-4 mb-[8px]">
                  <Rating
                    sx={{ color: "#506df7" }}
                    value={4.5}
                    precision={0.1}
                    readOnly
                  />
                  <p>4.5 Sao</p>
                </div>
                <button className="border-b-2 border-black mb-[48px]">
                  Write a Review
                </button>
                <div className="my-5">
                  <ul>
                    {reviews?.reviews.map((review) => (
                      <li className="pb-[24px]">
                        <div className="mb-[8px] font-bold">
                          {review.comment}
                        </div>
                        <div className="flex justify-between items-center mb-[16px]">
                          <Rating
                            sx={{ color: "#506df7" }}
                            value={review.rating}
                            precision={1}
                            readOnly
                          />
                          <p className="text-[#707072]">
                            {review.username} -{" "}
                            {parseDate(review.createdAt.toString())}
                          </p>
                        </div>
                        <div className="mb-[16px]">{review.comment}</div>
                      </li>
                    ))}
                  </ul>
                  <button className="border-b-2 border-black">
                    More Reviews
                  </button>
                </div>
              </>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
