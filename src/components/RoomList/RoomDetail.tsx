// import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import { Divider, Rating, TextField } from "@mui/material";
import { GoPeople } from "react-icons/go";
import { useState } from "react";
import { useEffect } from "react";
import { Dayjs } from "dayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { CiClock2 } from "react-icons/ci";
import ImageSlider from "../ImageSlider/ImageSlider";
import { useNavigate, useParams } from "react-router-dom";
import workingSpaceApi from "../../services/WorkingSpaceApi";
import { WorkingSpaceDetail } from "../../interfaces/WorkingSpaceInterface";
import reviewApi from "../../services/ReviewApi";
import { Review } from "../../interfaces/ReviewInterface";
import parseDate from "../../utils/parseDate";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import bookingApi from "../../services/bookingApi";
import { AiOutlineLoading } from "react-icons/ai";
import { HiOutlineMapPin } from "react-icons/hi2";
import { toast } from "sonner";

const theme = createTheme({
  palette: {
    primary: {
      main: "#506df7", // Your custom primary color
    },
  },
});

export default function RoomDetail() {
  const { roomId } = useParams();
  const [numberPeople, setNumberPeople] = useState<number>();
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);
  const [roomDetail, setRoomDetail] = useState<WorkingSpaceDetail>();
  const [reviews, setReviews] = useState<Review>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const roomDetail = await workingSpaceApi.getById(roomId);
        setRoomDetail(roomDetail.data);
        const review = await reviewApi.getReviewById(roomId);
        if (review.data.reviews.length > 0) {
          setReviews(review.data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, [roomId, roomDetail, reviews]);

  const onChangeNumberPeople = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNumberPeople(parseInt(e.target.value));
  };

  const submitBooking = () => {
    setIsLoading(true);
    bookingApi
      .createBooking({
        bookingId: "123",
        numberOfPeople: numberPeople,
        startTime: startDate?.toDate(),
        endTime: endDate?.toDate(),
        spaceId: roomId,
        username: localStorage.getItem("username"),
      })
      .then((response) => {
        setIsLoading(false);
        console.log(response.data.data);
        toast.success(
          "Đăng kí thành công, kiểm tra email để xem thông tin đặt hàng"
        );
        navigate("/payment");
      })
      .catch((error) => {
        setIsLoading(false);
        // console.log(error);
        toast.error(error);
      });
  };

  return (
    <div className="text-[#111111] min-h-screen py-[40px] lg:px-[150px]">
      <ThemeProvider theme={theme}>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-5">
          <div className="text-lg lg:row-span-1 lg:text-xl">
            <div className="flex gap-2 items-center">
              <p className="text-white font-semibold p-1 text-xs lg:text-sm rounded-md bg-[#506DF7]">
                {roomDetail?.roomType}
              </p>
              <p className="font-semibold">{roomDetail?.title}</p>
            </div>
            <div className="mt-5 text-sm flex items-center">
              <span className="mr-4">
                <HiOutlineMapPin size={24} />
              </span>
              {roomDetail?.location}
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
            <ImageSlider
              autoSlide={true}
              autoSlideInterval={2500}
              slider={roomDetail?.imageUrls}
            />
          </div>
          <div className="mt-5 lg:row-start-2">
            {/* <div className="flex gap-5 pt-[8px] mb-5 items-center">
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
          </div> */}
            <div className="flex gap-5 pt-[8px] mb-5 items-center">
              <p className="flex">
                <GoPeople size={24} />
              </p>
              <TextField
                className="w-[258px]"
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
                <CiClock2 size={24} />
              </p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                  <DateTimePicker
                    label="Chọn ngày và giờ bắt đầu"
                    value={startDate}
                    onChange={(newValue) => setStartDate(newValue)}
                  />
                </DemoItem>
              </LocalizationProvider>
            </div>

            <div className="mb-5 flex gap-5 items-center">
              <p className="flex items-center">
                <CiClock2 size={24} />
              </p>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoItem>
                  <DateTimePicker
                    label="Chọn ngày và kết thúc"
                    value={endDate}
                    onChange={(newValue) => setEndDate(newValue)}
                  />
                </DemoItem>
              </LocalizationProvider>
            </div>

            <button
              onClick={() => submitBooking()}
              disabled={isLoading ? true : false}
              className={` ${
                isLoading ? "bg-black" : "bg-[#506DF7]"
              }  hover:opacity-80 py-2 rounded-3xl w-full font-medium text-base text-white`}
            >
              {isLoading ? (
                <div className="flex justify-center">
                  <AiOutlineLoading size={24} className="animate-spin" />
                </div>
              ) : (
                "Đặt ngay"
              )}
            </button>
            <p className="py-5 text-left leading-8">
              {roomDetail?.description}
            </p>
          </div>
          <div className="my-5 lg:col-start-1">
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore size={"30px"} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <p className="text-[20px]">Tiện nghi</p>
              </AccordionSummary>
              <AccordionDetails>
                <div>
                  <div className="pb-6">
                    <p className="flex gap-2 mb-2">
                      <GoPeople size={"24px"} /> {roomDetail?.capacity} người
                    </p>
                    {/* <p className="flex gap-2 mb-2">
                    <MdOutlineMeetingRoom size={"24px"} /> 1 phòng
                  </p> */}
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
                </div>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{ backgroundColor: "transparent", boxShadow: "none" }}
            >
              <AccordionSummary
                expandIcon={<MdExpandMore size={"30px"} />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <div className="text-[20px] truncate flex items-center gap-10 lg:gap-[60px]">
                  Đánh giá {reviews ? "(" + reviews.reviews.length + ")" : ""}
                </div>
                <Rating
                  sx={{
                    marginLeft: "auto",
                    color: "#506df7",
                    paddingTop: "6px",
                  }}
                  value={roomDetail ? roomDetail.rating : 0}
                  precision={0.1}
                  readOnly
                />
              </AccordionSummary>
              <AccordionDetails>
                <>
                  <div className="flex gap-4 mb-[8px]">
                    <Rating
                      sx={{ color: "#506df7" }}
                      value={roomDetail ? roomDetail.rating : 0}
                      precision={0.1}
                      readOnly
                    />
                    <p>{roomDetail?.rating} Sao</p>
                  </div>
                  <button className="border-b-2 border-black mb-[48px]">
                    Write a Review
                  </button>
                  <div className="my-5">
                    <ul>
                      {reviews?.reviews.map((review) => (
                        <li className="pb-[24px]">
                          <div className="mb-[8px] font-bold">
                            {review.title}
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
      </ThemeProvider>
    </div>
  );
}
