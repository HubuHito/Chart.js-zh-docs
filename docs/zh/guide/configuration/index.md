---
title: 图表配置
---

图表行为配置，也可以配置样式、字体和图例等。

## 全局配置

Chart.js 1.0中引入了此概念，目的是保持配置不重复[DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)，并允许更改全局的图表默认配置，从而避免为每个图表实例指定配置，或为特定图表类型指定默认配置。

Chart.js 会把全局配置项合并到不同图表上，并根据合并策略适当的修改默认值。更改全局配置也会使所有图表配置修改，这样你可以自定义自己的风格图表。可通过`Chart.defaults`设置全局配置，每种图表的默认值会在后面文档中说明。

如：设置所有图表的默认悬浮模式为 'nearest'：

```javascript
Chart.defaults.hover.mode = 'nearest';

// 没有配置项设置悬浮模式，悬浮模式默认为 'nearest'
var chartHoverModeNearest = new Chart(ctx, {
    type: 'line',
    data: data
});

// 配置中有覆盖全局模式的配置，悬浮模式为 'index'
var chartDifferentHoverMode = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        hover: {
            // 覆盖全局配置
            mode: 'index'
        }
    }
});
```

## 数据集配置

数据集中也可配置图表相关配置项（与数据集相关的），并且优先级最高，它会覆盖图表配置或者全局的配置项，具体优先级如下：

- 数据集配置：dataset.*
- 图表配置：options.datasets[type].*
- 全局配置： Chart.defaults.controllers[type].datasets.*

上面 `type` 表示数据集类型（line、bar等）

::: tip
数据集的配置项，优先于`options.elements`的配置
:::

如：设置所有折线相关的数据集默认隐藏`showLine: false`，然后通过每个数据集的配置覆盖全局配置：

```js chart-editor
//<block:配置>
Chart.defaults.controllers.line.showLine = false; // 所有折线数据集默认不显示

// 只有第三个数据集会绘制直线，第四个数据集为点
const config = {
  type: 'line',
  data: {
      datasets: [{
          data: [0, 0],
      }, {
          data: [0, 1]
      }, {
          data: [1, 0],
          showLine: true // 覆盖showLine的值
      }, {
          type: 'scatter', // 折线数据集不会影响scatter数据集
          data: [1, 1]
      }]
  }
};
//</block:配置>

module.exports = {
  config
}
```
