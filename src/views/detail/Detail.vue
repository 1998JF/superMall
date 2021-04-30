<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad" />
      <detail-param-info ref="params" :param-info="paramInfo" />
      <detail-comment-info ref="comment" :comment-info="commentInfo" />
      <goods-list ref="recommend" :goods="recommends" class="good-list" />
    </scroll>
    <detail-bottom-bar class="bottom-bar" @addToCart="addToCart" />
    <!-- 返回顶部 -->
    <back-top @click.native="backClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import BackTop from 'components/content/backTop/BackTop.vue';

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods, Shop, GoodsParam, getRecommend } from "api/detail";
import { itemListenerMixin,backTopMixin } from "common/minxin";
import { debounce } from "common/utils";
export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
  },
  mixins: [itemListenerMixin,backTopMixin],
  data() {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
    };
  },
  created() {
    // 1、保存传入的iid
    this.iid = this.$route.params.iid;
    this.handleData();
    this.handleRecommends();
  },
  mounted() {},
  destroyed() {
    // 2、取消全局事件的监听
    this.$bus.$off("itemImageLoad", this.itemImgListener);
  },
  methods: {
    // 网络请求获取数据
    handleData() {
      // 请求详情数据
      getDetail(this.iid).then((res) => {
        // 1、获取数据
        const data = res.result;
        //2、 获取顶部的图片轮播数据
        this.topImages = data.itemInfo.topImages;
        // 3、获取商品信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        // 4、创建店铺信息的对象
        // this.shop = new Shop(data.shopInfo);
        this.shop = data.shopInfo;
        // 5、保存商品的详情数据
        this.detailInfo = data.detailInfo;
        // 6、获取参数的信息
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        // this.paramInfo = data.itemParams
        // 7、取出评论的信息
        if (data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    // 请求推荐数据
    handleRecommends() {
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    },
    imageLoad() {
      this.$refs.scroll.refresh();
      // 获取详情页标题对应内容商品、参数、评论、推荐的开始高度
      this.themeTopYs = [];
      this.themeTopYs.push(0);
      this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
      this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
      this.themeTopYs.push(Number.MAX_VALUE);
    },
    // 点击详情页标题页面滚动到相应位置
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200);
    },

    // 随页面滚动位置切换成相应的详情标题
    contentScroll(position) {
      //  1、获取Y值
      const positionY = -position.y;
      // 2、postionY和主题中的只进行对比
      let length = this.themeTopYs.length;
      // hack做法
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex != i &&
          positionY >= this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
      // 3、是否显示回到顶部
      this.listenShowBackTop(position)
      // 普通做法
      // for(let i=0;i<length;i++){
      //   if(this.currentIndex !=i && ((i<length-1 && positionY >= this.themeTopYs[i]
      //   && positionY < this.themeTopYs[i+1]) || (i===length - 1 && positionY >= this.themeTopYs[i]))){
      //     this.currentIndex = i;
      //     this.$refs.nav.currentIndex = this.currentIndex
      //   }
      // }
    },
    addToCart(){
    //  1、获取购物车需要展示的信息
    const product = {
      image : this.topImages[0],
      title : this.goods.title,
      desc : this.goods.desc,
      price : this.goods.relPrice,
      iid : this.iid
    }
    console.log(product,'prodct', this.$store);
    // 2、将商品添加到购物车里
    this.$store.commit('addCart',product)
    }
    
  },
};
</script>

<style scoped>
/* #detail {
  position: relative;
  z-index: 9;
  background-color: #ffffff;
  height: 100vh;
}
.detail-nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
} */
#detail {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

}
.detail-nav {
 width: 100%;
}
.content {
 flex: 1;
 overflow: auto;
}
.bottom-bar{
  width: 100%;
}
</style>