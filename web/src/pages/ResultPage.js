import React, { Component } from 'react';
import HeaderMenu from '../components/HeaderMenu';
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select, Col
} from 'antd';
import ResultContent from '../components/ResultContent';
import { getCityName, searchWord ,searchCityKey} from '../axios/index'



const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;
class ResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: [
                {
                    key: "cq",
                    name: "重庆",
            
                },
                {
                    key: "gd",
                    name: "广东",
            
                },
                {
                    key: "jl",
                    name: "吉林",
            
                },
            ],
            searchText: {
                cityKey:"",
                keyword:""
            },
            searchCity: '',
        };
    }

    componentWillMount() {
        // getCityName().then(res => {
        //     console.log(22, res)
        //     var arr = [];
        //     var arr2 = [];
        //     for (let i in res) {
        //         //data[i] = res[i];
        //         arr.push(res[i])
        //     }
        //     console.log("arr", arr)
        //     arr.map((item, index) => {
        //         item.map((value, key) => {
        //             console.log("value", value)
        //             console.log("key", key)
        //             arr2.push(value)
        //         })
        //     })
        //     console.log("arr2", arr2)
        //     this.setState({
        //         cityName: arr2,
        //     })
        // });
        let searchCity = localStorage.getItem("searchCityKey");
        let searchText = localStorage.getItem("searchText");
        if(searchCity){
            this.setState({
                searchText:{
                    cityKey: searchCity,
                    keyword: searchText
                } 
            })
        }else {
            this.setState({
                searchText:{
                    cityKey: "请选择城市",
                    keyword: searchText
                } 
            })
        }
        
        console.log("getCityName",searchCity)
    }

    onSearch = (value) => {
        var searchText = value;
        this.setState({
            searchText:{
                // cityKey: searchCity,
                keyword:searchText
            } 
        })
        localStorage.setItem("searchText",searchText);
        searchWord(searchText);
        //window.location.href = '/index/searchResult/1';
    }
    handleChange = (value) => {
        console.log("value.key",value.key); // { key: "lucy", label: "Lucy (101)" }
        localStorage.setItem("searchCityKey",value.key);
        this.setState({
            searchText:{cityKey: value.key} 
        })
    }
    render() {
        console.log("6666666",this.state.searchText)
        return (
            <div>
                <HeaderMenu />
                {/* 结果页搜索part */}
                <Row type="flex" justify="center" align="middle" style={{ height: 150 }}>
                    <Col xs={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 0 }}>
                        <Select
                            labelInValue
                            defaultValue={{ key: this.state.searchText.cityKey }}
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
                            defaultValue={ this.state.searchText.keyword }
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