import { Layout, Menu, Breadcrumb } from 'antd';
import React, { Component } from 'react';
import  '../style/IndexSearch.css';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;


class HeaderMenu extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header>
                        <div className="logo" />
                        <Menu
                            id="header-menu"
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1"><Link to='/'></Link>首 页</Menu.Item>
                            <Menu.Item key="2">热点地图</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    

                </Layout>

            </div>
            
        );
    }
}

export default HeaderMenu;