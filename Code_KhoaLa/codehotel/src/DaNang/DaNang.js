import React, { Component } from 'react';
import '../App.css';
import './DaNang.css';
import Header from '../Component/Header';
import Nav from '../Component/Nav';
import VC_imgNhaTrang from './VC_imgNhaTrang';
import Search from '../Component/Search';
import TitelText from './TitelText';
import GridLikeHotel from './GridLikeHotel';

class DaNang extends Component {
    render() {
        return ( <
            div className = "DaNang" >
            <
            Header / >
            <
            Nav / >
            <
            VC_imgNhaTrang / >
            <
            div className = "container ct_DaNang" >
            <
            Search / >
            <
            TitelText / >
            <
            GridLikeHotel / >
            <
            /div> <
            /div>   
        );
    }
}

export default DaNang;