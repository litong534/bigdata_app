<template>
  <div>
    <c-header title="教育大数据"></c-header>
    <div class="panel">
      <scroll class="scroll">
        <div>
          <div class="slider-wrapper" ref="wrapper">
            <slider>
              <div>
                <a>
                  <img src="~assets/images/header/1.jpg" alt="">
                  <div class="title">
                    <div>【智库数据】2017年国家级人才项目'争霸'</div>
                  </div>
                </a>
              </div>
              <div>
                <a>
                  <img src="~assets/images/header/2.jpg" alt="">
                  <div class="title">
                    <div>【大学】2017年10大高教关键词重磅出炉</div>
                  </div>
                </a>
              </div>
              <div>
                <a>
                  <img src="~assets/images/header/3.jpg" alt="">
                  <div class="title">
                    <div>【观点】用大数据技术助力教育变革</div>
                  </div>
                </a>
              </div>
              <div>
                <a>
                  <img src="~assets/images/header/4.jpg" alt="">
                  <div class="title">
                    <div>【就业】820万大学生即将毕业，在哪儿上班让人更满意?</div>
                  </div>
                </a>
              </div>
            </slider>
          </div>
          <div class="slider_tab">
            <router-link to="/home/main/recommend" tag="div" class="tab" replace>
              <i class="fa fa-id-card-o"></i>最新推荐</router-link>
            <router-link to="/home/main/quiz" tag="div" class="tab" replace>
              <i class="fa fa-commenting"></i>最新问卷</router-link>
            <router-link to="/home/main/release" tag="div" class="tab" replace>
              <i class="fa fa-id-card"></i>热点发布</router-link>
          </div>
          <router-view></router-view>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import CHeader from "components/base/header/header";
import Slider from "components/base/slider/slider";
import Scroll from "components/base/scroll/scroll";
export default {
  components: {
    CHeader,
    Slider,
    Scroll
  },
  mounted() {
    this._initTitleWidth();
    window.addEventListener('resize', () => {
      this._initTitleWidth();
    });
  },
  methods: {
    _initTitleWidth() {
      this.wrapper = this.$refs.wrapper;
      let width = this.wrapper.clientWidth;
      let childs = this.wrapper.querySelectorAll('.title');
      for(let child of childs) {
        child.style.width = `${width}px`;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
@import "~assets/style/index";
.panel
  position: fixed;
  top: 40px;
  bottom: 40px;
  width: 100%;
  overflow: hidden;
  .scroll
    height: 100%;
    overflow: hidden;
    .slider-wrapper
      width: 100%;
      overflow: hidden;
      position: relative;
      .title
        padding: 10px;
        text-align: left;
        position: absolute;
        bottom: 0;
        color: #fff;
        box-sizing: border-box;
        background: rgba(0, 0, 0, 0.3);
        div
          width: 70%;
          hidden_text()
    .slider_tab
      height: 50px;
      width: 100%;
      display: flex;
      background: $normal_scroll_router;
      .tab
        flex: 1;
        display: flex;
        color: $normal_white;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        font-weight: lighter;
        font-size: 12px;
        &.router-link-active
          color: $normal_scroll_router_active;
        i
          font-size: 18px;
</style>
