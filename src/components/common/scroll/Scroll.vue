<template>
  <!-- ref/chhildren 绑定到组件上 可以准确获取到标签 -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "Scroll",
  props:{
    probeType:{
      type:Number,
      default:0
    },
    pullUpLoad:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
      // 1、创建BScroll对象
      this.scroll = new BetterScroll(this.$refs.wrapper, {
          observeDOM:true,
          click:true,
          observeImage:true,
          probeType:this.probeType,
          pullUpLoad:this.pullUpLoad,
      });
    // 2、监听滚动的位置
    if(this.probeType===2||this.probeType===3){
       this.scroll.on('scroll',(position)=>{
      this.$emit('scroll',position)
    })
    }
   
  //   // 3、监听上拉事件
  //   this.scroll.on('pullingUp',()=>{
  //   this.$emit('pullingUp')
  //   })
  // 3、监听scroll滚动到底部
  if(this.pullUpLoad){
    this.scroll.on('pullingUp',(position)=>{
      this.$emit('pullingUp')
    })
  }
  },
  methods:{
    scrollTo(x,y,time=500){
      this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    // 刷新
    refresh(){
      this.scroll&&this.scroll.refresh()
    },
    // 完成，结束加载
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },
    // 获取滚动高度
    getScrollY(){
      return this.scroll?this.scroll.y:0
    }

  }
};
</script>

<style scoped>
</style>