<template>
  <div class="login_panel">
    <h1 class="title"></h1>
    <el-tabs type="border-card" stretch class="tabs">
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <el-icon><Coordinate /></el-icon>
            <span>登录</span>
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="tabs-label">
            <el-icon><EditPen /></el-icon>
            <span>注册</span>
          </span>
        </template>
        <LoginRegister />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Coordinate, EditPen } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginRegister from './login-register.vue'

const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
// 调用子函数响应事件
const handleLoginClick = () => {
  accountRef.value?.loginAction(isKeepPassword.value)
}
</script>

<style scoped>
.login_panel {
  margin-bottom: 150px;
  width: 320px;
}
.title {
  text-align: center;
}

.account-control {
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.login-btn {
  width: 100%;
  margin-top: 10px;
}
</style>
