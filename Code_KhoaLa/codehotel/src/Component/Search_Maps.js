import React, { Component } from 'react';

class Maps extends Component {
    render() {
        return ( <
            div classname = "search_maps"
            style = {
                { marginLeft: '2px' } } >
            <
            div className = "row iplabel" >
            <
            label > Thành phố, địa điểm hoặc tên khách sạn: < /label><label className="lKyxz" / > < br / >
            <
            /div> <
            div className = " row input-group mb-3"
            style = {
                { marginLeft: '3px' } } >
            <
            div className = "input-group-prepend" >
            <
            span className = "input-group-text"
            id = "basic-addon1" > @ < /span> <
            /div> <
            input type = "text"
            className = "form-control" / >
            <
            /div>

            <
            div className = "row md-3" >
            <
            div className = "lp col-md-4" >
            <
            div className = "row iplabel" >
            <
            label > Nhận Phòng: < /label><label className="lKyxz" / > < br / >
            <
            /div> <
            div className = " row input-group mb-3"
            style = {
                { marginLeft: '3px' } } >
            <
            div className = "input-group-prepend" >
            <
            span className = "input-group-text"
            id = "basic-addon1" > @ < /span> <
            /div> <
            input type = "text"
            className = "form-control" / >
            <
            /div> <
            /div> <
            div className = "lp col-md-4" >
            <
            div className = "row iplabel" >
            <
            label > Số Đêm: < /label><label className="lKyxz" / > < br / >
            <
            /div> <
            div className = "input-group mb-3" >
            <
            div className = "input-group-prepend" >
            <
            label className = "input-group-text"
            htmlFor = "inputGroupSelect01" > @ < /label> <
            /div> <
            select className = "custom-select"
            id = "inputGroupSelect01" >
            <
            option selected > 1 Đêm < /option> <
            option value = { 1 } > 1 Đêm < /option> <
            option value = { 2 } > 2 Đêm < /option> <
            option value = { 3 } > 3 Đêm < /option> <
            option value = { 4 } > 4 Đêm < /option> <
            option value = { 5 } > 5 Đêm < /option> <
            option value = { 6 } > 6 Đêm < /option> <
            option value = { 7 } > 7 Đêm < /option> <
            option value = { 8 } > 8 Đêm < /option> <
            /select> <
            /div> <
            /div> <
            div className = "lp col-md-4" >
            <
            div className = "row iplabel" >
            <
            label > Trả Phòng: < /label><label className="lKyxz" / > < br / >
            <
            /div> <
            div className = " row input-group mb-3"
            style = {
                { marginLeft: '3px' } } >
            <
            span > < input type = "text"
            className = "form-control" / > < /span> <
            /div> <
            /div> <
            /div> <
            div className = "row khach-phong" >
            <
            div className = "col-md-9" >
            <
            div className = "row iplabel" >
            <
            label > Khách và Phòng < /label><label className="lKyxz" / > < br / >
            <
            /div> <
            div className = "input-group mb-3" >
            <
            div className = "input-group-prepend" >
            <
            label className = "input-group-text"
            htmlFor = "inputGroupSelect01" > @ < /label> <
            /div> <
            select className = "custom-select"
            id = "inputGroupSelect01" >
            <
            option selected > 1 Đêm < /option> <
            option value = { 1 } > 1 Đêm < /option> <
            option value = { 2 } > 2 Đêm < /option> <
            option value = { 3 } > 3 Đêm < /option> <
            option value = { 4 } > 4 Đêm < /option> <
            option value = { 5 } > 5 Đêm < /option> <
            option value = { 6 } > 6 Đêm < /option> <
            option value = { 7 } > 7 Đêm < /option> <
            option value = { 8 } > 8 Đêm < /option> <
            /select> <
            /div> <
            /div> <
            div className = "col-md-3" >
            <
            br / >
            <
            div className = "icon-btn" >
            <
            button className = "TimKhachSan" > < span > @ < /span>Tìm Khách Sạn</button >
            <
            /div> <
            /div> <
            /div> <
            div className = "checkbox_ToiDiCongTac" >
            <
            div className = "form-check" >
            <
            input className = "form-check-input"
            type = "checkbox"
            id = "gridCheck" / >
            <
            label className = "form-check-label"
            htmlFor = "gridCheck" >
            Check me out <
            /label> <
            /div> <
            /div> <
            div >
            <
            a href = "#"
            class = "badge badge-light" > < span > @ < /span>Thanh Toán Khi Nhận Phòng</a >
            <
            /div> <
            /div>
        );
    }
}
export default Maps;