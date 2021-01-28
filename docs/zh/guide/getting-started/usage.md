---
title: 使用
---

可以通过 ES6模块、原生JavaScript和模块加载的方式使用 Chart.js。

## 创建图表

通过实例化的方式创建图表，`Chart` 构造函数接受一个上下文对象，上下文对象可以是Dom节点、jQuery实例或者2d上下文对象，如下：

```html
<canvas id="myChart" width="400" height="400"></canvas>
```

```javascript
// Chart.js 支持一下上下文对象创建图表
var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx = $('#myChart');
var ctx = 'myChart';
```

创建上下文对象后，就可以使用 Chart.js 自带的图表类型创建图表了，下面示例为 y 轴从 0 开始的柱形图，每个柱子都有特定的颜色。

```html
<canvas id="myChart" width="400" height="400"></canvas>
<script>
var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
</script>
```
