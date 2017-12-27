<template>
<div>
  <router-view></router-view>
  <tab></tab>
</div>
</template>

<script>
import Tab from 'components/base/tab/tab';
export default {
  components: {
    Tab
  }
};
</script>

<style lang="stylus" scoped>

</style>
