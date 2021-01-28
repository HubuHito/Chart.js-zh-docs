---
title: 集成
---

Chart.js 可以通过原生的 JavaScript 或者JS模块方式集成，如下：

## Script

```html
<script src="path/to/chartjs/dist/chart.js"></script>
<script>
    var myChart = new Chart(ctx, {...});
</script>
```

## Common JS

```javascript
var Chart = require('chart.js');
var myChart = new Chart(ctx, {...});
```

## Bundlers (Webpack, Rollup, etc.)

Chart.js 支持 `tree-shakeable` 特性，你可以按需注册 controllers、elements、scales 和 plugins。

全量引入可参考下面方式：
```javascript
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);

var myChart = new Chart(ctx, {...});
```

## Require JS

::: warning
RequireJS [不能加载CommonJS模块](https://requirejs.org/docs/commonjs.html#intro)，所以需要通过构建 UMD 的包替代（eg：`dist/chart.js`, `dist/chart.min.js`）。
:::

```javascript
require(['path/to/chartjs/dist/chart.min.js'], function(Chart){
    var myChart = new Chart(ctx, {...});
});
```

::: tip
时间类型的坐标轴需要提前配置[时间适配器](https://github.com/chartjs/awesome#adapters)，并且引入顺序要在 Chart.js **之后**。示例如下：
:::

```javascript
require(['chartjs'], function(Chart) {
    require(['moment'], function() {
        require(['chartjs-adapter-moment'], function() {
            new Chart(ctx, {...});
        });
    });
});
```
