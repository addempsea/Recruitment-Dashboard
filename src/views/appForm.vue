<template>
  <div>
    <div class="form-container-head">
      <img src="../assets/enyata-logo.png" alt="enyata" class="enyata-logo" />
      <h3>enyata</h3>
      <p>Applicant Form</p>
    </div>
    <div class="form-wrapper">
    <div class="input-form">
      <form class="first-input">
        <div class="form-item">
          <p><label for="name">First Name</label></p>
          <input type="text" placeholder="" />
        </div>
        <div class="form-item">
          <p><label for="name">Email</label></p>
          <input type="text" placeholder="" />
        </div>
        <div class="form-item">
          <p><label for="name">Address</label></p>
          <input class="input-image" type="text" placeholder="" />
        </div>
        <div class="form-item">
          <p><label for="name">Course of Study</label></p>
          <input class="input-image" type="text" placeholder="" />
        </div>
        
      </form>
      <form class="second-input">
        <div class="form-item">
          <p><label for="name">Last Name</label></p>
          <input type="text" placeholder="" />
        </div>
        <div class="form-item">
          <p><label for="name">Date of Birth</label></p>
          <input type="text" placeholder="" />
        </div>
        <div class="form-item">
          <p><label for="name">University</label></p>
          <input class="input-image" type="text" placeholder="" />
        </div>
        <div class="form-item">
          <p><label for="name">CGPA</label></p>
          <input class="input-image" type="text" placeholder="" />
        </div>
       <router-link to='/applicantSidebar'><button class="button">Button</button></router-link>
        
      </form>
    </div>

  <!-- <div class="wrapper">
    <button class="button">Button</button>
   </div> -->
    </div>
  </div>
</template>
<style scoped>
.enyata-logo {
  width: 49px;
  height: 52px;
}
.form-container-head {
  text-align: center;
  margin-top: 116px;
}
.form-container-head h3 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.form-container-head p {
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  color: #2b3c4e;
  text-align: center;
}
.form-wrapper {
  display: flex;
  width: 80%;
  max-width: 963px;
  height: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
  margin-bottom: 171px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}
.input-form {
  display: flex;
  margin-left: 80px;
  margin-top: 200px;

}
input {
  width: 400px;
  height: 30px;
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 6px;
}
p {
  text-align: left;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  
}
label {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #2b3c4e;
}
.wrapper {
    margin-top: 550px;
    /* margin-right: -1000px; */
}

.button {
    /* position: absolute; */
    top: 50%;
}
button {
  /* width: 70%;
  max-width: 379px;
  height: 50px;
  transform: 60px;
  margin-left: 400px;
  margin-right: 900px;
  margin-top: 550px;
  display: block; */
  background: #2b3c4e;
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
}
.second-input {
  padding-left: 40px;
}
/* input{
  width:300px;
} */
/* form {
  width: 90%;
  max-width: 830px;
  height: 469px;
  margin-left: auto;
  margin-right: auto;
  display: block;
  padding-top: 51px;
}
.rows {
  margin-top: 40px;
}

input {
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
}
.btn {
  width: 70%;
  max-width: 379px;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  display: block;
  background: #2b3c4e;
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
}
.else {
  text-align: center;
  font-size: 50px;
  padding-top: 30vh;
}
.password {
  position: relative;
  display: block;
  float: right;
  width: 100%;
}
.password img {
  margin-top: -20px;
  margin-right: 20px;
  float: right;
} */
</style>
