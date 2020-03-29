import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; // 或者 是
import {
    Layout, List, Avatar,
    Input, Row, Card, Typography,
    Select, Col
} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import { searchWord, searchCityKey } from '../axios/index'

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
        };
    }

    componentWillMount() {
        searchWord().then(res => {
            // console.log("resultList",res.data);
            // var resultList = JSON.stringify(res.data);
            // console.log("resultLis2222222t",resultList);
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
                resultList: arr2
            })
        })


    }



    render() {
        console.log("listData", listData)
        console.log("this.state.resultList", this.state.resultList)
        return (
            <div>
                <List
                    itemLayout="vertical"
                    size="large"
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 8,
                    }}
                    dataSource={this.state.resultList}
                    footer={
                        <div>
                            <b>ant design</b> footer part
                        </div>
                    }
                    renderItem={item => (
                        <List.Item
                            key={item.title}
                            actions={[
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]}
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
                                title={<a href={item.href}>{item.title}</a>}
                                description={item.description}
                            />
                            {item.content}
                        </List.Item>
                    )}
                />,

            </div>

        );
    }
}

export default ResultList;