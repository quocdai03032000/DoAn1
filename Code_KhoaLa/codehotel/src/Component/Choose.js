import React, { Component } from 'react';

class Chooses extends Component {
    render() {
        return ( <
            div className = "Choose" >
            <
            div className = "tt-h3" >
            <
            h3 > Tại sao nên đặt chỗ với Traveloka ? < /h3> < /
            div > <
            br / >
            <
            br / >
            <
            br / > { /* 1 */ } <
            div className = "row choose" >
            <
            div className = "col-md-4" >
            <
            img src = "/img/Choose1.png"
            alt = "icon-Choose"
            style = {
                { height: '200px' },
                { width: '200px' }
            }
            /> < /
            div > <
            div className = "col-md-8" >
            <
            h5 > Giá rẻ mỗi ngày với ưu đãi đặc biệt dành riêng cho ứng dụng < /h5> <
            br / >
            <
            p > Đặt phòng qua ứng dụng để nhận giá tốt nhất với các khuyến mãi tuyệt vời! < /p> < /
            div > <
            /div> <
            br / >
            <
            br / > { /* 2 */ } <
            div className = "row choose" >
            <
            div className = "col-md-8" >
            <
            h5 > Phương thức thanh toán an toàn và linh hoạt < /h5> <
            br / >
            <
            p > Giao dịch trực tuyến an toàn với nhiều lựa chọn như thanh toán tại cửa hàng tiện lợi,
            chuyển khoản ngân hàng, thẻ tín dụng đến Internet Banking.Không tính phí giao dịch. < /p> < /
            div > <
            div className = "col-md-4" >
            <
            img src = "/img/Choose2.png"
            alt = "icon-Choose"
            style = {
                { height: '200px' },
                { width: '200px' }
            }
            />  < /
            div > <
            /div> <
            br / >
            <
            br / > { /* 3 */ } <
            div className = "row choose" >
            <
            div className = "col-md-4" >
            <
            img src = "/img/Choose3.png"
            alt = "icon-Choose"
            style = {
                { height: '200px' },
                { width: '200px' }
            }
            /> < /
            div > <
            div className = "col-md-8" >
            <
            h5 > Hỗ trợ khách hàng 24 / 7 < /h5> <
            br / >
            <
            p > Đội ngũ nhân viên hỗ trợ khách hàng luôn sẵn sàng giúp đỡ bạn trong từng bước của quá trình đặt vé! < /p> < /
            div > <
            /div> <
            br / >
            <
            br / > { /* 4 */ } <
            div className = "row choose" >
            <
            div className = "col-md-8" >
            <
            h5 > Khách thực, đánh giá thực < /h5> <
            br / >
            <
            p > Hơn 10.000 .000 đánh giá, bình chọn đã được xác thực từ du khách sẽ giúp bạn đưa ra lựa chọn đúng đắn. < /p> < /
            div > <
            div className = "col-md-4" >
            <
            img src = "/img/Choose4.png"
            alt = "icon-Choose"
            style = {
                { height: '200px' },
                { width: '200px' }
            }
            /> < /
            div > <
            /div> <
            br / >
            <
            hr / >
            <
            br / > <
            /div>
        );
    }
}
export default Chooses;