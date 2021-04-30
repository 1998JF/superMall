<template>
  <div class="detail-swiper">
    <swiper class="swipers">
      <swiper-item class="swiper-item" v-for="(item,index) in topImages" :key="index">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from "components/common/swiper"

export default {
  components: { Swiper, SwiperItem },
name:'DetailSwiper',
props:{
  topImages:{
    type:Array,
    default(){
      return []
    }
  }
},
created(){},
mounted(){
},
}
</script>

<style scoped>
.swiper-item{
  height: 300px;
  overflow: hidden;
}

</style>