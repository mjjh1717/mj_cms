<template>
  <div class="nav-header">
    <el-icon
      color="#f7f7f7"
      class="fold-menu"
      :class="isFold ? '' : 'unfold'"
      @click="handleFoldClick"
      ><Expand
    /></el-icon>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import { Expand } from '@element-plus/icons-vue'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }
  .unfold {
    transform: rotate(180deg);
  }
  // .content {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   flex: 1;
  //   padding: 0 20px;
  // }
}
</style>
