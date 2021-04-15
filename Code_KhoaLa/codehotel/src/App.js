import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Voucher from './Component/Voucher';
import Search from './Component/Search';


function App() {
    return ( <
        div className = "App" >
        <
        Header / >
        <
        Nav / >
        <
        Voucher / >
        <
        div className = "container" >
        <
        Search / >
        <
        /div> <
        /div>   
    );
}

export default App;