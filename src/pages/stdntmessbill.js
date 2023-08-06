import React, { useEffect, useState } from 'react';

import '../styles/stdntmessbill.css';
import { FaRegCalendarCheck, FaWpforms, FaFileInvoice } from 'react-icons/fa';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
const Checkinnstudentmessbill = () => {

  const [year,setYear] = useState('');
  const [month,setMonth] = useState('');
  const [amount, setAmount] = useState('');

  const username = localStorage.getItem('username')

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


  return (
    <div className="checkinnstudentmessbill-container">
      <div className="checkinnstudentmessbill-sidebarbox">
      <h1> Mess Bill</h1>
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="checkinnstudenthome-logopicstudenthome" />
      
          <div className="messbill-navigation">
            <ul className="messbill-sidebarmenu">
              <li>
                <NavLink to="/checkinnstudentmesscut" className={"messbill-active11"} exact activeClassName="active">
                  <FaRegCalendarCheck className="messbill-icon11" />
                  <span className="messbillmenu-text11">mess calender</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessmenu" className={"messbill-active22"} activeClassName="active">
                  <FaWpforms className="messbill-icon22" />
                  <span className="messbillmenu-text22">mess menu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessbill" className={"messbill-active33"} activeClassName="active">
                  <FaFileInvoice className="messbill-icon33" />
                  <span className="messbillmenu-text33">mess bill</span>
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="form-container">
          <label htmlFor="year">Select Year:</label>
          <select id="year" name="year" value={year} onChange={(e) => setYear(e.target.value)}
>
            <option value="0">--select--</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
            {/* Add more year options as needed */}
          </select>

          <label htmlFor="month">Select Month:</label>
          <select id="month" name="month" value={month} onChange={(e) => setMonth(e.target.value)}>
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
         

          <button type="submit" onClick={handleSubmit} >Mess Bill</button>
          {amount &&<span>Your Mess bill is  {amount}Rs.</span>}
       Your bill amnt is: {amount}
       
      </div>
          </div>
          </div>
  );
};

export default Checkinnstudentmessbill;