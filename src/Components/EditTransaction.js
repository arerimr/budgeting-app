import { useState, useEffect, useRef } from "react"
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
const API = process.env.REACT_APP_API_URL

export default function EditTransaction() {
    const [dateInput, setDateInput] = useState("")
    const dateInputRef = useRef(null)
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

    const handleOnChange = (e) => {
        setTransaction({ ...transaction, date: e.target.value })
    }

    const handleTextChange = (event) => {
        setTransaction({ ...transaction, [event.target.id]: event.target.value });
    };

    const handleIncomeCheckbox = (e) => {
        setTransaction({ ...transaction, income: !transaction.income });
    };

    const handleCompletedCheckbox = (e) => {
        setTransaction({ ...transaction, completed: !transaction.completed });
    };

    return (
        <div>
            <h1>Edit Transaction form</h1>
            <form>
                <label>DATE</label>
                <input
                    id="date"
                    value={transaction.date}
                    type="date"
                    onChange={handleOnChange}
                    ref={dateInputRef}
                    required
                />
                <label>FROM</label>
                <input
                    id="from"
                    value={transaction.from}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="from"
                    required
                />
                <label>AMOUNT</label>
                <input
                    id="amount"
                    value={transaction.amount}
                    type="number"
                    onChange={handleTextChange}
                    placeholder="amount"
                    required
                />
                <label>CATEGORY</label>
                <input
                    id="category"
                    value={transaction.category}
                    type="text"
                    onChange={handleTextChange}
                    placeholder="category"
                    required
                />
                <label>PRIORITY</label>
                <select id="priority" onChange={handleTextChange} required>
                    <option name="low" id="low">LOW</option>
                    <option name="medium" id="medium">MEDIUM</option>
                    <option name="high" id="high">HIGH</option>
                </select>
                <label>INCOME</label>
                <input
                    id="income"
                    type="checkbox"
                    onChange={handleIncomeCheckbox}
                    checked={transaction.income}
                    required
                />
                <label>COMPLETED</label>
                <input
                    id="completed"
                    type="checkbox"
                    onChange={handleCompletedCheckbox}
                    checked={transaction.completed}
                    required
                />
                <label>COMMENT</label>
                <textarea
                    id="comment"
                    name="comment"
                    value={transaction.comment}
                    onChange={handleTextChange}
                    placeholder="comment"
                    required
                />
            </form>
        </div>
    )
}