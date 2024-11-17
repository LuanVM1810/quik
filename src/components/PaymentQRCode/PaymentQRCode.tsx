import QR from "../../assets/QR.png";

const PaymentQRCode = () => {
  return (
    <div className="py-10 flex justify-center bg-gradient-to-r from-quik-green to-quik-purple mx-[-16px] lg:mx-[-32px]">
      <img src={QR} width={500} height={500} />
    </div>
  );
};

export default PaymentQRCode;
