import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import  '../style/IndexSearch.css';
import { Link } from 'react-router-dom';
import {LoadingOutlined} from '@ant-design/icons';
const { Header, Content, Footer } = Layout;


/**
 * 导航菜单
 */

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuKey:"1"
        };
    }

    componentWillMount = () =>{
        var menuKey = localStorage.getItem('menuKey')
        if(!menuKey){
            return;
        }
        this.setState({
            menuKey:menuKey
        })
    }
    setKey = (value) =>{

        console.log(value.key);
        localStorage.removeItem("searchCityKey");
        localStorage.removeItem("searchText");
        localStorage.setItem('menuKey',value.key);
    }

    render() {
        return (
            <div>
                    <Header style={{ position:'fixed',top:0 ,width:'100%',zIndex:100}}>
                        <Menu
                            id="header-menu"
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[this.state.menuKey]}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1" onClick={this.setKey.bind(this)}><Link to='/'>首 页</Link></Menu.Item>
                            <Menu.Item key="2" onClick={this.setKey.bind(this)}><Link to='/index/payPage/2'>成为VIP</Link></Menu.Item>
                        </Menu>
                    </Header>

            </div>
            
        );
    }
}

export default HeaderMenu;