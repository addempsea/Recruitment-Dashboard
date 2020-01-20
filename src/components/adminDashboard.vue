<template>
  <div>
    <div id="app">
      <applicantSidebars />
    </div>

    <div class="dashboard">
      <div class="first_section">
        <p>Dashboard</p>
      </div>

      <div class="date_section">
        <div class="date">
          <p>Current Application</p>
          <span class="number">{{getProfile.count}}</span>
          <div class="horizontal"></div>
          <div class>
            <p class>Academy 1.0</p>
          </div>
        </div>

        <div class="t_app">
          <p>Total Application</p>
          <span class="number">{{getProfile.count}}</span>
          <div class="horizontal2"></div>
          <div class>
            <p class>All entries so far</p>
          </div>
        </div>

        <div class="academy">
          <p>Academy's</p>
          <span class="number">1</span>
          <div class="horizontal3"></div>
          <div class>
            <p class>So far</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h4 class="heading">History</h4>
          <p class="small-heading">Last Update: 18.24.22/02/19</p>
          <div>
            <table class="table table-borderless">
              
              <tbody>
                <tr>
                  
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  
                  <td colspan="2">Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col create container mr-5">
          <h4 class="my-3 heading">Create Assessment</h4>

          <div class="text-center my-5">
            <p>
              Create test question for an incoming academy
              student
            </p>
            <router-link :to="{name: 'adminquestion'}" class="tests">
              <button>Create Assessment</button>
            </router-link>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import applicantSidebars from "../components/AdminSidebars";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "adminDashboard",
  components: {
    applicantSidebars
  },

  computed: {
    ...mapGetters(["getProfile"])
  },

  methods: {
    ...mapActions(["fetchAdminProfile"]),
    
  },

  async created () {
    await this.fetchAdminProfile()
  }
};
</script>

<style scoped>

.heading {
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
.create {
  border: 1px solid #ececf9;
  box-sizing: border-box;
  border-radius: 4px;
}
span {
  margin-right: 90px;
}
h4 {
  text-align: left;
}
.dashboard {
  margin-left: 292px;
  margin-top: 10px;

  padding-left: 47px;
}
.first_section p {
  font-family: Lato, sans-serif;
  /* font-style: normal; */
  /* font-weight: 300; */
  font-size: 35px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
  /* margin-right: 2em; */
  margin-right: 540px;
  text-align: left;
}
.date_section {
  display: flex;
  margin-top: 61px;
  margin-bottom: 3em;
}
.t_app {
  margin-right: 8em;
}
.date {
  margin-right: 8em;
}
.date span {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  color: #2b3c4e;
  border-bottom: blue;
}
.t_app span {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  color: #2b3c4e;
}
.academy span {
  font-family: "Lato";
  font-style: normal;
  font-weight: 300;
  font-size: 48px;
  color: #2b3c4e;
}
.his_cr {
  display: flex;
}
.grid_container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 50px;
}
.grid {
  display: flex;
}
.create_tq {
  margin-left: 15em;
  margin-bottom: 80px;
}
.ca {
  margin-left: 20em;
}
button {
  background: #b1b1b1;
  border-radius: 4px;
  color: white;
  /* padding:3 2 2 3; */
  padding-top: 10px;
  padding-bottom: 11px;
  padding-right: 31px;
  padding-left: 38px;
}
/* .update{
    padding-top: 0px;
} */
.horizontal {
  width: 80%;
  height: 4px;
  background: #006df0;
  border-radius: 4px;
}
.horizontal2 {
  width: 80%;
  height: 4px;
  background: #00f026;
  border-radius: 4px;
}
.horizontal3 {
  width: 80%;
  height: 4px;
  background: #f09000;
  border-radius: 4px;
}
.date_section p {
  margin-right: 100px;
}
</style>