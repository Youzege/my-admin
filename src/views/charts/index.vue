<template>
  <div class="wrapper">
    <BarChart :boxOfficeData="boxOfficeData" class="chart" />
    <DoughnutChart :boxOfficeData="boxOfficeData" class="chart" />
  </div>
</template>

<script setup>
import BarChart from './components/BarChart.vue'
import DoughnutChart from './components/DoughnutChart.vue'

import { onMounted, ref } from 'vue'

const boxOfficeData = ref([])

const fetchData = async () => {
  const res = await fetch('/movieData.json')
  const data = await res.json()
  boxOfficeData.value = data.sort((a, b) => b.boxOffice - a.boxOffice)
}

onMounted(() => {
  fetchData()
})
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: #333;
  border-radius: 5px;
  .chart {
    width: 50%;
    height: 70%;
  }
}
</style>
