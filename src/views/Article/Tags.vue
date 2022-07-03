<script setup>
import { ref, reactive } from "@vue/reactivity";
import { PlusOutlined, UploadOutlined } from '@ant-design/icons-vue';

// 状态: 添加/修改
const status = ref("add");

// 标签列表
const tags = ref([
    {
        title: "vue",
        id: 1,
        color: "purple",
    },
    {
        title: "react",
        id: 2,
        color: "volcano",
    },
    {
        title: "node",
        id: 3,
        color: "geekblue",
    },
    {
        title: "node",
        id: 4,
        color: "volcano",
    },
    {
        title: "node",
        id: 5,
        color: "geekblue",
    },
    {
        title: "node",
        id: 6,
        color: "green",
    },
    {
        title: "node",
        id: 7,
        color: "geekblue",
    },
    {
        title: "node",
        id: 8,
        color: "volcano",
    },
]);

// 表单数据
const formState = reactive({
    title: "",
    color: "rgb(32, 151, 243)",
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

// 标签按下，编辑标签
const onTagClick = (tag) => {
    formState.title = tag.title;
    formState.color = tag.color;
    status.value = "edit";
};

// 回到添加标签状态
const onAddNewTagClick = () => {
    status.value = "add";
    formState.title = "";
    formState.color = "rgb(32, 151, 243)";
};
</script>

<template>
    <div class="tags">
        <a-row justify="space-around">
            <a-col :span="10">
                <div class="tags-form">
                    <a-card :title="status === 'add' ? '添加标签' : '修改标签'" :bordered="false">
                        <a-form :model="formState" name="basic" @finish="onFinish" @finishFailed="onFinishFailed">
                            <a-form-item label="标签名称" name="title" :rules="[
                                {
                                    required: true,
                                    message: '请填写标签的名称',
                                },
                            ]">
                                <a-input v-model:value="formState.title" />
                            </a-form-item>

                            <a-form-item label="标签颜色" name="color" :rules="[
                                {
                                    required: true,
                                    message: '请选择标签的颜色',
                                },
                            ]">
                                <a-input v-model:value="formState.color">
                                    <template #addonAfter>
                                        <ColorPicker v-model:pureColor="formState.color"></ColorPicker>
                                    </template>
                                </a-input>
                            </a-form-item>

                            <a-form-item>
                                <a-button type="primary" html-type="submit">
                                    <template #icon>
                                        <UploadOutlined />
                                    </template>上传
                                </a-button>
                                <a-button v-if="status !== 'add'" html-type="submit" style="margin-left: 10px"
                                    @click="onAddNewTagClick">
                                    <template #icon>
                                        <PlusOutlined />
                                    </template>新建标签
                                </a-button>
                            </a-form-item>
                        </a-form>
                    </a-card>
                </div>
            </a-col>
            <a-col :span="13">
                <div class="tags-panel">
                    <a-card title="所有标签" :bordered="false">
                        <a-tag v-for="tag in tags" :key="tag" :color="tag.color" @click="onTagClick(tag)"
                            style="cursor: pointer">
                            {{ tag.title }}
                        </a-tag>
                    </a-card>
                </div>
            </a-col>
        </a-row>
    </div>
</template>

<style lang='less' scoped>
.tags {
    padding: 24px;

    .tags-form {
        width: 100%;
        background: #fff;
    }

    .tags-panel {
        width: 100%;
        background: #fff;
    }
}
</style>