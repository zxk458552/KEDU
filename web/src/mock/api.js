
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
    const searchWord = '正在进行后台搜索'
    console.log("api.js",searchWord)

  return {
    searchWord
  }

})



 