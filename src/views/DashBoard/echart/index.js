import * as echarts from 'echarts'

export const createLineChart = (dom, data) => {
    let chartDom = document.getElementById(dom);
    let myChart = echarts.init(chartDom);
    let option;

    const xData = data.map(item => item.date);
    const yData = data.map(item => item.count);

    option = {
        grid: {
            top: '10px',
            left: '20px',
            right: '30px',
            bottom: '10px',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: xData
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: '#409EFF80'
                        }
                    }
                },

                label: {
                    show: true,
                    position: 'top'
                },
                type: 'line',
                stack: 'Total',
                areaStyle: {
                    color: '#409EFF30'
                },
                data: yData
            }
        ]
    };

    option && myChart.setOption(option);
}