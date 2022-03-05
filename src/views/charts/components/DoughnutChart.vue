<template>
  <Chart :options="options" />
</template>

<script setup>
import Chart from '@/components/Chart'
import doughnutChartCreator from './charts/doughnutChart.js'
import { computed, toRefs, defineProps } from 'vue'

const props = defineProps({
  boxOfficeData: Array
})

const { boxOfficeData } = toRefs(props)

const options = computed(() => {
  const data = populateMovieData(boxOfficeData.value)
  return doughnutChartCreator(data)
})

function populateMovieData(rawData) {
  const data = []
  rawData.forEach((movie) => {
    data.push({
      name: movie?.name,
      value: movie?.boxOffice
    })
  })
  return data
}
</script>

<style scoped></style>
