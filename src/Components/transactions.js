import { useEffect } from "react"
import { Link } from "react-router-dom"
const API = process.env.REACT_APP_API_URL
console.log(API)

export default function Transactions({ transactions, total, addingTotal }) {

    useEffect(() => {
        addingTotal(transactions)
    }, [])

    return (
        <div className="transactions">
            <h1>Transactions - Total: ${total}</h1>
            <table>
                <tbody>
                    <tr>
                        <th>DATE</th>
                        <th>ITEM NAME</th>
                        <th>AMOUNT</th>
                        <th>PRIORITY</th>
                        <th>DONE</th>
                    </tr>

                    {
                        transactions.map((trans, index) => {
                            return <tr key={index}>
                                <td>{trans.date}</td>
                                <td><Link to={`/transactions/${index}`}>{trans.item_name}</Link></td>
                                <td style={trans.income ? { color: "green" } : { color: "red" }}>${trans.amount}</td>
                                <td>{trans.priority === "high" ? trans.priority === "medium" ? "📌" : "📌📌📌" : "📌📌"}</td>
                                <td>{trans.completed ? "✔" : "𝙓"}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}