import React from 'react';
import {  ComplexNavbar } from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <ComplexNavbar/>
            <Outlet/>
            <h1>Footer</h1>
        </div>
    );
}

export default Main;
