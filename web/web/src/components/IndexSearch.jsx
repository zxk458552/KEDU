import { Input, Row, Card, Typography, Select, Col, Divider ,message} from 'antd';
import React, { Component } from 'react';
import '../style/IndexSearch.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; // 或者 是
import Item from 'antd/lib/list/Item';
//import { withRouter } from 'react-router-dom';
import { getCityName, searchWord ,searchCityKey,checkUserip} from '../axios/index'
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
                {
                    key: "ah",
                    name: "安徽",
            
                },
                {
                    key: "bj",
                    name: "北京",
            
                },
                {
                    key: "fj",
                    name: "福建",
            
                },
                {
                    key: "gz",
                    name: "贵州",
            
                },
                {
                    key: "gx",
                    name: "广西",
            
                },
                {
                    key: "gs",
                    name: "甘肃",
            
                },
                {
                    key: "hubei",
                    name: "湖北",
            
                },
                {
                    key: "hunan",
                    name: "湖南",
            
                },
                {
                    key: "hebei",
                    name: "河北",
            
                },
                {
                    key: "henan",
                    name: "河南",
            
                },
                {
                    key: "hainan",
                    name: "海南",
            
                },
                {
                    key: "hlj",
                    name: "黑龙江",
            
                },
                {
                    key: "js",
                    name: "江苏",
            
                },
                {
                    key: "jx",
                    name: "江西",
            
                },
                {
                    key: "ln",
                    name: "辽宁",
            
                },
                {
                    key: "nmg",
                    name: "内蒙古",
            
                },
                {
                    key: "nx",
                    name: "宁夏",
            
                },
                {
                    key: "sh",
                    name: "上海",
            
                },
                {
                    key: "sc",
                    name: "四川",
            
                },
                {
                    key: "sd",
                    name: "山东",
            
                },
                {
                    key: "shanxi1",
                    name: "山西",
            
                },
                {
                    key: "shanxi3",
                    name: "陕西",
            
                },
                {
                    key: "tj",
                    name: "天津",
            
                },
                {
                    key: "yn",
                    name: "云南",
            
                },
                {
                    key: "zj",
                    name: "浙江",
            
                },
            ],
            searchText: {
                cityKey:"",
                keyword:""
            },
            searchCity: 'cq',
            cityKey:'cq',
            keyword:'',
            resultList:[],
            checkType:[],
            


        }
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
    }

    onSearch = (value) => {
        console.log("onsearch", value);
        var searchCity = this.state.cityKey;
        var searchText = value;
        this.setState({
            cityKey: searchCity,
            keyword:value,
        })
        checkUserip().then(res =>{
            console.log("checkUserip",res)
            var checkType = res
            this.setState({
                checkType :checkType
            })
            if(value){
                console.log("查看传进his.state.checkType",checkType)
                if(checkType == '1'){
                    localStorage.setItem("searchCityKey",this.state.cityKey);
                    localStorage.setItem("searchText",value);
                    window.location.href = '/index/searchResult/1';
                    return;
                }
                else{
                    message.warning('抱歉，您的免费搜索次数已达上限，请付费后继续使用！');
                    // window.location.href = '/index/payPage/1';
                    console.log("this.state.checkType",checkType)
                }
            }else{
                message.warning('关键字请勿为空，请重新输入！');
            }

  

        })
        //  this.turnPage(searchText);
        

    }
    handleChange = (value) => {
        console.log("value.key",value.key); // { key: "lucy", label: "Lucy (101)" }
        this.setState({
            cityKey: value.key
        })
    }

    render() {
        console.log("查看传进his.state.checkType",this.state.checkType)
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
                                    defaultValue={{ key: 'cq' }}
                                    style={{ width: 120 }}
                                    onChange={this.handleChange}
                                    // onBlur={this.handleBlur}
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