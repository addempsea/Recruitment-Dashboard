<template>
  <div>
    <div>
      <AdminSidebar />
    </div>
    <div class="main">
      <composeAssessment />
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import composeAssessment from "@/views/composeAssessment.vue";
export default {
  name: "home",
  components: {
    AdminSidebar,
    composeAssessment
  }
};
</script>

<style scoped>
.main {
  margin-left: 300px;
  padding: 80px 70px 50px 70px;
}
</style>
