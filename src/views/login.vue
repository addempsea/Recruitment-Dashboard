<template>
  <div class="applicant-form mt-5">
    <div class="home">
      <img class="logo" alt="Enyata-logo" src="../assets/enyata-logo.png" />
      <h5 class="enyata">enyata</h5>
      <h6>Applicant Log In</h6>
    </div>
    <div>
      <form class="input-form" @submit.prevent="loging">
        <div class="form-item">
          <label for="name">Email Address</label> <br>
          <input type="text" name="email" v-model="user.email" />
        </div>
        <div class="form-item my-3">
          <label for="name">Password</label> <br>
          <input class="input-image" type="password" name="password" v-model="user.password" />
        </div>
        <button class="button">Sign In</button>
      </form>
    </div>
    
    <div class="account">
      <p>Don't have an account yet? <router-link :to="{name: 'register'}">Register</router-link></p>
      <router-link :to="{name: ''}" class="ml-5">Forget password?</router-link>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: 'login',
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },

  computed: {
    ...mapGetters(['apiResponse']),
    isValid() {
      if( this.user.email == '' || this.user.password == '') {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    ...mapActions([
      'login'
    ]),

    loging() {
      if(this.isValid) {
        this.login(this.user)
      } else {
        alert('All fields are required')
      }
    }
  },

  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "applicantSignup" });
        }, 3000);
      }
    }
  }
}
</script>



<style scoped>
.applicant-form {
    max-width: 400px;
    margin: 0 auto;
}
.home {
  margin-left: 100px;
}
.logo {
  padding-left:65px; 
}
.enyata {
  padding-left:50px;
}
.form-item {
  text-align: left;
}
img {
  width: 48px;
  height: 51px;
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
.account {
  display: flex;
  font-style: italic;
  font-size: 12px;
}

.button {
  margin: 0 auto;
  background-color: #2b3c4e;
  color: white;
  border-radius: 4px;
  width: 379px;
  height: 50px;
  border: none;
}
.password {
  padding-left: 100px;
}
.input-form {
    margin: 0 auto;
}
input {
  width: 379px;
  height: 41px;
  border: 1.5px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 4px;
}
.input-image {
  background-image: url("../assets/Vector.png");
  background-position: 350px;
  background-repeat: no-repeat;
}
</style>
