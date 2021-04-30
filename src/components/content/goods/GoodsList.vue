<template>
  <div class="goods">
      <goods-list-item 
      v-for="(item,index) in goods" 
      :key="index"
      :goodsItem="item"  />
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
  components: { GoodsListItem },
name:"GoodsList",
props:{
    goods:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style scoped>
.goods{
    /* width: 100%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>