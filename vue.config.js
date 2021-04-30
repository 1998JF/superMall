module.exports={
    configureWebpack:{   //表示要配置 configureWebpack
       resolve:{ //配置路径相关
           alias:{  //配置别名  
               // '@':'src'    已经默认配置该别名
               'assets':'@/assets',
               'common':'@/common',
               'components':'@/components',
               'network':'@/network',
               'views':'@/views',
               'api':'@/api'
           }
       }
   }
}