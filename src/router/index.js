import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import nProgress from 'nprogress'

const router = createRouter({
  history: createWebHashHistory(),  // hash 模式
  //   history: createWebHistory(),  // history 模式
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: defineAsyncComponent(() => import(`../views/DashBoard/DashBoard.vue`)),
      meta: {
        title: '仪表盘',
        breadcrumb: ['仪表盘']
      }
    },
    {
      path: '/about',
      name: 'about',
      component: defineAsyncComponent(() => import(`../views/About/About.vue`)),
      meta: {
        title: '关于',
        breadcrumb: ['设置', '关于']
      },
    },
    {
      path: '/write',
      name: 'write',
      component: defineAsyncComponent(() => import(`../views/WritePage/WritePage.vue`)),
      meta: {
        title: '写文章',
        breadcrumb: ['文章', '写文章']
      },
    },
    {
      path: '/login',
      name: 'login',
      component: defineAsyncComponent(() => import(`../views/User/Login.vue`)),
      meta: {
        title: '登录',
      }
    },
    {
      path: '/',
      redirect: '/dashboard',
    },
  ]
})

// 全局路由守卫
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  if (to.meta.title) {
    document.title = `${to.meta.title}`;
  }
  nProgress.start()
  next()
})

router.afterEach((to, from) => {
  // console.log(to, from)
  nProgress.done()
  console.log('afterEach')
})

export default router