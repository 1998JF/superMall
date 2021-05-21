<template>
  <div>
    <!-- <button style="width: 100px; height: 25px" @click="changeText">切换</button> -->
    <div ref="lineChart" style="width: 100%; height: 200px"></div>
  </div>
</template>
<script>
export default {
  name: "LineChart",
  props:{
    lineData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  watch:{
 lineData(val){
      if(val!==null){
        this.lineChart.setOption({
          series: val
        })
      }
    }
  },
  data() {
    return {
      lineChart: null,
    };
  },

  mounted() {
    this.getEcharts();
  },
  methods: {
    getEcharts() {
      let option = {
        title: {
          text: "简单折线图",
        },
        legend: {
          data: [],
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [],
      };
      if (!this.lineChart) {
        this.lineChart = window.echarts.init(this.$refs.lineChart);
        option && this.lineChart.setOption(option);
      }
    },
    changeText(){
      let data={
         legend: {
          data: ["白酒",'红酒','啤酒'],
        },
        series: [
          {
            name: "白酒",
            type: "line",
            data: [300, 230, 212, 224, 360, 50, 180],
            smooth: true,
            stack: "总量",
            areaStyle: {},
          },
           {
            name: "红酒",
            type: "line",
            data: [500, 270, 280, 280, 450, 800, 310],
            smooth: true,
            stack: "总量",
            areaStyle: {},
          },
           {
            name: "啤酒",
            type: "line",
            data: [210, 270, 280, 280, 450, 120, 310],
            smooth: true,
            stack: "总量",
            areaStyle: {},
          },
        ],
      }
      this.lineChart.setOption(data)
    },
  },
};
</script>

<style>
</style>