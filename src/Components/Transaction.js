import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
const API = process.env.REACT_APP_API_URL

export default function Transaction() {
    const [transaction, setTransaction] = useState({})

    const { index } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios
            .get(`${API}/transactions/${index}`)
            .then((res) => {
                setTransaction(res.data)
            }).catch((e) => console.log(e))
    }, [])

    return (
        <div>
            <h1>Transaction Details</h1>
        </div>
    )
}