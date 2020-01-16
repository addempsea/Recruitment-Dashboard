<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebars></AdminSidebars>
    </div>
    <div class="container col-8">
      <h2 class="my-5">Compose Assesment</h2>
      <div>
        <p class="text-center bg-success">{{apiResponse.message}}</p>
        <form enctype="multipart/form-data" @submit.prevent="submitForm">
          <div class="row">
            <div class="fileup">
              <div class="upload-btn-wrapper">
                <button class="btns">
                  <strong>+</strong> choose file
                </button>
                <input type="file" name="file" ref="file" @change="handleFileUpload"/>
              </div>
            </div>
            <div class="input-group mb-3 col">
              <div class="">
                <label class="input-group-text" for="inputGroupSelect01">Answer</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01" v-model="correctAns">
                <option selected>Choose...</option>
                <option value= 0>option A</option>
                <option value= 1>option B</option>
                <option value= 2>option C</option>
                <option value= 3>option D</option>
              </select>
            </div>
          </div>
          
          <div class="form-group my-3">
            <label for>Question</label>
            <textarea class="form-control" name id rows="4" v-model="question"></textarea>
          </div>
          <div class="row my-4">
            <div class="col">
              <label>Option A</label>
              <input type="text" class="form-control"  v-model="options[0]"/>
            </div>
            <div class="col">
              <label>Option B</label>
              <input type="text" class="form-control" v-model="options[1]" />
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
              <label>Option C</label>
              <input type="text" class="form-control" v-model="options[2]"/>
            </div>
            <div class="col">
              <label>Option D</label>
              <input type="text" class="form-control" v-model="options[3]" />
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary" type="submit">Add question</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebars from "../components/AdminSidebars";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "adminQstn",
  components: {
   AdminSidebars
  },

  data() {
    return {
      file: '',
      correctAns: '',
      options: [],
      question: ''
    }
  },

  computed: {
    ...mapGetters(["apiResponse"]),

    isValid() {
      if (
        this.correctAns == "" ||
        this.file == "" ||
        this.question == "" ||
        this.options == ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    ...mapActions(['createQstn']),
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    submitForm() {
      if (this.isValid) {
        let formData = new FormData();
        formData.append("file", this.file);
        formData.append("question", this.question);
        formData.append("correctAns", this.correctAns);
        
        for (let i = 0; i < this.options.length; i++) {
          let option = this.options[i]
         formData.append("options", option); 
        }

        console.log(formData);
        this.createQstn(formData);
      } else {
        alert("All fields are required");
      }
    }
  },

  watch: {
    apiResponse(val) {
      if (val.type == "success") {
        setTimeout(() => {
          val.message = " "
        }, 3000);
      }
    }
  }
};
</script>

<style scoped> 
h2 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2b3c4e;
}

.upload-btn-wrapper {
  position: relative;
  overflow: hidden;
  display: inline-block;
}

.btns {
  border: 1.55px dashed #2b3c4e;
  box-sizing: border-box;
  color: #2b3c4e;
  background-color: white;
  padding: 46px 185px;
  border-radius: 8px;
  font-size: 16px;
  text-align: center;
  /* font-weight: bold; */
}

.upload-btn-wrapper input[type="file"] {
  font-size: 100px;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0;
}
</style>