<template>
  <div>
    <div class="container">
      <div class="container-side">
        <div class="p-tag"><p>Take Assessment</p></div>
        <p class="dot-text">Thank you!</p>
      </div>
      <div class="right">
        <p>Timer</p>
        <div class="span">
          <div>
            <span>00<span class="minute">min</span></span>
          </div>
          <div>
            <span class="seconds">010<span class="minute">sec</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class="image">
        <img src="../assets/confetti.png" alt="" />
      </div>
      <div class="message">
        <p>
          We have received your assessment test, we will get back to you soon.
        </p>
        <p class="best-luck">Best of luck</p>
      </div>
    </div>

    <button class="button">Home</button>
  </div>
</template>

<style scoped>
/* .center {
    margin-top: 40px;
} */
.right {
  margin-bottom: 150px;
  margin-left: 150px;
}
span {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
}
.span {
  display: flex;
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
.best-luck {
  margin-left: 200px;
  /* margin-bottom: 100px;  */
}
.button {
  background: #31d283;
  border-radius: 4px;
  color: white;
  width: 205px;
  height: 41px;
  margin-left: 400px;
  margin-top: 20px;
   border: none;
}
.image {
  margin-left: 450px;
}
.message {
  margin-left: 250px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16.7273px;
}
.container {
  display: flex;
  justify-content: space-between;
}
.dot-text {
  width: 510px;
  font-family: Lato;
  font-style: italic;
  font-weight: bold;
  font-size: 14px;
  color: #2b3c4e;
  margin-left: 0px;
}
.container > p {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  color: #2b3c4e;
}
.right h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #4f4f4f;
  margin-top: 0px;
  line-height: 17px;
  margin-top: 40px;
}
.p-tag {
  font-family: Lato;
  font-style: normal;
  /* font-weight: 100; */
  font-size: 30px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-right: 300px;
}
</style>
