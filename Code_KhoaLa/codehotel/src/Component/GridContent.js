import React, { Component } from 'react';

class GridContent extends Component {
    render() {
        return ( <
            div className = "Grid-Content" >
            <
            br / >
            <
            br / >
            <
            br / >
            <
            div className = "row Grid" >
            <
            div className = "col-md-4" >
            <
            div className = "titel-h4" >
            <
            h4 > Thêm không gian cho gia đình và bạn bè < /h4> < /
            div > <
            p >
            Rất nhiều lựa chọn hấp dẫn các căn hộ và biệt thự trên Traveloka!
            <
            /p> < /
            div > <
            div className = "col-md-4" >
            <
            div className = "card"
            style = {
                { width: '18rem' }
            } >
            <
            img className = "card-img-top"
            src = "/img/BietThu.jpeg"
            alt = "Card image cap" / >
            <
            /div> <
            div className = "card-body" >
            <
            a href = "#"
            className = "card-text" > Biệt Thự < /a> <
            p > 17.000 + Biệt thự < /p> < /
            div > <
            /div> <
            div className = "col-md-4" >
            <
            div className = "card"
            style = {
                { width: '18rem' }
            } >
            <
            img className = "card-img-top"
            src = "/img/CanHo.jpeg"
            alt = "Card image cap" / >
            <
            /div> <
            div className = "card-body" >
            <
            a href = "#"
            className = "card-text" > Căn hộ < /a> <
            p > 25.000 + Căn hộ < /p> < /
            div > <
            /div> < /
            div >
            <
            br / >
            <
            br / > <
            /div>
        );
    }
}
export default GridContent;