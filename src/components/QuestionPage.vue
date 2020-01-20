<template>
  <div v-if="getQuiz.sorted">
    
    <div class="containers">
      <div class="container-side">
        <div class="p-tag">
          <p>Take Assessment</p>
        </div>
        <p class="dot-text">
          Click the submit button to submit assessment, you can go back at any
          time to edit your answers.
        </p>
      </div>
      <div class="right">
        <p>Timer</p>
        <div class="span">
          <div>
            <span class="time">
              {{mins}}
              <span class="minute">min</span>
            </span>
          </div>
          <div>
            <span class="seconds time">
              {{secs}}
              <span class="minute">sec</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-for="(question, index) in getQuiz.sorted" :key="index">
      <div v-show="index === questionIndex">
      
          <h6 class="text-center">Question {{+ " " + index + 1}}</h6>
          <h2 class="text-center question_name">{{question.question}}</h2>
         <div class= "d-flex justify-content-center mt-5">
           <div class="mb-5">
              <div v-for="(answer, index) in question.options" :key="index" class="d-flex align-items-center mb-3">
                <input type="radio" :name="index" :value="answer" v-model="answerd"/>
                <span class="mx-3 options_name">{{answer}}</span>
              </div> 
            </div>
         </div>
          
      </div>
    </div>

    <h3 class="my-3" v-show="questionIndex === getQuiz.sorted.length">End of questions, press previous to edit your answers and click on finish to submit.</h3>

      <div class="two-buttons">
        <button v-if="questionIndex > 0" @click="prev" class="second-button">prev</button>
        <button class="btn btn-outline-success my-5 px-5 py-3" @click="submitQuiz" v-show="questionIndex === getQuiz.sorted.length">Finish</button>
        <button @click="next" class="second-button" v-if="questionIndex <= getQuiz.sorted.length - 1">next</button>
      </div>
  </div>
  <div v-else>
    <h1>Done test already</h1>
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "question",
  data() {
    return {
      quiz: [],
      questionIndex: 0,
      answerd: "",
      user: {
          answer: [],
          questionId: []
      },
      time: 30 * 60,
      times: null
    };
  },

  computed: {
    ...mapGetters(["getQuiz", "apiResponse"]),

     mins() {
      const val = Math.floor(this.time / 60);
      if (String(val).length === 1) {
        return `0${val}`;
        
      }
      return val;
    },

    secs() {
      const val = this.time % 60
      if (String(val).length === 1) {
        return `0${val}`
      }
      return val;
    }
  },

  async mounted() {
    await this.fetchQuiz();
    await this.timed();
    this.quiz = await this.shuffle(this.getQuiz.sorted)
  },

  methods: {
    ...mapActions(["fetchQuiz", "answers"]),

    next() {
      this.user.answer.unshift(this.answerd);
      this.questionIndex++;
    },

    prev() {
      this.questionIndex--;
      this.user.answer.shift(this.answerd);
    },

    submitQuiz () {
      for (let i = 0; i < this.quiz.length; i++) {
        this.user.questionId.push(this.quiz[i]._id);
      }
      
      
      this.answers(this.user);
      this.time = 0;
      this.$router.push({name: "successfulPage"})
    },

    timed () {
      this.times = setInterval(() => this.countdown(), 1000);
    },

    countdown() {
      
        if(this.time > 0) {
          this.time--;
        }
        else if (this.time == 1) {
          this.submitQuiz()
        }
      
    },

    shuffle (array) {
      return array.sort(() => Math.random() - 0.5);
    }
  },

  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        val.message = ""
      }
    }
  }
};
</script>



<style scoped>
.question_name {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2B3C4E;
}

.options_name {
  font-family: Lato;
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
}
li {
  list-style: none;
}
.time {
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
.containers {
  display: flex;
  justify-content: space-between;
}
.last-button {
  background: #cecece;
  border-radius: 4px;
  width: 205px;
  height: 41px;
  color: white;
  border: none;
}
.second-button {
  background: #2b3c4e;
  border-radius: 4px;
  color: white;
  width: 125px;
  height: 41px;
  border: none;
}
.first-button {
  background: #2b3c4e;
  border-radius: 4px;
  color: white;
  width: 125px;
  height: 41px;
  border: none;
}
.two-buttons {
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
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

.right h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #4f4f4f;
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
