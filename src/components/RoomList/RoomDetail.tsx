// import { useParams } from "react-router-dom";

export default function RoomDetail() {
  // const roomId = useParams();
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-[#111111]">
        <div className="text-lg">
          <p className="font-semibold">L'Mak Tower</p>
          <p className="font-semibold">Không gian làm việc</p>
          <p className="font-bold py-5">400.000 VND</p>
        </div>
        <div className="w-full flex justify-center items-center">
          <img
            className="object-cover rounded-xl"
            src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="lg:row-span-2 mt-5">
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
      </div>
    </>
  );
}
