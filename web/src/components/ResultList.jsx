import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { withRouter } from 'react-router'; // 或者 是
import {
    Layout, List, Avatar,
    Input, Row, Card, Typography,
    Select, Col
} from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


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
for (let i = 0; i < 23; i++) {
    listData.push({
        href: 'https://chongqing.anjuke.com/?pi=PZ-baidu-pc-all-biaoti',
        title: `这是一个标题 ${i}`,
        // avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description:
            '这里是当前房屋的详细地址',
        content:
            '这里是标题写不下的详细信息，比如几室几厅，高低层啊，关键词啊',
    });
}

class ResultList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resultList: [],
        };
    }



    render() {
        console.log("listData", listData)
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
                    dataSource={listData}
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