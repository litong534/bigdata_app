<template>
  <div class="container">
    <quiz-item></quiz-item>
  </div>
</template>

<script>
import QuizItem from "components/base/quizitem/quizitem";
export default {
  components: {
    QuizItem
  }
};
</script>

<style lang="stylus" scoped>
.container
  padding: 10px;
  box-sizing: border-box;
</style>
