import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; // 或者 是
import {
    Layout, List, Avatar,
    Input, Row, Card, Typography,
    Select, Col,Empty 
} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { getCityName, searchWord ,searchCityKey,getPriceResult} from '../axios/index'


/**
 * 结果列表组件
 */


const { Header, Content, Footer } = Layout;
const { Search } = Input;
const { Option } = Select;
const listData = [];
const IconText = ({ icon, text }) => (
    <span>
        {React.createElement(icon, { style: { marginRight: 8 } })}
        {text}
    </span>
);


class ResultList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultList: [],
            totalHits:'',
            totalTime:'',
            tabKey:'1'
        };
    }

    componentWillMount = ()=> {
        let searchCity = localStorage.getItem("searchCityKey");
        let searchText = localStorage.getItem("searchText");
        var tabKey = this.props.tabKey;
        if(searchText){
            searchCityKey(searchCity);
            searchWord(searchText).then(res => {
                var arr = [];
                var arr2 = [];
                var i = 0
                for (const element of res) {
                    if(!res[i+1]){
                        break;
                    }
                    arr.push(res[i]);
                    i = i + 1;
                }
                this.setState({
                    resultList: arr
                })
            })
        if(tabKey === "2"){
            this.sortPrice(searchText);
         }
    }
        
    }
    sortPrice = (searchText) =>{
        getPriceResult(searchText).then(res => {
            var arr = [];
                var i = 0
                for (const element of res) {
                    arr.push(res[i]);
                    i = i + 1;
                }
            this.setState({
                resultList:arr
            })
        })
    }
    totalData = () => {
        localStorage.setItem("totalHits",this.state.totalHits)
        localStorage.setItem("totalTime",this.state.totalTime)
    }
    pageChange = (page) =>{
        let anchorElement = document.getElementById("anchor");
         anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
    }

    listContent = (item) => {
        return (
            <div>
                <p><span>地址：</span><span dangerouslySetInnerHTML={{ __html: item.area }} /></p>
                <p><span>关键词：</span>{item.key_words}</p>
                <h2 style={{
                    color:"red"
                }}>￥{item.price}</h2>
            </div>
        )
    }



    render() {
        return (
            <div>
                <div id="anchor" style={{position:"absolute",top:0}}></div>
                {this.state.resultList?
                <List
                    // style={{minHeight:600}}
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            this.pageChange(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={this.state.resultList}
                    renderItem={item => (
                        <List.Item
                            key={item.id}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                title={<a href={item.url} dangerouslySetInnerHTML={{ __html: item.title }} />}
                                description={item.house_type+"  ·  "+item.orientation+ "  ·  " +item.sizes}
                            />
                            {this.listContent(item)}
                        </List.Item>
                    )}
                />
                :
                <Empty />
                }
            </div>

        );
    }
}

export default ResultList;