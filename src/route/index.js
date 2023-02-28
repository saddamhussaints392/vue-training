import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
const router = createRouter({
    routes,
    history: createWebHistory(),
})
const isLoggedIn = localStorage.getItem("user")
console.log(isLoggedIn);
router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    if (requiresAuth && isLoggedIn === null || isLoggedIn === "") {
        next('/sign-in')
    } else {
        next()
    }
})
export default router;