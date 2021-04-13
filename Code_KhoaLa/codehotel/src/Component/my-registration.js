import React, { Component } from 'react';

class Myregistration extends Component {
    render() {
        return ( <
            div className = 'row myRegistration' >
            <
            div className = "col-md-6 col-myRegistration" >
            <
            h2 style = {
                { marginTop: '80px' } } > Đăng ký nơi nghỉ của bạn < /h2> <
            br / >
            <
            p > Tiếp cận hàng triệu khách hàng tiềm năng và nâng tầm doanh nghiệp của bạn với chúng tôi.p < /p> <
            /div> <
            div className = "col-md-6 img-myRegistration" >
            <
            img src = "/img/myRegistration.png"
            alt = "roomMyregistration" / >
            <
            /div> <
            br / >
            <
            hr / >
            <
            br / >
            <
            /div>
        );
    }
}
export default Myregistration;