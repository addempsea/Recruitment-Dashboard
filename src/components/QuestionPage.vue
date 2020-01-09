<template>
  <div>
    <div class="container">
      <div class="container-side">
        <div class="p-tag"><p>Take Assessment</p></div>
        <p class="dot-text">
          Click the submit button to submit assessment, you can go back at any
          time to edit your answers.
        </p>
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
    <div class="question-page">
      <div>
        <h6>Question 1</h6>
      </div>
      <div>
        <h2>What is the purpose of HDR technology?</h2>
      </div>
      <div>
        <ul class="list">
          <li>A. To reduce the file size of images and videos.</li>
          <li>B. To speed up 3D rendering performance.</li>
          <li class="correct-answer">
            C. To support higher video resolutions.
          </li>
          <li>D. To display more colors in images and videos</li>
        </ul>
      </div>
    </div>
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
.last-button {
  margin-left: 450px;
  margin-top: 60px;
  background: #cecece;
  border-radius: 4px;
  width: 205px;
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

.dot-text {
  width: 510px;
  font-family: Lato;
  font-style: italic;
  font-weight: bold;
  font-size: 14px;
  color: #2b3c4e;
  margin-left: 0px;
}
.question-page {
  text-align: center;
}
.list {
  list-style-image: url("../assets/Rectangle.png");
  display: block;
  line-height: 3.333em;
  padding: 0 10px 0 20px;
  text-align: left;
  margin-left: 330px;
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  color: #2b3c4e;
}
h6 {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2b3c4e;
}

.correct-answer {
  list-style-image: url("../assets/square.png");
  background: #31d283;
  width: 400px;
}
h2 {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2b3c4e;
}

.container > p {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  color: #2b3c4e;
}
/* h2 {
    font-family: Lato;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    text-align: left;
    margin-right: 100px;
    line-height: 52px;
    color: #4F4F4F;
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
