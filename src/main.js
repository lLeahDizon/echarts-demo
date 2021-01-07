import echarts from 'echarts'

console.log(echarts)

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'))

// 指定图表的配置项和数据
var option = {
  tooltip: {},
  legend: {
    data: ['bug数']
  },
  xAxis: {
    data: ['一月', '二月', '三月', '四月', '五月']
  },
  yAxis: {},
  series: [{
    name: 'bug数',
    type: 'bar',
    data: [10, 20, 36, 3, 5]
  }]
}

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option)
