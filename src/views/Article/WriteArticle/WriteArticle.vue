<script setup>
import MdEditor from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { message } from 'ant-design-vue';
import { reactive, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const writeState = reactive({
    title: '',
    content: '',
})
const { title, content } = toRefs(writeState);

const uploadState = reactive({
    visible: false,
    uploading: false,
    status: '公开',
    belongTo: '',
    selectedTag: [],
    layout: {
        labelCol: { span: 3 },
        wrapperCol: { span: 21 },
    }
})
const { visible, uploading, status, belongTo, selectedTag } = toRefs(uploadState);

const uploadFn = {
    handleOk() {
        uploading.value = true;
        setTimeout(() => {
            uploading.value = false;
            visible.value = false;
            router.push('/articles')
        }, 2000)
    },

    handleCancel() {
        visible.value = false;
    },

    showUploadDialog() {
        if (title.value === '') {
            message.error('请先填写标题')
            return
        }
        if (content.value === '') {
            message.error('请填写文章内容')
            return
        }
        visible.value = true
    },

    onFinish(values) {
        console.log('Success:', values);
    },

    onFinishFailed(errorInfo) {
        console.log('Failed:', errorInfo);
    },
}

const tagList = ref([
    {
        value: 'vue'
    },
    {
        value: 'js'
    },
])

const categoryList = ref([
    {       
        id: 'xxxxx',
        title: '前端'
    }
])

const onUploadImg = async (files, callback) => {
    const res = await Promise.all(
        files.map((file) => {
            return new Promise((rev, rej) => {
                const form = new FormData();
                form.append('file', file);

                axios
                    .post('/api/img/upload', form, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
                    .then((res) => rev(res))
                    .catch((error) => rej(error));
            });
        })
    );

    callback(res.map((item) => item.data.url));
};


</script>

<template>
    <a-modal v-model:visible="visible" title="上传文章">
        <template #footer>
            <a-button key="back" @click="uploadFn.handleCancel" :disabled="uploading">取消</a-button>
            <a-button key="submit" type="primary" :loading="uploading" @click="uploadFn.handleOk">上传</a-button>
        </template>
        <a-form :model="uploadState" v-bind="uploadState.layout" name="upload-info" @finish="uploadFn.onFinish"
            @finishFailed="uploadFn.onFinishFailed" autocomplete="off">
            <a-form-item name="status" label="状态" :rules="[{ required: true, message: '请选择发布状态' }]">
                <a-input v-model:value="status" />
            </a-form-item>

            <a-form-item name="belongTo" label="分类" :rules="[{ required: true, message: '请选择分类' }]">
                <a-select ref="select" v-model:value="belongTo">
                    <a-select-option :value="categoryItem.id" v-for="categoryItem in categoryList" :key="categoryItem.id">{{categoryItem.title}}</a-select-option>
                </a-select>
            </a-form-item>

            <a-form-item name="tags" label="标签">
                <!-- <a-input :value="props. /> -->
                <a-select v-model:value="selectedTag" mode="multiple" placeholder="选择标签"
                    :options="tagList"
                    ></a-select>
            </a-form-item>
        </a-form>
    </a-modal>
    <div class="write-page">
        <div class="top">
            <h1 class="title">新文章</h1>
            <a-button type="primary" class="upload-btn" @click="uploadFn.showUploadDialog">上传</a-button>
        </div>
        <div class="content">
            <a-input placeholder="输入文章标题" v-model:value="title"></a-input>
            <md-editor v-model="content" class="mt" @on-upload-img="onUploadImg"> </md-editor>
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

    .content {
        padding: 24px;
    }

    .mt {
        margin-top: 18px;
    }
}
</style>