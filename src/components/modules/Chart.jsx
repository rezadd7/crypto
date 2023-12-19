import React, { useState } from "react";
import { convertData } from "../helpers/convertDatat";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart({ chart, setChart }) {
  const [type, setType] = useState("prices");

  const typeHandler = e => {
    if(e.target.tagName === "BUTTON"){
      const type = e.target.innerText.toLowerCase().replace(" ", "_")
      setType(type)
    }
  }

  return (
    <div className=" fixed top-0 left-0 w-full h-full backdrop-blur-sm">
      <span
        onClick={() => setChart(null)}
        className=" inline-block text-2xl font-bold bg-[#d33636] text-white w-8 h-8 text-center mt-8 ml-8 rounded-md cursor-pointer leading-8"
      >
        X
      </span>
      <div className=" w-[800px] m-auto p-5 mt-12 bg-[#18181ce6] border-2 border-[#404042] rounded-3xl">
        <div className=" flex items-center mt-0 mb-5 mx-[30px]">
          <img
            src={chart.coin.image}
            alt={chart.coin.name}
            className=" w-[40px] h-[40px] mr-[20px]"
          />
          <p className=" text-2xl font-bold">{chart.coin.name}</p>
        </div>
        <div className="w-[760px] h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={convertData(chart, type)}>
              <Line
                type={"monotone"}
                dataKey={type}
                stroke="#3874ff"
                strokeWidth="2"
              />
              <CartesianGrid stroke="#404042" />
              <YAxis dataKey={type} domain={["auto", "auto"]} />
              <XAxis dataKey="date" hide />
              <Legend />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className=" mt-[30px]" onClick={typeHandler}>
          <button className={`my-[10px] mx-5 bg-[#18181cdb] border border-[#3874ff] text-base py-1 px-3 rounded-md cursor-pointer ${type === "prices"? " bg-[#3874ff]":null}`}>Prices</button>
          <button className={`my-[10px] mx-5 bg-[#18181cdb] border border-[#3874ff] text-base py-1 px-3 rounded-md cursor-pointer ${type === "market_caps"? " bg-[#3874ff]":null}`}>Market Caps</button>
          <button className={`my-[10px] mx-5 bg-[#18181cdb] border border-[#3874ff] text-base py-1 px-3 rounded-md cursor-pointer ${type === "total_volumes"? " bg-[#3874ff]":null}`}>Total Volumes</button>
        </div>
        <div className=" flex justify-between mt-[30px] mb-0 mx-[20px]">
          <div className="flex text-base">
            <p className=" mr-2 text-[#3874ff] font-normal">Prices: 
            <span className="text-white ml-2">$ {chart.coin.current_price.toLocaleString()}</span>
            </p>
          </div>
          <div>
            <p className=" mr-2 text-[#3874ff] font-normal">ATH:
            <span className="text-white ml-2">$ {chart.coin.ath.toLocaleString()}</span>
            </p>
          </div>
          <div>
            <p className=" mr-2 text-[#3874ff] font-normal">Market Cap:
            <span className="text-white ml-2">$ {chart.coin.market_cap.toLocaleString()}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
