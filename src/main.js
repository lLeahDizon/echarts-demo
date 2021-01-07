import echarts from 'echarts'

console.log(echarts)

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'))

// 指定图表的配置项和数据
const option = {
  legend: {
    data: ['bug数']
  },
  xAxis: {
    type: 'category',
    data: ['1', '2', '3', '4', '5', '6']
  },
  yAxis: {
    type: 'value'
  },
  series: [{
    name: 'bug数',
    data: [820, 932, 901, 934, 1290, 1330, 1320],
    type: 'line'
  }]
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option)
