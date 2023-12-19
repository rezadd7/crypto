import { RotatingLines } from "react-loader-spinner";
import TableRow from "./TableRow";

function TableCoins({ coins, isLoading, currency,setChart }) {
  return (
    <>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="4" />
      ) : (
        <div className=" flex justify-center mt-[50px]  mb-[100px] ">
          <table className=" w-full border-collapse sm:overflow-x-scroll">
            <thead className=" border-b-2 mb-5">
              <tr>
                <th className=" text-lg text-left py-3 px-0 sm:py-0 sm:px-3">
                  Coin
                </th>
                <th className=" text-lg text-left py-3 px-0 sm:py-0 sm:px-3">
                  Name
                </th>
                <th className=" text-lg text-left py-3 px-0 sm:py-0 sm:px-3">
                  Price
                </th>
                <th className=" text-lg text-left py-3 px-0 sm:py-0 sm:px-3">
                  24h
                </th>
                <th className=" text-lg text-left py-3 px-0 sm:py-0 sm:px-3">
                  Total Volume
                </th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <TableRow key={coin.id} coin={coin} currency={currency} setChart={setChart}/>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default TableCoins;
