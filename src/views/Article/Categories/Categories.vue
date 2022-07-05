<script setup>
import { ref, reactive, toRefs } from "@vue/reactivity";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons-vue";
import CategoryList from "./components/CategoryList.vue";
import SelectFile from "../../../components/SelectFile.vue";

const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 21 },
};

const categoryState = reactive({
    categoryList: [
        {
            title: "VUE",
            bgImg: "https://aliyuncdn.antdv.com/vue.png",
            description: `前端开发是创建WEB页面或APP等前端界面`,
            time: "2020-05-05",
        },
        {
            title: "ANTD",
            bgImg: "https://aliyuncdn.antdv.com/logo.png",
            description: `前端开发是创建WEB页面或APP等前端界面呈现给用户的过程`,
            time: "2020-05-05",
        },
    ],
    title: '',
    bgImg: '',
    description: '',
    status: 'add',
})
const { categoryList, title, bgImg, description, status } = toRefs(categoryState)

const categoryFn = {
    // 编辑分类
    onCategoryEditClick(category) {
        status.value = 'edit';
        title.value = category.title;
        bgImg.value = category.bgImg;
        description.value = category.description;
    },

    // 回到添加状态
    onAddNewCategoryClick() {
        status.value = 'add';
        title.value = '';
        bgImg.value = '';
        description.value = '';
    },

    // 表单验证通过
    onFinish(values) {
        console.log("Success:", values);
        // 上传
    },

    // 表单验证不通过
    onFinishFailed(errorInfo) {
        console.log("Failed:", errorInfo);
    }

}
</script>

<template>
    <div class="category">
        <a-row justify="space-around">
            <a-col :span="10">
                <div class="category-form">
                    <a-card :title="status === 'add' ? '添加分类' : '修改分类'" :bordered="false">
                        <a-form v-bind="layout" :model="categoryState" name="basic" @finish="categoryFn.onFinish"
                            @finishFailed="categoryFn.onFinishFailed">
                            <a-form-item label="名称" name="title" labelAlign="right" :rules="[
                                {
                                    required: true,
                                    message: '请填写标签的名称',
                                },
                            ]">
                                <a-input v-model:value="title" placeholder="请输入标签名称" />
                            </a-form-item>

                            <a-form-item label="封面" name="img" labelAlign="right">
                                <SelectFile v-model:fileName="bgImg"></SelectFile>
                            </a-form-item>

                            <a-form-item label="描述" name="title" labelAlign="right">
                                <a-textarea v-model:value="description" :rows="4" />
                            </a-form-item>

                            <a-form-item>
                                <a-button type="primary" html-type="submit">
                                    <template #icon>
                                        <UploadOutlined />
                                    </template>上传
                                </a-button>

                                <a-button v-if="status !== 'add'" html-type="submit" style="margin-left: 10px"
                                    @click="categoryFn.onAddNewCategoryClick">
                                    <template #icon>
                                        <PlusOutlined />
                                    </template>新建分类
                                </a-button>
                            </a-form-item>
                        </a-form>
                    </a-card>
                </div>
            </a-col>
            <a-col :span="13">
                <div class="category-panel">
                    <a-card title="所有分类" :bordered="false">
                        <CategoryList :categoryList="categoryList" @edit="categoryFn.onCategoryEditClick"></CategoryList>
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
    }
}
</style>