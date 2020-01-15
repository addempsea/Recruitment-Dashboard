<template>
  <div class="row">
    <div class="col-3">
      <AdminSidebars/>
    </div>
    <div class="container my-5 col-8">
      <h3>Results - Batch 2</h3>
      <h6>Comprises of all that applied for batch 2</h6>

      <div class="my-4">
        <table class="table table-borderless">
          <thead class="heading">
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
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
h3 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  /* identical to box height */

  letter-spacing: -0.02em;

  color: #2b3c4e;
}

h6 {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  color: #4f4f4f;
}

.heading {
  background: #2B3C4E;
}
</style>