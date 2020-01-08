<template>
    <div>
        <div>
            <applicantSidebar/>
        </div>

        <div class="assessment-body">
            <Success/>
        </div>
    </div>
</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'
import Success from '@/components/Success.vue'
export default {
    name: 'home',
    components: {
       applicantSidebar,
       Success
  }
}
</script>
<style scoped>
.assessment-body {
    margin-left: 300px;
    padding: 80px 70px 50px 50px;
}
</style>