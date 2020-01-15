<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebars></AdminSidebars>
    </div>
    <div class="container col-9">
      <h2 class="my-5">Create Application</h2>
      <div>
        <form action>
          <div class="row">
            <div class="fileup col">
              <div class="upload-btn-wrapper">
                <button class="btns">
                  <strong>+</strong> choose file
                </button>
                <input type="file" name="file" ref="file" />
              </div>
            </div>
            <div class="col">
              <label>Link</label>
              <input type="text" class="form-control"  />
            </div>
           
          </div>
          
          <div class="row my-4">
            <div class="col">
              <label>Application closure date</label>
              <input type="date" class="form-control" />
            </div>
            <div class="col">
              <label>Batch ID</label>
              <input type="text" class="form-control"  />
            </div>
          </div>
          <div class="form-group my-3">
            <label for>Instructions</label>
            <textarea class="form-control" name id rows="4"></textarea>
          </div>
          <div class="text-center">
            <button class="btn btn-primary">Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebars from "../components/AdminSidebars";
export default {
  name: "applicationAdmin",
  components: {
    AdminSidebars
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