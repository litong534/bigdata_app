<template>
  <div class="header">
    <div class="adjust_space">
      <div class="goback" @click="goBack" v-if="isGoBack">
        <i class="fa fa-chevron-left"></i>返回
      </div>
    </div>
    <div class="content">{{title}}</div>
    <div class="adjust_space">
      <i class="fa fa-user-o"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    isGoBack: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~assets/style/index';
.header
  background: $normal_header_blue;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  height: 40px;
  color: $normal_white;
  font-size: 15px;
  .adjust_space
    flex: 1;
    &:first-child
      display: flex;
      justify-content: flex-start;
      align-items: center;
      i
       margin: 0 5px 0 10px;
    &:last-child
      display: flex;
      justify-content: flex-end;
      font-size: 18px;
      margin-right: 10px;
</style>
