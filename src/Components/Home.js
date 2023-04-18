import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home">
            <h1>
                Welcome to the best budgeting app
            </h1>
            Click <Link to='/transactions'>HERE</Link> to view all transactions
        </div>
    )
}