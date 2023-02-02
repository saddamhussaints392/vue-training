import StickyNotes from "../pages/StickyNotes.vue";
import FoodApp from "../pages/FoodApp.vue";
import Home from "../pages/Home.vue";
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/sticky-notes",
        component: StickyNotes
    },
    {
        path: "/food-app",
        component: FoodApp
    }
]
export default routes;