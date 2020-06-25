import React, { Component } from 'react';
import HeaderMenu from '../components/HeaderMenu';
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select, Col, Divider,Modal
} from 'antd';
import ResultContent from '../components/ResultContent';
import ResultCard from '../components/ResultCard';
import { getCityName, searchWord, searchCityKey } from '../axios/index'
import qrcode from '../style/imgs/qrcode.png';
import PayStep from '../components/PayStep';


/**
 * 付费页面
 */


const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;

class PayPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,

        };
    }

    render() {
        return (
            <div>
                <HeaderMenu />
                <div id="step-box">
                    <PayStep />
                </div>
                
                <div id="footer" style={{
                    position: 'absolute',
                    bottom: 0,
                    height: 30,
                    color: 'white',
                    lineHeight: '30px',
                    backgroundColor: '#001529',
                    textAlign: 'center',
                    width: '100%'
                }}>
                    KEDU  ©2020 Created by Zxk Yxy Wmx
                </div>



            </div>
        );
    }
}

export default PayPage;