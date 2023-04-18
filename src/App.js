import NavBar from './Components/NavBar';
import Transactions from './Components/transactions';
import Transaction from './Components/Transaction';
import NewTransaction from './Components/NewTransaction';
import EditTransaction from './Components/EditTransaction';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/transactions' element={<Transactions />}/>
        <Route path='/transactions/:id' element={<Transaction />}/>
        <Route path='/transactions/:id/edit' element={<EditTransaction />}/>
        <Route path='/transactions/new' element={<NewTransaction />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </div>
  );
}

export default App;
