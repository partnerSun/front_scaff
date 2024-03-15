import {createWebHashHistory,createRouter} from 'vue-router'


// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
    // { path: '/', component: Index },
    // { path: '/about', component: About },
]

// 3. 创建路由实例 并传递 `routes` 配置
const router = createRouter({
    // 使用 hash 模式。
    history: createWebHashHistory(),
    routes: routes,
  })

// //全局路由守卫
// router.beforeEach((to, from, next) => {
//   console.log("to",to)
//   console.log("from",from)
//   console.log("next",next)
// })
//4.导出
export default router
