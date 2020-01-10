<template>
  <div>
    <div>
      <AdminSidebar />
    </div>
    <div class="main">
      <createPage />
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/AdminSidebar.vue";
import createPage from "@/components/createPage.vue";
export default {
  name: "home",
  components: {
    AdminSidebar,
    createPage
  }
};
</script>

<style scoped>
.main {
  margin-left: 300px;
  padding: 80px 70px 50px 70px;
}
</style>
