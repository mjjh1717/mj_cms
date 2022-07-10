<template>
  <div class="login-register">
    <el-form label-width="80px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password />
      </el-form-item>
      <el-form-item label="确认密码" prop="password">
        <el-input v-model="account.passwordagain" show-password />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { defineExpose, ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'

import { rules } from '../config/account-config'
const store = useStore()

const account = reactive({
  name: '',
  password: '',
  passwordagain: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()

const registerAction = () => {
  formRef.value?.validate((valid) => {
    if (valid && account.password == account.passwordagain) {
      console.log('我被注册啦', account)
      store.dispatch('login/registerAction', { ...account })
    } else {
      console.log('两次密码需要一致')
    }
  })
}
defineExpose({
  registerAction
})
</script>

<style scoped></style>
