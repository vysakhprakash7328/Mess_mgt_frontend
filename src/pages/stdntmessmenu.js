import React, { useEffect, useState } from 'react';

import '../styles/stdntmessmenu.css';
import { FaRegCalendarCheck, FaWpforms, FaFileInvoice } from 'react-icons/fa';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const Checkinnstudentmessmenu = () => {
  const [data, setData] = useState([]);
  const [breakfast, setBreakfast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [snacks, setSnacks] = useState([]);
  const [dinner, setDinner] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/myapp/get_messmenu/');
        console.log(response.data);
        setBreakfast(response.data.data['breakfast']);
        setLunch(response.data.data['lunch']);
        setSnacks(response.data.data['evening']);
        setDinner(response.data.data['dinner']);
        
        setData(response.data);
      } catch (error) {
        console.log('Error loading....')
        console.log(error);
      
      }
    };
    fetchData();
  }, []);

  

  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  // const lunch = data['lunch']
  // const evening = data['evening']
  // const dinner = data['dinner']

  
    // const getMenuForDay = (day, meal) => {
    //   const mealData = data.data[meal];
    //   const index = daysOfWeek.indexOf(day.toLowerCase());
    //   return mealData[index] || '';
    // };
  return (
    <div className="checkinnstudentmessmenu-container">
      <div className="checkinnstudentmessmenu-sidebarbox">
      <h1> Mess Menu</h1>
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstudenthome2824"
              className="checkinnstudenthome-logopicstudenthome" />
               <NavLink to="/checkinnstudentmesssuggestmenu" className={"checkinnstudentmessmenu-submit1"} activeClassName="active">
      <button
                    type="button"
                    className="checkinnstudentmessmenu-submit"
                  >
                    Suggest Menu
                  </button>
                  </NavLink>
          <div className="messmenu-navigation">
            <ul className="messmenu-sidebarmenu">
              <li>
                <NavLink to="/checkinnstudentmesscut" className={"messmenu-active11"} exact activeClassName="active">
                  <FaRegCalendarCheck className="messmenu-icon11" />
                  <span className="messmenumenu-text11">mess calender</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessmenu" className={"messmenu-active22"} activeClassName="active">
                  <FaWpforms className="messmenu-icon22" />
                  <span className="messmenumenu-text22">mess menu</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/checkinnstudentmessbill" className={"messmenu-active33"} activeClassName="active">
                  <FaFileInvoice className="messmenu-icon33" />
                  <span className="messmenumenu-text33">mess bill</span>
                </NavLink>
              </li>
            </ul>
          </div>
          </div>


          <div className="table-container">
      <table className="menu-table">
        <thead>
          <tr>
            <th>Meals</th>
            {daysOfWeek.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Breakfast</td>
            {breakfast.map((brkfst) => (
              <td key={brkfst}>{brkfst}</td>
            ))}
          </tr>
          <tr>
            <td>Lunch</td>
            {lunch.map((lnch) => (
              <td key={lnch}>{lnch}</td>
            ))}
            
          </tr>
          <tr>
            <td>Snack</td>
            {snacks.map((ev) => (
              <td key={ev}>{ev}</td>
            ))}
            
          </tr>
          <tr>
            <td>Dinner</td>
            {dinner.map((dnnr) => (
              <td key={dnnr}>{dnnr}</td>
            ))}
            
          </tr>
        </tbody>
      </table>
    </div>
          </div>

  );
};

export default Checkinnstudentmessmenu;