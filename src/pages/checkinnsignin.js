import React, { useEffect, useState } from 'react';
/*import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import {  useNavigate } from "react-router-dom";*/
import '../styles/checkinnsignin.css';
/*import { AuthContext } from "./../context/AuthContext";
import { BASE_URL } from "./../utils/config";*/
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Checkinnsignin = () => {
        
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [type_of_user,setType] = useState('');

        const navigate = useNavigate();


        useEffect(() => {
          const username = localStorage.getItem('username');
          if (username){
            navigate('/Checkinnstudenthome');
          }
        }, [navigate]);

        const handleSubmit = async (e) => {
          e.preventDefault();
          try{


            const response = await axios.post('http://127.0.0.1:8000/myapp/login/',{
              username,
              password,
              type_of_user
            });
            console.log(response.data)

            localStorage.setItem('username',response.data.data.username)
            localStorage.setItem('name',response.data.data.name)
            localStorage.setItem('id',response.data.data.id)
            localStorage.setItem('type',response.data.data.type)

            navigate('/Checkinnstudenthome')
            
          }catch (error){
            console.log(error)
          }
        }


         
          


  return (
    <div className="checkinnsignin-container">
      <div className="checkinnsignin-checkinnsignin">
        <div className="checkinnsignin-group">
          <div className="checkinnsignin-frame">
            
            <img
              alt="checkinnsigninpic1110"
              src="./images/checkinnsigninpic.png"
              className="checkinnsignin-checkinnsigninpic"
            />
          </div>
          <div className="checkinnsignin-contents">
            <div className="checkinnsignin-signin">
              <div className="checkinnsignin-signincontents">
                <div className="checkinnsignin-container1">
                <form onSubmit={handleSubmit}> 
                <div className="form-group">
                  <div className="checkinnsignin-help">
                    <div className="checkinnsignin-rememberme">
                      <span className="checkinnsignin-text">Remember me</span>
                    </div>
                  </div>
                  <span className="checkinnsignin-text1">
                    <span>Sign In</span>
                  </span>
                  <input
                    type="text"
                    required
                    placeholder="Username"
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="checkinnsignin-textinput input"
                  />
                  <input
                    type="text"
                    
                    required
                    placeholder="Password"
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="checkinnsignin-textinput1 input"
                  />
                  <input type="checkbox" className="checkinnsignin-checkbox" />
                  <button
                    type="submit"
                    className="checkinnsignin-button"
                  >
                    Sign In
                  </button>
                </div>
                </form>
          
              </div>
              
              <select
              id="sign-in-as" value={type_of_user} onChange={(e) => setType(e.target.value)}
                required
                className="checkinnsignin-select1"
               
              >
            

                <option value="admin" selected>
                  Admin
                
                   </option>
                <option value="student">Student</option>
                <option value="mess_user">Mess Secretary</option>
               
              </select>
              <button type="button" className="checkinnsignin-button1">
                Need Help?
              </button>
             
            </div>
            
      </div>
            <img
              alt="checkinnsigninlogo2824"
              src="./images/checkinnsigninlogo.png"
              className="checkinnsignin-checkinnsigninlogo"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


export default Checkinnsignin


