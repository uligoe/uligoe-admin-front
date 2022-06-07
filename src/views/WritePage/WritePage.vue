<script setup>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { ref } from "vue";

const text = ref("");
</script>

<template>
    <div class="write-page">
        <div class="top">
            <h1 class="title">新文章</h1>
            <a-button type="primary" class="upload-btn">上传</a-button>
        </div>
        <div class="content">
            <a-input placeholder="输入文章标题"></a-input>
            <md-editor v-model="text" class="mt"> </md-editor>
        </div>
    </div>
</template>

<style lang='less' scoped>
.write-page {
    .top {
        height: 60px;
        line-height: 50px;
        display: flex;
        justify-content: space-between;
        background: #fff;
        padding: 0 20px;
        position: sticky;
        top: 0px;
        z-index: 99;
        border-bottom: 1px solid #f5f5f5;

        .title {
            font-size: 24px;
            color: rgba(0, 0, 0, 0.85);
        }
        .upload-btn {
            margin-top: 10px;
        }
    }

    .content{
        padding: 24px;
    }

    .mt {
        margin-top: 18px;
    }
}
</style>