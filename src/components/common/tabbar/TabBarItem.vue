<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon_active"></slot></div>
    <!-- <div :class="{active:!isActive}"><slot name="item-text"></slot></div> -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
      path:String,
      activeColor:{
          type:String,
          default:'salmon'
      }
  },
  data(){
      return{
        //   isActive:true
      }
  },
  computed:{
      isActive(){
          return this.$route.path.indexOf(this.path) !==-1
      },
      activeStyle(){
          return this.isActive ? {color:this.activeColor}:{}
      }
  },
  methods:{
      itemClick(){
        // console.log(this.$router.push(this.path),'pp',this.path);
          this.$router.push(this.path)
      }
  },
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  margin-top: 3px;
}
/* .active{
    color: salmon;
} */
</style>