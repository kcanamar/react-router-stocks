import { Link } from "react-router-dom"
import Data from "../components/stock-data.js"

export default function Dashboard() {

    return (
        <div>
            <h2>Stocks</h2>
            <div className="container">
                <div>Company Name</div>
                <div>Price</div>
                <div>Change</div>
                <hr/>
                {Data.map(({ name, symbol, change, open, lastPrice}, idx) =>
                    <Link key={idx} to={`/stocks/${symbol}`}>
                        <div>{name}</div>
                        <div>{lastPrice}</div>
                        <div className={parseFloat(change).toFixed(2) >= 0 ? "green" : "red"}>{parseFloat(open).toFixed(2)}({(parseFloat(change).toFixed(2) >= 0 ? `+${parseFloat(change).toFixed(2)}` : parseFloat(change).toFixed(2))})</div>
                        <hr/>
                    </Link>
                )}
            </div>
        </div>
    )
}