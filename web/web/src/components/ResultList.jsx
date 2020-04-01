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
// for (let i = 0; i < 23; i++) {
//     listData.push({
//         href: 'https://chongqing.anjuke.com/?pi=PZ-baidu-pc-all-biaoti',
//         title: `这是一个标题 ${i}`,
//         // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//         description:
//             '这里是当前房屋的详细地址',
//         content:
//             '这里是标题写不下的详细信息，比如几室几厅，高低层啊，关键词啊',
//     });
// }

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
        console.log("查看props获取情况",tabKey)
        if(searchText){
            // if(tabKey === "1"){
            searchCityKey(searchCity);
            searchWord(searchText).then(res => {
                var arr = [];
                var arr2 = [];
                var i = 0
                for (const element of res) {
                    if(!res[i+1]){
                        // this.setState({
                        //     totalHits:res[i].totalHits,
                        //     totalTime:res[i].totalTime,
                        // })
                        console.log("res[i].totalHits",res[i].totalHits)
                        console.log("res[i].totalTime",res[i].totalTime)
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
            // this.totalData();

        // }
        if(tabKey === "2"){
            this.sortPrice(searchText);
         }
    }
        
    }
    sortPrice = (searchText) =>{
        console.log("查看传进sortPrice的keyword",searchText)
        getPriceResult(searchText).then(res => {
            console.log("getPriceResult",res)
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
        console.log("listData", listData)
        
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
                            console.log(11,page);
                            this.pageChange(page);
                        },
                        pageSize: 5,
                    }}
                    dataSource={this.state.resultList}
                    // footer={
                    //     <div style={{position:"fixed",bottom:0}}>
                    //         <b>ant design</b> footer part
                    //     </div>
                    // }
                    // {this.state.resultList.map();}



                    renderItem={item => (
                        <List.Item
                            key={item.id}
                            // actions={[
                            //     <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                            //     <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                            //     <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            // ]}
                            extra={
                                <img
                                    width={272}
                                    alt="logo"
                                    src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                                />
                            }
                        >
                            <List.Item.Meta
                                // avatar={<Avatar src={item.avatar} />}
                                title={<a href={item.url} dangerouslySetInnerHTML={{ __html: item.title }} />}
                                description={item.house_type+"  ·  "+item.orientation+ "  ·  " +item.sizes}
                            />
                            {/* {item.price} */}
                            {this.listContent(item)}
                        </List.Item>
                    )}
                />
                :
                <Empty />
                // <Divider style={{width:1200}}/>
                }
            </div>

        );
    }
}

export default ResultList;