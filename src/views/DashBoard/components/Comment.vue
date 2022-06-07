<script setup>
import { ref } from "vue";

const data = ref([
    {
        title: "Comment Title 1",
        description: "Comment Description 1",
    },
    {
        title: "Comment Title 1",
        description: "Comment Description 1",
    },
    {
        title: "Comment Title 2",
        description: "Comment Description 1",
    },
]);
</script>

<template>
    <a-tabs v-model:activeKey="activeKey" style="margin-top: -24px">
        <a-tab-pane key="1" tab="文章评论">
            <a-list item-layout="horizontal" :data-source="data">
                <template #renderItem="{ item }">
                    <a-list-item>
                        <a-list-item-meta :description="item.description">
                            <template #title>
                                <a href="https://www.antdv.com/">{{
                                    item.title
                                }}</a>
                            </template>
                            <template #avatar>
                                <a-avatar
                                    src="https://joeschmoe.io/api/v1/random"
                                />
                            </template>
                        </a-list-item-meta>
                    </a-list-item>
                </template>
            </a-list>
        </a-tab-pane>
        <a-tab-pane key="2" tab="站点评论" force-render></a-tab-pane>
    </a-tabs>
</template>

<style lang='less' scoped>
</style>