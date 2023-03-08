import { defineStore } from "pinia";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import router from "../route";
import { emailRegex } from "../regex/emailRegex";
import { passwordRegex } from "../regex/passwordRegex";
import { nameRegex } from "../regex/nameRegex";
import { getToken } from "../utils";
export const useAuthStore = defineStore({
    id: "mystore",
    state: () => {
        return {
            nameError: "",
            emailError: "",
            passwordError: "",
            isSignUpSuccessfull: false,
            isUserLoggedIn: localStorage.getItem('user')
        }
    },
    getters: {

    },
    actions: {
        SignInWithGoogle(page) {
            const provider = new GoogleAuthProvider();
            signInWithPopup(getAuth(), provider)
                .then(data => {
                    console.log(data.user.accessToken);
                    console.log("registered successfully using Google Account");
                    // navigate the user after signUp successfull
                    if (page === 'signin') {
                        localStorage.setItem("user", data.user.accessToken);
                        router.push("/shopping-cart")
                    } else {
                        this.isSignUpSuccessfull = true;
                    }

                })
                .catch(error => {
                    console.log(error);
                });
        },
        SignIn(email, password, rememberMe) {
            console.log(password, email);
            if (email === "") {
                this.emailError = "Email is required!";
            } else if (!emailRegex(email)) {
                this.emailError = "Enter valid email id";
            } else {
                this.emailError = "";
            }
            if (password === "") {
                this.passwordError = "Password is required";
            } else if (!passwordRegex(password)) {
                this.passwordError =
                    "Password should contain lower, upper, digit and one special character";
            } else {
                this.passwordError = "";
            }

            // Remember me Functionality 
            if (rememberMe) {
                const rememberMeData = {
                    email: email,
                    password: password,
                };
                this.setCookie("rememberMe", rememberMeData, 30);
            } else {
                this.deleteCookie("rememberMe");
            }

            if (this.emailError === "" && this.passwordError === "") {
                signInWithEmailAndPassword(getAuth(), email, password)
                    .then(data => {
                        console.log("login successfully");
                        // this.signUpSuccessfull = true;
                        localStorage.setItem("user", data.user.accessToken);
                       router.push('/shopping-cart')
                    })
                    .catch(error => {
                        console.log(error.message);
                    });
            }
        },
       
        setCookie(name, value, days) {
            const expires = new Date();
            expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
            document.cookie = `${name}=${JSON.stringify(value)};expires=${expires.toUTCString()};path=/`;
        },
        getCookie(name) {
            const cookie = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
            return cookie ? JSON.parse(cookie[2]) : null;
        },
        deleteCookie(name) {
            document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/`;
        },

        SignUp(name, email, password) {
            console.log(name, email, password);

            if (name === "") {
                this.nameError = "Name is required!";
            } else if (!nameRegex(name)) {
                this.nameError = "Name should have atleast 3 characters";
            } else {
                this.nameError = "";
            }

            if (email === "") {
                this.emailError = "Email is required!";
            } else if (!emailRegex(email)) {
                this.emailError = "Enter valid email id";
            } else {
                this.emailError = "";
            }
            if (password === "") {
                this.passwordError = "Password is required";
            } else if (!passwordRegex(password)) {
                this.passwordError =
                    "Password should contain lower, upper, digit and one special character";
            } else {
                this.passwordError = "";
            }

            if (
                this.nameError === "" &&
                this.emailError === "" &&
                this.passwordError === ""
            ) {
                createUserWithEmailAndPassword(
                    getAuth(),
                    email,
                    password,
                )
                    .then(data => {
                        console.log("registered successfully");
                        this.isSignUpSuccessfull = true;
                        // navigate the user after signUp successfull
                        // example  route.push("/home")
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        },
    }
})