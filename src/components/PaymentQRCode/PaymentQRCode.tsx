import { useLocation } from "react-router-dom";
import QR from "../../assets/QR.png";

const PaymentQRCode = () => {
  const location = useLocation();
  const { amount } = location.state;
  return (
    <div className=" py-10 flex justify-center bg-gradient-to-r from-quik-green to-quik-purple mx-[-16px] lg:mx-[-32px]">
      <div className="relative">
        <img src={QR} width={500} height={500} />
        <div className="absolute text-quik-purple font-bold bottom-5 sm:bottom-7 text-sm left-1/2 -translate-x-1/2">
          Cần thanh toán: {amount} VND
        </div>
      </div>
    </div>
  );
};

export default PaymentQRCode;
