import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function Transaction() {
    const [trans, setTrans] = useState({})

    const { index } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${API}/transactions/${index}`)
            .then((res) => {
                setTrans(res.data)
            }).catch((e) => console.log(e))
        // console.log(index)
    }, [])

    return (
        <div>
            <h1>Transaction Details</h1>
            <h2>{trans.item_name}</h2>
            <table>
                <tbody>
                    <tr>
                        <th>DATE</th>
                        <td>{trans.date}</td>
                    </tr>
                    <tr>
                        <th>FROM</th>
                        <td>{trans.from}</td>
                    </tr>
                    <tr>
                        <th>AMOUNT</th>
                        <td>${trans.amount}</td>
                    </tr>
                    <br />
                    <tr>
                        <th>CATEGORY</th>
                        <td>{trans.category}</td>
                    </tr>
                    <tr>
                        <th>PRIORITY</th>
                        <td>{trans.priority}</td>
                        <th>INCOME</th>
                        <td>{trans.income ? "YES" : "NO"}</td>
                        <th>COMPLETED</th>
                        <td>{trans.completed ? "YES" : "NO"}</td>
                    </tr>
                    <br />
                    <tr>
                        <th>COMMENT</th>





                        <td>{trans.comment}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}