'use strict';
import React from 'react';
import { connect } from 'react-redux';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import { requestData } from '../../store/main/action'
import Header from '../component/header';
import Navigation from '../component/navigation'
import Body from './body';
import Footer from "../component/footer";

class Index extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    }

    componentDidMount(){
        //set cookie
        const { cookies } = this.props;
        cookies.set('uid', '111111111', {
            path: '/'
        });
        this.props.requestData("1", "dataList");
    }

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const _navigation_ = [{text: "首页", url: "/"}, {text: "数据统计"}]
        return (
            <div className="main">
                <Header />
                <Navigation _navigation_={_navigation_} />
                <div className="line"></div>
                <div className={"body"}>
                    <Body />
                </div>
                <Footer />
            </div>
        )
    }
}

export default withCookies(connect(state => ({
    mainData: state.mainData,
}), {
    requestData
})(Index));