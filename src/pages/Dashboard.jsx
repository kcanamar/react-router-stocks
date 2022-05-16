import { useNavigate } from "react-router-dom"
import Data from "../components/stock-data.js"

export default function Dashboard() {

    const navigate = useNavigate()
    const handleClick = (symbol) => {
        navigate(`/stocks/${symbol}`)
    }

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
                            <tr key={idx} onClick={() => handleClick(symbol)}>
                                <td>
                                    <div className="company-name">{name}</div>
                                </td>
                                <td>
                                    <div className="price">{lastPrice}</div>
                                </td>
                                <td>
                                    <div className={parseFloat(change).toFixed(2) >= 0 ? "green change" : "red change"}>{parseFloat(open).toFixed(2)} ({(parseFloat(change).toFixed(2) >= 0 ? `+${parseFloat(change).toFixed(2)}` : parseFloat(change).toFixed(2))})</div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}