<template>
  <div class="toast" v-show="isShow">
      {{message}}
  </div>
</template>

<script>
export default {
name:"Toast",
// props:{
//     message:{
//         type:String,
//         default:''
//     },
//     isShow:{
//         type:Boolean,
//         default:false
//     }
// }
data(){
    return{
        message:'',
        isShow:false,
    }
},
methods:{
    show(message,duration=2000){
        this.isShow=true
        this.message=message
        setTimeout(()=>{
             this.isShow=false
        this.message=''
        },duration)
    }
}
}
</script>

<style scoped>
.toast{
   position: fixed;
   left: 50%;
   top: 50%;
   transform: translate(-50%,-50%);
   background-color: rgba(0, 0, 0, 0.5);
   color: #fff;
   padding: 8px 10px;
   border-radius: 5px;
   z-index: 99;
}
</style>