import layout from '@/layout'

export default {
  path: '/charts',
  component: layout,
  redirect: '/charts/movie',
  name: 'charts',
  meta: { title: 'echart', icon: 'el-icon-data-analysis' },
  children: [
    {
      path: '/charts/movie',
      component: () =>
        import(
          /* webpackChunkName: "article-ranking" */ '@/views/charts/index'
        ),
      meta: {
        title: 'chartMovie',
        icon: 'el-icon-pie-chart'
      }
    }
  ]
}
