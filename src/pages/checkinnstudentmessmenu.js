import React, { useEffect, useState } from 'react';

import '../styles/checkinnstudentmessmenu.css';
import { FaRegCalendarCheck, FaWpforms, FaFileInvoice } from 'react-icons/fa';
import { BrowserRouter as Router, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';

const Checkinnstudentmessmenu = () => {

  const [data, setData] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get('http://127.0.0.1:8000/myapp/get_messmenu/')

      }catch (error){
        console.log(error)
      }
    }; fetchData();
  }, [])


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
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
              <td>Breakfast</td>
            </tr>
            <tr>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
              <td>Lunch</td>
            </tr>
            <tr>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
              <td>Snack</td>
            </tr>
            <tr>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
              <td>Dinner</td>
            </tr>
          </tbody>
        </table>
      </div>



          </div>

  );
};

export default Checkinnstudentmessmenu;