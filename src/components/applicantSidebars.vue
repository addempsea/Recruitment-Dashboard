<template>
  <div class="sidebar">
    <div class="applicant-image">
      <div class="profile">
        <img src="../assets/Ellipse.png" class="logo" />
      </div>
      <h1 class="user-name">Josh Doe</h1>
      <p class="user-email">j.doe@enyata.com</p>
    </div>

    <div class="sidebar-icon">
      <div class="active">
        <router-link :to="{name: 'applicantDashboard'}">
          <button class="logout">
            <i class="fa fa-dashboard" aria-hidden="true"></i> 
            <span class="mx-3">Dashboard</span>
          </button>
        </router-link>
        <!-- <i class="fa fa-dashboard"></i>
        <span class="icon">
          Dashboard
        </span> -->
      </div>
      <div class="active">
        <i class="fa fa-plus"></i>
        <span class="icon">
          Create Application
        </span>
      </div>
      <div class="active">
        <i class="fa fa-download"></i>
        <span class="icon">
          Application Entries
        </span>
      </div>
      <div class="active">
        <i class="fa fa-file"></i>
        <span class="icon">
          Compose Assessment
        </span>
      </div>
      <div class="active">
        <i class="fa fa-refresh"></i>
        <span class="icon">
          Assessment History
        </span>
      </div>
      <div class="active">
        <i class="fa fa-plus"></i>
        <span class="icon">
          Results
        </span>
      </div>
    </div>
  </div>
</template>


<style  scoped>
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
  /* padding-top: 50px; */
  margin-left: 40px;
}
/* .sidebar-icon > div {
  height: 50px;
  width: 100%;
} */
.icon {
  margin-right: 25px;
  height: 12px;
  text-align: left;
}
/* .sidebar-icon > div > p {
  display: flex;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 0 35px;
  text-align: left;
  padding-top: 10px;

} */
.sidebar-icon > div.active > span {
  color: #2b3c4e;
}
.active {
  padding-top: 25px;
  margin-bottom: 1px;
}



</style>