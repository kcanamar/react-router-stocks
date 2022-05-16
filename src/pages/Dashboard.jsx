import { Link } from "react-router-dom"
import Data from "../components/stock-data.js"

export default function Dashboard() {

    return (
        <div >
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <th>
                                <div>Company Name</div>
                            </th>
                            <th>
                                <div>Price</div>
                            </th>
                            <th>
                                <div>Change</div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {Data.map(({ name, symbol, change, lastPrice, open }, idx) =>
                            <tr key={idx}>
                                <td>
                                    <Link to={`/stocks/${symbol}`}>
                                            <div className="company-name">{name}</div>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/stocks/${symbol}`}>
                                        <div className="price">{lastPrice}</div>
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/stocks/${symbol}`}>
                                        <div className={parseFloat(change).toFixed(2) >= 0 ? "green change" : "red change"}>{parseFloat(open).toFixed(2)} ({(parseFloat(change).toFixed(2) >= 0 ? `+${parseFloat(change).toFixed(2)}` : parseFloat(change).toFixed(2))})</div>
                                    </Link>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}