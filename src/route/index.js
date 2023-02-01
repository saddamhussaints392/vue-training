import VueRouter from "vue-router";
import routes from "./routes";
const router = new VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHistory()
})
export default router;