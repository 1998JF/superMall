<template>
  <div class="other">
    <button style="width: 100px; height: 25px" @click="change_chart">
      切换
    </button>
    <!-- <div style="width: 100%; height: 300px" ref="c0"></div> -->
    <line-chart :lineData="lineData" />
    <bar-chart :barData="barData" />
    <pie-chart :pieData="pieData" />
    <!-- <div ref="main" style="width: 100%; height: 300px"></div> -->
  </div>
</template>

 <script>
import BarChart from "./childComps/BarChart.vue";
import LineChart from "./childComps/LineChart.vue";
import PieChart from "./childComps/PieChart.vue";

export default {
  name: "Other",
  data() {
    return {
      // c0: null,
      lineData: [],
      barData: [],
      pieData: [],
    };
  },
  components: {
    LineChart,
    BarChart,
    PieChart,
  },

  mounted() {},
  methods: {
    init() {
      //这里是初始化
      // if (!this.c0) {
      //   // this.c0 = echarts.init(this.$refs.c0);
      //   this.c0.setOption({
      //     title: {
      //       text: "简单柱状图",
      //     },
      //     tooltip: {},
      //     legend: {
      //       data: ["销量"],
      //     },
      //     xAxis: {
      //       data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      //       axisLabel: { interval: 0, rotate: 30 },
      //     },
      //     yAxis: {
      //       type: "value",
      //       name: "数量/件",
      //       axisLine: {
      //         show: true,
      //       },
      //     },
      //     series:[{
      //       name: '销量',
      //       type: 'bar',
      //       data: []
      //     }]
      //   });
      // }
    },
    change_chart() {
      //这里是异步请求数据 resonse里写我下面这个 要改什么内容就写什么内容
      // debugger
      this.lineData = [
        {
          name: "嘻嘻",
          data: [5, 2, 3, 8, 5, 12, 4],
          type: "line",
          stack: "总量",
          smooth: true,
          areaStyle: {},
        },
        {
          name: "哈哈",
          data: [4, 10, 8, 20, 15, 16, 17],
          type: "line",
          stack: "总量",
          smooth: true,
          areaStyle: {},
        },
      ];
      this.barData = [
        {
          value: 5,
          itemStyle: {
            color: "#f58f98",
          },
        },
        {
          value: 20,
          itemStyle: {
            color: "#6b473c",
          },
        },
        {
          value: 36,
          itemStyle: {
            color: "#817936",
          },
        },
        {
          value: 10,
          itemStyle: {
            color: "#4e72b8",
          },
        },
        {
          value: 10,
          itemStyle: {
            color: "#ffd400",
          },
        },
        {
          value: 20,
          itemStyle: {
            color: "#8552a1",
          },
        },
      ];
      this.pieData = [
        {
          name: "单品销量",
          type: "pie",
          radius: "50%",
          data: [
            { value: 1048, name: "单季新品" },
            { value: 735, name: "时尚潮流" },
            { value: 580, name: "街头潮流" },
            { value: 484, name: "鞋子" },
            { value: 300, name: "裙子" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ];
      // this.c0.setOption({
      //     xAxis:{data:['小萝卜','小黄人','日莎莎']},
      //     series:[{
      //       name: '销量',
      //       data: [10,20,130,]
      //     }]
      // })
    },
  },
};
</script>

<style>
</style>