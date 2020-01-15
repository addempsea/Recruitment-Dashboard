<template>
  <div class="col">
    <sb/>
    <div class="createpage">
      <h1 class="compose">Create Application</h1>

      <div class="flex-inputs">
        <div class="choose-file">
          <input class="first-input" type="text" name id />
        </div>
        <div class="text">
          <p>Link</p>
          <input class="second-input" type="text" name id />
        </div>
      </div>
      <div class="second-content">
        <div>
          <p>Application closure date</p>
          <input type="text" name id placeholder="dd/mm/yyyy" />
        </div>
        <div class="text2">
          <p>Batch Id</p>
          <input type="text" name id />
        </div>
      </div>
      <div class="question-space">
        <h5>Instructions</h5>
        <input type="text" />
      </div>
      <button>Submit</button>
    </div>
  </div>
</template>

<script>
import sb from "../components/AdminSidebars";
export default {
  name: "applicationAdmin",
  component: {
    sb
  }
};
</script>

<style scoped>
button {
  margin-top: 40px;
  background: #2b3c4e;
  border-radius: 4px;
  width: 379px;
  height: 50px;
  margin-left: 350px;
  color: white;
  border: none;
}
.question-space {
  margin-top: 40px;
}
h5 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}
.question-space input {
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 144px;
}
.createpage {
  padding-right: 80px;
}
.second-content input {
  width: 440px;
  height: 41px;
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
}
.flex-inputs p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}
.second-content p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
}
.second-content {
  display: flex;
  /* justify-content: space-around; */
}
.second-content {
  margin-top: 90px;
}
.text2 {
  margin-left: 100px;
}
/* .text p {
display: block;    
} */
.flex-inputs {
  display: flex;
  /* justify-content: space-between; */
  margin-top: 80px;
}
.text {
  margin-left: 80px;
}
.second-input {
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
  height: 41px;
  width: 440px;
  border: 1.5px solid #2b3c4e;
  box-sizing: border-box;
  border-radius: 4px;
}
.first-input {
  border: 1.55172px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 6.2069px;
  width: 456px;
  height: 108px;
}
</style>