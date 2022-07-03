<script setup>
import DataCard from "./components/DataCard.vue";
import LineChart from "./components/LineChart.vue";
import Comment from "./components/Comment.vue";
import {
    PlusOutlined,
    UnorderedListOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons-vue";
import { toRefs, reactive } from 'vue'

// 仪表盘数据
const dataState = reactive({
    visitCountList: [
        {
            date: "05-31",
            count: "120",
        },
        {
            date: "06-01",
            count: "132",
        },
        {
            date: "06-02",
            count: "101",
        },
        {
            date: "06-03",
            count: "134",
        },
        {
            date: "06-04",
            count: "90",
        },
        {
            date: "06-05",
            count: "230",
        },
        {
            date: "06-06",
            count: "210",
        },
    ], // 访问量列表
    articleCount: 10, // 文章总数
    commentCount: 100, // 评论总数
    visitCount: 1000 // 访问总数
})
const { visitCountList, articleCount, commentCount, visitCount } = toRefs(dataState)

</script>

<template>
    <div class="dash-board">
        <a-row justify="space-around" class="data-cards-panel">
            <a-col :span="5">
                <DataCard :title="'文章'" :number="articleCount" class="data-card">
                    <a-popover>
                        <router-link to="/write">
                            <plus-outlined class="cursor-pointer" :style="{ color: '#1890ff' }"></plus-outlined>
                        </router-link>
                        <template #content> 写文章 </template>
                    </a-popover>
                </DataCard>
            </a-col>
            <a-col :span="5">
                <DataCard :title="'评论'" :number="commentCount" :color="'red'" class="data-card">
                    <a-popover>
                        <router-link to="/comment">
                            <unordered-list-outlined class="cursor-pointer" :style="{ color: '#1890ff' }">
                            </unordered-list-outlined>
                        </router-link>
                        <template #content> 查看评论 </template>
                    </a-popover>
                </DataCard>
            </a-col>
            <a-col :span="5">
                <DataCard :title="'建站天数'" :number="10" :color="'yellow'" class="data-card">
                    <a-popover>
                        <info-circle-outlined class="cursor-pointer" :style="{ color: '#00000080' }">
                        </info-circle-outlined>
                        <template #content>
                            建站时间: {{ "2022-06-06" }}
                        </template>
                    </a-popover>
                </DataCard>
            </a-col>
            <a-col :span="5">
                <DataCard :title="'阅读量'" :number="visitCount" :color="'green'" class="data-card">
                    <a-popover>
                        <info-circle-outlined class="cursor-pointer" :style="{ color: '#00000080' }">
                        </info-circle-outlined>
                        <template #content> 访问量: {{ 1000 }} </template>
                    </a-popover>
                </DataCard>
            </a-col>
        </a-row>
        <a-row justify="space-between" class="chart-info-panel">
            <a-col :span="12">
                <div class="chart panel">
                    <h1 class="title">每日访问量</h1>
                    <div class="content">
                        <LineChart :visitCountList="visitCountList"></LineChart>
                    </div>
                </div>
            </a-col>
            <a-col :span="11">
                <div class="news panel">
                    <h1 class="title">最新评论</h1>
                    <div class="content">
                        <Comment></Comment>
                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<style lang="less" scoped>
.dash-board {
    padding: 24px;

    .data-cards-panel {
        .data-card {
            .cursor-pointer {
                cursor: pointer;
            }
        }
    }

    .chart-info-panel {
        padding: 24px;

        .panel {
            width: 100%;
            height: 350px;
            background: #fff;
            border-radius: 4px;

            .title {
                padding: 16px 18px 0 18px;
                font-size: 16px;
                font-weight: bold;
            }

            .content {
                width: 100%;
                height: 280px;
                padding: 20px;
                padding-bottom: 0;
                overflow: auto;
            }
        }
    }
}
</style>