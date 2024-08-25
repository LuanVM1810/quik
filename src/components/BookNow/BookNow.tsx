import { IoIosArrowRoundForward } from "react-icons/io";
const BookNow = () => {
  return (
    <nav className="flex flex-col gap-3">
      <div className="flex items-center">
        <span className="text-lg">Đặt ngay hôm nay</span>
        <IoIosArrowRoundForward size={"24px"} />
      </div>
      <div className="flex gap-5 overflow-x-auto pb-5 px-3">
        <img
          className="rounded-3xl shadow-image"
          width={"50%"}
          height="50%"
          src="https://s3-alpha-sig.figma.com/img/6fc3/92d9/6474864d8a886a2f8edcf9b9ba146daf?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E8xp4GbyuSNRndZfXTusZAqgG2VgBdX4ClU7m4MSX6cgBHI-x9zzQkmk93gIjad9pb0aAenE9jhm9VwhdrpZUNSGlvWEKlVkI65yZDXVLkbZ0HDfokvP3vJg6J~lXdS4JLfLhurYJrQIz8tA5NDAUxSgyAokn21KJ1fwoaNA1K8EBg15b~axzWO6aUD5XkhyVRtAgb1TOphvC37R2n-g2XZVANx~NDaZZybHLAhI2h3SEd1AQfP1zfuczU0IoQVMjh6X~yCbHGAyL-R0dmA-cal7S-eyZf2qwwOfBLODBT7rkcMOvzsVF7-Cq4ZbN8OiJON~CQSeq88JhJp71GXIpQ__"
        />
        <img
          className="rounded-3xl shadow-image"
          width={"50%"}
          height="50%"
          src="https://s3-alpha-sig.figma.com/img/04dc/3830/13c63be978c254e1b886d288965b2f78?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M6Iip6d7h52NdeORiENIj3OknLKATe0K06JHblNBLJp0K-BhLaNGnlrobDdhUQ~om5plCsLb2yg9cko5qT6ahXtitMBXP4XgnVMXrkimFTcuvNPFtbQZynJA-tcpOKlyn0Pq7gECsF5KrQVUndO~LgvC3feu~5IBaQdVcYXSPahn0ZP2iwuKZADiutu~lq3EgOfK6EyNSaxMpjNWhL6BGOZ7ULWR~KzovFdN2xebcvzWKAS2AFxYII4mxigbppEC0OpQIPMCuwc9kPCvERQtnpHL-mM8a5VwB~0xFReBO7b8nWvbdRs6tsDSv5mzH~WOXpWl1XnwQ6k1dAlrKa5ing__"
        />
      </div>
    </nav>
  );
};

export default BookNow;
