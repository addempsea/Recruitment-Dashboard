<template>
  <div class="sidebar">
    <div class="applicant-image">
      <div class="profile">
        <img src="../assets/Ellipse.png" class="logo" />
      </div>
      <h1 class="user-name">Jane Doe</h1>
      <p class="user-email">doe@enyata.com</p>
    </div>

    <div class="sidebar-icon">
      <div class="active">
        <p><img src="../assets/dashboard.png" class="icon" />Dashboard</p>
      </div>
      <div>
        <p><img src="../assets/assessment.png" class="icon" />Assessment</p>
      </div>
      <br />
      <br />
      <div>
        <p><img src="../assets/Layer.png" class="icon" />Log Out</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  height: 255px;
  left: 0px;
  top: 0px;
  background: #2b3c4e;
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
  color: #fff;
  margin-top: 20px;
}
.user-email {
  font-family: "Lato", sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #fff;
}
.sidebar-icon {
  padding-top: 50px;
}
.sidebar-icon > div {
  height: 50px;
  width: 100%;
}
.icon {
  margin-right: 25px;
}
.sidebar-icon > div > p {
  display: flex;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #2b3c4e;
  padding: 18px 35px 12px 35px;
  text-align: left;
}
.sidebar-icon > div.active > p {
  font-weight: bold;
  color: #2b3c4e;
  border-left: 4px solid #31d283;
}
</style>
