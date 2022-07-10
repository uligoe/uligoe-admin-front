import {request} from './request';

/**
 * 
 * @param {string} params.pageSize 页大小
 * @param {string} params.pageNo 页码
 * @param {string} params.type 类型 [article | station]
 * @param {string} params.articleId 文章id
 * @param {string} params.keyword 关键词
 * @param {string} params.replyTo 回复评论
 * @returns 
 */
export const reqGetCommentList = (params) => request.post('/comment', params);