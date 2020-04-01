import React, { Component } from 'react';
import HeaderMenu from '../components/HeaderMenu';
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select, Col,Divider,message
} from 'antd';
import ResultContent from '../components/ResultContent';
import ResultCard from '../components/ResultCard';
import { checkUserip} from '../axios/index'



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
            searchCity: '',
            cityKey:'',
            keyword:'',
            checkType:false
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
        this.setState({

            cityKey: searchCity,
            keyword: searchText

        })
        
        console.log("getCityName",searchCity)
    }

    onSearch = (value) => {
        var searchText = value;
        var userIp = localStorage.getItem("userIp");
        console.log("查看传进checkUserip2",userIp)
        checkUserip(userIp).then(res =>{
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

        
    }
    handleChange = (value) => {
        console.log("value.key",value.key); // { key: "lucy", label: "Lucy (101)" }
        localStorage.setItem("searchCityKey",value.key);
        this.setState({
            cityKey: value.key
        })
    }
    render() {
        return (
            <div id="result-page" style={{minHeight:'100%'}}>
                <HeaderMenu />
                {/* 结果页搜索part */}
                <Row type="flex" justify="center" align="middle" style={{ height: 250 }}>
                    <Col xs={{ span: 1, offset: 0 }} lg={{ span: 1, offset: 0 }}>
                        <Select
                            labelInValue
                            defaultValue={{ key: this.state.cityKey }}
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
                            defaultValue={ this.state.keyword }
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
                <Row type="flex" justify="center" align="middle" style={{width:"auto"}}>
                    <ResultCard/>
                </Row>
                <div id="footer" style={{
                    position: 'fixed',
                    bottom: 0,
                    height: 30,
                    color: 'white',
                    lineHeight: '30px',
                    backgroundColor: '#001529',
                    textAlign: 'center',
                    width: '100%'
                }}>
                    KEDU  ©2020 Created by Zxk Yxy Wmx
                </div>
                {/* <div id="footer" style={{ 
                position:'relative',
                bottom:0 ,
                height: 30,
                color: 'white',
                lineHeight: '30px',
                backgroundColor: '#001529',
                textAlign: 'center'
            }}>
                    KEDU  ©2020 Created by Zxk Yxy Wmx
                </div> */}


            </div>
        );
    }
}

export default ResultPage;