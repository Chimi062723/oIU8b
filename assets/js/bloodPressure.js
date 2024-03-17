let name = '血压血糖数据值'
let lineColor = "#5AC2DB"
let areaColor = ['rgba(143, 210, 240, 0.53)', 'rgba(40, 84, 126, 0.14)']
let axisData = ["3/1", "3/2", "3/3", "3/4", "3/5", "3/6", "3/7", "3/8", "3/9",]
let seriesData = [
   [12, 25, 22, 10, 36, 56, 45, 12, 25],
   [42, 15, 36, 9, 6, 10, 12, 25, 32],
]
let maxCity1 = axisData[seriesData[0].indexOf(Math.max(...seriesData[0]))]
let maxCity2 = axisData[seriesData[1].indexOf(Math.max(...seriesData[1]))]
let option = {
    backgroundColor: '#0F224C', //背景色
   grid: {
      left: '1%',
      right: '1%',
      top: '20%',
      bottom: '1%',
      containLabel: true
   },
   tooltip: {
      trigger: "axis",
      axisPointer: {
         lineStyle: {
            color: "rgba(255,255,255,0.7)"
         }
      },
      backgroundColor: "rgba(255,255,255,0.1)",
      padding: [5, 10],
      textStyle: {
         color: "rgb(255,255,255)"
      }
   },
   legend: {
      x: "center",
      y: "25",
      icon: "circle",
      itemWidth: 12,
      itemHeight: 12,
      itemGap: 60,
      textStyle: {
         color: "#C0C4CC",
         fontSize: 13,
         fontWeight: 'bold',
      },
      data: ["血压", "血糖"]
   },
   xAxis: {
      type: "category",
      data: axisData,
      boundaryGap: true,
      splitLine: {
         show: false
      },
      axisTick: {
         show: false
      },
      // type: 'dashed',
      axisLine: {
         lineStyle: {
            type: 'dashed',
            color: "#2557B4"
         }
      },
      axisLabel: {
         margin: 10,
         textStyle: {
            fontSize: 14,
            color: "#C0C4CC"
         }
      }
   },
   yAxis: [
      {
         type: "value",
         position: "right",
         name: '血压单位:mmHg,血糖单位:mmol/L',
         nameTextStyle: {
            padding: [0, 80, 0, 0],
            color: '#C0C4CC',
            fontSize: 13,
            fontWeight: 'bold',
            // lineHeight: 40,
         },
         splitLine: {
            show: true,
            lineStyle: {
               type: 'dashed',
               color: "#C0C4CC"
            }
         },
         axisLine: {
            show: false,
            lineStyle: {
               color: "rgba(255,255,255,0.3)"
            }
         },

         axisLabel: {
            show: false,
            margin: 2,
            textStyle: {
               fontSize: 12,
               color: "#DEEBFF"
            }
         }
      },],
   series: [
      {
         name: "血压",
         type: "line",
         smooth: true,
         showSymbol: false,
         symbol: 'circle',
         // showSymbol: true,
         // symbol: 'circle',
         data: seriesData[0],
         itemStyle: {
            normal: {
               color: '#287CE8'
            }
         },
         lineStyle: {
            normal: {
               width: 3
            }
         },
         markLine: {
            name: 'aa',
            // symbol: ['image://' + arrowBj],
            symbolSize: [12, 6],
            lineStyle: {
               type: 'dashed',
               color: '#287CE8'

            },
            data: [
               // axisData[seriesData[0].indexOf(Math.max(...seriesData[0]))]
               [{
                  coord: [maxCity1, 0]
               }, {
                  coord: [maxCity1, Math.max(...seriesData[0]) > Math.max(...seriesData[1]) ? Math.max(...seriesData[0]) : Math.max(...seriesData[1])]
               }
               ],
            ]
         },
         markPoint: {
            symbol: 'circle',
            symbolSize: [14, 14], // 容器大小
            symbolOffset: ['0%', '0%'],
            data: [
               {
                  name: '最大值',
                  type: 'max',
                  valueIndex: 1,
               },
            ],
            label: {
               show: true,
               position: 'top',
               fontSize: 14,
               color: '#287CE8',
            }
         }
      }, {
         name: "血糖",
         type: "line",
         smooth: true,
         showSymbol: false,
         symbol: "circle",
         symbolSize: 6,
         data: seriesData[1],
         itemStyle: {
            normal: {
               color: "#38FFBA"
            }
         },
         lineStyle: {
            normal: {
               width: 3
            }
         },
         markLine: {
            name: 'aa',
            // symbol: ['image://' + arrowGz],
            symbolSize: [12, 6],
            lineStyle: {
               type: 'dashed',
               color: '#287CE8'
            },
            data: [
               [{
                  coord: [maxCity2, 0]
               }, {
                  coord: [maxCity2, Math.max(...seriesData[1]) > Math.max(...seriesData[0]) ? Math.max(...seriesData[1]) : Math.max(...seriesData[0])]
               }
               ]
            ]
         },
         markPoint: {
            symbol: 'circle',
            symbolSize: [14, 14], // 容器大小
            symbolOffset: ['0%', '0%'],
            data: [
               {
                  name: '最大值',
                  type: 'max',
                  valueIndex: 1,
               },
            ],
            label: {
               show: true,
               position: 'top',
               fontSize: 14,
               color: '#38FFBA',
            }
         }
      },
   ]
}
export {option}