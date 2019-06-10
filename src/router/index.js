import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      meta: {
        title: '数据板'
      },
      component: () => import('@/views/board/index')
    },
  ]
})
