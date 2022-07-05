<script setup>
import { reactive, ref, toRefs } from 'vue'
import Table from './components/Table.vue'
import Query from './components/Query.vue';

// tab选项
const activeKey = ref('1');


const commentState = reactive({
  keyword: '',
  pageSize: 10,
  pageNo: 1,
  total: 0,
  commentList: [
    {
      "id": "70e6c77b-5ae2-47af-8276-97e0dbd00d2a",
      "status": "公开",
      "content": "这是一条测试的评论:)",
      "user": "bulv",
      "email": "bulv0620@163.com",
      "article_id": "80e6b77b-5ae2-47af-8276-97e0d1154d2a",
      "publish_time": "2022-06-28 10:10:00",
      "article_title": "这是目标文章的标题",
      "reply_to": "",
      "reply_count": 0
    }
  ],
  loading: false
})
const { keyword, commentList, pageSize, pageNo, total, loading } = toRefs(commentState);

const queryFn = {
  search() {
    console.log('search')
  },

  reset() {
    keyword.value = ''
    // 重新获取
  }
}
</script>

<template>
  <div class="comment ">
    <div class="comment-panel">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="文章评论">
        </a-tab-pane>
        <a-tab-pane key="2" tab="站点评论">
        </a-tab-pane>
      </a-tabs>
      <Query v-model:keyword="keyword" @reset="queryFn.reset" @search="queryFn.search"></Query>
      <Table :commentList="commentList" :loading="loading"></Table> 
    </div>
  </div>
</template>

<style scoped lang="less">
.comment {
  padding: 24px;

  .comment-panel {
    width: 100%;
    background: #fff;
    padding: 0 24px;
  }
}
</style>