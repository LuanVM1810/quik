// import { useParams } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { MdExpandMore } from "react-icons/md";
import { Divider, Rating } from "@mui/material";
import { GoPeople } from "react-icons/go";
import { MdOutlineMeetingRoom } from "react-icons/md";

export default function RoomDetail() {
  // const roomId = useParams();
  return (
    <div className="text-[#111111] h-screen px-[150px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
        <div className="text-lg lg:row-span-1">
          <p className="font-semibold">L'Mak Tower</p>
          <p className="font-semibold">Không gian làm việc</p>
          <p className="font-bold py-5">400.000 VND</p>
        </div>
        <div className="w-full flex justify-center items-center lg:row-span-2">
          <img
            className="object-cover rounded-xl"
            src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="mt-5 lg:row-start-2">
          <button className="bg-[#506DF7] hover:opacity-80 py-2 rounded-3xl w-full font-medium text-base text-white">
            Đặt ngay
          </button>
          <p className="py-5 text-left">
            Responsive cushioning in the Pegasus provides an energised ride for
            everyday road running. Experience lighter-weight energy return with
            dual Air Zoom units and a ReactX foam midsole. Plus, improved
            engineered mesh on the upper decreases weight and increases
            breathability.
          </p>

          <ul className="list-disc pl-8">
            <li>Colour Shown: White/Hyper Crimson/Pale Ivory/Armoury Navy</li>
            <li>Style: HF4300-100</li>
            <li>Country/Region of Origin: Vietnam</li>
          </ul>
        </div>
        <div className="my-5 lg:col-start-1">
          <Accordion sx={{ backgroundColor: "transparent" }}>
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
                    <GoPeople size={"24px"} /> 10 người
                  </p>
                  <p className="flex gap-2 mb-2">
                    <MdOutlineMeetingRoom size={"24px"} /> 1 phòng
                  </p>
                </div>
                <Divider variant="fullWidth" />
                <div className="my-4">
                  <p className="font-bold mb-3">Tiện nghi phòng</p>
                  <ul className="list-disc ml-7">
                    <li>Máy lạnh</li>
                    <li>Nước đóng chai miễn phí</li>
                    <li>Free wifi</li>
                  </ul>
                </div>
                <Divider variant="fullWidth" />
                <div className="my-4">
                  <p className="font-bold mb-3">Trang bị phòng tắm</p>
                  <ul className="list-disc ml-7">
                    <li>Bồn tắm</li>
                    <li>Vòi tắm đứng</li>
                    <li>Bộ vệ sinh cá nhân</li>
                  </ul>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion sx={{ backgroundColor: "transparent" }}>
            <AccordionSummary
              expandIcon={<MdExpandMore size={"30px"} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <p className="text-[20px] flex items-center gap-12 lg:gap-64">
                Đánh giá (2)
                <Rating
                  sx={{ marginLeft: "auto" }}
                  value={4.5}
                  precision={0.1}
                  readOnly
                />
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <div className="flex gap-4 mb-[8px]">
                  <Rating value={4.5} precision={0.1} readOnly />
                  <p>4.5 Sao</p>
                </div>
                <button className="underline mb-[48px]">Write a Review</button>
                <div className="my-5">
                  <ul>
                    <li className="pb-[24px]">
                      <div className="mb-[8px] font-bold">Phòng đẹp</div>
                      <div className="flex justify-between mb-[16px]">
                        <Rating value={5} precision={1} readOnly />
                        <p className="text-[#707072]">Kunal- 11 Aug 2024</p>
                      </div>
                      <div className="mb-[16px]">
                        Nên trải nghiệm học ở đây, rất yên tĩnh
                      </div>
                    </li>
                    <li className="pb-[24px]">
                      <div className="mb-[8px] font-bold">Tuyệt!</div>
                      <div className="flex justify-between mb-[16px]">
                        <Rating value={5} precision={1} readOnly />
                        <p className="text-[#707072]">Justin- 11 Aug 2024</p>
                      </div>
                      <div className="mb-[16px]">
                        Thái độ nhân viên tốt, nước tạm được, không gian ổn cho
                        họp nhóm
                      </div>
                    </li>
                  </ul>
                  <button className="underline">More Reviews</button>
                </div>
              </>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
