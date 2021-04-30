<template>
  <div class="recommend">
      <div class="recommend-item" v-for="(item,index) in recommends" :key="index">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
name:"HomeRecommendView",
props:{
    recommends:{
        type:Array,
        default(){
            return []
        }
    }
}
}
</script>

<style scoped>
.recommend{
    width: 100%;
    display: flex;
    font-size: 14px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
}


</style>