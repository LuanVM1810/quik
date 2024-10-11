const Loading = () => {
  return (
    <>
      <div className="fixed top-0 h-[100%] w-[100%] left-0 flex flex-row gap-2 lg:gap-4 justify-center items-center bg-overlay">
        <div className="w-4 h-4 rounded-full bg-[#42FCAC] animate-bounce [animation-delay:.7s]"></div>
        <div className="w-4 h-4 rounded-full bg-[#36B2F0] animate-bounce [animation-delay:.3s]"></div>
        <div className="w-4 h-4 rounded-full bg-[#506DF7] animate-bounce [animation-delay:.7s]"></div>
      </div>
    </>
  );
};

export default Loading;
