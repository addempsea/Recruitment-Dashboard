<template>
<div>
   <div class="home">
    <img alt="Enyata-logo" src="../assets/enyata-logo.png">
    <h5>enyata</h5>
    <h6>Application Sign Up</h6>
  </div>
  <div class="input-form">
    <form class="first-input">
      <div class="form-item">
        <p><label for="name">First Name</label></p>
        <input type="text" placeholder="">
      </div>
      <div class="form-item">
        <p><label for="name">Email Address</label></p>
        <input type="text" placeholder="">
      </div>
      <div class="form-item">
        <p><label for="name">Password</label></p>
        <input class="input-image" type="text" placeholder="">
      </div>
    </form>
      <form class="second-input">
      <div class="form-item">
        <p><label for="name">Last Name</label></p>
        <input type="text" placeholder="">
      </div>
      <div class="form-item">
        <p><label for="name">Phone Number</label></p>
        <input type="text" placeholder="">
      </div>
      <div class="form-item">
        <p><label for="name">Confirmed Password</label></p>
        <input class="input-image" type="text" placeholder="">
      </div>
    </form>
  </div>
   <router-link to='/signUp'><button>Sign Up</button></router-link>
  <p class="link">Already have an account?<a href="">Sign In</a></p>
</div>
 
</template>

<style  scoped>

.input-form {
  display: flex;
  margin-left: 400px;
  margin-top: 50px;

}
.form-item {
  display: block;
}

.second-input {
  padding-left: 40px;
}
input{
  width:300px;
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
  border: 1.5px solid #BDBDBD;
  box-sizing: border-box;
  border-radius: 4px;
}
.input-image {
    background-image: url("../assets/Vector.png");
    background-position:350px ;
    background-repeat: no-repeat;
}
/* h6 {
  font-style: italic;
  font-size: 25px;
} */
img {
  width:48px;
  height:51px;
}
p {
  text-align: left;
  
}
button {
  background-color: #2B3C4E;
  color:white;
  border-radius: 4px;
  width:400px;
  height: 45px;
  margin-top: 40px;
}

.link {
  /* font-family: Lato; */
  font-style: italic;
  font-weight: normal;
  text-align: center;
  
}
</style>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    
  }
}
</script>
