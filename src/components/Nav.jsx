import { Link } from "react-router-dom"

export default function Nav() {

    return (
        <div className="nav">
            <div className="left">
                <Link to={'/'}>
                    <div>Brand Logo</div>
                </Link>
            </div>
            <div className="right">
                <Link to={'/stocks'}>
                    <div>Stocks</div>
                </Link>
                <Link to={'/about'}>
                    <div>About</div>
                </Link>
            </div>
        </div>
    )
}