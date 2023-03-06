import { defineStore } from "pinia";

export const useAuthStore = defineStore({
    id: "mystore",
    state: () => ({
        isLoggedIn: false,
    }),
    getters: {
        getIsLoggedIn: (state) => {
            return state.isLoggedIn;
        }
    }
})