<template>
  <div>
    <div class="home mt-3">
      <img class="logo" alt="Enyata-logo" src="../assets/enyata_logo.png" />

      <h5 class="enyata">enyata</h5>
      <h6>Application Sign Up</h6>
      
    </div>
    
     
    <form @submit.prevent="register">
     <div class="container col-6">
        <p class="response" :class="[apiResponse ? apiResponse.type: '']">{{apiResponse.message}}</p>
     </div>
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
            <input class="input-image" :type=inputType name="password" v-model="user.password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"/><span><i @click="toggleP" class="fa fa-eye-slash field-icon" aria-hidden="true"></i></span>

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
            <input class="input-image" :type=inputType v-model="test.password" /><span><i @click="toggleP" class="fa fa-eye-slash field-icon" aria-hidden="true"></i></span>

          </div>
        </div>
      </div>
      <div>
        <button
          :disabled="test.password != user.password"
          class="btn my-3 "
          
        >Sign Up</button>
      </div>
    </form>
    <p v-show="test.password != user.password" class="text-center text-danger">Passwords don't match</p>
    <p class="link">
      Already have an account?
      <router-link :to="{name: 'login'}">Login</router-link>
    </p>
    
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
      },

      inputType: "password"
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
    },

    toggleP() {
      if (this.inputType == "password") {
        this.inputType = "text"
      } else {
        this.inputType = "password"
      }
    }
  },

  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "login" });
          val.message = ""
        }, 3000);
      }
    }
  }
};
</script>




<style  scoped>
i {
  cursor: pointer;
}
.field-icon {
  margin-left: -30px;
  position: relative;
  z-index: 2;
}
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
  padding: 10px 10px;
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

/* h6 {
  font-style: italic;
  font-size: 25px;
} */
img {
  
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

.response {

  text-align: center;
  
}
.response.failed {
  background-color: red;
  color: #2b3c4e;
}
.response.success {
  background-color: green;
  color: #2b3c4e;
}
</style>
