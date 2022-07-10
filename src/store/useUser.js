import { defineStore } from 'pinia'
import * as api from '../api/adminApi';

export const useUser = defineStore('user', {
    state: () => ({
        userInfo: null,
        token: localStorage.getItem('USER_TOKEN') || ''
    }),

    actions: {
        async login(username, password) {
            const res = await api.reqLogin({ username, password })
            console.log(res)
            if (res.code === 1) {
                this.token = res.data.token;
                localStorage.setItem('USER_TOKEN', res.data.token);
            }
            else {
                return Promise.reject(res.message)
            }
        },

        async getUserInfo() {
            const res = await api.reqGetInfo();
            if (res.code === 1) {
                this.userInfo = res.data;
            }
            else {
                return Promise.reject(res.message)
            }
        },

        async logout() {
            this.token = null;
            localStorage.removeItem('USER_TOKEN');
        }
    }
})