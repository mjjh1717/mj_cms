<template>
  <div class="main">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '70px' : '210px'">
        <NavMenu :collapse="isCollapse" />
      </el-aside>
      <el-container class="page">
        <el-header class="page-header">
          <NavHeader @foldChange="foldChange" />
        </el-header>
        <el-main class="page-main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavMenu from '@/components/nav-menu'
import NavHeader from '@/components/nav-header'

const isCollapse = ref(false)
const foldChange = (isFold: boolean) => {
  isCollapse.value = isFold
}
</script>

<style scoped lang="less">
@import '../../assets/css/index.less';

.main {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.5);
  width: 95%;
  height: 90%;
  box-sizing: border-box;
  padding: 15px;
  border-radius: 20px;
  box-shadow: @boxShadow;
}
.main-content,
.page {
  height: 100%;
}

.el-header {
  display: flex;
  color: #bbb;
  text-align: center;
  align-items: center;
  background-color: rgba(74, 74, 74, 0.9);
  box-shadow: @boxShadow;
  margin-bottom: 10px;
  margin-left: 10px;
}

.el-header {
  height: 48px !important;
}

.el-aside {
  overflow-x: hidden;
  overflow-y: auto;
  line-height: 200px;
  text-align: left;
  cursor: pointer;
  color: #333;
  background-color: rgba(219, 219, 219, 0.9);
  box-shadow: @boxShadow;
  transition: width 0.3s linear;
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none;
  }
}

.el-main {
  color: #333;
  text-align: center;
  background-color: rgba(240, 242, 245, 0.85);
  box-shadow: @boxShadow;
  margin-left: 10px;
}

.el-aside,
.el-header,
.el-main {
  border-radius: 10px;
}
</style>
