var newData = {
   "xaxis": ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023","2024"],
   "yaxis": [{
      "name": "身高",
      "value": [190,191,191,191,191,191,191,191,191,192]
   }, {
      "name": "体重",
      "value": [80,80,80,80,80,80,80,80,80,81]
   }, {
      "name": "BMI",
      "value": [21, 22, 19, 21, 22, 19, 21, 22, 19, 23]
   }]
}
let legendData = [];
let seriesData = [];
let colorArr = ['#5AD8A6', '#FF745A', '#FFC328', '#2F8FFF'];
legendData = newData.yaxis.map((item) => item.name);
seriesData = newData.yaxis.map((item1, index1) => {
   return {
      name: item1.name,
      type: 'line',
      symbol: 'circle',
      symbolSize: 6,
      itemStyle: {
         color: colorArr[index1],
      },
      lineStyle: {
         width: 4,
      },
      smooth: true,
      data: item1.value, // 折线图的数据
   }
})

let option = {
   backgroundColor: '#011234',
   grid: {
      containLabel: true,
      bottom: '5%',
      top: '15%',
      left: '2%',
      right: '4%',
   },
   tooltip: {
      trigger: 'axis',
      axisPointer: {
         type: 'shadow',
      },
   },
   dataZoom: [
      {
         show: true,
         type: 'slider',
         backgroundColor: '#97c9f130',
         fillerColor: '#95c9fd',
         borderColor: '#97c9f130',
         showDetail: false,
         filterMode: 'empty',
         showDataShadow: false,
         brushSelect: false, // 是否开启刷选功能
         height: 10,
         handleSize: 0,
         xAxisIndex: [0],
         zoomLock: true, // 是否锁定选择区域（或叫做数据窗口）的大小
         throttle: 100, // 设置触发视图刷新的频率。
         realtime: true,
         bottom: '1%',
         startValue: 0,
         endValue: 13,
      }
   ],
   legend: {
      top: '1%',
      right: '1%',
      data: legendData,
      itemGap: 10,
      textStyle: {
         fontSize: 14,
         color: '#6E7079',
      },
   },
   xAxis: {
      triggerEvent: true,
      data: newData.xaxis,
      axisLabel: {
         // interval: 0,
         show: true,
         fontSize: 14,
         color: '#6E7079',
      },
      axisLine: {
         show: true,
         lineStyle: {
            color: '#E0E6F1',
         },
      },

      axisTick: {
         show: false,
      },
   },
   yAxis: [
      {
         // name: '单位：个',
         type: 'value',
         nameTextStyle: {
            color: '#6E7079',
            fontSize: 14,
            padding: [0, 0, 0, 0],
         },
         splitNumber: 2,
         axisLabel: {
            show: true,
            fontSize: 14,
            color: '#6E7079',
         },
         axisLine: {
            show: false,
         },
         axisTick: {
            show: false,
         },
         splitLine: {
            lineStyle: {
               color: '#E0E6F1',
            },
         },
         minInterval: 1
      },
   ],
   series: seriesData,
};
export{option}