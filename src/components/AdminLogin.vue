<template>
  <div class="all">
    <div class="first_sec container my-5 overflow-hidden">
      <div class="mb-2 image">
        <img src="../assets/white logo.png" alt="enyata_logo" class="my-5" />
      </div>

      <div class="f_s_txt text-center">
        <h3>enyata</h3>
        <h6>Admin Log In</h6>
      </div>
      <div class="container col-6">
          <p class="response" :class="[apiResponse ? apiResponse.type: '']">{{apiResponse.message}}</p>
      </div>
      <div class="form-gro">
        <form @submit.prevent="loging">
          <div class="form-group">
            <label for>Email Address</label>
            <input type="email" class="form-control" name="email" v-model="user.email" />
          </div>
          <div class="form-group">
            <label for>Password</label>
            <input :type=inputType class="form-control" name="password" v-model="user.password" /><span><i @click="toggleP" class="fa fa-eye-slash field-icon mr-2" aria-hidden="true"></i></span>
          </div>
          <button type="button" class="btn btn-primary" @click="loging">Sign in</button>
          <div class="account mb-2">
            <router-link to="#" class="password">Forgot password?</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "adminlogin",
  data() {
    return {
      user: {
        email: "",
        password: ""
      },

      inputType: "password"
    };
  },

  computed: {
    ...mapGetters(["apiResponse"]),
    isValid() {
      if (this.user.email == "" || this.user.password == "") {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    ...mapActions(["adminLogin"]),

    loging() {
      if (this.isValid) {
        this.adminLogin(this.user);
        console.log(this.apiResponse);
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
          this.$router.push({ name: "admindashboard" });
          val.message = ""
        }, 2000);
      } 
    }
  }
};
</script>

<style scoped>
i {
  cursor: pointer;

}
.field-icon {
  float: right;
  margin-left: -0px;
  margin-top: -30px;
  position: relative;
  z-index: 2;
}
.api_res {
    color: red;
}
.image {
  display: flex;
  justify-content: center;
}

.form-gro {
  display: flex;
  justify-content: center;
}

.all {
  background-image: url("../assets/backgroundcomp.png");
  overflow: hidden;
}

.form-item {
  text-align: center;
}
h3 {
  font-size: 32px;
  font-weight: bold;
  color: white;
}

h6 {
  font-size: 20px;
  font-style: italic;
  color: white;
}
.account {
  text-align: end;
}
button {
  margin: 0 auto;
  background-color: white;
  color: #2b3c4e;
  border-radius: 4px;
  width: 379px;
  height: 50px;
  border: none;
}
.password {
  color: white;
}
.input-form {
  margin: 0 auto;
}
input {
  border-radius: 4px;
  background: #122a3a;
}
label {
  color: white;
  margin-right: 17em;
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