<script setup>
import { onMounted, ref } from "@vue/runtime-core";
import {useRouter} from 'vue-router'

const router = useRouter()

const showLogo = ref(false);

onMounted(() => {
    setTimeout(() => {
        showLogo.value = true;
    }, 100);
});


const username = ref('');
const password = ref('');

const login = () => {
    if (username.value === 'admin' && password.value === 'admin') {
        router.push('/dashboard')
    } else {
        alert('登录失败');
    }
};

</script>

<template>
    <div class="bg">
        <div class="login-panel">
            <div class="left">
                <h1 class="logo" :class="{ show: showLogo }">uligoe</h1>
            </div>
            <div class="right">
                <h1 class="login-title">登录</h1>
                <div class="login-form">
                    <div class="form-group">
                        <label for="username" v-show="false">用户名</label>
                        <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="请输入用户名"
                            v-model="username"
                        />
                    </div>
                    <div class="form-group">
                        <label for="password" v-show="false">密码</label>
                        <input
                            type="password"
                            class="form-control"
                            id="password"
                            placeholder="请输入密码"
                            v-model="password"
                        />
                    </div>
                    <div class="form-group">
                        <button type="submit" class="btn btn-primary" @click="login">
                            登录
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang='less' scoped>
.bg {
    width: 100%;
    height: 100vh;
    background: #f5f5f5;

    .login-panel {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 45%;
        transform: translate(-50%, -50%);
        width: 500px;
        height: 260px;
        box-shadow: 0 3px 6px #00000015;

        .left {
            width: 250px;
            height: 260px;
            background: url("./imgs/2.jpg") no-repeat left;
            display: flex;
            justify-content: center;
            align-items: center;

            .logo {
                color: #fff;
                font-size: 56px;
                opacity: 0;
                transition: 1.5s;
                transform: translateY(-30%);

                &.show {
                    color: #2783da;
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }

        .right {
            width: 250px;
            height: 260px;
            background: #fff;

            .login-title {
                font-size: 24px;
                color: #2783da;
                margin: 18px 18px;
            }

            .login-form {
              margin-top: 28px;
                .form-group {
                    margin: 18px 18px;
                    .form-control {
                        width: 100%;
                        height: 35px;
                        border-radius: 5px;
                        border: 1px solid #ccc;
                        padding: 0 10px;
                        font-size: 14px;
                        outline: none;
                        &:focus {
                            border-color: #2783da;
                        }
                    }
                }
                .form-group button {
                    margin-top: 18px;
                    width: 56px;
                    height: 30px;
                    border-radius: 5px;
                    border: none;
                    background: #2783da;
                    color: #fff;
                    font-size: 14px;
                    cursor: pointer;
                    &:hover {
                        background: #2783da;
                    }
                }
            }
        }
    }
}
</style>