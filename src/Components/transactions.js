import { useEffect, useState } from "react"
import axios from "axios"
// const API = process.env.REACT_APP_API_URL
const API = 'http://localhost:8889'
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
                <tr>
                    <th>DATE</th>
                    <th>ITEM NAME</th>
                    <th>AMOUNT</th>
                    <th>PRIORITY</th>
                    <th>DONE</th>
                </tr>
            </table>
        </div>
    )
}