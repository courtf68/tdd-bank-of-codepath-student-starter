import * as React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import TransactionDetail from "../TransactionDetail/TransactionDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";

export default function App() {
  const [isLoading, setisLoading] = React.useState(false);
  const [transactions, setTransactions] = React.useState([]);
  const [transfers, setTransfers] = React.useState([]);
  const [errors, setErrors] = React.useState(null);
  const [FilterInputValue, setFilterInputValue] = React.useState("");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <main>
          <Routes>
            <Route path="/" component={<Home />} />
            <Route
              path="/transactions/:transactionId"
              component={<TransactionDetail />}
            />
          </Routes>
          {/* <Home /> */}
        </main>
      </BrowserRouter>
    </div>
  );
}
