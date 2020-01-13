<template>
  <div>
    <div class="home mt-3">
      <img class="logo" alt="Enyata-logo" src="../assets/Group 4.8.jpg" />

      <h5 class="enyata">enyata</h5>
      <h6>Application Sign Up</h6>
    </div>
    <form @submit.prevent="register">
      <div class="input-form ">
        <div class="first-input">
          <div class="form-item">
            <label for="name">First Name</label>
            <br />
            <input type="text" name="fname" v-model="user.fname" />
          </div>
          <div class="form-item my-3">
            <label for="name">Email Address</label>
            <br />
            <input type="text" name="email" v-model="user.email" />
          </div>
          <div class="form-item">
            <label for="name">Password</label>
            <br />
            <input class="input-image" type="password" name="password" v-model="user.password" />
          </div>
        </div>
        <div class="second-input">
          <div class="form-item">
            <label for="name">Last Name</label>
            <br />
            <input type="text" placeholder name="lname" v-model="user.lname" />
          </div>
          <div class="form-item my-3">
            <label for="name">Phone Number</label>
            <br />
            <input type="text" placeholder name="phone" v-model="user.phone" />
          </div>
          <div class="form-item">
            <label for="name">Confirmed Password</label>
            <br />
            <input class="input-image" type="password" v-model="test.password" />
          </div>
        </div>
      </div>
      <div>
        <button
          :disabled="test.password != user.password"
          class="btn my-3"
          
        >Sign Up</button>
      </div>
    </form>
    <p v-show="test.password != user.password" class="text-center">Passwords don't match</p>
    <p class="link">
      Already have an account?
      <router-link :to="{name: 'login'}">Login</router-link>
    </p>
    <p>{{apiResponse.message}}</p>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "signup",
  data() {
    return {
      user: {
        lname: "",
        fname: "",
        password: "",
        email: "",
        phone: ""
      },

      test: {
        password: ""
      }
    };
  },

  computed: {
    ...mapGetters(["apiResponse"]),

    isValid() {
      if (
        this.user.email == "" ||
        this.user.password == "" ||
        this.user.fname == "" ||
        this.user.lname == "" ||
        this.user.phone == ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    ...mapActions(["signup"]),

    register() {
      if (this.isValid) {
        console.log(this.user);

        this.signup(this.user);
      } else {
        alert("All fields are required");
      }
    }
  },

  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "login" });
        }, 3000);
      }
    }
  }
};
</script>




<style  scoped>
.input-form {
  display: flex;
  justify-content: center;
  /* margin-left: 400px;
  margin-top: 50px; */
}
.home {
  margin-left: 650px;
}
.logo {
  padding-left: 65px;
}
.enyata {
  padding-left: 50px;
}
/* .form-item {
  display: block;
} */

.second-input {
  padding-left: 40px;
}
input {
  width: 300px;
}
h5 {
  font-size: 30px;
  font-weight: bold;
  color: #2b3c4e;
  margin-top: 20px;
  margin-bottom: 0;
}
h6 {
  font-style: italic;
  font-size: 25px;
  margin-top: 15px;
  margin-bottom: 40px;
}
input {
  width: 379px;
  height: 35px;
  border: 1.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
}
.input-image {
  background-image: url("../assets/Vector.png");
  background-position: 350px;
  background-repeat: no-repeat;
}
/* h6 {
  font-style: italic;
  font-size: 25px;
} */
img {
  width: 48px;
  height: 51px;
}
p {
  text-align: left;
}
button {
  background-color: #2b3c4e;
  color: white;
  border-radius: 4px;
  width: 520px;
  height: 50px;
  margin-top: 40px;
  margin-left: 500px;
  border: none;
}

.link {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  text-align: center;
}
</style>
