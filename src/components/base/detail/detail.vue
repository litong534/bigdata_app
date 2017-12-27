<template>
  <div>
    <c-header :isGoBack="true"></c-header>
    <div class="fixedpanel">
      <Scroll class="scroll">
        <div v-html="article"></div>
      </Scroll>
    </div>
  </div>
</template>

<script>
import CHeader from "components/base/header/header";
import datas from "assets/json/article";
import Scroll from "components/base/scroll/scroll";
export default {
  components: {
    CHeader,
    Scroll
  },
  data() {
    return {
      article: ""
    };
  },
  mounted() {
    this.article = datas[`${this.$route.params.id}`];
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/style/index';
.fixedpanel
  position: fixed;
  top: 40px;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  .scroll
    height: 100%;
</style>
