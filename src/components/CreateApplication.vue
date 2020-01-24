<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebars></AdminSidebars>
    </div>
    <div class="container col-8">
      <h2 class="my-5">Create Application</h2>
      <p>{{apiResponse.message}}</p>
      <div>
        <form enctype="multipart/form-data" @submit.prevent="submitForm">
          <div class="row">
            <div class="fileup col">
              <div class="upload-btn-wrapper">
                <button class="btns">
                  <strong>+</strong> choose file
                </button>
                <input type="file" name="file" ref="file" @change="handleFileUpload"/>
              </div>
            </div>
            <div class="col">
              <label>Link</label>
              <input type="text" class="form-control"  v-model="link"/>
            </div>
           
          </div>
          
          <div class="row my-4">
            <div class="col">
              <label>Application closure date</label>
              <input type="date" class="form-control" v-model="closing_date"/>
            </div>
            <div class="col">
              <label>Batch ID</label>
              <input type="text" class="form-control"  v-model="batch_id"/>
            </div>
          </div>
          <div class="form-group my-3">
            <label for>Instructions</label>
            <textarea class="form-control" name id rows="4" v-model="instruction"></textarea>
          </div>
          <div class="text-center">
            <button class="btn btn-primary" type="submit">Submit</button>
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
  name: "applicationAdmin",
  data() {
    return {
      file: '',
      batch_id: '',
      link: '',
      closing_date: "",
      instructions: ""
    }
  },
  components: {
    AdminSidebars
  },
  computed: {
    ...mapGetters(["apiResponse"]),

    isValid() {
      if (
        this.link == "" ||
        this.file == "" ||
        this.batch_id == "" ||
        this.closing_date == "" ||
        this.instruction == ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  },

  methods: {
    ...mapActions(["createApp"]),

    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },

    submitForm() {
      if (this.isValid) {
        let formData = new FormData();
        formData.append("file", this.file);
        formData.append("batch_id", this.batch_id);
        formData.append("link", this.link);
        formData.append("closing_date", this.closing_date);
        formData.append("instruction", this.instruction);
        this.createApp(formData);
        this.file = '';
        this.batch_id =  '';
        this.link =  '';
        this.closing_date = "";
        this.instruction = "";
        
      } else {
        alert("All fields are required");
      }
    }
    
  },

};
</script>

<style scoped>
.fileup {
  display: flex;
  justify-content: center;
}

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
  padding: 46px 180px;
  border-radius: 8px;
  font-size: 12px;
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