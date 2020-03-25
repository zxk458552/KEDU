import { Layout, Menu, Breadcrumb, AutoComplete } from 'antd';
import React, { Component } from 'react';
import '../style/indexPage.css';
import HeaderMenu from '../components/HeaderMenu';
import IndexSearch from '../components/IndexSearch';

import ParticlesBg from 'particles-bg'
const { Header, Content, Footer } = Layout;


class IndexPage extends React.Component {
    
    render() {
        return (
          <div>
          <ParticlesBg type="circle" bg={true} /> 
          <Layout>
           <HeaderMenu />
           </Layout>
        <Content >
          <IndexSearch />
        </Content>
        
     
    </div>
        
        );
    }
}

export default IndexPage;