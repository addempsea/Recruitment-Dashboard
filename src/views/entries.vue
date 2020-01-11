<template>
  <div>
    <div>
      <div class="batch1">
        <h6>Entries - Batch 2</h6>
        <img src="../assets/Polygon.png" alt="" />
      </div>
      <p>Comprises of all that applied for batch 2</p>
    </div>
    <div>
      <table class="table">
  <thead class="table-head">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">DOB - Age</th>
      <th scope="col">Adress</th>
      <th scope="col">University</th>
      <th scope="col">CGPA</th>
      
    </tr>
  </thead>
  <tbody class='table borderless' >
    <tr class="different-row">
      <td>Ify Chinke</td>
      <td>ify@enyata.com</td>
      <td>12/09/19 - 22</td>
      <td>3 Sabo Ave, Yaba, Lagos</td>
      <td>University of Nigeria</td>
      <td>5.0</td>
    </tr>
    <tr>
       <td>Ify Chinke</td>
      <td>ify@enyata.com</td>
      <td>12/09/19 - 22</td>
      <td>3 Sabo Ave, Yaba, Lagos</td>
      <td>University of Nigeria</td>
      <td>5.0</td>
    </tr>
    <tr>
      <td>Ify Chinke</td>
      <td>ify@enyata.com</td>
      <td>12/09/19 - 22</td>
      <td>3 Sabo Ave, Yaba, Lagos</td>
      <td>University of Nigeria</td>
      <td>5.0</td>
    </tr>
  </tbody>
</table>
    </div>
  </div>
</template>

<style scoped>
.different-row {
    background: #FFFFFF;
    box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
    border-radius: 30px;
}
.table-head {
    background: #2B3C4E;
    color: white;
}
.borderless td,
.borderless th {
  border: none;
}
.batch1 {
  display: flex;
}
img {
  width: 12px;
  height: 12px;
  margin-left: 30px;
  margin-top: 20px;
}
h6 {
  font-family: Lato;
  font-style: normal;
  font-weight: 300;
  font-size: 43.5555px;
  line-height: 52px;
  color: #2b3c4e;
}
p {
  font-family: Lato;
  font-style: italic;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #2b3c4e;
}
</style>
