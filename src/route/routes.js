import StickyNotes from "../pages/StickyNotes.vue";
import FoodApp from "../pages/FoodApp.vue";
import Home from "../pages/Home.vue";
import SignUp from "../pages/SignUp.vue";
import SignIn from "../pages/SignIn.vue";
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
    },
    {
        path: "/signup",
        component: SignUp
    },
    {
        path: "/signin",
        component: SignIn
    }
]
export default routes;