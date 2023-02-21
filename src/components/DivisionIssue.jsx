import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import issues from "../../data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Division Issue",
    },
  },
};

const labels = ["Division 1", "Division 2", "Division 3", "Division 4"];

const divisionIssue = issues.issue;
const division = divisionIssue.reduce((acc, cur) => {
  acc[cur.division] = acc[cur.division] ? acc[cur.division] + 1 : 1;
  return acc;
}, {});
export const data = {
  labels,
  datasets: [
    {
      label: "Issue Per Division",
      data: [
        division["Division 1"],
        division["Division 2"],
        division["Division 3"],
        division["Division 4"],
      ],
      backgroundColor: "rgba(13, 6, 183, .70)",
    },
  ],
};

const DivisionIssue = () => {
  return <Bar options={options} data={data} />;
};

export default DivisionIssue;
