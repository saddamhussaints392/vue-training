<template>
  <b-container fluid class="p-0">
    <b-row align-h="center" class="signup_section" no-gutters>
      <b-col cols="12" sm="12" md="12" lg="3">
        <form action @submit.prevent="signIn">
          <div class="signup_main">
            <!-- <span
              class="text-center d-block text-success mb-2 font-weight-bold"
              v-if="signUpSuccessfull"
            >{{signUpSuccessfull}}</span> -->
            <span class="d-block signup_text">Sign In</span>
            <span class="pl-2 text-danger" v-if="nameError">{{nameError}}</span>
            <div class="position-relative email_field mt-3">
              <b-form-input class="rounded-0" placeholder="Email" v-model="email"></b-form-input>
              <b-icon-wallet font-scale="1.3" class="position-absolute person_icon"></b-icon-wallet>
            </div>
            <span class="pl-2 text-danger" v-if="emailError">{{emailError}}</span>
            <div class="position-relative password_field mt-3">
              <b-form-input
                class="rounded-0"
                placeholder="Password"
                type="password"
                v-model="password"
              ></b-form-input>
              <b-icon-bag-x font-scale="1.3" class="position-absolute person_icon"></b-icon-bag-x>
            </div>
            <span class="pl-2 text-danger" v-if="passwordError">{{passwordError}}</span>
            <div class="mt-3 d-flex align-items-center">
              <input
                class="d-block"
                type="checkbox"
                name="checkbox-1"
                id="checkbox-1"
                v-model="rememberMe"
                unselectable="not_accepted"
              />
              <span class="ml-2 remember_me_text d-block">Remember me ?</span>
            </div>
            <div class="mt-4">
              <button class="btn_signup w-100" type="submit">Sign In</button>
            </div>
            <span class="d-block w-100 mt-3 forget_password_text">Forget password ?</span>
            <div class="d-flex align-items-center mt-4">
              <hr class="flex-grow-1" />
              <span class="or_text">OR</span>
              <hr class="flex-grow-1" />
            </div>
            <div
              class="d-flex w-100 btn_google_signup mt-3 align-items-center justify-content-between"
            >
              <img src="../assets/images/Google.png" alt class="d-block pl-3" />
              <span class="d-block" @click="signUpWithGoogle">Sign in with Google</span>
              <span></span>
            </div>
            <div
              class="d-flex w-100 btn_apple_signup mt-3 align-items-center justify-content-between"
            >
              <img src="../assets/images/Apple.png" alt class="d-block pl-3" />
              <span class="d-block" @click="signUpWithApple">Sign in with Apple</span>
              <span></span>
            </div>
          </div>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>
  <script>
import FoodAppBanner from "../components/FoodAppBanner.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider,
  signInWithPopup, } from "firebase/auth";
export default {
  components: { Navbar, FoodAppBanner, Footer },
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      emailError: "",
      passwordError: "",
      // signUpSuccessfull: ""
    };
  },
  mounted() {
    const rememberMe = this.getCookie("rememberMe");
    if (rememberMe) {
      this.email = rememberMe.email;
      this.password = rememberMe.password;
      this.rememberMe = true;
    }
  },
  methods: {
    signIn() {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const passwordRegex = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$@^%&? "])[a-zA-Z0-9!#$@^%&?]{6,}$/;
      console.log(this.password, this.email);

      if (this.email === "") {
        this.emailError = "Email is required!";
      } else if (!emailRegex.test(this.email)) {
        this.emailError = "Enter valid email id";
      } else {
        this.emailError = "";
      }
      if (this.password === "") {
        this.passwordError = "Password is required";
      } else if (!passwordRegex.test(this.password)) {
        this.passwordError =
          "Password should contain lower, upper, digit and one special character";
      } else {
        this.passwordError = "";
      }

      // Remember me Functionality 
      if (this.rememberMe) {
        const rememberMeData = {
          email: this.email,
          password: this.password,
        };
        this.setCookie("rememberMe", rememberMeData, 30);
      } else {
        this.deleteCookie("rememberMe");
      }

      if (this.emailError === "" && this.passwordError === "") {
        signInWithEmailAndPassword(getAuth(), this.email, this.password)
          .then(data => {
            console.log("login successfully");
            // this.signUpSuccessfull = true;
            this.$router.push("/shopping-cart");
           localStorage.setItem("user", JSON.stringify(data.user.accessToken));
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
    signUpWithGoogle() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
        .then(data => {
          console.log(data.user);
          console.log("registered successfully using Google Account");
          // navigate the user after signUp successfull
          // example  route.push("/home")
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
  <style scoped>
.signup_main {
  padding: 32px;
  box-shadow: 0px 4px 80px rgba(255, 159, 13, 0.15);
}
.signup_section {
  padding: 120px 0;
}
.signup_text {
  font-family: "Helvetica";
  font-weight: 700;
  font-size: 20px;
  color: #333333;
}

.person_icon {
  top: 25%;
  left: 4%;
}
input {
  padding: 20px 45px;
  border: 1px solid #e0e0e0 !important;
}
.btn_signup,
.btn_google_signup,
.btn_apple_signup {
  background: #ff9f0d;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Helvetica";
  font-weight: 400;
  font-size: 16px;
  cursor: pointer;
}
.btn_google_signup,
.btn_apple_signup {
  color: #4f4f4f;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
}
.forget_password_text,
.remember_me_text {
  font-family: "Helvetica";
  font-weight: 400;
  font-size: 14px;
  color: #828282;
  text-align: end !important;
}
.remember_me_text {
  color: #333333;
}
input[type="checkbox"] {
  height: 20px;
  width: 20px;
  accent-color: #ff9f0d;
  color: white;
}

.or_text {
  border: 1px solid #e0e0e0;
  padding: 5px;
  font-family: "Helvetica";
  font-weight: 400;
  font-size: 14px;
  color: #4f4f4f;
}

@media screen and (max-width: 480px) {
  .signup_section {
    padding: 62px 15px;
  }
}
</style>