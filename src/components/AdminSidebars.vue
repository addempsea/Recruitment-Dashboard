<template>
  <div class="sidebar">
    <div class="applicant-image">
      <div class="profile">
        <img src="../assets/Ellipse.png" class="logo" />
      </div>
      <h1 class="user-name">{{getProfile.data.fname + " " + getProfile.data.lname}}</h1>
      <p class="user-email">{{getProfile.data.email}}</p>
    </div>

    <div class="sidebar-icon">
      <div class="my-3">
        <router-link :to="{name: 'admindashboard'}" class="tests">
          
            <i class="fa fa-dashboard" aria-hidden="true"></i> 
            <span class="mx-3">Dashboard</span>
        
        </router-link>
      </div>
      <div class="active">
        
         <router-link :to="{name: 'adminapplication'}" class="tests">
            <i class="fa fa-plus" aria-hidden="true"></i> 
            <span class="mx-3">Create Application</span>
        </router-link>
      </div>
      <div class="active my-3">
       
        <router-link :to="{name: 'adminentries'}" class="tests">
            <i class="fa fa-download" aria-hidden="true"></i> 
            <span class="mx-3">Application Entries</span>
        </router-link>
      </div>
      <div class="active">
        <router-link :to="{name: 'adminquestion'}" class="tests">
            <i class="fa fa-file" aria-hidden="true"></i> 
            <span class="mx-3">Assessment</span>
        </router-link>
      </div>
      <div class="active my-3">
        <router-link :to="{name: 'applicantDashboard'}" class="tests">
            <i class="fa fa-refresh" aria-hidden="true"></i> 
            <span class="mx-3">Assessment History</span>
        </router-link>
      </div>
      <div class="active">
         <router-link :to="{name: 'adminresult'}" class="tests">
            <i class="fa fa-plus" aria-hidden="true"></i> 
            <span class="mx-3">Results</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "adminbar",
  computed: {
    ...mapGetters(["getProfile"])
  },

  methods: {
    ...mapActions(["fetchAdminProfile"]),
    
  },

  created () {
    this.fetchAdminProfile()
  }

}
</script>


<style  scoped>
a.router-link-exact-active {
  color: #42b983;
}

.tests {
  color: #212529;
}
i{
  margin-right: 7px;
  font-size: 11px;
}
.sidebar {
  width: 292px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  background: #ffffff;
  min-height: 100%;
  left: 0px;
  top: 0px;
  position: fixed;
}
.applicant-image {
  width: 100%;
  /* height: 255px; */
  left: 0px;
  top: 0px;
  background: #5ABEFD;
  display: inline-block;
  text-align: center;
  padding-top: 50px;
}
.profile {
  width: 80px;
  height: 80px;
  border-radius: 50px;
  margin: auto;
}
.user-name {
  font-family: "Lato", sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.02em;
  color:#2B3C4E;
  margin-top: 20px;
}
.user-email {
  font-family: "Lato", sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color:#2B3C4E;
}
.sidebar-icon {
  margin-left: 40px;
}

.icon {
  margin-right: 25px;
  height: 12px;
  text-align: left;
}

</style>