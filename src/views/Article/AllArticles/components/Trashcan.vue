<script setup>
import { DeleteOutlined, UndoOutlined } from "@ant-design/icons-vue";
import { ref, watch } from 'vue';

const emits = defineEmits(['update:showDialog']);

const props = defineProps({
    showDialog: {
        type: Boolean,
        default: false,
        required: true
    }
})

const visible = ref(false);

watch(visible, (newVal) => {
    emits('update:showDialog', newVal);
})

watch(() => props.showDialog, (newVal) => {
    visible.value = newVal;
})

</script>

<template>
    <a-modal v-model:visible="visible" title="回收站" :bodyStyle="{ maxHeight: '400px', overflow: 'auto' }" :footer="null">
        <a-list size="large" :data-source="[{ title: 'uligoe的删除文章1' }, { title: 'uligoe的删除文章2' }]">
            <template #renderItem="{ item }">
                <a-list-item>
                    <div style="max-width:360px">
                        {{ item.title }}
                    </div>
                    <div>
                        <a>
                            <a-tooltip>
                                <template #title>完全删除</template>
                                <DeleteOutlined></DeleteOutlined>
                            </a-tooltip>

                        </a>
                        <a-divider type="vertical" />
                        <a>
                            <a-tooltip>
                                <template #title>恢复</template>
                                <UndoOutlined></UndoOutlined>
                            </a-tooltip>
                        </a>
                    </div>
                </a-list-item>
            </template>
        </a-list>
    </a-modal>
</template>

<style scoped lang="less">
</style>
