import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import DaNang from '../DaNang';
import './DaNang';

class RouterURL extends Component {
    render() {
        return ( <
            Router >
            <
            div >
            <
            Route path = "/DaNang" > < DaNang / > < /Route> <
            /div> <
            /Router>
        );
    }
}
export default RouterURL;