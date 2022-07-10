<template>
  <div class="login-account">
    <el-form label-width="60px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineExpose, reactive, ref } from 'vue'
// import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
// 工具类
import localCache from '@/utils/cache'
import crypt from '@/utils/crypt'

import { rules } from '../config/account-config'

// const store = useStore()

const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: crypt.decryptByDES(localCache.getCache('password')) ?? ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    // 判断输入框内数据是否符合规范
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPassword) {
        // TODO 将密码缓存在本地缓存中, 不安全需要升级
        localCache.setCache('name', account.name)
        localCache.setCache('password', crypt.encryptByDES(account.password))
      } else {
        localCache.deleteCache('name')
        localCache.deleteCache('password')
      }

      // // 2.开始进行登录验证
      // store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}
// setup语法糖需要对导出的函数进行声明
defineExpose({
  loginAction
})
</script>

<style scoped></style>
