import Chart, { ChartTypeRegistry } from "chart.js/auto";
import React, { useEffect, useRef } from "react";

interface Dataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
}

interface LineChartProps {
  datasets: Dataset[];
  labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ datasets, labels }) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart<
    keyof ChartTypeRegistry,
    any,
    any
  > | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        chartInstanceRef.current = new Chart(ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: datasets.map((dataset) => ({
              label: dataset.label,
              data: dataset.data,
              borderColor: dataset.borderColor,
              backgroundColor: dataset.backgroundColor,
              fill: true,
            })),
          },
          options: {
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [datasets, labels]);

  return <canvas ref={chartRef} style={{ maxWidth: "100%", height: "100%" }} />;
};

export default LineChart;
