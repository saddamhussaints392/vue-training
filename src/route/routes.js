import StickyNotes from "../pages/StickyNotes.vue";
import FoodApp from "../pages/FoodApp.vue";
import Home from "../pages/Home.vue";
import SignUp from "../pages/SignUp.vue";
import SignIn from "../pages/SignIn.vue";
import Menu from "../pages/Menu.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";
const routes = [
    {
        path: "/",
        name: {
            pageName: "default page",
            routeName: "/"
        },
        component: Home
    },
    {
        path: "/sticky-notes",
        name: {
            pageName: "sticy-notes page",
            routeName: "sticky notes"
        },
        component: StickyNotes
    },
    {
        path: "/food-app",
        name: {
            pageName: "Landing page",
            routeName: "landing notes"
        },
        component: FoodApp
    },
    {
        path: "/sign-up",
        name: {
            pageName: "Sign up page",
            routeName: "sign up"
        },
        component: SignUp
    },
    {
        path: "/sign-in",
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
        component: Menu,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/shopping-cart",
        name: {
            pageName: "Shopping Cart",
            routeName: "Shopping Cart"
        },
        component: ShoppingCart,
        meta: {
            requiresAuth: true
        }
    },
    
]
export default routes;