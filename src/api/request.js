import axios from 'axios';
const ConfigBaseURL = '/api';
import nProgress from 'nprogress';

export const request = axios.create({
    timeout: 5000, // 请求超时时间
    baseURL: ConfigBaseURL,
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// 添加请求拦截器
request.interceptors.request.use(config => {
    nProgress.start();
    return config;
})

// 添加响应拦截器
request.interceptors.response.use(response => {
    nProgress.done();
    return response.data;
}, error => {
    nProgress.done();
    return Promise.reject(error);
})