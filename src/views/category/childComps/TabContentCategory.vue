<template>
  <div class="content-category">
      <div class="item" v-for="(item,index) in subcategories.list" :key="index">
          <a :href="item.link">
              <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
name:"TabContentCategory",
props:{
subcategories:{
    type:Object
}
},
mounted(){
   
}
}
</script>

<style scoped>
.content-category{
    width:100%;
    display: flex;
    flex-wrap: wrap; 
}
.item{
    width: 80px;
    height: 100px;
    margin-right: 8px;
    text-align: center;
    font-size: 12px;
}
.item a{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item-img{
    width: 80%;
}
.item-text{
    margin-top: 15px;
}
</style>