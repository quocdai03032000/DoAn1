import React, { Component } from 'react';
import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Voucher from './Component/Voucher';
import Search from './Component/Search';
import GridContent from './Component/GridContent';
import PartnerHotel from './Component/PartnerHotel';
import PartnerPayMent from './Component/PartnerPayment';
import Chooses from './Component/Choose';
import Introduces from './Component/Introduce';
import Myregistration from './Component/my-registration';
import Poster from './Component/Poster';

class App extends Component {
    render() {
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
            GridContent / >
            <
            PartnerHotel / >
            <
            PartnerPayMent / >
            <
            Chooses / >
            <
            Introduces / >
            <
            Myregistration / >
            <
            /div>  <
            Poster / >
            <
            /div>   
        );
    }
}

export default App;