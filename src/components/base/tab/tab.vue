<template>
  <div class="tabs">
    <router-link tag="div" to="/home/main" class="tab" replace><i class="fa fa-home"></i><span>首页</span></router-link>
    <router-link tag="div" to="/home/quiz" class="tab" replace><i class="fa fa-commenting"></i><span>问卷</span></router-link>
    <router-link tag="div" to="/home/release" class="tab" replace><i class="fa fa-id-card"></i><span>发布</span></router-link>
    <router-link tag="div" to="/home/me" class="tab" replace><i class="fa fa-smile-o"></i><span>我的</span></router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
@import '~assets/style/variable';
.tabs
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: #fff;
  display: flex;
  .tab
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    i
      font-size: 16px;
  .router-link-active
    color: $normal_blue;
</style>
