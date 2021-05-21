<template>
  <div ref="barChart" style="width:100%;height:200px;"></div>
</template>

<script>
export default {
name:"BarChart",
props:{
  barData:{
    type:Array,
    default(){
      return []
    }
  }
},
 data() {
    return {
      barChart:null
    }
  },
  watch:{
    barData(val){
  if(val!==null){
        this.barChart.setOption({
          series: [{
            name: "销量",
            type: "bar",
            data:val
          }]
        })
      }
    }
  },
    mounted() {
   this.getEcharts()
  },
  methods:{
    getEcharts(){
      let  option={
        title: {
          text: "简单柱状图",
        },
        tooltip: {},
        legend: {
          data: ["销量"],
        },
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
          //  axisLabel: { interval: 0, rotate: 30 },
        },
        yAxis: {
          type: 'value',
            name: '数量/件',
            axisLine: {
                show: true,
            },
        },
        series: [
          {
            name: "销量",
            type: "bar",
            data: []
          },
        ],
      }
 //   console.log(echarts,1111)
    // 基于准备好的dom，初始化echarts实例
    this.barChart =window.echarts.init(this.$refs.barChart);

    // 使用刚指定的配置项和数据显示图表。
   
    option && this.barChart.setOption(option);
    }
  }
}
</script>

<style>

</style>