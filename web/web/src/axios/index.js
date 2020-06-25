
import axios from 'axios';
import { get, post } from './tools';
import * as config from './config';
import "../mock/api.js"



//搜索功能
export const getUserip = () => get({ url: '/utils/getip' });
export const checkUserip = data =>
    post({
        url: '/ip/check',
        data: {
            data
        },
    })
    
export const searchCityKey = data =>
    post({
        url: '/test/getcity',
        data: {
            data
        },
    })
export const searchWord = data =>
    post({
        url: '/test/search',
        data: {
            data
        },
    })
//结果页展示
export const getPriceResult = data =>
    post({
        url: '/test/sortprice',
        data: {
            data
        },
    })

export const postIpAgain = data =>
    post({
        url: '/ip/donevip',
        data: {
            data
        },
    })

