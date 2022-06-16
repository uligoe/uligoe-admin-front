<script setup>
import { ref } from 'vue'
import CommentItem from './components/CommentItem.vue'
const activeKey = ref('1');
</script>

<template>
  <div class="comment">
    <a-tabs v-model:activeKey="activeKey" class="comment-panel">
      <a-tab-pane key="1" tab="文章评论">
        <CommentItem />
      </a-tab-pane>
      <a-tab-pane key="2" tab="站点评论">
        <CommentItem />
      </a-tab-pane>
    </a-tabs>

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