import StickyNotes from "../pages/StickyNotes.vue";
import FoodApp from "../pages/FoodApp.vue";
import Home from "../pages/Home.vue";
import SignUp from "../pages/SignUp.vue";
import SignIn from "../pages/SignIn.vue";
import Menu from "../pages/OurMenu.vue";
import ShoppingCart from "../pages/ShoppingCart.vue";
import OurShop from "../pages/OurShop.vue";
import ShopDetails from "../pages/ShopDetails.vue";
import BlogList from "../pages/BlogList.vue";
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
        path: "/sign-up",
        component: SignUp,
        meta: {
            name: "Sign Up"
        }
    },
    {
        path: "/sign-in",
        component: SignIn,
        meta: {
            name: "Sign In"
        }
    },
    {
        path: "/menu",
        component: Menu,
        meta: {
            name: "Menu",
            requiresAuth: true
        }
    },
    {
        path: "/shopping-cart",
        component: ShoppingCart,
        meta: {
            name: "Shopping Cart",
            requiresAuth: true
        }
    },
    {
        path: "/our-shop",
        component: OurShop,
        meta: {
            name: "Our Shop",
            requiresAuth: true
        },
        props: true 
    },
    {
        path: "/shop-details",
        component: ShopDetails,
        name: 'shopDetails',
        meta: {
            name: "Shop Details",
            requiresAuth: true
        },
        props: true 
    },
    {
        path: "/blog-list",
        component: BlogList,
        meta: {
            name: "Blog List",
            requiresAuth: true
        }
    }

]
export default routes;