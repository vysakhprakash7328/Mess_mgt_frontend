import React from 'react';
import '../styles/stdntpayhis.css';
import {FaCreditCard, FaHistory} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const Stdntpayhis = () => {

  const [data, setData] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/myapp/pay_his/');
        console.log(response.data);
        
        
        setData(response.data);
      } catch (error) {
        console.log('Error loading....')
        console.log(error);
      
      }
    };
    fetchData();
  }, []);


  return (
    <div className="stdntpayhis-container">
        <h1> Payment History</h1>
      <div className="stdntpayhis-sidebarbox">
      
      <img
              src="./images/checkinnstudenthomelogo.png"
              alt="logopicstdntpayhis"
              className="logopic-stdntpayhis" />
      
          <div className="stdntpayhis-navigation">
            <ul className="stdntpayhis-sidebarmenu">
              <li>
                <NavLink to="/stdntbillpay" className={"stdntpayhis-active11"} exact activeClassName="active">
                  <FaCreditCard className="stdntpayhis-icon11" />
                  <span className="stdntpayhismenu-text11">pay bill</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/stdntpayhis" className={"stdntpayhis-active22"} activeClassName="active">
                  <FaHistory className="stdntpayhis-icon22" />
                  <span className="stdntpayhismenu-text22">history</span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="stdntpayhis-container2">
        <table className="payhis-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Generated On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr>
                <td>{d.month}</td>
                <td>{d.amount}</td>
                <td>{d.Generated_on}</td>
                <td>{d.is_paid}</td>
              </tr>
            ))}
            
            
          </tbody>
        </table>
      </div>

          </div>
          </div>
  );
};

export default Stdntpayhis;