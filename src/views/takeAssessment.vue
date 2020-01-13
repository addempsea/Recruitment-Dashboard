<template>
    <div>
        <div>
            <applicantSidebar/>
        </div>

        <div class="assessment-body">
            <Assessment/>
        </div>
    </div>
</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'
import Assessment from '@/components/Assessment.vue'
export default {
    name: 'test',
    components: {
       applicantSidebar,
       Assessment
  }
}
</script>
<style scoped>
.assessment-body {
    margin-left: 300px;
    padding: 80px 70px 50px 50px;
}
</style>