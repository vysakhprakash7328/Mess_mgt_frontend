import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const logoutuser = async () => {
            localStorage.removeItem('username');
            localStorage.removeItem('name');
            localStorage.removeItem('id');
            localStorage.removeItem('type');
            navigate('/checkinnsignin')
        }; logoutuser()

        

    }, [])
}; export default Logout