<template>
    <div>
        <div>
            <applicantSidebar/>
        </div>

        <div class="assessment-body">
            <QuestionPage/>
        </div>
    </div>
</template>

<script>
import applicantSidebar from '@/components/applicantSidebar.vue'
import QuestionPage from '@/components/QuestionPage.vue'
export default {
    name: 'home',
    components: {
       applicantSidebar,
       QuestionPage
  }
}
</script>
<style scoped>
.assessment-body {
    margin-left: 300px;
    padding: 80px 70px 50px 50px;
}
</style>