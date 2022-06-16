<script setup>
import { onMounted, reactive, ref } from "vue";
import {
    SearchOutlined,
    PlusOutlined,
    DeleteOutlined,
    UndoOutlined
} from "@ant-design/icons-vue";

const tagColor = ["purple", "volcano", "geekblue", "green", "grey", "black"];

const columns = [
    {
        title: "标题",
        dataIndex: "title",
        key: "title",
    },
    {
        title: "状态",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "分类",
        dataIndex: "category",
        key: "category",
    },
    {
        title: "标签",
        dataIndex: "tags",
        key: "tags",
        width: "200px",
    },
    {
        title: "评论",
        dataIndex: "comments",
        key: "comments",
    },
    {
        title: "访问",
        dataIndex: "views",
        key: "views",
    },
    {
        title: "发布时间",
        dataIndex: "publishedAt",
    },
    {
        title: "操作",
        key: "operation",
        width: "200px",
    },
];

const dataSource = [
    {
        key: "1",
        title: "uligoe博客的第一篇文章",
        status: "公开",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
    {
        key: "2",
        title: "uligoe博客的第二篇文章",
        status: "私密",
        category: ["前端", "后端"],
        tags: ["vue", "react", "node", "vue", "react", "node"],
        comments: 100,
        views: 2200,
        publishedAt: "2020-01-01 13:10",
    },
];

const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
        );
    },
    getCheckboxProps: (record) => ({}),
};

const loading = ref(true);
const data = ref([]);
const tag = ref('');
const category = ref('');

onMounted(() => {
    setTimeout(() => {
        loading.value = false;
        data.value = dataSource;
    }, 1000);
});
</script>

<template>
    <div class="all-articles">
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
                <a-button style="margin-left: 10px">
                    <template #icon>
                        <DeleteOutlined />
                    </template>
                    回收站
                </a-button>
            </div>
            <div class="right">
                <a-select ref="select" v-model:value="category" style="width: 180px;" placeholder="筛选分类">
                    <a-select-option value="1">前端</a-select-option>
                    <a-select-option value="2">后端</a-select-option>
                </a-select>
                <a-select ref="select" v-model:value="tag" style="width: 180px; margin-left: 10px"
                    placeholder="筛选标签">
                    <a-select-option value="1">VUE</a-select-option>
                    <a-select-option value="2">REACT</a-select-option>
                    <a-select-option value="3">NODE</a-select-option>
                </a-select>

                <a-input placeholder="输入关键词搜索" style="width: 180px; margin-left: 10px"></a-input>
                <a-button style="margin-left: 10px" type="primary">
                    <template #icon>
                        <SearchOutlined />
                    </template>
                    搜索
                </a-button>
                <a-button style="margin-left: 10px">
                    <template #icon>
                        <UndoOutlined />
                    </template>
                    重置
                </a-button>
            </div>
        </div>
        <div class="table">
            <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" :loading="loading">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'title'">
                        <a>
                            {{ record.title }}
                        </a>
                    </template>
                    <template v-if="column.key === 'status'">
                        <span :style="
                            record.status === '公开'
                                ? 'color: #67C23A'
                                : 'color: #E6A23C'
                        ">{{ record.status }}</span>
                    </template>
                    <template v-else-if="column.key === 'category'">
                        <a-tag v-for="category in record.category" :key="category" color="blue">
                            {{ category.toUpperCase() }}
                        </a-tag>
                    </template>
                    <template v-else-if="column.key === 'tags'">
                        <span>
                            <a-tag v-for="(tag, index) in record.tags" :key="tag" :color="tagColor[index]"
                                :style="index > 2 ? 'margin-top: 5px' : ''">
                                {{ tag.toUpperCase() }}
                            </a-tag>
                        </span>
                    </template>
                    <template v-else-if="column.key === 'comments'">
                        <a-badge :count="record.comments" :overflow-count="99"
                            :number-style="{ backgroundColor: '#f38181' }" />
                    </template>
                    <template v-else-if="column.key === 'views'">
                        <a-badge :count="record.views" :overflow-count="9999"
                            :number-style="{ backgroundColor: '#00e0ff' }" />
                    </template>
                    <template v-else-if="column.key === 'operation'">
                        <a>编辑</a>
                        <a-divider type="vertical" />
                        <a>删除</a>
                        <a-divider type="vertical" />
                        <a>设置</a>
                    </template>
                </template>
            </a-table>
        </div>
    </div>
</template>

<style lang='less' scoped>
.all-articles {
    padding: 24px;

    .options {
        background: #fff;
        padding: 18px;
        display: flex;
        justify-content: space-between;
    }

    .table {
        background: #fff;
        padding: 0 18px;
    }
}
</style>