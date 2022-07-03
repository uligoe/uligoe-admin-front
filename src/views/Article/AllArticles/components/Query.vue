<script setup>
import {
    SearchOutlined,
    PlusOutlined,
    DeleteOutlined,
    UndoOutlined
} from "@ant-design/icons-vue";
import { reactive, toRefs } from "vue";
const queryState = reactive({
    tagList: [
        {
            "id": "5814570b-ef49-4836-a0c0-798235b52dce",
            "title": "vue",
            "color": "green"
        },
        {
            "id": "709ce264-34e6-4cd4-99b7-05d0609e265b",
            "title": "js",
            "color": "green"
        },
        {
            "id": "efaa578a-a8b3-4d7d-961e-7272916bde7a",
            "title": "node",
            "color": "green"
        }
    ],
    categoryList: [
        {
            "id": "826f0e18-7f49-4ac7-8c95-f62eeec7b979",
            "title": "前端",
            "cover_img": "/upload/123123.png",
            "description": ""
        }
    ],
    activeTagId: '',
    activeCategoryId: '',
    keyword: ''
})
// 重置查询条件
const resetQueryOptions = () => {
    queryState.activeCategoryId = '';
    queryState.activeTagId = '';
    queryState.keyword = '';
    // 💥重新查询还没写👇

}
const { tagList, categoryList, activeCategoryId, activeTagId, keyword } = toRefs(queryState);

// const emits = defineEmits(['update:showDialog'])

</script>

<template>
    <div class="options">
        <div class="left">
            <router-link to="/write">
                <a-button type="primary">
                    <template #icon>
                        <PlusOutlined />
                    </template>
                    写文章
                </a-button>
            </router-link>
            <a-button style="margin-left: 10px" @click="$emit('showDialog')">
                <template #icon>
                    <DeleteOutlined />
                </template>
                回收站
            </a-button>
        </div>
        <div class="right">
            <a-select ref="select" v-model:value="activeCategoryId" style="width: 180px;" placeholder="筛选分类">
                <a-select-option :value="categoryItem.id" v-for="categoryItem in categoryList" :key="categoryItem.id">{{
                        categoryItem.title
                }}</a-select-option>
            </a-select>
            <a-select ref="select" v-model:value="activeTagId" style="width: 180px; margin-left: 10px">
                <a-select-option :value="tagItem.id" v-for="tagItem in tagList" :key="tagItem.id">{{ tagItem.title
                }}
                </a-select-option>
            </a-select>

            <a-input v-model:value="keyword" placeholder="输入关键词搜索" style="width: 180px; margin-left: 10px"></a-input>
            <a-button style="margin-left: 10px" type="primary">
                <template #icon>
                    <SearchOutlined />
                </template>
                搜索
            </a-button>
            <a-button style="margin-left: 10px" @click="resetQueryOptions">
                <template #icon>
                    <UndoOutlined />
                </template>
                重置
            </a-button>
        </div>
    </div>
</template>

<style scoped lang="less">
.options {
    background: #fff;
    padding: 18px;
    display: flex;
    justify-content: space-between;
}
</style>
