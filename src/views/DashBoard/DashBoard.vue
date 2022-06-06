<script setup>
import DataCard from "./components/DataCard.vue";
import {
    PlusOutlined,
    UnorderedListOutlined,
    InfoCircleOutlined,
} from "@ant-design/icons-vue";
</script>

<template>
    <a-row justify="space-around" class="data-cards-panel">
        <a-col :span="5">
            <DataCard :title="'文章'" :number="10" class="data-card">
                <a-popover>
                    <router-link to="/3">
                      <plus-outlined class="cursor-pointer" :style="{ color: '#1890ff' }"></plus-outlined>
                    </router-link>
                    <template #content> 写文章 </template>
                </a-popover>
            </DataCard>
        </a-col>
        <a-col :span="5">
            <DataCard :title="'评论'" :number="10" :color="'red'" class="data-card" >
                <a-popover>
                    <router-link to="/6">
                      <unordered-list-outlined class="cursor-pointer" :style="{ color: '#1890ff' }"></unordered-list-outlined>
                    </router-link>
                    <template #content> 查看评论 </template>
                </a-popover>
            </DataCard>
        </a-col>
        <a-col :span="5">
            <DataCard :title="'建站天数'" :number="10" :color="'yellow'" class="data-card" >
                <a-popover>
                    <info-circle-outlined class="cursor-pointer" :style="{ color: '#00000080' }"></info-circle-outlined>
                    <template #content> 建站时间: {{ "2022-06-06" }} </template>
                </a-popover>
            </DataCard>
        </a-col>
        <a-col :span="5">
            <DataCard :title="'阅读量'" :number="1000" :color="'green'" class="data-card" >
                <a-popover>
                    <info-circle-outlined class="cursor-pointer" :style="{ color: '#00000080' }"></info-circle-outlined>
                    <template #content> 阅读量: {{ 1000 }} </template>
                </a-popover>
            </DataCard>
        </a-col>
    </a-row>
    <a-row justify="space-around">

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
</style>