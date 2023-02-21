<template>
  <b-container fluid class="p-0">
    <b-row no-gutters align-h="center" class="bg-dark">
      <b-col cols="10">
        <Navbar />
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col cols="12">
        <FoodAppBanner />
      </b-col>
    </b-row>
    <b-row align-h="center" class="signup_section" no-gutters>
      <b-col cols="12" sm="12" md="12" lg="3">
        <div class="signup_main">
          <span class="d-block signup_text">Sign Up</span>
          <div class="position-relative name_field mt-4">
            <b-form-input class="rounded-0" placeholder="Name" v-model="name"></b-form-input>
            <b-icon-person font-scale="1.5" class="position-absolute person_icon"></b-icon-person>
          </div>
          <div class="position-relative email_field mt-3">
            <b-form-input class="rounded-0" placeholder="Email" v-model="email"></b-form-input>
            <b-icon-wallet font-scale="1.3" class="position-absolute person_icon"></b-icon-wallet>
          </div>
          <div class="position-relative password_field mt-3">
            <b-form-input class="rounded-0" placeholder="Password" v-model="password"></b-form-input>
            <b-icon-bag-x font-scale="1.3" class="position-absolute person_icon"></b-icon-bag-x>
          </div>
          <div class="mt-3">
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              class="rounded-0"
              unchecked-value="not_accepted"
            >Remember me ?</b-form-checkbox>
          </div>
          <div class="mt-4">
            <button class="btn_signup w-100" @click="signUp">Sign Up</button>
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
            <span class="d-block" @click="signUpWithGoogle">Sign up with Google</span>
            <span></span>
          </div>
          <div
            class="d-flex w-100 btn_apple_signup mt-3 align-items-center justify-content-between"
          >
            <img src="../assets/images/Apple.png" alt class="d-block pl-3" />
            <span class="d-block" @click="signUpWithApple">Sign up with Apple</span>
            <span></span>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row no-gutters>
      <b-col cols="12">
        <Footer />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import FoodAppBanner from "../components/FoodAppBanner.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  OAuthProvider
} from "firebase/auth";
export default {
  components: { Navbar, FoodAppBanner, Footer },
  data() {
    return {
      name: "",
      password: "",
      status: "",
      email: ""
    };
  },
  methods: {
    signUp() {
      console.log(this.name, this.password, this.email, this.status);
      createUserWithEmailAndPassword(
        getAuth(),
        this.email,
        this.password,
        this.name,
        this.status
      )
        .then(data => {
          console.log("registered successfully");
          // navigate the user after signUp successfull
          // example  route.push("/home")
        })
        .catch(error => {
          console.log(error);
        });
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
    },
    signUpWithApple() {
      const provider = new OAuthProvider("apple.com");
      signInWithPopup(getAuth(), provider)
        .then(result => {
          // The signed-in user info.
          const user = result.user;
          console.log(user);
          console.log("registered successfully using Apple Account");
          // Apple credential
          const credential = OAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          const idToken = credential.idToken;

          // IdP data available using getAdditionalUserInfo(result)
          // ...
        })
        .catch(error => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The credential that was used.
          const credential = OAuthProvider.credentialFromError(error);

          // ...
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
.forget_password_text {
  font-family: "Helvetica";
  font-weight: 400;
  font-size: 14px;
  color: #828282;
  text-align: end !important;
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