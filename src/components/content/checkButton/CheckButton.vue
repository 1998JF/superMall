<template>
  <div class="check-button" :class="{check:isChecked}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
name:"CheckButton",
props:{
    isChecked:{
        type:Boolean,
        default:false
    }
}

}
</script>

<style scoped>
.check-button{
    height: 20px;
    width: 20px;
    border:2px solid #aaa;
    border-radius: 50%;
}
.check{
    background-color: rgb(238, 57, 117);
    border-color: rgb(248, 141, 176);
}
</style>