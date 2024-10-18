import LineChart from "../LineChart/LineChart";

const Revenue = () => {
  const datasets = [
    {
      label: "Doanh thu",
      data: [40, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55],
      borderColor: "rgba(75, 192, 192, 1)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Giao dịch",
      data: [4, 20, 25, 43, 30, 35, 22, 18, 29, 38, 45, 50],
      borderColor: "rgba(192, 75, 192, 1)",
      backgroundColor: "rgba(192, 75, 192, 0.2)",
    },
  ];

  const labels = [
    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 11",
    "Tháng 12",
  ];
  return (
    <div className="pl-[230px]">
      <LineChart datasets={datasets} labels={labels} />
    </div>
  );
};

export default Revenue;
