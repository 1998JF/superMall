<template>
  <div class="profile">
    <!-- 标题 -->
    <nav-bar class="navbar"><div slot="center">个人中心</div></nav-bar>
    <!-- 个人信息 -->
    <user-info />
    <!-- 商城信息 -->
    <account-info/>
    <!-- 会员信息 -->
    <normal-list-view  :dataList="orderList" />
    <!-- 我的购物车 -->
    <normal-list-view :dataList="serviceList" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import UserInfo from "./childComps/UserInfo.vue";
import AccountInfo from "./childComps/AccountInfo.vue";
import NormalListView from "./childComps/NormalListView.vue";
export default {
  name: "Profile",
  components: {
    NavBar,
    UserInfo,
    AccountInfo,
    NormalListView,
  },
  data() {
    return {
      orderList:[
        { icon: "message.svg", info: "我的消息" },
        { icon: "pointer.svg", info: "积分商城" },
        { icon: "vip.svg", info: "会员卡" },
      ],
      serviceList: [
        { icon: "cart.svg", info: "我的购物车" },
        { icon: "shopping.svg", info: "下载购物APP" },
      ],
    };
  },
};
</script>

<style scoped>
.profile {
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
}
.navbar {
  background-color: var(--color-tint);
  color: #fff;
  font-weight: 700;
}
</style>