<template>
  <div class="all">
    <div class="first_sec container overflow-hidden">
      <div class="mb-2 image">
        <img src="../assets/white logo.png" alt="enyata_logo" class="my-5" />
      </div>

      <div class="f_s_txt text-center">
        <h3>enyata</h3>
        <h6>Admin Log In</h6>
      </div>
      <div class="form-gro my-5">
        <form class="">
          <div class="form-group">
            <label for>Email Address</label>
            <input
              type="email"
              class="form-control"
              name
            />
          </div>
          <div class="form-group">
            <label for>Password</label>
            <input type="password" class="form-control" name="password" id placeholder />
          </div>
          <button type="button" class="btn btn-primary">Sign in</button>
          <div class="account mb-4">
            <router-link to="#" class="password">Forgot password?</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>

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
</style>