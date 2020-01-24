<template>
  <div class="wrap">
    <div class="whole-body">
      <div class="section">
        <div class="pt-5">
          <h1 class="text-white">
            Enyata software Engineering limited is recieving applications into
            her academy.
          </h1>
          <div class="text">
            <h3 class="text-white mt-3">{{ applicants.instruction }}</h3>
          </div>
        </div>

        <div class="prior">No prior knowledge of coding is required.</div>
        <div class="requirement">
          <h6 class="text-white">Requirement</h6>
          <ul class="text-white">
            <li>
              <b>Intelligent, young & Smart</b>
            </li>
            <li>
              <b>Graduates from polytechnics</b>
            </li>
            <li>
              <b>Graduate from Universities and other related institutions</b>
            </li>
            <li>
              <b>Any discipline of study</b>
            </li>
            <li>
              <b>Any gender</b>
            </li>
          </ul>
          <p class="text-white">
            <b>
              Application closes
              {{ getmonth(applicants.closing_date) }}
            </b>
          </p>
        </div>
      </div>
    </div>

    <div class="foot">
      <p>Kindly follow the link below to apply</p>
      <span class="link">
        <router-link :to="{ name: 'applicantSignup' }" style="color:ffff;">
          {{
          applicants.link
          }}
        </router-link>
      </span>
    </div>

  
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex"
export default {
  name: "home",
  data() {
    return {
     
      applicants: [],
      // bg: "http://localhost:3000/adminfiles/" + this.applicants.file

      
    };
  },
  computed: {
    ...mapGetters(["getBatches"])
  },
  methods: {
    ...mapActions(["fetchBatches"]),

    getmonth(a) {
       var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];

      var b = a.split("-");
      var year = b[0];
      var day = b[2];
      var month = months[parseInt(b[1]) - 1];

      return day + " " +" " + month + "," + " " + year + "."

    }
  },

  async mounted() {
     await this.fetchBatches()
     this.applicants = this.getBatches
  }
};
</script>

<style scoped>
.wrap {
  background-image: url("../assets/6.png");
  background-repeat: no-repeat;
  /* / background-position: center; / */
  background-size: 100% 100%;
}
.whole-body {
  margin-left: 30px;
}
.text {
  width: 50%;
}
/* .section {
  margin-top: 50px;
} */
.section h1 {
  font-size: 25px;
}
.section h3 {
  color: #2b3c4e;
  font-size: 18px;
}
h1 {
  font-family: "Lato", san-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
}
h3 {
  font-family: "Lato", san-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
}
.prior {
  background-color: #2b3c4e;
  width: 100%;
  max-width: 400px;
  height: 30px;
  color: #fff;
  text-align: center;
  font-family: "Lato", san-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  margin-top: 50px;
}
.requirement {
  margin-top: 50px;
}
.requirement h6 {
  font-family: "Lato", san-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
}
.requirement p {
  margin-top: 30px;
  font-family: "Lato", san-serif;
  font-style: normal;
  font-weight: bold;
}
.foot {
  background-color: #2b3c4e;
  color: #fff;
  text-align: center;
  width: 100%;
  margin-top: 142px;
  padding: none;
}
.btn {
  width: 10%;
  height: 50px;
  margin: auto;
  display: block;
  background-color: #92979d;
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
}
a {
  color: #fff;
  text-decoration: none;
}
</style>