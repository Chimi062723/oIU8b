let data = [7, 2, 0, 0, 0, 0, 0, 6]
let indicator = [

    { name: '动火', max: 10 },
    { name: '受限空间', max: 10 },
    { name: '盲板抽堵', max: 10 },
    { name: '高处作业', max: 10 },
    { name: '吊装', max: 10 },
    { name: '动土', max: 10 },
    { name: '短路', max: 10 },
    { name: '临时用电', max: 10 }
]

option = {
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
                fontSize: '20',
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
                console.log(params)
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