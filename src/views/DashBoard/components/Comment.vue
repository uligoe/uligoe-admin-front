<script setup>
import { onMounted, ref, watch } from "vue";
import { useComment } from "../../../store/useComment";

const activeKey = ref('article')
const loading = ref(false)

const commentStore = useComment();

watch(activeKey, async newVal => {
    loading.value = true;
    await commentStore.getCommentList({ pageSize: 3 }, newVal);
    loading.value = false;
}, { immediate: true })
</script>

<template>
    <a-tabs v-model:activeKey="activeKey" style="margin-top: -24px">
        <a-tab-pane key="article" tab="文章评论"></a-tab-pane>
        <a-tab-pane key="station" tab="站点评论" force-render></a-tab-pane>
    </a-tabs>
    <a-list class="comment-list" :data-source="commentStore.commentList" :loading="loading">
        <template #renderItem="{ item }">
            <a-list-item>
                <a-comment :author="item.user" :avatar="item.avatar">
                    <template #content>
                        <p>
                            {{ item.content }}
                        </p>
                    </template>
                    <template #datetime>
                        <a-tooltip :title="item.publish_time">
                            <span>{{ item.publish_time }}</span>
                        </a-tooltip>
                    </template>
                </a-comment>
            </a-list-item>
        </template>
    </a-list>
</template>

<style lang='less'>
.ant-list-item {
    padding: 10px 0;
}

.ant-comment-inner {
    padding: 0
}
</style>