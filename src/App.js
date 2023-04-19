import NavBar from './Components/NavBar';
import Transactions from './Components/transactions';
import Transaction from './Components/Transaction';
import NewTransaction from './Components/NewTransaction';
import EditTransaction from './Components/EditTransaction';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import { Routes, Route } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from 'react';
import './App.css';
const API = process.env.REACT_APP_API_URL

function App() {
  const [transactions, setTransactions] = useState([])
  const [total, setTotal] = useState(0)

  function addingTotal(transactions) {
    let amount = 0;
    for (let i = 0; i < transactions.length; i++) {
      if (!transactions[i].income) {
        amount += -transactions[i].amount
      } else {
        amount += transactions[i].amount
      }
    }
    return setTotal(amount)
  }


  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data.sort((a, b) => new Date(b.date) - new Date(a.date)))
        // console.log(transactions)
      }).catch((e) => console.log(e))
  }, [])

  return (
    <div className="App">
      <NavBar transactions={transactions} total={total} addingTotal={addingTotal} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/transactions' element={<Transactions transactions={transactions} total={total} addingTotal={addingTotal} />} />
        <Route path='/transactions/:id' element={<Transaction />} />
        <Route path='/transactions/:id/edit' element={<EditTransaction />} />
        <Route path='/transactions/new' element={<NewTransaction />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
