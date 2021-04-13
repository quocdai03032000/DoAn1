import React, { Component } from 'react';
import Maps from './Search_Maps';

class Search extends Component {
    render() {
        return ( <
            div className = "container-small" >
            <
            nav className = "navbar navbar-light bg-light" >
            <
            a className = "navbar-brand"
            href = "#" >
            <
            img src = "#"
            width = { 30 }
            height = { 30 }
            className = "d-inline-block align-top"
            alt = "" / >
            Khách Sạn xem gần đây!
            <
            /a>   <
            /nav>   <
            Maps / >
            <
            /div>
        );
    }
}
export default Search;