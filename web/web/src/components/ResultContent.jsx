
import { Tabs, Radio, AutoComplete } from 'antd';
import React, { Component } from 'react';
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select, Col,Divider
} from 'antd';
import ResultList from './ResultList';


/**
 * 结果页标签组件
 */


const { TabPane } = Tabs;
const { Header, Content, Footer } = Layout;


class ResultContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
            tabKey:'1',
            totalHits:'',
            totalTime:'',
        };
    }

    componentWillMount = () => {
        let totalHits = localStorage.getItem("totalHits")
        let totalTime = localStorage.getItem("totalTime")
        this.setState({
            totalHits,
            totalTime
        })
    }

    callback = (key) => {
        this.setState({
            tabKey:key
        })
    }

    render() {
        return (
            <div id="result-box">
                <Content style={{ width:1200 }}>
                    <Tabs defaultActiveKey="1" size={'large'} onChange={this.callback}>
                        <TabPane tab="相关性" key="1">
                            <ResultList tabKey={this.state.tabKey}/>
                        </TabPane>
                        <TabPane tab="价格" key="2">
                            <ResultList tabKey={this.state.tabKey}/>
                        </TabPane>
                    </Tabs>
                    </Content>
            </div>

        );
    }
}

export default ResultContent;