<script setup>
import { reactive, toRefs } from 'vue'

// 文章列表数据
const articleState = reactive({
    articleList: [
        {
            "id": "0a341099-37e6-4ff6-9925-e8cee2b85955",
            "status": "公开",
            "title": "uligoe博客的第一篇文章",
            "content_url": "/article/0a341099-37e6-4ff6-9925-e8cee2b85955.md",
            "publish_time": "2022-06-29 10:48:02",
            "visit_count": "22",
            "comment_count": 6,
            "tag_list": [
                {
                    "id": "5814570b-ef49-4836-a0c0-798235b52dce",
                    "title": "vue",
                    "color": "green"
                },
                {
                    "id": "709ce264-34e6-4cd4-99b7-05d0609e265b",
                    "title": "js",
                    "color": "green"
                }
            ],
            "category": "前端"
        },
        {
            "id": "c0db772b-c034-4695-8d24-fa1d55765100",
            "status": "私密",
            "title": "uligoe博客的第二篇文章",
            "content_url": "/article/c0db772b-c034-4695-8d24-fa1d55765100.md",
            "publish_time": "2022-06-29 11:03:14",
            "visit_count": null,
            "comment_count": 2,
            "tag_list": [
                {
                    "id": "5814570b-ef49-4836-a0c0-798235b52dce",
                    "title": "vue",
                    "color": "green"
                },
                {
                    "id": "709ce264-34e6-4cd4-99b7-05d0609e265b",
                    "title": "js",
                    "color": "green"
                }
            ],
            "category": "前端"
        }
    ],
    loading: false,
})
const { articleList, loading } = toRefs(articleState)

// 选中项目的函数们
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
// 表格的列名配置列表
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
        dataIndex: "publish_time",
    },
    {
        title: "操作",
        key: "operation",
        width: "200px",
    },
];
</script>

<template>
    <div class="table">
        <a-table :row-selection="rowSelection" :columns="columns" :data-source="articleList" :loading="loading">
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
                    <a-tag color="blue">
                        {{ record.category }}
                    </a-tag>
                </template>

                <template v-else-if="column.key === 'tags'">
                    <span>
                        <a-tag v-for="(tag, index) in record.tag_list" :key="tag.id" :color="tag.color"
                            :style="index > 2 ? 'margin-top: 5px' : ''">
                            {{ tag.title }}
                        </a-tag>
                    </span>
                </template>

                <template v-else-if="column.key === 'comments'">
                    <a-badge :count="record.comment_count || 0" :overflow-count="99"
                        :number-style="{ backgroundColor: '#f38181' }" :showZero="true" />
                </template>

                <template v-else-if="column.key === 'views'">
                    <a-badge :count="record.visit_count || 0" :overflow-count="9999"
                        :number-style="{ backgroundColor: '#00e0ff' }" :showZero="true" />
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
</template>

<style scoped lang="less">
.table {
    background: #fff;
    padding: 0 18px;
}
</style>
