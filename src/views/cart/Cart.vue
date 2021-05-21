<template>
  <div class="cart">
    <!-- 导航 -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <!-- 购物车商品列表 -->
    <cart-list class="cart-list" />
    <!-- 底部汇总 -->
    <!-- <div class="cart-bottom"></div> -->
    <cart-bottom-bar class="cart-bottom" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList.vue";

import { mapGetters } from "vuex";
import CartBottomBar from './childComps/cartBottomBar.vue';
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar,
  },

  computed: {
    ...mapGetters(["cartLength", "cartList"]),
  },
};
</script>

<style scoped>
.cart{
   width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
.cart-list{
  flex: 1;
  overflow: hidden;
}
.cart-bottom{
  height: 44px;
  margin-bottom: 49px;
}

</style>