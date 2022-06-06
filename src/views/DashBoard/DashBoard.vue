<script setup>
import DataCard from "./components/DataCard.vue";
import {
    PlusOutlined,
    UnorderedListOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons-vue";
import { onMounted, ref } from "vue";
import { createLineChart } from "./echart";
import { _debounce } from "@/utils/common";
import * as echarts from 'echarts'
import emitter from '@/utils/eventbus'
const visitCountList = ref([
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
]);

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

const resizeChart = () => {
    _debounce(() => {
        echarts.init(document.getElementById("chart-content")).resize();
    }, 300)();
};

onMounted(() => {
    createLineChart("chart-content", visitCountList.value);
    emitter.on('resizeChartEmit', resizeChart);
    window.addEventListener("resize", () => {
      resizeChart()
    });
});
</script>

<template>
    <a-row justify="space-around" class="data-cards-panel">
        <a-col :span="5">
            <DataCard :title="'文章'" :number="10" class="data-card">
                <a-popover>
                    <router-link to="/3">
                        <plus-outlined
                            class="cursor-pointer"
                            :style="{ color: '#1890ff' }"
                        ></plus-outlined>
                    </router-link>
                    <template #content> 写文章 </template>
                </a-popover>
            </DataCard>
        </a-col>
        <a-col :span="5">
            <DataCard
                :title="'评论'"
                :number="10"
                :color="'red'"
                class="data-card"
            >
                <a-popover>
                    <router-link to="/6">
                        <unordered-list-outlined
                            class="cursor-pointer"
                            :style="{ color: '#1890ff' }"
                        ></unordered-list-outlined>
                    </router-link>
                    <template #content> 查看评论 </template>
                </a-popover>
            </DataCard>
        </a-col>
        <a-col :span="5">
            <DataCard
                :title="'建站天数'"
                :number="10"
                :color="'yellow'"
                class="data-card"
            >
                <a-popover>
                    <info-circle-outlined
                        class="cursor-pointer"
                        :style="{ color: '#00000080' }"
                    ></info-circle-outlined>
                    <template #content> 建站时间: {{ "2022-06-06" }} </template>
                </a-popover>
            </DataCard>
        </a-col>
        <a-col :span="5">
            <DataCard
                :title="'阅读量'"
                :number="1000"
                :color="'green'"
                class="data-card"
            >
                <a-popover>
                    <info-circle-outlined
                        class="cursor-pointer"
                        :style="{ color: '#00000080' }"
                    ></info-circle-outlined>
                    <template #content> 阅读量: {{ 1000 }} </template>
                </a-popover>
            </DataCard>
        </a-col>
    </a-row>
    <a-row justify="space-between" class="chart-info-panel">
        <a-col :span="12">
            <div class="chart panel">
                <h1 class="title">每日访问量</h1>
                <div class="content" id="chart-content" :ref="chartDom"></div>
            </div>
        </a-col>
        <a-col :span="11">
            <div class="news panel">
                <h1 class="title">最新评论</h1>
                <div class="content">
                    <a-tabs
                        v-model:activeKey="activeKey"
                        style="margin-top: -24px"
                    >
                        <a-tab-pane key="1" tab="文章评论"
                            ><a-list
                                item-layout="horizontal"
                                :data-source="data"
                            >
                                <template #renderItem="{ item }">
                                    <a-list-item>
                                        <a-list-item-meta
                                            :description="item.description"
                                        >
                                            <template #title>
                                                <a
                                                    href="https://www.antdv.com/"
                                                    >{{ item.title }}</a
                                                >
                                            </template>
                                            <template #avatar>
                                                <a-avatar
                                                    src="https://joeschmoe.io/api/v1/random"
                                                />
                                            </template>
                                        </a-list-item-meta>
                                    </a-list-item>
                                </template> </a-list
                        ></a-tab-pane>
                        <a-tab-pane
                            key="2"
                            tab="站点评论"
                            force-render
                        ></a-tab-pane>
                    </a-tabs>
                </div>
            </div>
        </a-col>
    </a-row>
</template>

<style lang="less" scoped>
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
</style>