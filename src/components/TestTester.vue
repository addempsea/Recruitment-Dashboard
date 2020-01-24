<template>
  <div class="container mt-5">
    <button @click="downloadWithCSS">Download PDF WITH CSS</button>
    <br>
    <br>
    <button @click="download">Download PDF WITHOUT CSS</button>
    <div ref="content" class="content">
      <div class="mt-5">
        <h2 class="my-5 mx-5">
          enyata <br> academy
        </h2>
        <h6 class="my-5">
        </h6>
      </div>
    </div>
  </div>
</template>

<script>

import jsPDF from "jspdf";
import html2canvas from "html2canvas"
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    downloadWithCSS() {
      const doc = new jsPDF();
      /** WITH CSS */
      var canvasElement = document.createElement('canvas');
      html2canvas(this.$refs.content, { canvas: canvasElement }).then(function (canvas) {
        const img = canvas.toDataURL("image/jpeg", 0.8);
        doc.addImage(img,'JPEG', 10, 10);
        doc.save("sample4.pdf");
      });
    },

    download() {
      const doc = new jsPDF();
      /** WITHOUT CSS */
      const contentHtml = this.$refs.content.innerHTML;
      doc.fromHTML(contentHtml, 15, 15, {
          width: 170
        });
      doc.save("sample.pdf");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content {
 
  background: url('../assets/6.png') no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
  color: blanchedalmond;
  
}
</style>
