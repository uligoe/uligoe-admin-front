<script setup>
import { reactive, toRefs } from "@vue/reactivity";
import { PlusOutlined, UploadOutlined } from '@ant-design/icons-vue';

const tagState = reactive({
    tagList: [
        {
            title: "vue",
            id: 1,
            color: "purple",
        },
        {
            title: "js",
            id: 2,
            color: "volcano",
        }
    ],
    status: 'add',
    title: '',
    color: 'rgb(32, 151, 243)'
})
const { tagList, status, title, color } = toRefs(tagState)

const tagFn = {
    onAddNewTagClick() {
        status.value = "add";
        title.value = "";
        color.value = "rgb(32, 151, 243)";
    },

    onTagClick(tag) {
        status.value = 'edit';
        title.value = tag.title;
        color.value = tag.color;
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
    <div class="tags">
        <a-row justify="space-around">
            <a-col :span="10">
                <div class="tags-form">
                    <a-card :title="status === 'add' ? '添加标签' : '修改标签'" :bordered="false">
                        <a-form :model="tagState" name="basic" @finish="tagFn.onFinish" @finishFailed="tagFn.onFinishFailed">
                            <a-form-item label="标签名称" name="title" :rules="[
                                {
                                    required: true,
                                    message: '请填写标签的名称',
                                },
                            ]">
                                <a-input v-model:value="title" placeholder="请填写标签名称" />
                            </a-form-item>

                            <a-form-item label="标签颜色" name="color" :rules="[
                                {
                                    required: true,
                                    message: '请选择标签的颜色',
                                },
                            ]">
                                <a-input v-model:value="color">
                                    <template #addonAfter>
                                        <ColorPicker v-model:pureColor="color"></ColorPicker>
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
                                    @click="tagFn.onAddNewTagClick">
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
                        <a-tag v-for="tag in tagList" :key="tag" :color="tag.color" @click="tagFn.onTagClick(tag)"
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