import StickyNotes from "../pages/StickyNotes.vue";
import FoodApp from "../pages/FoodApp.vue";
import Home from "../pages/Home.vue";
import SignUp from "../pages/SignUp.vue";
import SignIn from "../pages/SignIn.vue";
import Menu from "../pages/Menu.vue";
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
        name: "Lading page",
        component: FoodApp
    },
    {
        path: "/signup",
        name: {
            pageName: "Sign up page",
            routeName: "sign up"
        },
        component: SignUp
    },
    {
        path: "/signin",
        name: {
            pageName: "Sign in page",
            routeName: "sign in"
        },
        component: SignIn
    },
    {
        path: "/menu",
        name: {
            pageName: "Our Menu",
            routeName: "Menu"
        },
        component: Menu
    },
    
]
export default routes;