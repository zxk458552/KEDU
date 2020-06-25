import React, { Component } from 'react';
import HeaderMenu from '../components/HeaderMenu';
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select,Result,Button
} from 'antd';
import { Link } from 'react-router-dom';


/**
 * 付费成功反馈页
 */

const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;

class PayResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,

        };
    }
    clearItem = () => {
        localStorage.removeItem("menuKey");
        console.log("menuKey is clear")
    }

    render() {
        return (
            <div>
                <HeaderMenu />
                <Result
                    style={{paddingTop:260}}
                    status="success"
                    title="Successfully Paid The Bill!"
                    subTitle="Request number: 202003312130 It takes 1-5 minutes, please wait."
                    extra={[
                        <Button type="primary" key="console" onClick={this.clearItem()}><Link to="/">返回首页</Link>
                        
                        </Button>
                    ]}
                />,

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

export default PayResult;