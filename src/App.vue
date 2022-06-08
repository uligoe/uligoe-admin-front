<script setup>
import GlobalLayout from './layout/GlobalLayout.vue';
import {useRoute} from 'vue-router'
import { onMounted } from '@vue/runtime-core';

const route = useRoute()
</script>

<template>
    <GlobalLayout v-if="route.path !== '/login'"></GlobalLayout>
    <router-view v-else></router-view>
</template>

<style lang="less" scoped>
.super{
    border: 1px solid green;
    .sub{
        border: 1px solid red;
    }
}
</style>