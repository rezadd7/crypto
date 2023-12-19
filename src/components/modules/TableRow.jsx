import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import { marketChart } from "../../services/cryptoApi";

function TableRow({ coin, currency, setChart }) {
  const {
    id,
    symbol,
    name,
    image,
    current_price,
    total_volume,
    market_cap_change_percentage_24h: price_change,
  } = coin;

  const showHandler = async () => {
    try{
      const res = await fetch(marketChart(id))
      const json = await res.json()
      console.log(json)
      setChart({...json, coin})
    }catch(error){
      setChart(null)
    }
  };

  return (
    <tr className=" h-20 border-b border-[#22262e] font-semibold text-base">
      <td>
        <div
          className=" flex items-center cursor-pointer"
          onClick={showHandler}
        >
          <img src={image} alt={name} className=" w-6 h-6 mr-3" />
          <span className=" font-semibold text-base text-[#9fa6b7]">
            {symbol.toUpperCase()}
          </span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency === "usd" && "$"} {currency === "eur" && "€"}{" "}
        {currency === "jpy" && "¥"} {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? " text-[#57bc7c]" : " text-[#d33636]"}>
        {price_change.toFixed(4)} %
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
}

export default TableRow;
