import { defineStore } from 'pinia';
import * as api from '../api/commentApi'

export const useComment = defineStore('comment', {
    state: () => ({
        commentList: []
    }),

    actions: {
        async getCommentList(params = {}, type = 'article') {
            params.type = type;
            const res = await api.reqGetCommentList(params);
            console.log(res);
            if (res.code === 1) {
                this.commentList = res.data.list;
            }
        }
    }
})