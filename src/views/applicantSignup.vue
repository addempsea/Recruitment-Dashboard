<template>
  <div>
    <div class="form-container-head mt-3">
      <img src="../assets/enyata-logo.png" alt="enyata" class="enyata-logo" />
      <h3>enyata</h3>
      <p>Applicant Form</p>
    </div>
    <div class="form-wrapper container" >
      <form class="mx-5 p-5" enctype="multipart/form-data" @submit.prevent="submitForm">
        <div class="fileup">
          <div class="upload-btn-wrapper">
            <button class="btns">+ upload cv</button>
            <input type="file" name="file" ref="file" @change="handleFileUpload" />
          </div>
        </div>
        <div class="container col-6 my-2">
          <p class="response" :class="[apiResponse ? apiResponse.type: '']">{{apiResponse.message}}</p>
        </div>
        <div class="row mt-3">
          <div class="col">
            <label>First Name</label>
            <input type="text" class="form-control" v-model="fname" name="fname" />
          </div>
          <div class="col">
            <label>Last Name</label>
            <input type="text" class="form-control" v-model="lname" name="lname" />
          </div>
        </div>

        <div class="row rows">
          <div class="col">
            <label>Email</label>
            <input type="email" class="form-control" v-model="email" name="email" />
          </div>
          <div class="col">
            <label>Date of Birth</label>
            <input type="date" class="form-control" v-model="dob" name="dob" />
          </div>
        </div>

        <div class="row rows">
          <div class="col">
            <label>Address</label>
            <input type="text" class="form-control" v-model="address" name="address" />
          </div>
          <div class="col">
            <label>University</label>
            <input type="text" class="form-control" v-model="university" name="university" />
          </div>
        </div>

        <div class="row rows">
          <div class="col">
            <label>Course of Study</label>
            <input type="text" class="form-control" v-model="course" name="course" />
          </div>
          <div class="col">
            <label>CGPA</label>
            <input type="text" class="form-control" v-model="cgpa" name="cgpa" value="7"/>
          </div>
        </div>

        <button class="btn btn-primary mt-3 p-2 col-3" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "application",
  data() {
    return {
      file: "",
      fname: "",
      lname: "",
      email: "",
      cgpa: "",
      dob: "",
      address: "",
      course: "",
      university: "",
      message: "",
      profile: []
    };

  },

  async mounted() {
    await this.fetchProfile(),
    this.profile = await this.getProfile,
    this.fname = await this.getProfile.fname,
    this.lname = await this.getProfile.lname,
    this.email = await this.getProfile.email
  },

  computed: {
    ...mapGetters(["apiResponse", "getProfile"]),

    isValid() {
      if (
        this.email == "" ||
        this.file == "" ||
        this.fname == "" ||
        this.lname == "" ||
        this.address == "" ||
        this.university == "" ||
        this.dob == "" ||
        this.course == ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    ...mapActions(["application", "fetchProfile"]),

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
      if(!allowedTypes.includes(this.file.type)){
        this.message = "Filetype is wrong!!"
      }
      else if(this.file.size>500000){
        this.message = 'Too large, max size allowed is 500kb'
      } else {
        this.message = ""
      }
      
    },

    submitForm() {
      if (this.isValid) {
        let formData = new FormData();
        formData.append("file", this.file);
        formData.append("lname", this.lname);
        formData.append("fname", this.fname);
        formData.append("email", this.email);
        formData.append("address", this.address);
        formData.append("dob", this.dob);
        formData.append("cgpa", this.cgpa);
        formData.append("course", this.course);
        formData.append("university", this.university);
        console.log(formData);
        this.application(formData);
        
      } else {
        alert("All fields are required");
      }
    }
  },

  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          this.$router.push({ name: "applicantDashboard"});
          val.message = ' '
        }, 3000);
      }
    }
  }
};
</script>

<style scoped>
.fileup {
  display: flex;
  justify-content: center;
}

.former {
  border: 2px dashed #2b3c4e;
  width: 211px;
  height: 49px;
}

.icon {
  margin-right: 15px;
}
.enyata-logo {
  width: 49px;
  height: 52px;
}
.form-container-head {
  text-align: center;
}

.form-container-head h3 {
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}
.form-container-head p {
  font-family: "Lato", sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 24px;
  color: #2b3c4e;
}
.form-wrapper {

  background: #ffffff;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
}

.form {
  width: 90%;  
  margin-left: auto;
  margin-right: auto;
  display: block;

}
.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btns {
  border: 2px dashed #2B3C4E;
  color: #2B3C4E;
  background-color: white;
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
label {
  font-family: Lato, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #2b3c4e;
  /* margin-left:400px; */
  /* margin-right: auto; */
}
input {
  border: 1px solid #2b3c4e !important ;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;

  margin-left: auto;
  margin-right: auto;
}
.rows {
  margin-top: 20px;
}
.btn {
  
  height: 50px; 
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 40px; */
  display: block;
  background: #2b3c4e;
  border-radius: 4px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
  border: none;
}

.response {

  text-align: center;
  
}
.response.failed {
  background-color: red;
  color: #2b3c4e;
}
.response.success {
  background-color: green;
  color: #2b3c4e;
}
</style>
