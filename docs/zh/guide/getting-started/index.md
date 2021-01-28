---
title: 开始
---

在开始使用 Chart.js 之前我们需要创建一个 canvas 节点。推荐创建一个单独的容器给图表，以便能够[自适应](../general/responsive.md)。

```html
<div class="container">
  <canvas id="myChart"></canvas>
</div>
```

创建好 canvas 节点之后，需要在 html 上引入 Chart.js 库文件。

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

然后在 script 标签上添加如下代码：

```js
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // 图表类型
  type: 'line',
  // 数据源
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45]
    }]
  },

  // 配置项
  options: {}
```

Chart.js 上手很容易，后面的章节你可以详细了解到如果通过 scales、tooltips、labels、colors、custom actions（自定义事件）等这些配置来自定义图表。

所有例子可在[线上](https://www.chartjs.org/samples/latest/)查看，当然你也可以通过[发行版本](https://github.com/chartjs/Chart.js/releases)来下载 `Chart.js.zip` 包，在包里面 `/samples` 目录下面可查看例子源码。
