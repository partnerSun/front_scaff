const Layout = () => import('../views/layout/Layout.vue')
const userAdd = () => import('../views/user/Add.vue')
const userList = () => import('../views/user/List.vue')


export const userRoutes = {

        path: '/user/', 
        component: Layout,
        children: [
            {path: 'add', component: userAdd},
            {path: 'list', component: userList}
        ]


}