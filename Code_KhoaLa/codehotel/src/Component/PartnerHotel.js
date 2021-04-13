import React, { Component } from 'react';

class PartnerHotel extends Component {
    render() {
        return ( <
            div className = "PartnerHotel" >
            <
            div className = "row r-PartnerHotel" >
            <
            div className = "col-md-4" >
            <
            h4 > Đối tác khách sạn < /h4> <
            br / >
            <
            p style = {
                { opacity: 0.7 }
            } > Đối tác khách sạn trong nước và quốc tế < /p> <
            p > Chúng tôi hợp tác với các chuỗi khách sạn trên toàn thế giới để đảm bảo mang lại kỳ nghỉ tuyệt vời nhật tại mọi điểm đến trong mơ của bạn! < /p> < /
            div > <
            div className = "col=md-8" >
            <
            img src = "/img/PartnerHotel.png"
            alt = "Partner Holel"
            className = "img-PartnerHotel" / >
            <
            /div> < /
            div >
            <
            hr / >
            <
            br / > <
            /div>
        );
    }
}
export default PartnerHotel;