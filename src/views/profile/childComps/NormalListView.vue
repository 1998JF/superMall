<template>
  <div class="normal-list">
    <div class="item" v-for="(item, index) in dataList" :key="index">
      <span class="icon">
        <img :src="iconURL(item)" alt="" />
      </span>
      <div class="info">{{ item.info }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NormalListView",
  props: {
    dataList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    iconURL(item) {
      return require("assets/img/profile/" + item.icon);
    },
  },
};
</script>

<style scoped>
.normal-list {
  width: 100%;
  background-color: #fff;
  font-size: 15px;
  color: #333;
  margin-top: 15px;
}
.item {
  height: 44px;
  width: 100%;
  display: flex;
  align-items: center;
}
.icon {
  margin-left: 20px;
}
.icon img {
  width: 20px;
  height: 20px;
}
.item .info {
  height: 44px;
  line-height: 44px;
  flex: 1;
  margin-left: 20px;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.item:last-of-type .info {
  border-bottom: none;
}
</style>