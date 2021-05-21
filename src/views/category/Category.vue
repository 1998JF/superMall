<template>
  <div class="category">
    <!-- 头部 -->
    <nav-bar class="navbar">
      <div slot="center">商品分类</div>
    </nav-bar>
    <!-- 中间内容 -->
    <div class="content">
      <!-- 左侧分类列表 -->
      <tab-menu
        class="tabmenu"
        :categories="categoryList"
        @selectItem="selectItem"
      />
      <!-- 右侧商品 -->
        <scroll
        class="shop"
          :data="[categoryData]"
          ref="scroll"
          :probe-type="3"
          :pull-up-load="true"
          @scroll="contentScroll"
          @pullingUp="loadMore"
        >
          <tab-content-category :subcategories="showSubcategory" />
          <tab-control
            :titles="['综合', '新品', '销量']"
            @tabClick="tabClick"
          />
          <goods-list :goods="showCategoryDetail" />
        </scroll>

      <back-top @click.native="backClick" v-show="isShowBackTop" />
    </div>
  </div>
</template>

<script>
import { getCategory, getSubcategory, getCategoryDetail } from "api/category";

import TabMenu from "./childComps/TabMenu.vue";
import TabContentCategory from "./childComps/TabContentCategory.vue";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll.vue";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodsList from "components/content/goods/GoodsList.vue";

import { POP, NEW, SELL } from "common/const";
import {
  tabControlMixin,
  itemListenerMixin,
  backTopMixin,
} from "common/minxin";
import BackTop from "components/content/backTop/BackTop.vue";
export default {
  name: "Category",
  components: {
    TabMenu,
    TabContentCategory,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop,
  },
  mixins: [tabControlMixin, itemListenerMixin, backTopMixin],
  data() {
    return {
      categoryList: [],
      // 每一类商品的数据
      categoryData: {},
      currentIndex: -1,
    };
  },
  mounted() {
    this.handleCateGory();
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {};
      return this.categoryData[this.currentIndex].subcategories;
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return [];
      return this.categoryData[this.currentIndex].categoryDetail[
        this.currentType
      ];
    },
  },
  methods: {
    // 获取分类列表
    handleCateGory() {
      getCategory().then((res) => {
        // 1、获取分类数据
        this.categoryList = res.data.category.list;
        // 2、初始化每个类别的子数据
        for (let i = 0; i < this.categoryList.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          };
        }
        // console.log('res-category',this.categoryData);
        // 3、请求第一个分类的数据
        this.handleSubCategories(0);
      });
    },
    // 获取分类对应的商品数据
    handleSubCategories(index) {
      this.currentIndex = index;
      const maitKey = this.categoryList[index].maitKey;
      getSubcategory(maitKey).then((res) => {
        this.categoryData[index].subcategories = res.data;
        this.categoryData = { ...this.categoryData };
        this.handleCateGoryDetail(POP);
        this.handleCateGoryDetail(NEW);
        this.handleCateGoryDetail(SELL);
      });
    },
    // 获取详情数据
    handleCateGoryDetail(type) {
      // 1、获取请求的minWallKey
      const miniWallkey = this.categoryList[this.currentIndex].miniWallkey;
      // 2、发送请求，传入miniWallkey和type
      getCategoryDetail(miniWallkey, type).then((res) => {
        // 3、将获取的数据保存下来
        this.categoryData[this.currentIndex].categoryDetail[type] = res;
        this.categoryData = { ...this.categoryData };
      });
    },

    /**
     * 事件响应相关的方法
     */
    selectItem(index) {
      this.handleSubCategories(index);
    },
    contentScroll(position) {
      // 1、判断BackTop是否显示
      this.listenShowBackTop(position);
      // 2、决定tabControl是否吸顶（position:fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      // 1、监听图片是否加载完
      this.handleCateGoryDetail(this.currentType);
      // 2、调用方法进行一次刷新
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
    },
  },
};
</script>

<style scoped>
.category {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.navbar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.content {
  flex: 1;
  margin-bottom: 49px;
  display: flex;
  overflow: hidden;
}
.tabmenu {
  width: 25%;
  overflow: hidden;
}
.shop {
  flex: 1;
  padding: 20px 8px;
  /* background-color: powderblue; */
}
</style>