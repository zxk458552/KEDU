
import { Tabs, Radio, AutoComplete } from 'antd';
import React, { Component } from 'react';
import {
    Layout, Menu, Breadcrumb,
    Input, Row, Card, Typography,
    Select, Col, Avatar,Empty
} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { searchWord, searchCityKey } from '../axios/index'


/**
 * 推荐卡片组件
 */


const { TabPane } = Tabs;
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

class ResultCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'large',
            resultList:[],
            cardList:[]
        };
    }



    callback = (key) => {
        console.log("callback", key);
    }
    componentWillMount=()=> {
        let searchCity = localStorage.getItem("searchCityKey");
        let searchText = localStorage.getItem("searchText");
        if(searchText){
            searchCityKey(searchCity);
            searchWord(searchText).then(res => {
                var arr = [];
                var i = 0
                for (const element of res) {
                    if(!res[i+1]){
                        break;
                    }
                    arr.push(res[i]);
                    i = i + 1;
                }
                console.log("arr", arr)
                this.setState({
                    resultList: arr
                })
            })

        }
        this.cardContent()
        
    }
    cardContent = () => {
        var array1 = this.state.resultList;
        var array2 = [];
        var i = 0
        for (const element of array1) {
            if (i > 3) {
                this.setState({
                    cardList:array2
                })
                break;
            }
            array2.push(array1[i]);
            i=i+1;
        }
        
    }



    render() {
        return (
            <div>
                {
                this.state.resultList && this.state.resultList.length>4?
                <div>
                <h4 style={{ lineHeight: "150px" ,textAlign:"left"}}>为您推荐：</h4>
                <Row gutter={[48, 48]} style={{ position: "relative", paddingBottom: 100 }}>
                    
                        {this.state.resultList.map((item,index)=>{
                            if(index<4){
                            return(
                                <Col span={6}>
                            <a href={item.href}>
                                <Card
                                    hoverable="true"
                                    style={{ width: 250 }}
                                    cover={
                                        <img
                                            alt="example"
                                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    
    
                                        />
                                    }
                                >
                                    <Meta
                                        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                        title={<p dangerouslySetInnerHTML={{ __html: item.title }} />}
                                        description={item.key_word}
    
                                    />
                                </Card>
    
    
                            </a>
    
                        </Col>
                            )
                        }
                        })
                        

                    }
                    
                </Row>
                </ div>
                :
                <div style={{
                    width:300,
                    height:300,
                    paddingTop:50,
                    textAlign:"center"
                }}><p>暂无推荐</p></div>
    }









            </div>

        );
    }
}

export default ResultCard;