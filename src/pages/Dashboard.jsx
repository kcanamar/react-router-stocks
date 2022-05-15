import { Link } from "react-router-dom"
import Data from "../components/stock-data.js"

export default function Dashboard() {

    return (
        <div >
            <h2>Stocks</h2>
            <div className="container">
                <table>
                    <thead>
                        <th>
                            <div>Company Name</div>
                        </th>
                        <th>
                            <div>Price</div>
                        </th>
                        <th>
                            <div>Change</div>
                        </th>
                        <hr/>
                    </thead>
                    <tbody>
                        <td>
                            {Data.map(({ name, symbol }, idx) =>
                                <Link key={idx} to={`/stocks/${symbol}`}>
                                        <div>{name}</div>
                                        <hr/>
                                </Link>
                            )}
                        </td>
                        <td>
                            {Data.map(({ symbol, lastPrice}, idx) =>
                                    <Link key={idx} to={`/stocks/${symbol}`}>
                                    <div>{lastPrice}</div>
                                    <hr/>
                                </Link>
                            )}
                        </td>
                        <td>
                            {Data.map(({symbol, change, open}, idx) =>
                                    <Link key={idx} to={`/stocks/${symbol}`}>
                                    <div className={parseFloat(change).toFixed(2) >= 0 ? "green" : "red"}>{parseFloat(open).toFixed(2)}({(parseFloat(change).toFixed(2) >= 0 ? `+${parseFloat(change).toFixed(2)}` : parseFloat(change).toFixed(2))})</div>
                                    <hr/>
                                </Link>
                            )}
                        </td>
                    </tbody>
                </table>
            </div>
        </div>
    )
}