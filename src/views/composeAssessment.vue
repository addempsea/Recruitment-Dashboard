<template>
  <div>
    <h1 class="compose">
      Compose Assessment
    </h1>
    <div class="container">
      <div class="container-side">
        <p>15/30</p>
        <!-- <p class="dot-text">+ Choose File</p> -->
        <input type="text" placeholder="+ Choose File" class="form" />
      </div>
      <div class="right">
        <p>Set Time</p>
        <div class="span">
          <div>
            <span>00<span class="minute">min</span></span>
            <img src="../assets/Polygon.png" alt="" />
          </div>
          <div>
            <span class="seconds">000<span class="minute">sec</span></span>
            <img src="../assets/Polygon.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="question-space">
      <h5>Question</h5>
      <input type="text" />
    </div>
    <form class="whole-form">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Option A</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group col-md-6">
          <label>Option B</label>
          <input type="text" class="form-control" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Option C</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group col-md-6">
          <label>Option D</label>
          <input type="text" class="form-control" />
        </div>
      </div>
    </form>
    <div>
      <div class="two-buttons">
        <button class="first-button">Previous</button>
        <button class="second-button">Next</button>
      </div>
      <button class="last-button">Finish</button>
    </div>
  </div>
</template>

<style scoped>
body {
  font-family: Lato;
}
span {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
}
.question-space {
  margin-top: 40px;
}
.seconds {
  padding-left: 30px;
}
.minute {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
}

.last-button {
  margin-left: 400px;
  margin-top: 60px;
  background: #cecece;
  border-radius: 4px;
  width: 150px;
  height: 41px;
  color: white;
}
.second-button {
  background: #2b3c4e;
  border-radius: 4px;
  color: white;
  width: 125px;
  height: 41px;
}
.first-button {
  background: #2b3c4e;
  border-radius: 4px;
  color: white;
  width: 125px;
  height: 41px;
}
.two-buttons {
  display: flex;
  margin-left: 0px;
  margin-top: 50px;
  justify-content: space-around;
}

input {
  width: 976px;
  height: 144px;
}
.container-side {
  margin-top: 90px;
}
.container-side p {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
}
.span {
  display: flex;
}
.compose {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.right {
  margin-top: 120px;
  margin-left: 150px;
}
.container {
  display: flex;
}
.form {
  border: 1.55172px dashed #2b3c4e;
  box-sizing: border-box;
  border-radius: 6.2069px;
  height: 108px;
  width: 450px;
}
h1 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
form {
  padding-top: 30px;
}
.text {
  color: #1abc9c;
  font-size: 20px;
  font-family: "Roboto Condensed", serif;
  font-weight: 400;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.icon {
  margin-right: 15px;
}
.form-control {
  border: 1.5px solid #2b3c4e;
  height: 41px;
  box-sizing: border-box;
  border-radius: 4px;
  width: 456px;
}
</style>
