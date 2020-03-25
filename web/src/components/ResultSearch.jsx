import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; // 或者 是
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select ,Col
} from 'antd';


const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;

class ResultSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName:[],
            searchText:'',
        };
    }

    onSearch = (value) => {
        console.log(11, value);
        console.log(22, this.context);
        console.log(33, this.context.router);
        window.location.href = '/index/searchResult/1';
        //this.props.history.push('/index/searchResult/1')
        //this.context.history.push('/index/searchResult/1')
        // this.props.history.push({
        //     pathname:'/index/searchResult',
        //     state: {
        //     id: 3
        // },}
        // );

        //window.location.href = 'https://baidu.com';
        //window.location.href = '/index/search';
    }


    render() {
        return (
            <div>
                {/* <Layout style={{width: 800 }}> */}
                    <div id="search_box">

                        <Row type="flex" justify="center" align="middle" gutter={5} style={{ height: 100 }}>
                            <Col xs={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 0 }}>
                                <Select
                                    labelInValue
                                    defaultValue={{ key: 'chongQing' }}
                                    style={{ width: 120 }}
                                    onChange={this.handleChange}
                                >
                                    <Option value="chongQing">重庆</Option>
                                    <Option value="beiJing">北京</Option>
                                </Select>
                            </Col>
                            <Col xs={{ span: 2, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                                <Search
                                    placeholder="input search text"
                                    enterButton
                                    size="large"
                                    onSearch={
                                        value => this.onSearch(value)
                                    }
                                    style={{ width: 450 }}
                                    justify="center"
                                />
                            </Col>

                        </Row>

                    </div>
                {/* </Layout> */}

            </div>

        );
    }
}

export default ResultSearch;