import { Divider } from "@mui/material";

const OrderHistoryList = () => {
  return (
    <div className="m-4 text-[13px] md:text-[16px] lg:text-[19px]">
      <div className="bg-white mb-4 px-6 py-4 rounded-xl shadow-room border-2 border-[#506DF7]">
        <div className="flex justify-between pb-2">
          <p>Mã giao dịch xxxx</p>
          <p>400.000 VND</p>
        </div>
        <Divider />
        <div className="py-1">L'Mak, +1 mục</div>
        <Divider />
        <div className="pt-2">
          <p className="rounded-xl px-4 py-1 border-2 border-[#506DF7]">
            Hoàn tất thanh toán
          </p>
        </div>
      </div>
      <div className="bg-white mb-4 px-6 py-4 rounded-xl shadow-room border-2 border-[#506DF7]">
        <div className="flex justify-between pb-2">
          <p>Mã giao dịch xxxx</p>
          <p>400.000 VND</p>
        </div>
        <Divider />
        <div className="py-1">L'Mak, +1 mục</div>
        <Divider />
        <div className="pt-2">
          <p className="rounded-xl px-4 py-1 border-2 border-[#506DF7]">
            Hoàn tất thanh toán
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderHistoryList;
