<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      :titles="titles"
      ref="tabControl1"
      @tabClick="tabClick"
      class="tab-control"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <home-recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control :titles="titles" ref="tabControl2" @tabClick="tabClick" />
      <goods-list :goods="showGoods" />
    </scroll>
    <!-- 需要监听组建的原生事件时需要native修饰符 -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childCompnents/HomeSwiper";
import HomeRecommendView from "./childCompnents/HomeRecommendView";
import FeatureView from "./childCompnents/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll.vue";

import { getHomeMultidata, getHomeGoods } from "api/home";
import {itemListenerMixin,backTopMixin} from 'common/minxin'


export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
  },
  mixins:[itemListenerMixin,backTopMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      
    };
  },
  created() {},
  mounted() {
    //   1、请求多个数据
    this.handleBanner();
    // 2、请求商品数据
    this.handleGoods("pop");
    this.handleGoods("new");
    this.handleGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    // 1、保存Y值
    this.saveY = this.$refs.scroll.getScrollY();
    // 2、取消全局事件的监听
    this.$bus.$off('itemImageLoad',this.itemImgListener)
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      // 1、判断BackTop是否显示
      this.listenShowBackTop(position)
      // 2、决定tabControl是否吸顶（position:fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      // 1、监听图片是否加载完
      this.handleGoods(this.currentType);
      // 2、调用方法进行一次刷新
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
    },
    swiperImageLoad() {
      // 2、获取tabControl的offsetTOP
      // 所有组建都有一个属性$el:用于获取组件中的元素
      // console.log(this.$refs.tabControl.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求相关方法
     */
    handleBanner() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    handleGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}
.home-nav {
  background-color: var(--color-tint);
  color: #ffffff;
  /* position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9; */
}

.content {
  /* height:300px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
/* .content{
  height: calc(100%-93px);
  overflow: hidden;
  margin-top: 44px;
} */
.tab-control {
  position: relative;
  z-index: 9;
}
</style>