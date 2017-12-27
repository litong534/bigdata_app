<template>
  <div>
    <c-article v-for="(d, index) in arr" :key="d.key" :article="d" @click="showDetail(index)"></c-article>
  </div>
</template>

<script>
import CArticle from "components/base/article/article";
import json from "assets/json/recommend";
export default {
  components: {
    CArticle
  },
  data() {
    return {
      arr: ""
    };
  },
  methods: {
    showDetail(i) {
      this.$router.push(`/detail/${i}`);
    }
  },
  created() {
    this.arr = json;
  }
};
</script>

<style lang="stylus" scoped>
</style>
