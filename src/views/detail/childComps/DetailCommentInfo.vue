<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="" />
      <span>{{ commentInfo.user.uname }}</span>
    </div>
    <div class="info-detail">
      <p>{{ commentInfo.content }}</p>
      <div class="info-other">
        <span class="date">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
      <div class="info-imgs">
        <img
          :src="item"
          v-for="(item, index) in commentInfo.images"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "common/utils";
export default {
  name: "DetailCommentInfo",
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    showDate(value) {
      // 1、将时间戳转成Date对象
      const date = new Date(value * 1000);
      // 2、将date进行格式化
      return formatDate(date, "yyyy-MM-dd ");
    },
  },
};
</script>

<style scoped>
.comment-info {
  padding: 5px 15px;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  height: 50px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.header-title {
  font-size: 15px;
}
.header-more {
  font-size: 13px;
}
.info-user {
  height: 44px;
  display: flex;
  align-items: center;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 10px;
}
.info-detail {
  margin-top: 15px;
  font-size: 14px;
}
.info-other {
  margin-top: 15px;
  font-size: 12px;
  color: #999;
}
.info-other span {
  margin-right: 10px;
}
.info-imgs {
  margin-top: 15px;
}
.info-imgs {
  margin-top: 10px;
}
.info-imgs img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>