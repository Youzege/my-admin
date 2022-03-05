export default function barChartOptions() {
  return {
    legend: {},
    tooltip: {},
    dataset: {
      source: [
        ['产品', '2018', '2019', '2020', '2021', '2022'],
        ['vue', 41.1, 30.4, 65.1, 53.3, 21.1],
        ['react', 24.1, 67.2, 79.5, 86.4, 60.1],
        ['node', 86.5, 92.1, 85.7, 83.1, 36.4],
        ['html', 81.5, 72.1, 81.7, 93.1, 45.3]
      ]
    },
    xAxis: [
      { type: 'category', gridIndex: 0 },
      { type: 'category', gridIndex: 1 }
    ],
    yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
    grid: [{ bottom: '55%' }, { top: '55%' }],
    series: [
      // These series are in the first grid.
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      { type: 'bar', seriesLayoutBy: 'row' },
      // These series are in the second grid.
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 },
      { type: 'bar', xAxisIndex: 1, yAxisIndex: 1 }
    ]
  }
}
