<script setup>
import { onMounted, ref } from "vue";
import { _debounce } from "@/utils/common";
import * as echarts from "echarts";
import emitter from "@/utils/eventbus";

const visitCountList = ref([
    {
        date: "05-31",
        count: "120",
    },
    {
        date: "06-01",
        count: "132",
    },
    {
        date: "06-02",
        count: "101",
    },
    {
        date: "06-03",
        count: "134",
    },
    {
        date: "06-04",
        count: "90",
    },
    {
        date: "06-05",
        count: "230",
    },
    {
        date: "06-06",
        count: "210",
    },
]);

const createLineChart = (dom, data) => {
    let chartDom = document.getElementById(dom);
    let myChart = echarts.init(chartDom);
    let option;

    const xData = data.map((item) => item.date);
    const yData = data.map((item) => item.count);

    option = {
        grid: {
            top: "10px",
            left: "20px",
            right: "30px",
            bottom: "10px",
            containLabel: true,
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: xData,
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                itemStyle: {
                    normal: {
                        lineStyle: {
                            color: "#409EFF80",
                        },
                    },
                },

                label: {
                    show: true,
                    position: "top",
                },
                type: "line",
                stack: "Total",
                areaStyle: {
                    color: "#409EFF30",
                },
                data: yData,
            },
        ],
    };

    option && myChart.setOption(option);
};

const resizeChart = () => {
    _debounce(() => {
        echarts.init(document.getElementById("chart-content")).resize();
    })();
};

onMounted(() => {
    createLineChart("chart-content", visitCountList.value);
    emitter.on("resizeChartEmit", resizeChart);
    window.addEventListener("resize", () => {
        resizeChart();
    });
});
</script>

<template>
    <div id="chart-content"></div>
</template>

<style lang="less" scoped>
#chart-content {
    width: 100%;
    height: 100%;
    position: relative;
}
</style>