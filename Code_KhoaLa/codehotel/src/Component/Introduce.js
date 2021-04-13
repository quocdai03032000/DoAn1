import React, { Component } from 'react';
import GList4 from './Grid-List-4';

class Introduces extends Component {
    render() {
        return ( <
            div className = "Introduces" >
            <
            div className = "tt-introduces"
            style = {
                { textAlign: 'center' } } >
            <
            h3 > Điểm đến hot nhất do Traveloka đề xuất < /h3> <
                /div> <
                br / >
                <
                div className = "row br-introduces" >
                <
                GList4 ten = "Đà Nẳng"
            int = "763"
            img = "/img/danang.jpg" / >
            <
            GList4 ten = "Nha Trang"
            int = "569"
            img = "/img/NhaTrang.jpg" / >
            <
            GList4 ten = "Phú Quốc"
            int = "381"
            img = "/img/PhuQuoc.jpg" / >
            <
            GList4 ten = "Vũng Tàu"
            int = "871"
            img = "/img/VunTau.jpg" / >
            <
            GList4 ten = "Hà Nội"
            int = "421"
            img = "/img/HaNoi.jpeg" / >
            <
            GList4 ten = "Đà Lạt"
            int = "531"
            img = "/img/DaLat.jpg" / >
            <
            GList4 ten = "Hội An"
            int = "171"
            img = "/img/HoiAn.jpg" / >
            <
            GList4 ten = "Phan Thiết"
            int = "513"
            img = "/img/PhanThiet.jpg" / >
            <
            GList4 ten = "Quy Nhơn"
            int = "239"
            img = "/img/QuyNhon.jpg" / >
            <
            GList4 ten = "Huế"
            int = "390"
            img = "/img/hue.jpg" / >
            <
            GList4 ten = "Hồ Chí Minh"
            int = "650"
            img = "/img/HoChiMinh.jpg" / >
            <
            GList4 ten = "Hạ Long"
            int = "345"
            img = "/img/HaLong.jpg" / >
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
export default Introduces;