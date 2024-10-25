import Category from "../Category/Category";

const AboutUs = () => {
  return (
    <>
      <div className="bg-[#F0EFEF] h-auto my-[-20px] lg:my-[-40px] mx-[-16px] lg:mx-[-32px]">
        <div className="text-center my-10 text-[40px] text-quik-purple font-bold">
          Về chúng tôi
        </div>
        <div className="px-10 lg:px-20 leading-8 lg:text-[20px] text-quik-purple font-medium">
          QUIK nền tảng đặt trước các không gian làm việc linh hoạt. Chỉ với vài
          thao tác đơn giản, bạn có thể chọn ngay 1 quán cafe ưng ý, đặt phòng
          họp cho cuộc họp quan trọng, thuê văn phòng chỉ trong một buổi sáng,
          hoặc chọn Co-working space cho cả tháng. QUIK mang đến sự linh hoạt
          tối đa cho công việc của bạn. Với mạng lưới không gian làm việc rộng
          lớn, bạn có thể tìm kiếm và đặt chỗ chỉ trong vài giây.
        </div>
        <Category />
      </div>
    </>
  );
};

export default AboutUs;
