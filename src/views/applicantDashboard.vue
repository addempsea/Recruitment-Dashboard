<template>
    <div>
        <div id="app">
            <applicantSidebar/>
        </div>

        <div class="dashboard-head"> 
            <div class="head">
                <p>Dashboard</p>
                <span>Your Application is currently being review, you wil be notified if successful</span>
            </div>

            <div class="time-status">
                <div class="time">
                    <p>Date of Application</p>
                    <span> 09.09.19</span>
                    <div class="horizontal"></div>
                    <p class="small-text">4 days since applied</p>
                </div>
                <div class="app-status">
                    <p>Application Status</p>
                    <span> Pending</span>
                    <div class="app-status2"></div>
                    <p class="small-text">We will get back to you</p>
                </div>
            </div>

            <div class="assessment">
                <div class="update">
                    <p>Update</p>
                    <div class="horizontal-line">
                        <hr><br><br><br><hr><br><br><br><hr><br><br><br><hr>
                    </div>
                </div>
                <div class="take-assessment">
                    <p>Take Assessment</p>
                    <div class="take-assessment-body">
                        <p>We have 4 days left until the next assessment <br> Watch this space</p>
                         <router-link to='/takeAssessment'><button>Take Assessment</button></router-link>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>


<script>
import applicantSidebar from '@/components/applicantSidebar.vue'
// @ is an alias to /src


export default {
  name: 'applicantDashboard',
  components: {
    applicantSidebar

  }
}

</script>


<style scoped>
.dashboard-head {
    margin-left: 292px;
    margin-top: 107px;
    margin-bottom: 86px;
    padding-left: 47px;
}
.head p {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 43.5555px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
}
.head span {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 500;
    font-size: 16px;
    color: #2B3C4E;
}
.time-status {
    display: flex;
    margin-top: 61px;
}
.horizontal-line {
    padding-top: 60px;
    width: 400px;
    padding-left:40px;
    color: solid #CECECE; 
    
}
.time p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
}
.time span {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    color: #2B3C4E;
}
.small-text {
    font-family: 'Lato';
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    color: #4F4F4F;
}
.app-status {
    margin-left: 87px;
}

.app-status p {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: #4F4F4F;
}
.app-status span {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 48px;
    color: #2B3C4E;
}
.horizontal {
    width: 80%;
    height: 4px;
    background: #006DF0;
    border-radius: 4px;
}
.app-status2 {
    width: 80%;
    height: 4px;
    background: #F09000;
    border-radius: 4px;
}
.assessment {
    margin-top: 97px;
    display: flex;
}

.update {
    width: 482px;
    height: 453px;
    border: 1px solid #ECECF9;
    box-sizing: border-box;
    border-radius: 4px;
}
.update p {
    font-family: 'Lato';
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    margin-right: 350px;
    margin-top: 25px;
}
.take-assessment {
    width: 482px;
    height: 453px;
    border: 1px solid #ECECF9;
    box-sizing: border-box;
    border-radius: 4px;
    margin-left: 80px;
}
.take-assessment p {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: -0.02em;
    color: #2B3C4E;
    /* padding-left: 200px; */
    margin-top: 25px;
}
.take-assessment-body {
    margin-top: 189px;
}
.take-assessment-body p {
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16.7273px;
    text-align: center;
    color: #4F4F4F;
}
button {
    width: 50%;
    max-width: 205px;
    height: 41px;
    background: #B1B1B1;
    border-radius: 4px;
    border: none;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: #FFFFFF;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
</style>