import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Data from "../components/stock-data"

export default function Stock() {

    const { symbol } = useParams()
    const [stock, setStock] = useState(Data)
    function getStock() {
        let newStock = Data.find((stocks) => stocks.symbol.includes(symbol))
        setStock(newStock)
    }

    useEffect(() => {
        getStock()
    }, [])

    return (
        <div> 
            <h1>Trading Symbol --- ({symbol})</h1>
            <div className="stock-container">
                <h2>{stock.name}</h2>
                <h2>Last Price --- {stock.lastPrice}</h2>
                <h2 className={parseFloat(stock.change).toFixed(2) >= 0 ? "green" : "red"}>Current Change --- ({(parseFloat(stock.change).toFixed(2) >= 0 ? `+${parseFloat(stock.change).toFixed(2)}` : parseFloat(stock.change).toFixed(2))})</h2>
                <h2>Today's High --- {stock.high}</h2>
                <h2>Today's Low --- {stock.low}</h2>
                <h2>Opening --- {stock.open}</h2>
            </div>
        </div>
    )
}