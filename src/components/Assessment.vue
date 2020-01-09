<template>
  <div>
    <div class="container">
      <div class="container-side">
        <div class="p-tag"><p>Take Assessment</p></div>
        <p class="dot-text">
          Click the button below to start assessment, you have limited time for
          this test
        </p>
      </div>
      <div class="right">
        <p>Timer</p>
        <div class="span">
          <div>
            <span>00<span class="minute">min</span></span>
          </div>
          <div>
            <span class="seconds">000<span class="minute">sec</span></span>
          </div>
        </div>
      </div>
    </div>

    <div class="timer">
      <center>
        <img class="timer-logo" src="../assets/timer.png" alt="timer" />
        <p>
          We have four days left until the next assessment <br />Watch this
          space
        </p>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle">
            Take Assessment
          </button>
        </div>
      </center>
    </div>
  </div>
</template>

<style scoped>
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
.container {
  display: flex;
  justify-content: space-between;
}
/* .container-side {
    float: right;
} */
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

.dot-text {
  width: 510px;
  font-family: Lato;
  font-style: italic;
  font-weight: bold;
  font-size: 15px;
  color: #2b3c4e;
  margin-left: 0px;
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
.container > p {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  color: #2b3c4e;
}
h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  text-align: left;
  margin-right: 100px;
  line-height: 52px;
  color: #4f4f4f;
}
.timer {
  width: 100%;
  margin-top: 100px;
}
.timer-logo {
  padding-bottom: 20px;
}
.timer > p {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 16.7273px;
  text-align: center;
  color: #4f4f4f;
}
button {
  width: 50%;
  max-width: 205px;
  height: 41px;
  background: #b1b1b1;
  border-radius: 4px;
  border: none;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  margin-left: auto;
  margin-right: auto;
  display: block;
}
</style>
