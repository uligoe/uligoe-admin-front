<script setup>
import { UploadOutlined, InboxOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';

const visible = ref(false);

const handleOk = e => {
  console.log(e);
  visible.value = false;
};

const handleDrop = (e) => {
  console.log(e);
};

const handleChange = (info) => {
  const status = info.file.status;
  if (status !== 'uploading') {
    console.log(info.file, info.fileList);
  }
  if (status === 'done') {
    message.success(`${info.file.name} file uploaded successfully.`);
  } else if (status === 'error') {
    message.error(`${info.file.name} file upload failed.`);
  }
};

</script>

<template>
  <div class="file-lib">
    <div class="file-lib-panel">
      <a-button type="primary" @click="visible = true">
        <template #icon>
          <UploadOutlined />
        </template>
        上传
      </a-button>
      <a-empty></a-empty>
      <a-modal v-model:visible="visible" title="上传文件">
        <template #footer>
          <a-button key="back" @click="visible = false">取消</a-button>
          <a-button key="submit" type="primary" @click="handleOk">导入</a-button>
        </template>
        <a-upload-dragger v-model:fileList="fileList" name="file" :multiple="true"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76" @change="handleChange" @drop="handleDrop">
          <p class="ant-upload-drag-icon">
            <inbox-outlined></inbox-outlined>
          </p>
          <p class="ant-upload-text">点击或拖拽文件到当前位置上传</p>
        </a-upload-dragger>
      </a-modal>
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