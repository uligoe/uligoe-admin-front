<script setup>
import GlobalLayout from './layout/GlobalLayout.vue';
</script>

<template>
    <GlobalLayout></GlobalLayout>
</template>

<style lang="less" scoped>
.super{
    border: 1px solid green;
    .sub{
        border: 1px solid red;
    }
}
</style>