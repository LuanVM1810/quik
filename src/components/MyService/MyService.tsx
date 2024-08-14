import PaymentIcon from "../../assets/payment-method.png";
import PositionIcon from "../../assets/placeholder.png";
const MyService = () => {
  return (
    <div className="flex items-center gap-5">
      <button className="rounded-2xl p-[2px] w-[50%] bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7]">
        <div className="w-full h-full p-2 bg-white rounded-2xl flex gap-3">
          <div className="flex flex-col">
            <p className="text-xs">Thanh toán</p>
            <p className="text-base">Thêm thẻ</p>
          </div>
          <img src={PaymentIcon} width={"40px"} />
        </div>
      </button>
      <button className="rounded-2xl p-[2px] w-[50%] bg-gradient-to-b from-[#42FCAC] via-[#36B2F0] to-[#506DF7]">
        <div className="w-full h-full p-2 bg-white rounded-2xl flex gap-3">
          <div className="flex flex-col truncate text-ellipsis">
            <p className="text-xs">Địa điểm</p>
            <p className="text-base truncate text-ellipsis ">
              39 Nguyễn Duy Cung
            </p>
          </div>
          <img src={PositionIcon} width={"40px"} />
        </div>
      </button>
    </div>
  );
};

export default MyService;
