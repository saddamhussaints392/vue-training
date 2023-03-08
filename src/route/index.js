import { createRouter, createWebHistory } from "vue-router";
// import { useAuthStore } from '../store/auth'
import routes from "./routes";
const router = createRouter({
    routes,
    history: createWebHistory(),
})
const isAuth = JSON.parse(localStorage.getItem('user'))


router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (!requiresAuth && !isAuth === "") {
        next('/sign-in')
    } else {
        next()
    }
})
export default router;