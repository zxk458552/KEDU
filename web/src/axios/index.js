
import axios from 'axios';
import { get, post } from './tools';
import * as config from './config';
import "../mock/api.js"

// export const SearchCityName = () => {

//     axios.get('/api/IndexSearch')
//     .then(res => res.data)
//     .catch(err => console.log(err));
//     // .then(res => { // get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
//     //     //var tableData = res.data.tableData
//     //     console.log(res) // 在console中看到数据
//     // }).catch(err => {
//     //     alert('wrong')
//     // })

// }


//搜索功能
//export const getCityName = () => get({ url: '/api/IndexSearch' });
export const searchCityKey = data =>
    post({
        url: '/api/SearchCityKey',
        data: {
            data
        },
    }).then(res => console.log("SearchCityKey", res))
export const searchWord = data =>
    post({
        url: '/test',
        data: {
            data
        },
    })
    //  .then(res => console.log("searchWord!!!!!", res))

//结果页展示
export const tabChange = key =>
    post({
        url: '/api/tabChange',
        data: key
    }).then(res => console.log("tabChange", res))

export const getDefaultResult = () => get({ url: '/api/IndexSearch' });

export const getPriceResult = () => get({ url: '/api/IndexSearch' });

export const getTimeResult = () => get({ url: '/api/IndexSearch' });


// export const test = data =>
//     post({
//         url: '/test',
//         data: {
//             data
//         },
//     })

// handelTest = (key) =>{
//     test(key).then(res=>{
//         console.log(res)
//         var value = res;
//         this.setState({
//             testValue:value
//         })
//     })

// }





export const getBbcNews = () => get({ url: config.NEWS_BBC });

export const npmDependencies = () =>
    axios
        .get('./npm.json')
        .then(res => res.data)
        .catch(err => console.log(err));

export const weibo = () =>
    axios
        .get('./weibo.json')
        .then(res => res.data)
        .catch(err => console.log(err));

export const gitOauthLogin = () =>
    get({
        url: `${
            config.GIT_OAUTH
            }/authorize?client_id=792cdcd244e98dcd2dee&redirect_uri=http://localhost:3006/&scope=user&state=reactAdmin`,
    });
export const gitOauthToken = code =>
    post({
        url: `https://cors-anywhere.herokuapp.com/${config.GIT_OAUTH}/access_token`,
        data: {
            client_id: '792cdcd244e98dcd2dee',
            client_secret: '81c4ff9df390d482b7c8b214a55cf24bf1f53059',
            redirect_uri: 'http://localhost:3006/',
            state: 'reactAdmin',
            code,
        },
    });
// {headers: {Accept: 'application/json'}}
export const gitOauthInfo = access_token =>
    get({ url: `${config.GIT_USER}access_token=${access_token}` });

// easy-mock数据交互
// 管理员权限获取
export const admin = () => get({ url: config.MOCK_AUTH_ADMIN });
// 访问权限获取
export const guest = () => get({ url: config.MOCK_AUTH_VISITOR });
