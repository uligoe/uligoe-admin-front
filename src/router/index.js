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
      component: () => import(`../views/DashBoard/DashBoard.vue`),
      meta: {
        title: '仪表盘',
        breadcrumb: ['仪表盘']
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(`../views/About/About.vue`),
      meta: {
        title: '关于',
        breadcrumb: ['设置', '关于']
      },
    },
    {
      path: '/write',
      name: 'write',
      component: () => import(`../views/Article/WriteArticle.vue`),
      meta: {
        title: '写文章',
        breadcrumb: ['文章', '写文章']
      },
    },
    {
      path: '/articles',
      name: 'articles',
      component: () => import(`../views/Article/AllArticles.vue`),
      meta: {
        title: '所有文章',
        breadcrumb: ['文章', '所有文章']
      },
    },
    {
      path: '/category',
      name: 'category',
      component: () => import(`../views/Article/Categories.vue`),
      meta: {
        title: '分类目录',
        breadcrumb: ['文章', '分类目录']
      },
    },
    {
      path: '/tags',
      name: 'tags',
      component: () => import(`../views/Article/Tags.vue`),
      meta: {
        title: '所有文章',
        breadcrumb: ['文章', '标签']
      },
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import(`../views/Comment/Comment.vue`),
      meta: {
        title: '评论',
        breadcrumb: ['评论']
      },
    },
    {
      path: '/filelib',
      name: 'filelib',
      component: () => import(`../views/FileLib/FileLib.vue`),
      meta: {
        title: '附件',
        breadcrumb: ['附件']
      },
    },
    {
      path: '/personal',
      name: 'personal',
      component: () => import(`../views/Personal/Personal.vue`),
      meta: {
        title: '个人资料',
        breadcrumb: ['用户', '个人资料']
      },
    },
    {
      path: '/set',
      name: 'set',
      component: () => import(`../views/BlogSet/BlogSet.vue`),
      meta: {
        title: '系统',
        breadcrumb: ['系统', '博客设置']
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(`../views/User/Login.vue`),
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