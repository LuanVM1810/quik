import { useLocation, useNavigate } from "react-router-dom";
import QR from "../../assets/QR.png";
import { useEffect, useState } from "react";

const PaymentQRCode = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { amount } = location.state;
  const [timeLeft, setTimeLeft] = useState<number>(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate(-1); // Chuyển hướng đến trang khác khi hết thời gian
    }
  }, [timeLeft, navigate]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };
  return (
    <div className=" py-10 flex justify-center bg-gradient-to-r from-quik-green to-quik-blue mx-[-16px] lg:mx-[-32px]">
      <div className="fixed z-10 top-[60px] bg-quik-purple py-1 text-white w-full text-center">
        Giao dịch sẽ kết thúc sau: {formatTime(timeLeft)}
      </div>
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
