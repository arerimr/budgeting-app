import { useState } from "react"
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL

export default function NewTransaction() {
    const [transaction, setTransaction] = useState({
        id: 0,
        date: "",
        item_name: "",
        amount: 0,
        comment: "",
        priority: "",
        completed: false,
        from: "",
        income: false,
        category: ""
    })

    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setTransaction({ ...transaction, date: e.target.value })
    }

    const handleTextChange = (e) => {
        setTransaction({ ...transaction, [e.target.id]: e.target.value });
    };

    const handleIncomeCheckbox = (e) => {
        setTransaction({ ...transaction, income: !transaction.income });
    };

    const handleCompletedCheckbox = (e) => {
        setTransaction({ ...transaction, completed: !transaction.completed });
    };

    const createTransaction = () => {
        const options = {
            method: "POST",
            body: JSON.stringify(transaction),
            headers: { "Content-Type": "application/json" }
        }
        return fetch(`${API}/transactions`, options).then((res) => res.json());
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createTransaction()
        navigate('/transactions')
    }

    return (
        <div className="new">
            <h1>New Transaction Form</h1>
            <form onSubmit={handleSubmit}>
                <label>ITEM NAME</label>
                <input
                    id="item_name"
                    value={transaction.item_name}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="name"
                    required
                />
                <label>DATE</label>
                <input
                    id="date"
                    value={transaction.date}
                    type="text"
                    onChange={handleOnChange}
                    placeholder="mm/dd/yyyy"
                />
                <br />
                <br />
                <label>FROM</label>
                <input
                    id="from"
                    value={transaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="from"
                    required
                />
                <br />
                <br />
                <label>AMOUNT</label>
                <input
                    id="amount"
                    value={transaction.amount}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="amount"
                    required
                />
                <br />
                <br />
                <label>CATEGORY</label>
                <input
                    id="category"
                    value={transaction.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="category"
                    required
                />
                <br />
                <br />
                <label>PRIORITY</label>
                <select id="priority" onChange={handleTextChange} required>
                    <option name="low" id="low">LOW</option>
                    <option name="medium" id="medium">MEDIUM</option>
                    <option name="high" id="high">HIGH</option>
                </select>
                <br />
                <br />
                <label>INCOME</label>
                <input
                    id="income"
                    type="checkbox"
                    onChange={handleIncomeCheckbox}
                    checked={transaction.income}
                />
                <label>COMPLETED</label>
                <input
                    id="completed"
                    type="checkbox"
                    onChange={handleCompletedCheckbox}
                    checked={transaction.completed}
                />
                <br />
                <br />
                <label>COMMENT</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={transaction.comment}
                    onChange={handleTextChange}
                    placeholder="comment"
                    required
                />
                <br />
                <Link to="/transactions"><button>Back</button></Link>
                <input type="submit" className="submit" />
            </form>
        </div>
    )
}