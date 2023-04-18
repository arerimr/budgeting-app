import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <div className="NavBar">
            <Link to='/transactions'><h1>Budget App by M R</h1></Link>
            <button><Link to='/transactions/new'>NEW TRANSACTION</Link></button>
        </div>
    )
}