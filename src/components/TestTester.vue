<template>
  <div class="container my-5">
    <div v-for="(question, index) in quiz" :key="index">
      <div v-show="index === questionIndex">
        <h6>{{question.question}}</h6>
        <li v-for="(answer, index) in question.incorrect_answers" :key="index">
          <input type="radio" :name="index" :value="answer" v-model="answerd"/>
          <label class="mx-3">{{answer}}</label>
        </li>
      </div>
      
    </div>
    <button v-if="questionIndex > 0" v-on:click="prev" class="mr-5">prev</button>
    <button v-on:click="next">next</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "test",
  data() {
    return {
      quiz: [],
      questionIndex: 0,
      answerd: "",
      newans :[],
    //   userResponses: Array(this.quiz.question.length).fill(false)
    };
  },

  async mounted() {
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=hard&type=multiple"
    );
    this.quiz = response.data.results;
  },

  methods: {
    next: function() {
        this.newans.push(this.answerd)
      this.questionIndex++;
    },

    prev: function() {
      this.questionIndex--;
      this.newans.pop(this.answerd)
    },

    changed() {
        this.newans.push(this.answerd)
    }
  }
};
</script>