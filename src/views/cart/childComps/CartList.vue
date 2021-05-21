<template>
  <div class="cart-list">
      <div v-if="cartList.length===0" class="empty"><span>购物车空空如也</span></div>
    
    <scroll v-else  class="content" ref="scroll">
      <cart-list-item
        v-for="(item, index) in cartList"
        :key="index"
        :item-info="item"
      />
    </scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import { mapGetters } from "vuex";
import CartListItem from "./CartListItem.vue";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem,
  },
  computed: {
    ...mapGetters(["cartList"]),
  },
  activated() {
    if(this.cartList.length>0){
       this.$refs.scroll.refresh();
    }
   
  },
};
</script>

<style scoped>
.cart-list {
  height: 100%;
}
.content {
  height: 100%;
}
.empty{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  /* background-color:#eee;
  background-image: url(~assets/img/cart/emptyCart.png) ;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 200px 200px; */
}
</style>