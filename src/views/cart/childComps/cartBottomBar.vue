<template>
  <div class="bottom-bar">
      <div class="check-content">
          <check-button :is-checked="isSelectAll" @click.native="checkClick"/>
          <span>全选</span>
      </div>
      <div class="price">总价：{{totalPrice}}</div>
      <div class="calculate" @click="calcClick">去结算({{checkLength}})</div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import { mapGetters } from 'vuex' 
export default {
name:"cartBottomBar",
components:{CheckButton},
computed:{
    ...mapGetters(['cartList']),
    totalPrice(){
        // return '￥'+ this.$store.state.cartList.filter(item=>{
        return '￥'+ this.cartList.filter(item=>{
            return item.checked
        }).reduce((preValue,item)=>{
            return preValue + item.price * item.count
        },0).toFixed(2)
    },
    checkLength(){
        return this.cartList.filter(item=>item.checked).length
    },
   isSelectAll(){
       if(this.cartList.length==0) return false
       return this.cartList.every(item=>item.checked)
   },
},
methods:{
    checkClick(){
        if(this.isSelectAll){   //全部选中下
        
        this.cartList.forEach(item => item.checked = false)
        }else{ //部分或全部不选中下
            this.cartList.forEach(item=> item.checked = true)
        }
    },
    // 结算
    calcClick(){
        if(!this.isSelectAll){
            this.$toast.show('请先选择购买的商品',2000)
        }
    }
}
}
</script>


<style scoped>
.bottom-bar{
    background-color: #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
}
.check-content{
    height: 44px;
    width: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px;
}
.price{
    flex: 1;
}
.calculate{
    width: 120px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    color: #fff;
    background-color: rgb(248, 106, 24);


}

</style>