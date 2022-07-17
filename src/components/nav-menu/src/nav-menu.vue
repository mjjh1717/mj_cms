<template>
  <div class="nav-menu">
    <div class="logo">
      <img v-if="!props.collapse" src="~@/assets/img/logo.png" alt="" />
      <img v-else src="~@/assets/img/logo2.png" alt="" />
      <span class="title" v-show="!props.collapse">MJ_CMS</span>
    </div>
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical"
      background-color="rgba(219, 219, 219, 0.1)"
      text-color="4a4a4a"
      :collapse="props.collapse"
      active-text-color="#f7f7f7"
      unique-opened
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <!-- 二级菜单的可以展开的标题 -->
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon">
                <component :is="icon[item.sort - 1]"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <!-- 遍历里面的item -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <span>{{ subitem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
// import { useStore } from '@/store'
import { pathMapToMenu } from '@/utils/map-menus'
import { useRouter, useRoute } from 'vue-router'
import {
  MagicStick,
  DataAnalysis,
  ShoppingBag,
  Coffee
} from '@element-plus/icons-vue'
import localCache from '@/utils/cache'

// const store = useStore()
const userMenus = computed(() => localCache.getCache('userMenus'))
const icon = [MagicStick, DataAnalysis, ShoppingBag, Coffee]
const props = defineProps({ collapse: Boolean }) // 获取props

// router
const router = useRouter()
const route = useRoute()
const currentPath = route.path
// data
const menu = pathMapToMenu(userMenus.value, currentPath)
const defaultValue = ref(menu.id + '')

const handleMenuItemClick = (item: any) => {
  // console.log('pushRouter')
  router.push({
    path: item.url ?? '/not-found'
  })
}
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;
  .logo {
    display: flex;
    height: 38px;
    padding: 12px 2px 8px 2px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      // height: 100%;
      margin: 0 5px;
    }

    .title {
      font-size: 20px;
      font-weight: 700;
      color: #4a4a4a;
    }
  }
  .el-menu {
    border-right: none;
    font-weight: 700;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #4a4a4a !important;
    border-radius: 10px;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}
</style>
