
import { Tabs, Radio, AutoComplete } from 'antd';
import React, { Component } from 'react';
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select, Col
} from 'antd';
import ResultList from './ResultList';

const { TabPane } = Tabs;
const { Header, Content, Footer } = Layout;


class ResultContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large'
        };
    }



    callback = (key) => {
        console.log(key);
    }



    render() {
        return (
            <div id="result-box">
                <Content style={{ width:1200 }}>
                {/* <Row type="flex" justify="center" align="middle" style={{ height: 500, width: 900 }}> */}
                    <Tabs defaultActiveKey="1" size={'large'} onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">
                            <ResultList />
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                    </Content>
                {/* </Row> */}
            </div>

        );
    }
}

export default ResultContent;