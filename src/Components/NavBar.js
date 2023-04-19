import { Link, useLocation } from "react-router-dom"
import { useEffect } from "react"

export default function NavBar({ transactions, total, addingTotal }) {
    const loc = useLocation()

    useEffect(() => {
        addingTotal(transactions)
    }, [])

    return (
        <div className="NavBar">
            <Link to='/transactions'><h1>Budget App by M R</h1></Link>
            <div className="navTotal" style={loc.pathname === "/transactions" ? { display: "none" } : { display: "block" }}>
                <h2>Total: ${total}</h2>
            </div>
            <button><Link to='/transactions/new'>NEW TRANSACTION</Link></button>
        </div>
    )
}