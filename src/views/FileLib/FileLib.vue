<script setup>
import { UploadOutlined, InboxOutlined, DeleteOutlined, DownloadOutlined } from '@ant-design/icons-vue';
import { reactive, ref, toRefs } from 'vue';
import { message } from 'ant-design-vue'

const fileState = reactive({
  fileList: [
    {
      "id": "30ba8002-bdfe-4279-9335-c89ddf7c0133",
      "name": "测试",
      "url": "http://localhost:3001/upload/24a0e285118107f8c80652209.JPG"
    },
    {
      "id": "30ba8002-bdfe-4279-9335-c89ddf7c0133",
      "name": "测试",
      "url": "http://localhost:3001/upload/24a0e285118107f8c80652209.JPG"
    },
  ]
})
const { fileList } = toRefs(fileState)

const fileFn = {
  delete(id){
    console.log('delete', id)
  },
  download(url){
    console.log('download', url)
  }
}


const uploadState = reactive({
  name: '',
  uploadList: [],
  url: '',
  visible: false,
})
const { visible, name, uploadList, url } = toRefs(uploadState)

const uploadFn = {
  handleUpload() {
    if (url.value === '') {
      message.error('请上传文件');
      return
    }
    if (name.value === '') {
      message.error('请输入文件名');
      return
    }

    visible.value = false;
  },

  handleChange(info) {
    const status = info.file.status;
    console.log(status)
    if (status === 'done') {
      message.success(`${info.file.name} 文件上传成功`);
      url.value = info.fileList[0].response.data.url;
    }
    if (status === 'error') {
      message.error(`${info.file.name} 文件上传失败`);
    }
    if (status === 'removed') {
      message.info(`${info.file.name} 文件移除成功`);
      url.value = '';
    }
  }
}

</script>

<template>
  <div class="file-lib">
    <a-modal v-model:visible="visible" title="上传文件">
      <template #footer>
        <a-button key="back" @click="visible = false">取消</a-button>
        <a-button key="submit" type="primary" @click="uploadFn.handleUpload">导入</a-button>
      </template>

      <a-upload-dragger v-model:fileList="uploadList" name="file" :maxCount="1"
        action="http://localhost:3001/api/file/upload" @change="uploadFn.handleChange">
        <p class="ant-upload-drag-icon">
          <inbox-outlined></inbox-outlined>
        </p>
        <p class="ant-upload-text">点击或拖拽文件到当前位置上传</p>
      </a-upload-dragger>
      <a-input v-model:value="name" style="margin-top:20px" placeholder="输入文件标题"></a-input>
    </a-modal>
    <div class="file-lib-panel">
      <a-button type="primary" @click="visible = true">
        <template #icon>
          <UploadOutlined />
        </template>
        上传
      </a-button>
      <a-empty v-if="fileList.length === 0"></a-empty>
      <a-row v-else class="file-list" :gutter="[8, 8]">
        <a-col :span="6" v-for="file in fileList">
          <a-card hoverable style="margin: 10px;margin-left: 0;">
            <template #cover>
              <img alt="example" height="260" style="object-fit:cover" :src="file.url" />
            </template>
            <template #actions>
              <DownloadOutlined key="download" @click="fileFn.download(file.url)" />
              <DeleteOutlined key="delete" @click="fileFn.delete(file.id)" />
            </template>
            <a-card-meta :title="file.name">
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style lang='less' scoped>
.file-lib {
  padding: 24px;

  .file-lib-panel {
    background: #fff;
    padding: 24px;
  }
}
</style>