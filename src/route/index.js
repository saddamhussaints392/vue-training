import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../store/authStore";
import { getToken } from "../utils";
import routes from "./routes";
const router = createRouter({
    routes,
    history: createWebHistory(),
})




router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()
    const requiresAuth = to.meta?.requiresAuth;
    // console.log("requiresAuth " + requiresAuth);
    // console.log(to);
    // console.log("authStore.isUserLoggedIn " + authStore.isUserLoggedIn);
    if (requiresAuth && !Boolean(getToken())) {
        next('/sign-in')
    }
    else {
        next()
    }
})
export default router;