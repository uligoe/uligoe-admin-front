<script setup>
import { ref, reactive } from "@vue/reactivity";
import {
    PlusOutlined,
    UploadOutlined,
    FolderAddOutlined,
    EditOutlined,
    CloseOutlined,
} from "@ant-design/icons-vue";

// 状态: 添加/修改
const status = ref("add");

const categories = ref([
    {
        title: "VUE",
        img: "https://aliyuncdn.antdv.com/vue.png",
        discription: `前端开发是创建WEB页面或APP等前端界面呈现给用户的过程，通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互 [1]  。
前端开发从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。 [2] `,
        time: "2020-05-05",
    },
    {
        title: "ANTD",
        img: "https://aliyuncdn.antdv.com/logo.png",
        discription: `前端开发是创建WEB页面或APP等前端界面呈现给用户的过程，通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互 [1]  。
前端开发从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。 [2] `,
        time: "2020-05-05",
    },
]);

// 表单数据
const formState = reactive({
    title: "",
    img: "",
    discription: "",
});

// 表单验证通过
const onFinish = (values) => {
    console.log("Success:", values);
    // 上传
};

// 表单验证不通过
const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

// 分类编辑按钮按下
const onCategoryEditClick = (category) => {
    status.value = "edit";
    formState.title = category.title;
    formState.img = category.img;
    formState.discription = category.discription;
};

const onCategoryDeleteClick = (category) => {};

// 回到添加分类状态
const onAddNewCategoryClick = () => {
    status.value = "add";
    formState.title = "";
    formState.img = "";
    formState.discription = "";
};
</script>

<template>
    <div class="category">
        <a-row justify="space-around">
            <a-col :span="10">
                <div class="category-form">
                    <a-card
                        :title="status === 'add' ? '添加分类' : '修改分类'"
                        :bordered="false"
                    >
                        <a-form
                            :model="formState"
                            name="basic"
                            @finish="onFinish"
                            @finishFailed="onFinishFailed"
                        >
                            <a-form-item
                                label="名称"
                                name="title"
                                labelAlign="right"
                                :rules="[
                                    {
                                        required: true,
                                        message: '请填写标签的名称',
                                    },
                                ]"
                            >
                                <a-input v-model:value="formState.title" />
                            </a-form-item>

                            <a-form-item
                                label="封面"
                                name="img"
                                labelAlign="right"
                            >
                                <a-input
                                    v-model:value="formState.img"
                                    style="width: 447px; margin-left: 10px"
                                >
                                    <template #addonAfter>
                                        <FolderAddOutlined></FolderAddOutlined>
                                    </template>
                                </a-input>
                            </a-form-item>

                            <a-form-item
                                label="描述"
                                name="title"
                                labelAlign="right"
                            >
                                <a-textarea
                                    v-model:value="formState.discription"
                                    :rows="4"
                                    :maxlength="6"
                                    style="width: 447px; margin-left: 10px"
                                />
                            </a-form-item>

                            <a-form-item>
                                <a-button type="primary" html-type="submit">
                                    <template #icon><UploadOutlined /></template
                                    >上传</a-button
                                >
                                <a-button
                                    v-if="status !== 'add'"
                                    html-type="submit"
                                    style="margin-left: 10px"
                                    @click="onAddNewCategoryClick"
                                >
                                    <template #icon><PlusOutlined /></template
                                    >新建分类</a-button
                                >
                            </a-form-item>
                        </a-form>
                    </a-card>
                </div>
            </a-col>
            <a-col :span="13">
                <div class="category-panel">
                    <a-card title="所有分类" :bordered="false">
                        <div class="category-panel-main">
                            <div
                                class="category-item"
                                v-for="category in categories"
                                :key="category"
                            >
                                <a-image height="70px" :src="category.img" />
                                <div class="category-item-text">
                                    <h1>{{ category.title }}</h1>
                                    <span>{{ category.discription }}</span>
                                </div>
                                <div class="operation">
                                    <a-button
                                        type="primary"
                                        @click="onCategoryEditClick(category)"
                                    >
                                        <template #icon
                                            ><EditOutlined /></template
                                        >编辑</a-button
                                    >
                                    <a-button
                                        type="danger"
                                        @click="onCategoryDeleteClick(category)"
                                        style="margin-left: 10px"
                                    >
                                        <template #icon
                                            ><CloseOutlined /></template
                                        >删除</a-button
                                    >
                                </div>
                            </div>
                        </div>
                    </a-card>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<style lang='less' scoped>
.category {
    padding: 24px;

    .category-form {
        width: 100%;
        background: #fff;
    }

    .category-panel {
        width: 100%;
        background: #fff;
        padding-bottom: 26px;

        .category-panel-main {
            max-height: 450px;
            overflow: auto;
            .category-item {
                padding-bottom: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #e8e8e8;
                padding-top: 18px;
                margin-right: 10px;

                .category-item-text {
                    height: 75px;
                    width: 55%;

                    h1 {
                        font-size: 20px;
                        margin-bottom: 10px;
                        margin-top: -2px;
                    }

                    span {
                        display: block;
                        margin-top: -10px;
                        height: 42px;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
            }
        }
    }
}
</style>