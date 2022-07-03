<script setup>
const props = defineProps({
    categoryList: {
        type: Array,
        required: true
    }
})

const emits = defineEmits(['edit', 'delete'])

</script>

<template>
    <a-list class="category-list" item-layout="horizontal" :data-source="props.categoryList">
        <template #renderItem="{ item }">
            <a-list-item>
                <template #actions>
                    <a key="list-loadmore-edit" @click="$emit('edit', item)">修改</a>
                    <a key="list-loadmore-more" @click="$emit('delete')">删除</a>
                </template>
                <a-list-item-meta :description="item.description">
                    <template #title>
                        <a>{{ item.title }}</a>
                        <span style="margin-left: 20px;color: grey">{{item.time}}</span>
                    </template>
                    <template #avatar>
                        <a-image :width="55" :src="item.bgImg" />
                    </template>
                </a-list-item-meta>

            </a-list-item>
        </template>
    </a-list>
</template>

<style scoped lang="less">
</style>
