<template>
  <div>
    <div class="container my-5">
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
            <span class="seconds">00<span class="minute">sec</span></span>
          </div>
        </div>
      </div>
    </div>
    <div class="center">
      <div class=" d-flex justify-content-center align-item-center">
        <img src="../assets/confetti.png" alt="" />
      </div>
      <div class="message my-3 text-center">
        <p>
          We have received your assessment test, we will get back to you soon.
        </p>
        <p class="best-luck">Best of luck</p>
      </div>
    </div>
    <div class="d-flex justify-content-center align-item-center">
      <router-link to="/"><button class="button">Home</button></router-link>
      
    </div>
    
  </div>
</template>

<style scoped>

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

  font-size: 30px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  
}
</style>
