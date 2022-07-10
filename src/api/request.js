import axios from 'axios';
import nProgress from 'nprogress';
import { useUser } from '../store/useUser';
import { useRouter } from 'vue-router'

const ConfigBaseURL = 'http://localhost:3001/api';

let userStore = null;
let router = null;

export const request = axios.create({
    timeout: 10000, // 请求超时时间
    baseURL: ConfigBaseURL,
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

// 添加请求拦截器
request.interceptors.request.use(config => {
    if (!userStore) {
        userStore = useUser();
    }
    nProgress.start();
    config.headers.Authorization = userStore.token;
    return config;
})

// 添加响应拦截器
request.interceptors.response.use(response => {
    nProgress.done();
    return response.data;
}, error => {
    nProgress.done();
    console.log(error);

    if (error.response.status === 0) {
        return Promise.reject('服务器无法连接');
    }
    if (error.response.status >= 500) {
        return Promise.reject('服务器错误');
    }
    if (error.response.status === 401) {
        if (!router) {
            router = useRouter();
        }
        router.push('/login')
        message.error('验证已过期,请重新登录。')
    }
})