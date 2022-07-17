<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb class="breadColor" separator="/">
      <template v-for="item in props.breadcrumbs" :key="item.name">
        <!-- 此功能可以不加 :to="{ path: item.path }" -->
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { PropType, defineProps } from 'vue'
import { IBreadcrumb } from '../types'

const props = defineProps({
  breadcrumbs: {
    type: Array as PropType<IBreadcrumb[]>,
    default: () => []
  }
}) // 获取props
</script>

<style scoped lang="less">
.breadColor /deep/ .el-breadcrumb__inner {
  color: #f5f5f5;
  padding: 5px;
}

// 有链接的情况下
// .breadColor /deep/.el-breadcrumb__inner.is-link:hover {
//   color: #4a4a4a;
//   background-color: #dedede;
//   border-radius: 5px;
// }
.breadColor /deep/.el-breadcrumb__inner:hover {
  color: #4a4a4a;
  background-color: #dedede;
  border-radius: 5px;
}
</style>
