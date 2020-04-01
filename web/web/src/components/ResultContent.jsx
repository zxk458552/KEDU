
import { Tabs, Radio, AutoComplete } from 'antd';
import React, { Component } from 'react';
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select, Col,Divider
} from 'antd';
import ResultList from './ResultList';

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
        //totalTime = totalTime*0.001
        this.setState({
            totalHits,
            totalTime
        })
    }


    callback = (key) => {
        console.log("callback",key);
        this.setState({
            tabKey:key
        })
    }



    render() {
        console.log("this.state.totalHits", this.state.totalHits)
        console.log("this.state.totalTime", this.state.totalTime)
        return (
            <div id="result-box">
                {/* <h4 style={{textAlign:"left" }}>本次搜索耗时{this.state.size},共计{this.state.totalHits}条数据。</h4> */}
                <Content style={{ width:1200 }}>
                {/* <Row type="flex" justify="center" align="middle" style={{ height: 500, width: 900 }}> */}
                    <Tabs defaultActiveKey="1" size={'large'} onChange={this.callback}>
                        <TabPane tab="相关性" key="1">
                            <ResultList tabKey={this.state.tabKey}/>
                           
                        </TabPane>
                        <TabPane tab="价格" key="2">
                            <ResultList tabKey={this.state.tabKey}/>
                            
                        </TabPane>
                    </Tabs>
                    </Content>
                {/* </Row> */}
            </div>

        );
    }
}

export default ResultContent;