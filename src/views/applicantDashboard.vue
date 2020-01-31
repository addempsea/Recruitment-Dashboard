<template>
  <div class="view">
    <div id="app">
      <applicantSidebar />
    </div>

    <div class="dashboard-head my-3">
      <div class="head">
        <p>Dashboard</p>
        <span>
          Your Application is currently being reviewed, you wil be notified if
          successful
        </span>
      </div>

      <div class="time-status">
        <div class="time">
          <p>Date of Application</p>
          <span>{{getDate(this.getOneApp.createdAt)  }}</span>
          <div class="horizontal"></div>
          <p class="small-text">{{getDiffDate(this.getOneApp.createdAt)}} </p>
        </div>
        <div class="app-status">
          <p>Application Status</p>
          <span>Pending</span>
          <div class="app-status2"></div>
          <p class="small-text">We will get back to you</p>
        </div>
      </div>

      <div class="assessment p-2">
        <div class="update p-5">
          <p>Update</p>
          <div class="horizontal-line">
            <hr />
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <hr />
            <br />
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div class="take-assessment p-5">
          <p>Take Assessment</p>
          <div class="take-assessment-body">
            <p>
              We have 4 days left until the next assessment
              <br />Watch this space
            </p>

            <router-link :to="{name: 'takeAssessment'}"><button class="btn">Take Assessment</button></router-link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import applicantSidebar from "@/components/applicantSidebar.vue";
import { mapGetters, mapActions } from "vuex";
// @ is an alias to /src

export default {
  name: "applicantDashboard",
  components: {
    applicantSidebar
  },
  computed: {
    ...mapGetters(["getOneApp"])
  },

  methods: {
    ...mapActions(["fetchOneApp"]),
    getDate(s) {
      if (s != null) {
        var datet = s.split("T");
        return datet[0]
      } else {
        return "Not applied"
      }
    },
    getDiffDate(s) {
      if (s != null) {
        var datet = s.split("T");
        var day = new Date(datet[0]);
        var datt = new Date()
        var Difference_In_Time = datt - day.getTime();
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
        return Math.floor(Difference_In_Days) + "days since applied"
      } else {
        return "you have not applied"
      }
    }
  },

  async mounted() {
    await this.fetchOneApp()
  },
};
</script>

<style scoped>
.view {
  display: grid;
  grid-template-columns: 25% 75%;
}
/* .dashboard-head {
  margin-left: 292px;
  margin-top: 107px;
  margin-bottom: 86px;
  padding-left: 47px;
} */
.head p {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.head span {
  font-family: "Lato";
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  color: #2b3c4e;
}
.time-status {
  display: flex;
  /* margin-top: 61px; */
}
.horizontal-line {
  /* padding-top: 60px; */
  width: 400px;
  padding-left: 40px;
  color: solid #cecece;
}
.time p {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #4f4f4f;
  margin-top: 20px;
}
.time span {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  color: #2b3c4e;
}
.small-text {
  font-family: "Lato";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: #4f4f4f;
}
.app-status {
  margin-left: 87px;
}

.app-status p {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #4f4f4f;
  margin-top: 20px;
}
.app-status span {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  color: #2b3c4e;
}
.horizontal {
  width: 80%;
  height: 4px;
  background: #006df0;
  border-radius: 4px;
}
.app-status2 {
  width: 80%;
  height: 4px;
  background: #f09000;
  border-radius: 4px;
}
.assessment {
  margin-top: 50px;
  display: flex;
}

.update {
  
  border: 2px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
}
.update p {
  font-family: "Lato";
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  margin-right: 350px;
  margin-top: 25px;
}
.take-assessment {
 
  border: 2px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
  margin-left: 80px;
}
.take-assessment p {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  /* padding-left: 200px; */
  margin-top: 25px;
}
.take-assessment-body {
  margin-top: 189px;
}
.take-assessment-body p {
  font-family: "Lato", sans-serif;
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
  border: none;
}
</style>
