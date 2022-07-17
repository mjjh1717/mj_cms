<template>
  <div class="page-search">
    <MjForm v-bind="props.searchFormConfig" v-model="formData">
      <template #header>
        <h3 class="header">高级检索</h3>
      </template>
      <template #footer>
        <div class="handle-btns">
          <el-button :icon="Refresh">重置</el-button>
          <el-button type="danger" :icon="Search">搜索</el-button>
        </div>
      </template>
    </MjForm>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import MjForm from '@/base-ui/form'
import { Refresh, Search } from '@element-plus/icons-vue'
const props = defineProps({
  searchFormConfig: {
    type: Object,
    reuqired: true
  }
})
const formData = ref({
  id: '',
  name: '',
  password: '',
  sport: '',
  createTime: ''
})
</script>

<style scoped>
.header {
  color: #5b5b5b;
}
.handle-btns {
  text-align: right;
  padding: 0 50px 20px 0;
}
</style>
