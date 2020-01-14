<template>
  <div class="container">
    <div class="wrapper">
      <div class="head">
        <div>
          <!-- <img src="../../assets/enyata-w-logo.svg" alt /> -->
        </div>
        <div>
          <h1>enyata</h1>
          <em>
            <p>Admin Log In</p>
          </em>
        </div>
      </div>

      <div class="bottom">
         <!-- <p class="alert__message">{{ adminLog.message }}</p> -->
        <form @submit.prevent="adminRole" action="/login" method="post">
          <div class="form-group">
            <label for="exampleInputEmail1">Email Address</label>
            <input type="email" name='email' class="form-control" id="exampleInputEmail1" v-model="adminLogin.email" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" name='psw' class="form-control" id="exampleInputPassword1" v-model="adminLogin.password" />
            <i  class="fa fa-eye field-icon toggle-password"></i>
          </div>

          <button type="submit" class="btn btn-primary">Sign In</button>

          <router-link to="#">
            <span>Forgot Password ?</span>
          </router-link>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import $ from "jquery";
export default {
  name: "AdminLogin",
  components: {},
  data() {
    return {
      adminLogin: {
         email: "",
        password: ""
      }
    };
  },
  computed:{
    ...mapGetters(['adminLog'])
  },
  methods:{
    ...mapActions(['loginAdmin']),
   adminRole() {
      this.loginAdmin(this.adminLogin);
    }
  },
  mounted(){
    $(function(){
  
  $('.toggle-password').click(function(){
       
        if($(this).hasClass('fa-eye-slash')){
           
          $(this).removeClass('fa-eye-slash');
          
          $(this).addClass('fa-eye');
          
          $('#exampleInputPassword1').attr('type','text');
            
        }else{
         
          $(this).removeClass('fa-eye');
          
          $(this).addClass('fa-eye-slash');  
          
          $('#exampleInputPassword1').attr('type','password');
        }
    });
});
  },
  watch: {
    adminLog(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "AdminDashboard" });
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
.container {
  /* background: url("../assets/Background-image.png"); */
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  min-width: 100vw;
  color: white;
  font-family: Lato;
  display: flex;
  align-items: center;
}
.wrapper {
  width: 35%;
  margin: 0 auto;
}
input {
  background: #111e2b;
  border: 1px solid white;
  color: white;
}
.btn {
  width: 100%;
  background: white;
  color: #111e2b;
  border: none;
}
.head {
  text-align: center;
}
span {
  font-size: 0.7em;
  float: right;
  padding: 0.8em 0;
  color: white;
}
.field-icon {
  float: right;
  margin-right:1em;
  margin-top: -25px;
  position: relative;
  z-index: 2;
  cursor:pointer;
opacity: 0.4;
color: #5ABEFD;
}
</style>