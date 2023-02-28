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

const labels = [
  "Admin",
  "Human Resource",
  "Customer Service",
  "Finance",
  "Accounting",
];

const divisionIssue = issues.topic;
const division = divisionIssue.reduce((acc, cur) => {
  acc[cur.divisionId] = acc[cur.divisionId] ? acc[cur.divisionId] + 1 : 1;
  return acc;
}, {});
export const data = {
  labels,
  datasets: [
    {
      label: "Issue Per Division",
      data: [
        division["1"],
        division["2"],
        division["3"],
        division["4"],
        division["5"],
      ],
      backgroundColor: "rgba(13, 6, 183, .70)",
    },
  ],
};

const DivisionIssue = () => {
  return <Bar options={options} data={data} />;
};

export default DivisionIssue;
