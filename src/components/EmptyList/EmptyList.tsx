import EmptyImg from "../../assets/empty.png";
type Props = {
  message: string;
};

const EmptyList = ({ message }: Props) => {
  return (
    <div>
      <div className="text-center flex flex-col justify-center items-center">
        <img
          src={EmptyImg}
          srcSet="Không tìm thấy phòng"
          width={500}
          height={500}
        />
        {message}
      </div>
    </div>
  );
};

export default EmptyList;
