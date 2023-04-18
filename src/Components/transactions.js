import { useEffect, useState } from "react"
import axios from "axios"
const API = process.env.REACT_APP_API_URL
// const API = 'http://localhost:8889'
console.log(API)

export default function Transactions() {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        axios
            .get(`${API}/transactions`)
            .then((res) => {
                setTransactions(res.data)
                // console.log(transactions)
            }).catch((e) => console.log(e))
    }, [])

    return (
        <div>
            <h1>Transactions</h1>
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
                        transactions.map((trans) => {
                            return <tr>
                                <td>{trans.date}</td>
                                <td>{trans.item_name}</td>
                                <td>${trans.amount}</td>
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