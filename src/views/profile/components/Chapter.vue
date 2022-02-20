<template>
  <el-timeline>
    <el-timeline-item
      v-for="item in chapterData"
      :key="item.id"
      :timestamp="item.timestamp"
      placement="top"
    >
      <el-card>
        <h4>{{ item.content }}</h4>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { watchSwitchLang } from '@/utils/i18n'
import { chapter } from '@/api/user'
import { ref } from 'vue'
const chapterData = ref([])

const getChapterData = async () => {
  chapterData.value = await chapter()
  chapterData.value.forEach((item) => {
    if (item.content === '课程导读') {
      item.content = '学习经典的后台框架'
    }
    if (item.content === '课程总结') {
      item.content = '完成基础内容，往后继续添加新功能'
    }
  })
  console.log(chapterData.value)
}
getChapterData()

// 监听语言切换
watchSwitchLang(getChapterData)
</script>

<style lang="scss" scoped></style>
