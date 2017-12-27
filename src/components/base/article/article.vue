<template>
  <div class="container needsclick" @click="handleClick" v-if="article">
    <img :src="article.img_src" alt="">
    <div class="right_side">
      <div class="title">{{article.title}}</div>
      <div class="content">{{article.content}}</div>
      <div class="detail">
        <div class="seen">
          <i class="fa fa-eye"></i>{{article.watched}}</div>
        <div class="create_dt">{{article.create_dt}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  },
  props: {
    article: {
      type: Object,
      default: undefined
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/style/index';
.container
  width: 100%;
  height: 100px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $article_padding_bottom;
  img
    height: 80px;
    border: 4px solid #fff;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100px;
  .right_side
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 5px;
    height: 100%;
    padding: 5px 0;
    box-sizing: border-box;
    width: 70%;
    .title
      font-size: 16px;
      color: $article_title;
      width: 80%;
      hidden_text();
    .content
      color: $article_content;
      width: 85%;
      hidden_text();
    .detail
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 10px 0 0;
      box-sizing: border-box;
      .seen
        color: $article_content;
        i
          color: $normal_scroll_router_active;
      .create_dt
        color: $article_content;
</style>