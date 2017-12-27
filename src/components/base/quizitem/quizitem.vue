<template>
  <div class="container needsclick" @click="handleClick">
    <div class="img">
      <img src="~assets/images/quiz/quiz.jpg" alt="">
    </div>
    <div class="bottom_side">
      <div class="title">关于大学生消费情况的调查问卷</div>
      <div class="content">关于大学生消费情况的调查问卷</div>
      <div class="detail">
        <div class="seen">
          <i class="fa fa-eye"></i>760</div>
        <div class="create_dt">2017年12月28日</div>
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
  height: 235px;
  padding: 10px;
  background: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid $article_padding_bottom;
  .img
    width: 100%;
    overflow: hidden;
    height: 70%;
    position: relative;
    border-radius: 10px;
    img
    width: 100%;
  .bottom_side
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: flex-start;
    margin-left: 5px;
    width: 100%;
    box-sizing: border-box;
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