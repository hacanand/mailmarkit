import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// interface subscribersAnalyticsData {
//   month: string;
//   count: string;
// }
//generating random data
const data= [
    {
        month: "Jan 2024",
        count: "1000",
    },
    {
        month: "Feb 2024",
        count: "2000",
    },
    {
        month: "Mar 2024",
        count: "3000",
    },
    {
        month: "Apr 2024",
        count: "4000",
    },
    {
        month: "May 2024",
        count: "5000",
    },
    {
        month: "Jun 2024",
        count: "6000",
    },
    {
        month: "Jul 2024",
        count: "7000",
    },
    {
        month: "Aug 2024",
        count: "8000",
    },
    {
        month: "Sep 2024",
        count: "9000",
    },
    {
        month: "Oct 2024",
        count: "1000",
    },
    {
        month: "Nov 2024",
        count: "1100",
    },
    {
        month: "Dec 2024",
        count: "1200",
    },
];

const SubscriberCharts = () => {
  //const [subscribersData, setSubscribersData] = useState ([]);
  return (
    <div className="my-5 p-5 border rounded bg-white w-full md:h-[55vh] xl:h-[60vh]">
      <div className="w-full flex">
        <h3 className="font-medium">Active Subscribers</h3>
      </div>
      <div className="flex w-full items-center justify-between">
        <p className="opacity-[.5]">Shows all active subscribers</p>
        <div className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-[#EB4898]" />
          <span className="pl-2 text-sm opacity-[.7]">Subscribers</span>
        </div>
      </div>
          {
             false ? (
        <div className="h-[85%] flex items-center justify-center w-full">
          <h5>Loading...</h5>
        </div>
       ): (
        <ResponsiveContainer width="100%" height={"85%"} className={"mt-5"}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#EB4898"
              fill="#EB4898"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default SubscriberCharts;
