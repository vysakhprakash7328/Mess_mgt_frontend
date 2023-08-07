import React, { useState } from "react";
import "../styles/stdntbillpay.css";
import { FaCreditCard, FaHistory } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Stdntbillpay = () => {
  const [selected, setSelected] = useState({
    selectedYear: "",
    selectedMonth: "",
  });

  const [year,setYear] = useState('');
  const [month,setMonth] = useState('');
  const [amount, setAmount] = useState('');

  const username = localStorage.getItem('username')


  const handleSelectChange = (e) => {
    setSelected(prevState=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  };
  const handleSubmit = () => {
    console.log(year)
    console.log(month)

    const response = axios.post('http://127.0.0.1:8000/myapp/billing/',{
      year,
      month,
      username
    })
      .then((response) => {
        console.log('Response from server:', response.data);
        setAmount(response.data.billed_amount)
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
      });

  }
  const { selectedYear, selectedMonth } = selected;
  console.log(selectedYear, selectedMonth);

  return (
    <div className="stdntbillpay-container">
      <h1> Pay Bill</h1>
      <div className="stdntbillpay-sidebarbox">
        <img
          src="./images/checkinnstudenthomelogo.png"
          alt="logopicstdntbillpay"
          className="logopic-stdntbillpay"
        />

        <div className="stdntbillpay-navigation">
          <ul className="stdntbillpay-sidebarmenu">
            <li>
              <NavLink
                to="#"
                className={"stdntbillpay-active11"}
                exact
                activeClassName="active"
              >
                <FaCreditCard className="stdntbillpay-icon11" />
                <span className="stdntbillpaymenu-text11">pay bill</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stdntpayhis"
                className={"stdntbillpay-active22"}
                activeClassName="active"
              >
                <FaHistory className="stdntbillpay-icon22" />
                <span className="stdntbillpaymenu-text22">history</span>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="stdntbillpay-container2">
            <label htmlFor="year">Select Year:</label>
            <select
              id="year"
              name="selectedYear"
              value={year} onChange={(e) => setYear(e.target.value)}
            >
              <option value="0">--select--</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              {/* Add more year options as needed */}
            </select>

            <label htmlFor="month">Select Month:</label>
            <select
              id="month"
              name="selectedMonth"
              value={month} onChange={(e) => setMonth(e.target.value)}
            >
              <option value="0">--select--</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>

            <button type="submit" onClick={handleSubmit}>Pay Bill</button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            Your bill amnt is: {amount}

        </div>

      </div>

    </div>
  );
};

export default Stdntbillpay;
