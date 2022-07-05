<script setup>
const props = defineProps({
    commentList: {
        required: true,
        type: Array
    },
    loading: {
        required: true,
        type: Boolean
    }
})

// 表格选项
const columns = [
    {
        title: "昵称",
        dataIndex: "user",
        key: "user",
    },
    {
        title: "内容",
        dataIndex: "content",
        key: "content",
        width: "300px"
    },
    {
        title: "状态",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "评论文章",
        dataIndex: "article_title",
        key: "article_title",
        width: "200px",
    },
    {
        title: "日期",
        dataIndex: "publish_time",
        key: "publish_time",
    },
    {
        title: "操作",
        key: "operation",
        width: "200px",
    },
]

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
</script>

<template>
    <a-table class="comment-table" :row-selection="rowSelection" :columns="columns" :data-source="props.commentList" :loading="props.loading">
        <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'operation'">
                <a>回复</a>
                <a-divider type="vertical" />
                <a>删除</a>
            </template>


            <template v-if="column.key === 'article_title'">
                <a>{{record.article_title}}</a>
            </template>
        </template>
    </a-table>
</template>

<style lang="less" scoped>
    .comment-table{
        margin: 18px 0;
    }
</style>