<template>
  <div>
    <pan-thumb
      :image="imgUrl"
      :height="'100px'"
      :width="'100px'"
      :hoverable="false"
      ><div>Hi</div>
      {{ $store.getters.userInfo.title }}
    </pan-thumb>
  </div>
</template>

<script setup>
import PanThumb from '@/components/PanThumb'
import { ref } from 'vue'
import cat from './../../../assets/cat.png'

const imgUrl = ref(cat)
</script>

<style lang="scss" scoped></style>
