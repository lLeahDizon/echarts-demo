import echarts from 'echarts'


const main = document.getElementById('main')
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main, 'default')

// 指定图表的配置项和数据

// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  title: {
    show: true,
    text: '销量',
    right: 0,
  },
  legend: {
    data: ['bug数']
  },
  tooltip: {
    show: true
  },
  xAxis: {
    type: 'category',
    data: ['2020-01-01', '2020-01-02', '2020-01-03', '2020-01-04', '2020-01-05', '2020-01-06']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    lineStyle: {
      color: 'blue'
    },
    itemStyle: {
      borderWidth: 10,
    },
    name: 'bug数',
    data: [1, 2, 3, 4, 5, 6, 7],
    type: 'line'
  }]
})
