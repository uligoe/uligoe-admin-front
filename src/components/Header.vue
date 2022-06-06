<script setup>
import { ref, defineProps, defineEmits } from "vue";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    LinkOutlined,
    BellOutlined,
} from "@ant-design/icons-vue";

const props = defineProps({
    collapsed: {
        type: Boolean,
        default: false,
    },
});

const emits = defineEmits(["update:collapsed"]);

const handleCollapse = () => {
    emits("update:collapsed", !props.collapsed);
};
</script>

<template>
    <div class="header">
        <div class="collapse-btn" @click="handleCollapse">
            <menu-fold-outlined
                v-if="!props.collapsed"
                :style="{ fontSize: '20px' }"
            />
            <menu-unfold-outlined v-else :style="{ fontSize: '20px' }" />
        </div>
        <div class="options-wrapper">
            <a-popover>
                <div class="option">
                    <link-outlined :style="{ fontSize: '16px' }" />
                </div>
                <template #content> 跳转到博客 </template>
            </a-popover>

            <a-popover>
                <div class="option">
                    <bell-outlined :style="{ fontSize: '16px' }" />
                </div>
                <template #content> 查看新信息 </template>
            </a-popover>

            <a-dropdown>
                <div class="option avatar">
                    <img
                        class="avatar-img"
                        src="../assets/imgs/logo.png"
                        alt="avatar"
                    />
                </div>
                <template #overlay>
                    <a-menu>
                        <a-menu-item>
                            <router-link to="/7">个人资料</router-link>
                        </a-menu-item>
                        <a-menu-item>
                            <a href="javascript:;">注销</a>
                        </a-menu-item>
                    </a-menu>
                </template>
            </a-dropdown>
        </div>
    </div>
</template>


<style lang="less" scoped>
.header {
    width: 100%;
    height: 64px;
    display: flex;
    justify-content: space-between;

    .collapse-btn {
        padding-top: 3px;
        width: 64px;
        height: 100%;
        justify-content: center;
        align-items: center;
        background: #fff;
        cursor: pointer;
        text-align: center;
        line-height: 64px;
        &:hover {
            background: #fafafa;
        }
    }

    .options-wrapper {
        height: 64px;
        line-height: 64px;
        display: flex;

        .option {
            padding-top: 3px;
            width: 50px;
            height: 100%;
            justify-content: center;
            align-items: center;
            background: #fff;
            cursor: pointer;
            text-align: center;
            line-height: 64px;
            &:hover {
                background: #fafafa;
            }

            &.avatar {
                width: 64px;
                padding-top: 0;
                .avatar-img {
                    width: 30px;
                    height: 30px;
                    border-radius: 100%;
                }
            }
        }
    }
}
</style>