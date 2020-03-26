import { Input, Row, Card, Typography, Select, Col, Divider } from 'antd';
import React, { Component } from 'react';
import '../style/IndexSearch.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; // 或者 是
import Item from 'antd/lib/list/Item';
//import { withRouter } from 'react-router-dom';
import { getCityName, searchWord } from '../axios/index'
import axios from "axios";
import "../mock/api.js"

const { Title } = Typography;

const { Search } = Input;
const { Option } = Select;
const gridStyle = {
    width: '25%',
    textAlign: 'center',
};


class IndexSearch extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            cityName: [],
            searchText: '',
            searchCity: '',
            test: [11, 22, 33, 44]


        }
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
        localStorage.setItem("searchCity",searchCity);
        localStorage.setItem("searchText",searchText);
        console.log("searchText", searchText);
        searchWord(searchText);
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
    handleChange = (value) => {
        console.log("value.key",value.key); // { key: "lucy", label: "Lucy (101)" }
        this.setState({
            searchCity: value.key 
        })
    }

    render() {

        let cityName = this.state.cityName;
        let test = this.state.test;
        const { formData } = this.state;
        console.log(11, cityName)
        return (
            <div>
                <div>
                    <div>
                    <p id="title">客 都 找 房</p>
                        <p id="title_text">It always seems impossible until its done.</p>
                    </div>
                    <div id="search_box">

                        <Row type="flex" justify="center" align="middle" style={{ minWidth: 900 }}>

                            <Col xs={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 0 }}>
                                <Select
                                    labelInValue
                                    defaultValue={{ key: '请选择城市' }}
                                    style={{ width: 120 }}
                                    onChange={this.handleChange}
                                >
                                    {this.state.cityName.map((item, index) => {
                                        return (
                                            <Option value={item.key}>{item.name}</Option>
                                        )
                                        // <Option value="{index}">{item}</Option>
                                        //console.log(item.name,index);
                                        //console.log();
                                    })}

                                    {/* <Option value="chongQing">重庆</Option>
                                    <Option value="beiJing">北京</Option> */}
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




                    {/* <div>
                        <Select
                            labelInValue
                            defaultValue={{ key: 'lucy' }}
                            style={{ width: 120 }}
                            onChange={this.handleChange}
                        >
                            <Option value="jack">Jack (100)</Option>
                            <Option value="lucy">Lucy (101)</Option>
                        </Select>,
                    </div>


                    <Row type="flex" justify="center" align="middle" >
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            onSearch={
                                value => this.onSearch(value)
                            }
                            style={{ width: 450 }}
                            justify="center"
                        />
                    </Row> */}


                </div>
                {/* <div>
                <Row type="flex" justify="center" align="middle" >
                    <Card style={{ width: 800,height:140 }}>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>
                            Content
                        </Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                    </Card>
                    </Row>

                </div> */}





            </div>

        );
    }
}

export default withRouter(IndexSearch);