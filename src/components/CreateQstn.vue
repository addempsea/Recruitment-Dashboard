<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebars></AdminSidebars>
    </div>
    <div class="container col-8">
      <h2 class="my-5">Compose Assesment</h2>
      <div>
        <form action>
          <div class="row">
            <div class="fileup">
              <div class="upload-btn-wrapper">
                <button class="btns">
                  <strong>+</strong> choose file
                </button>
                <input type="file" name="file" ref="file" />
              </div>
            </div>
            <div class="input-group mb-3 col">
              <div class="">
                <label class="input-group-text" for="inputGroupSelect01">Answer</label>
              </div>
              <select class="custom-select" id="inputGroupSelect01">
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
            <textarea class="form-control" name id rows="4"></textarea>
          </div>
          <div class="row my-4">
            <div class="col">
              <label>Option A</label>
              <input type="text" class="form-control"  />
            </div>
            <div class="col">
              <label>Option B</label>
              <input type="text" class="form-control"  />
            </div>
          </div>
          <div class="row mb-4">
            <div class="col">
              <label>Option C</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col">
              <label>Option D</label>
              <input type="text" class="form-control"  />
            </div>
          </div>
          <div class="text-center">
            <button class="btn btn-primary">Add question</button>
          </div>
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSidebars from "../components/AdminSidebars";
// @ is an alias to /src

export default {
  name: "adminQstn",
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