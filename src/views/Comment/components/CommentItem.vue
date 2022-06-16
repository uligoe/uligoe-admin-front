<script setup>
import { SearchOutlined, UndoOutlined } from "@ant-design/icons-vue";
import {ref} from 'vue'
const data = ref([])

const loading = ref(false)

const columns = [
    {
        title: "昵称",
        dataIndex: "name",
        key: "name",
    },
    {
        title: "内容",
        dataIndex: "content",
        key: "content",
        width: "400px"
    },
    {
        title: "状态",
        dataIndex: "status",
        key: "status",
    },
    {
        title: "评论文章",
        dataIndex: "target",
        key: "target",
        width: "200px",
    },
    {
        title: "日期",
        dataIndex: "date",
        key: "date",
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
    <div class="comment-item">
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
        <div class="comment-table">
            <a-table :row-selection="rowSelection" :columns="columns" :data-source="data" :loading="loading">
                <template #bodyCell="{ column }">
                    <template v-if="column.key === 'operation'">
                        <a>回复</a>
                        <a-divider type="vertical" />
                        <a>删除</a>
                    </template>
                </template>
            </a-table>
        </div>
    </div>
</template>

<style lang="less" scoped>
.comment-item {
    margin-bottom: 24px;

    .comment-table {
        padding: 0 10px;
        margin-top: 16px;
    }
}
</style>