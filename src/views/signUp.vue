<template>
  <div class="applicant-form">
    <div class="home">
      <img alt="Enyata-logo" src="../assets/enyata-logo.png" />
      <h5>enyata</h5>
      <h6>Applicant Log In</h6>
    </div>
    <div>
      <form class="input-form">
        <div class="form-item">
          <p><label for="name">Email Address</label></p>
          <input type="text" placeholder="" />
        </div>
        <div class="form-item">
          <p><label for="name">Password</label></p>
          <input class="input-image" type="text" placeholder="" />
        </div>
      </form>
    </div>
    <router-link to="/appForm"><button>Sign In</button></router-link>
    <div class="account">
      <p>Don't have an account yet?<a>Sign Up</a></p>
      <p class="password">Forget Password?</p>
      <p></p>
    </div>
  </div>
</template>
<style scoped>
.applicant-form {
    max-width: 400px;
    margin: 0 auto;
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

button {
margin: 0 auto;
  background-color: #2b3c4e;
  color: white;
  border-radius: 4px;
  width: 379px;
  height: 50px;
  border: none;
  margin-top: 40px;
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
