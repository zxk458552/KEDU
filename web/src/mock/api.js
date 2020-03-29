
import mockjs from 'mockjs';

// 引入mockjs
const Mock = require('mockjs')
// 使用mockjs模拟数据
export var data = Mock.mock('/api/IndexSearch', (req, res) => { // 当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
    const cityName = [
        {
            key: "chongQing",
            name: "重庆",
    
        },
        {
            key: "chengDu",
            name: "成都",
    
        },
        {
            key: "beiJing",
            name: "北京",
    
        },
        {
            key: "shangHai",
            name: "上海",
    
        },
    ];
    console.log("api.js",cityName)

  return {
    cityName
  }

})
console.log("api.js.data",data)
//export default data;

export var word = Mock.mock('/api/SearchWord', (req, res) => { // 当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  const listData = [];
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



    // const searchWord = '正在进行后台搜索'
    // console.log("api.js",searchWord)

  return {
    listData
  }

})



 