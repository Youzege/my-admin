<template>
  <div class="container" ref="container"></div>
</template>

<script setup>
import { onMounted, ref, toRefs, watch, defineProps } from 'vue'
import * as echarts from 'echarts'

const props = defineProps({
  options: {
    type: Object,
    // eslint-disable-next-line vue/require-valid-default-prop
    default: {},
    required: true
  }
})

const { options } = toRefs(props)

const container = ref(null)
const chart = ref(null)

onMounted(() => {
  if (options.value) {
    chart.value = echarts.init(container.value, 'dark')
    chart.value.setOption(options.value)
  }
})

watch(
  options,
  (newOptions) => {
    chart.value.setOption(newOptions)
  },
  { deep: true }
)
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
</style>
