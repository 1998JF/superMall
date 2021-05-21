<template>
  <div ref="pieChart" style="width: 100%; height: 200px"></div>
</template>

<script>
export default {
  name: "PieChart",
  props:{
    pieData:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {
      pieChart:null
    };
  },
  mounted() {
    this.getEcharts();
  },
  watch:{
    pieData(val){
      if(val !== null){
        this.pieChart.setOption({
          series:val
        })
      }
    }
  },
  methods: {
    getEcharts() {
      let option = {
        title: {
          text: "单品销量统计",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [],
      };
      this.pieChart= window.echarts.init(this.$refs.pieChart);
      option && this.pieChart.setOption(option);
    },
  },
};
</script>

<style>
</style>