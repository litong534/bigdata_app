<template>
  <div>
    <c-header title="问卷"></c-header>
    <div class="wrapper">
      <Scroll class="scroll">
          <quiz-item></quiz-item>
      </Scroll>
    </div>
  </div>
</template>

<script>
import CHeader from "components/base/header/header";
import Scroll from "components/base/scroll/scroll";
import QuizItem from "components/base/quizitem/quizitem";
export default {
  components: {
    CHeader,
    QuizItem,
    Scroll
  }
};
</script>

<style lang="stylus" scoped>
.wrapper
  position: fixed;
  top: 40px;
  left: 0;
  right: 0;
  bottom: 40px;
  padding: 5px;
  box-sizing: border-box;
  .scroll
    height: 100%;
    overflow: hidden;
</style>
