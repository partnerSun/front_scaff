import {createWebHashHistory,createRouter} from 'vue-router'


//定义懒加载路由
const Login = () => import('../views/Login.vue');

// 2. 定义一些路由
const routes = [
    { path: '/login', component: Login },
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
