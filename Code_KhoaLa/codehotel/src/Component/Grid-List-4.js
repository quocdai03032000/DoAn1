import React, { Component } from 'react';

class GList4 extends Component {
    render() {
        return ( <
            div className = "col-md-4 card-image-GridList4" >
            <
            img className = "image-GridList4"
            src = { this.props.img }
            alt = "Card image cap" / >
            <
            div className = " Gridlist4-GridList4" >
            <
            div className = "tt-gl4" >
            <
            h3 > { this.props.ten } < /h3> <
            /div> <
            div className = "int-gl4" >
            <
            p > Có { this.props.int }..khách sạn < /p> <
            /div> <
            /div> <
            div className = "middle" > { /* <div className="text">John Doe</div> */ } <
            a href = "###"
            className = "text" > Xem Khách Sạn < /a> <
            /div> <
            /div>

        );
    }
}
export default GList4;