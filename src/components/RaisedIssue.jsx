import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import issues from "../../data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Raise Issue",
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const rawIssues = issues.issue;
const issuesByMonth = rawIssues.reduce((acc, issue) => {
  const month = issue.dateraised.slice(0, 2); // extract the month from the date
  acc[month] = acc[month] ? acc[month] + 1 : 1; // increment the count for this month
  return acc;
}, {});

export const data = {
  labels,
  datasets: [
    {
      label: "Raised Issue Overtime",
      data: [
        issuesByMonth["01"],
        issuesByMonth["02"],
        issuesByMonth["03"],
        issuesByMonth["04"],
        issuesByMonth["05"],
        issuesByMonth["06"],
        issuesByMonth["07"],
        issuesByMonth["08"],
        issuesByMonth["09"],
        issuesByMonth["10"],
        issuesByMonth["11"],
        issuesByMonth["12"],
      ],
      borderColor: "rgba(13, 6, 183, 1)",
      backgroundColor: "rgba(13, 6, 183, 1)",
    },
  ],
};

const RaisedIssue = () => {
  return <Line options={options} data={data} />;
};

export default RaisedIssue;
