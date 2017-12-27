<template>
  <div>
    <c-header title="发布"></c-header>
    <div class="wrapper">
      <Scroll class="scroll">
          <recommend></recommend>
      </Scroll>
    </div>
  </div>
</template>

<script>
import CHeader from "components/base/header/header";
import Scroll from "components/base/scroll/scroll";
import Recommend from "components/Main/tabview/recommend/recommend";
export default {
  components: {
    CHeader,
    Recommend,
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
  .scroll
    height: 100%;
    overflow: hidden;
</style>
