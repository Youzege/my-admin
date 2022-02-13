<template>
  <div>
    <transition name="el-fade-in">
      <div class="logo-container">
        <el-avatar :size="logoHeight" shape="circle" :src="imgUrl" />
        <h1 class="logo-title" v-if="$store.getters.sidebarOpened">my-admin</h1>
      </div>
    </transition>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarMenu from './SidebarMenu.vue'
import cat from './../../../assets/cat.png'

// 组件状态驱动动态的CSS值
const logoHeight = 44

const imgUrl = ref(cat)
</script>

<style lang="scss" scoped>
.logo-container {
  height: v-bind(logoHeight) + 'px';
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
