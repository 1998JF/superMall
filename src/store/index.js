import Vue from 'vue'
import Vuex from 'vuex'

// 1、安装插件
Vue.use(Vuex)

// 2、创建store对象
const store = new Vuex.Store({
    state: {
        cartList:[]
    },
    mutations: {
        // mutations唯一的目的就是修改state中状态
        addCart(state,payload){
            // 1、查找之前数组中是否有该商品
            let oldProduct = state.cartList.find(item => item.iid===payload.iid)
            // 2、判断
            if(oldProduct){
                oldProduct.count +=1
            }else{
                payload.count = 1
                state.cartList.push(payload)
            }
        }
    },
})

// 3、挂载到Vue实例上
export default store