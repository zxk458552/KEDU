import React, { Component } from 'react';
import HeaderMenu from '../components/HeaderMenu';
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select, Col
} from 'antd';
import ResultSearch from '../components/ResultSearch';
import ResultContent from '../components/ResultContent';
import { getCityName, searchWord } from '../axios/index'



const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;
class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: [],
            searchText: '',
            searchCity: '',
            test: [11, 22, 33, 44]
        };
    }

    componentWillMount() {
        getCityName().then(res => {
            console.log(22, res)
            var arr = [];
            var arr2 = [];
            for (let i in res) {
                //data[i] = res[i];
                arr.push(res[i])
            }
            console.log("arr", arr)
            arr.map((item, index) => {
                item.map((value, key) => {
                    console.log("value", value)
                    console.log("key", key)
                    arr2.push(value)
                })
            })
            console.log("arr2", arr2)
            this.setState({
                cityName: arr2,
            })
        });
    }

    onSearch = (value) => {
        console.log("onsearch", value);
        var searchCity = this.state.searchCity;
        var searchText = value;
        this.setState({
            searchText: value,
        })
        console.log("searchText", searchText);
        searchWord(searchText);
        //window.location.href = '/index/searchResult/1';
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
    handleChange = (value) => {
        console.log(value.label); // { key: "lucy", label: "Lucy (101)" }
        this.setState({
            searchCity: value.label
        })
    }
    render() {
        return (
            <div>
                <HeaderMenu />
                {/* 结果页搜索part */}
                <Row type="flex" justify="center" align="middle" style={{ height: 150 }}>
                    <Col xs={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 0 }}>
                        <Select
                            labelInValue
                            defaultValue={{ key: 'chongQing' }}
                            style={{ width: 120 }}
                            onChange={this.handleChange}
                        >
                            {this.state.cityName.map((item, index) => {
                                return (
                                    <Option value={item.key}>{item.name}</Option>
                                )
                            })}
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
                <Row type="flex" justify="center" align="middle" style={{}}>
                    <ResultContent />
                </Row>


            </div>
        );
    }
}

export default ResultPage;