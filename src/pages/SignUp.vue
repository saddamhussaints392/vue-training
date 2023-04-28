<template>
  <div class="containers">
    <div class="signup_section rows justify-content-center">
      <div class="cols-3 cols-sm-12 cols-md-12 cols-lg-12 cols-xl-12 cols-xxl-12">
        <form action @submit.prevent="signUp">
          <div class="signup_main">
            <div v-if="authStore.isSignUpSuccessfull">
              <span
                class="text-center d-block text-success mb-2 h6"
              >Your account is registered successfully!!</span>
              <button class="btn_signup w-100 normal-text-regular" @click="$router.push('/sign-in')">Sign In</button>
            </div>
            <div v-else>
              <span class="d-block h6 text-grey-1">Sign Up</span>
              <div class="position-relative name_field mt-4">
                <b-form-input class="rounded-0 normal-text-regular text-grey-2" placeholder="Name" v-model="name"></b-form-input>
                <b-icon-person font-scale="1.5" class="position-absolute person_icon"></b-icon-person>
              </div>
              <span class="pl-2 text-error small-text-regular" v-if="authStore.nameError">{{authStore.nameError}}</span>
              <div class="position-relative email_field mt-3">
                <b-form-input class="rounded-0 normal-text-regular text-grey-2" placeholder="Email" v-model="email"></b-form-input>
                <b-icon-wallet font-scale="1.3" class="position-absolute person_icon"></b-icon-wallet>
              </div>
              <span class="pl-2 text-error small-text-regular" v-if="authStore.emailError">{{authStore.emailError}}</span>
              <div class="position-relative password_field mt-3">
                <b-form-input
                  class="rounded-0 normal-text-regular text-grey-2"
                  placeholder="Password"
                  type="password"
                  v-model="password"
                ></b-form-input>
                <b-icon-bag-x font-scale="1.3" class="position-absolute person_icon"></b-icon-bag-x>
              </div>
              <span
                class="pl-2 text-error small-text-regular"
                v-if="authStore.passwordError"
              >{{authStore.passwordError}}</span>
              <div class="mt-4">
                <button class="btn_signup w-100 normal-text-regular" type="submit">Sign Up</button>
              </div>
              <span class="d-block w-100 mt-3 forget_password_text small-text-regular text-grey-3">Forget password ?</span>
              <div class="d-flex align-items-center mt-4">
                <hr class="flex-grow-1" />
                <span class="or_text small-text-regular text-grey-2">OR</span>
                <hr class="flex-grow-1" />
              </div>
              <div
                class="d-flex w-100 btn_google_signup  bg-light mt-3 align-items-center justify-content-between"
              >
                <img src="../assets/images/Google.png" alt class="d-block pl-3" />
                <span class="d-block normal-text-regular text-grey-2" @click="signUpWithGoogle">Sign up with Google</span>
                <span></span>
              </div>
              <div
                class="d-flex w-100 btn_apple_signup bg-light mt-3 align-items-center justify-content-between"
              >
                <img src="../assets/images/Apple.png" alt class="d-block pl-3" />
                <span class="d-block normal-text-regular text-grey-2" @click="signUpWithApple">Sign up with Apple</span>
                <span></span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import FoodAppBanner from "../components/FoodAppBanner.vue";
import Footer from "../components/Footer.vue";

import { useAuthStore } from "../store/authStore";
export default {
  components: {  FoodAppBanner, Footer },
  setup() {
    const authStore = useAuthStore();
    return { authStore };
  },
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    signUp() {
      this.authStore.SignUp(this.name, this.email, this.password);
    },

    signUpWithGoogle() {
      this.authStore.SignInWithGoogle("signup");
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
/* .signup_text {
  font-family: "Helvetica";
  font-weight: 700;
  font-size: 20px;
  color: #333333;
} */

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
  /* font-family: "Helvetica";
  font-weight: 400;
  font-size: 16px; */
  cursor: pointer;
}
.btn_google_signup,
.btn_apple_signup {
  /* color: #4f4f4f; */
  /* background-color: #ffffff; */
  border: 1px solid #e0e0e0;
}
.forget_password_text,
.remember_me_text {
  /* font-family: "Helvetica";
  font-weight: 400;
  font-size: 14px;
  color: #828282; */
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
  /* font-family: "Helvetica";
  font-weight: 400;
  font-size: 14px;
  color: #4f4f4f; */
}

@media screen and (max-width: 480px) {
  .signup_section {
    padding: 62px 15px;
  }
}
</style>