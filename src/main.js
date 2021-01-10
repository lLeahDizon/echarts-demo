import echarts from 'echarts'


const main = document.getElementById('main')
const loadMoreButton = document.getElementById('loadMore')
// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(main, 'default')

let n = 0
let m = 0

function createKey() {
  n += 1
  return `2020-01-${n}`
}

function createValue() {
  m += 1
  return m
}

// 指定图表的配置项和数据

const xData = [createKey(), createKey(), createKey(), createKey(), createKey(), createKey()]
const values = [createValue(), createValue(), createValue(), createValue(), createValue(), createValue()]

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
    data: xData
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
    data: values,
    type: 'line'
  }]
})

loadMoreButton.addEventListener('click', () => {
  const key = '2020-01-07'
  const value = 8
  myChart.setOption({
    xAxis: {
      data: [...xData, createKey()]
    },
    series: [{
      data: [...values, createValue()]
    }]
  })
})
