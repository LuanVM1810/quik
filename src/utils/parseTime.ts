const parseDateTime = (dateTimeStr: string): string => {
  const date = new Date(dateTimeStr);
  const monthIndex = date.getMonth();
  const day = date.getDate();
  // Mapping tên tháng từ tiếng Việt sang tiếng Anh viết tắt
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = months[monthIndex];
  const year = date.getFullYear();
  let hours = date.getHours().toString();
  let minutes = date.getMinutes().toString();

  // Định dạng giờ và phút thành "hh:mm"
  hours = parseInt(hours) < 10 ? `0${hours}` : hours;
  minutes = parseInt(minutes) < 10 ? `0${minutes}` : minutes;

  return `${hours}h${minutes} ${day} ${month} ${year}`;
};

export default parseDateTime;
