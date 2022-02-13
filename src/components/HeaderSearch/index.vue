<template>
  <div :class="{ show: isShow }" class="header-search">
    <svg-icon
      class-name="search-icon"
      icon="search"
      @click.stop="onShowClick"
    />
    <el-select
      ref="headerSearchSelectRef"
      class="header-search-select"
      v-model="search"
      filterable
      default-first-option
      remote
      placeholder="querySearch"
      :remote-method="querySearch"
      @change="onSelectChange"
    >
      <el-option></el-option>
    </el-select>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { filterRoutes, generateMenus } from '@/utils/route'
import { useRouter } from 'vue-router'

// 控制search 显示
const isShow = ref(false)
// el-select 实例
const headerSearchSelectRef = ref(null)
const onShowClick = () => {
  isShow.value = !isShow.value
  headerSearchSelectRef.value.focus()
}

// search 相关
const search = ref('')
// 搜索方法
const querySearch = () => {
  console.log('querySearch')
}
// 选中回调
const onSelectChange = () => {
  console.log('onSelectChange')
}

// 检索数据源
const router = useRouter()
const searchPool = computed(() => {
  const fRoutes = filterRoutes(router.getRoutes())
  console.log(generateMenus(fRoutes))
  return generateMenus(fRoutes)
})
console.log(searchPool)
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    ::v-deep .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
