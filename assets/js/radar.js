let data = [7, 2, 0, 0, 0, 0, 0, 6]
let indicator = [
    { name: '头部', max: 10 },
    { name: '腰部', max: 10 },
    { name: '肩部', max: 10 },
    { name: '肾', max: 10 },
    { name: '大腿', max: 10 },
    { name: '胃', max: 10 },
    { name: '心脏', max: 10 },
    { name: '肺', max: 10 }
]

let option = {
    backgroundColor: '#000928',
    tooltip: {},
    radar: {
        center: ['50%', '50%'],
        radius: '75%',
        nameGap: 0,
        indicator: indicator,
        splitLine: {
            show: false

        },
        splitArea: {
            show: false
        },
        axisLine: {
            show: false
        },
        name: {
            textStyle: {
                color: '#F2F3F5',
                fontSize: '10',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
    },
    series: [{
        type: 'radar',
        data: [data],
        name: '安全作业',
        label: {
            show: true,
            formatter: function (params) {
                return params.value;
            },
            color: '#fff',
            // position:[-20,-10,-10,-10],
            align: 'right',
            distance: 10,
            align: 'right'
        },
        symbolSize: 10,
        lineStyle: { //边缘颜色
            width: 0
        },
        itemStyle: {
            borderWidth: 1,
            color: '#fff',
            borderColor: '#F2F063',
        },
        areaStyle: {
            color: 'rgba(0, 255, 255, 1)',
            opacity: 0.6
        }
    },
    {
        type: 'radar',
        name: '安全作业',
        data: [
            [10, 10, 10, 10, 10, 10, 10, 10],
        ],
        symbol: 'none',
        lineStyle: {
            width: 0
        },
        itemStyle: {
            color: 'rgb(0, 255, 255)'
        },

        areaStyle: {
            color: 'rgba(0, 255, 255, 0.05)',
        }
    },
    {
        type: 'radar',
        name: '安全作业',
        data: [
            [9, 9, 9, 9, 9, 9, 9, 9],
        ],

        symbol: 'none',
        lineStyle: {
            width: 0
        },
        itemStyle: {
            color: 'rgb(0, 255, 255)'
        },

        areaStyle: {
            color: 'rgba(0, 255, 255,0.12)',
        }
    },
    {
        type: 'radar',
        name: '安全作业',
        data: [
            [8, 8, 8, 8, 8, 8, 8, 8]
        ],

        symbol: 'none',
        lineStyle: {
            width: 0
        },
        itemStyle: {
            color: 'rgb(0, 255, 255)'
        },

        areaStyle: {
            color: 'rgba(0, 255, 255,0.18)',
        }
    },
    {
        type: 'radar',
        name: '安全作业',
        data: [
            [7, 7, 7, 7, 7, 7, 7, 7]
        ],

        symbol: 'none',
        lineStyle: {
            width: 0
        },
        itemStyle: {
            color: 'rgb(0, 255, 255)'
        },

        areaStyle: {
            color: 'rgba(0, 255, 255,0.19)',
        }
    },
    {
        type: 'radar',
        name: '安全作业',
        data: [
            [6, 6, 6, 6, 6, 6, 6, 6],
        ],

        symbol: 'none',
        lineStyle: {
            width: 0
        },
        itemStyle: {
            color: 'rgb(0, 255, 255)'
        },

        areaStyle: {
            color: 'rgba(0, 255, 255,0.17)',
        }
    },
    {
        type: 'radar',
        name: '安全作业',
        data: [
            [5, 5, 5, 5, 5, 5, 5, 5],
        ],
        symbol: 'none',
        lineStyle: {
            width: 0
        },
        itemStyle: {
            color: 'rgb(0, 255, 255)'
        },

        areaStyle: {
            color: 'rgba(0, 255, 255,0.16)',
        }
    },
    {
        type: 'radar',
        name: '安全作业',
        data: [
            [4, 4, 4, 4, 4, 4, 4, 4],
        ],

        symbol: 'none',
        lineStyle: {
            width: 0
        },
        itemStyle: {
            color: 'rgb(0, 255, 255)'
        },

        areaStyle: {
            color: 'rgba(0, 255, 255,0.13)',
        }
    },
    ]
};
export {option,indicator};