<template>
  <div class="nav-header">
    <el-icon
      color="#f7f7f7"
      class="fold-menu"
      :class="isFold ? '' : 'unfold'"
      @click="handleFoldClick"
      ><Expand
    /></el-icon>

    <div class="content">
      <div>面包屑</div>
      <user-info />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import UserInfo from './user-info.vue'
// import HyBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'
// import { useStore } from '@/store'
// import { useRoute } from 'vue-router'
import { Expand } from '@element-plus/icons-vue'
// import { pathMapBreadcrumbs } from '@/utils/map-menus'

const emit = defineEmits(['foldChange'])
const isFold = ref(false)
const handleFoldClick = () => {
  isFold.value = !isFold.value
  emit('foldChange', isFold.value)
}

// 面包屑的数据: [{name: , path: }]
// const store = useStore()
// const breadcrumbs = computed(() => {
//   const userMenus = store.state.login.userMenus
//   const route = useRoute()
//   const currentPath = route.path
//   return pathMapBreadcrumbs(userMenus, currentPath)
// })
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
  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;
  }
}
</style>
