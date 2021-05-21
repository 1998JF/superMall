<template>
  <div class="shop-item">
      <div class="item-selector">
          <check-button :is-checked="itemInfo.checked" @click.native="checkClick" />
      </div>
    <div class="item-img">
      <img :src="itemInfo.image" alt="商品图片" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ itemInfo.title }}</div>
      <div class="item-desc">{{ itemInfo.desc }}</div>
      <div class="item-bottom">
        <div class="item-price">￥{{ itemInfo.price }}</div>
        <div class="item-count">x{{ itemInfo.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton';
export default {
  components: { CheckButton },
  name: "CartListItem",
  props: {
    itemInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods:{
      checkClick(){
          this.itemInfo.checked = !this.itemInfo.checked
      }
  }
};
</script>

<style scoped>
.shop-item {
  width: 100%;
  display: flex;
  /* align-items: center; */
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-selector{
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item-img {
  padding: 5px;
}
.item-img img {
  width: 88px;
  height: 100px;
  display: block;
  border-radius: 5px;
}
.item-info {
  flex: 1;
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-title,.item-desc{
    /* width: 100%; */
    display: -webkit-box;
    text-overflow: ellipsis;  
    -webkit-box-orient: vertical;   
    -webkit-line-clamp: 1;   
    overflow: hidden;
}

.item-desc {
  font-size: 14px;
  color: #666;
 
}
.item-bottom {
  display: flex;
  justify-content: space-between;
}
.item-bottom .item-price {
  color: orange;
}
</style>