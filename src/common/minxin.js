import { debounce } from "common/utils";
import BackTop from "components/content/backTop/BackTop.vue";
import {BACK_POSITION} from "common/const"

export const itemListenerMixin = {
    data(){
        return{
            itemImgListener:null,
        }
    },
    mounted() {
        // 1、图片加载完成事件监听
       const refresh = debounce(this.$refs.scroll.refresh, 50);
       this.itemImgListener=() => {
         refresh();
       }
       this.$bus.$on("itemImageLoad", this.itemImgListener);
     },
}

export const backTopMixin = {
  components:{
    BackTop,
  },
  data(){
    return{
      isShowBackTop: false,
    }
  },
  methods:{
    // 返回顶部
    backClick() {
      // this.$refs.scroll.scroll.scrollTo(0,0,1000) //第三各参数时间
      this.$refs.scroll.scrollTo(0, 0);
    },
    listenShowBackTop(position){
      this.isShowBackTop = -position.y > BACK_POSITION
    }
  }
}