---
title: 交互模式
---

Chart.js提供多种模式来配置tooltips如何显示。

::: tip
`options.hover` 和 `options.plugins.tooltip` 继承 `options.interaction` 配置。因此，如果仅在 `options.interaction` 配置了 `mode`, `intersect` 属性，则 hover 和 tooltips 都会默认使用这个配置。
:::

这些交互模式如何与`intersect`配合使用，可参考下面示例：

## point

显示交叉点上的数据。

```js chart-editor
// <block:设置>
const data = [65, 59, 80, 81, 56, 55, 40]
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
]
// </block:设置>

const config = /*<block:配置>*/ {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: data,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.2
        }]
    },
    options: {
        interaction: {
            mode: 'point'
        }
    }
};/*</block:配置>*/

module.exports = {
  config: config
}
```

## nearest

获取与该点距离最近的项。最近的项是根据到图表项中心(point，bar)的距离来确定的。你可以使用axis设置来定义在距离计算中使用的方向。如果intersect为 true，则仅当鼠标位置与图形中的项目相交时触发。这对于组合图非常有用，其中点隐藏在bars后面。

```js chart-editor
// <block:设置>
const data = [65, 59, 80, 81, 56, 55, 40]
const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
]
// </block:设置>

const config = /*<block:配置>*/ {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
          label: 'My First Dataset',
          data: data,
          borderColor: 'rgb(75, 192, 192)'
        }]
    },
    options: {
        interaction: {
            mode: 'nearest',
            intersect: false
        }
    }
};/*</block:配置>*/

module.exports = {
  config: config
}
```

## index

查找具有相同索引的项目。如果`intersect`设置为true，则第一个相交项用于确定数据中的索引。如果`intersect`为false，则使用x方向上最近的项确定索引。

```js chart-editor
// <block:设置>
const data = {
  labels: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July'
  ],
  datasets:[{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    borderColor: 'rgb(75, 192, 192)'
  }]
}
// </block:设置>

const config = /*<block:配置>*/ {
    type: 'line',
    data: data,
    options: {
        interaction: {
            mode: 'index'
        }
    }
};/*</block:配置>*/

module.exports = {
  config: config
}
```

要在水平柱形图中使用索引模式，我们沿y方向进行搜索，则可以使用`axis`设置。通过将此值设置为在y方向上的`'y'`。

```javascript
var chart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        interaction: {
            mode: 'index',
            axis: 'y'
        }
    }
});
```

## dataset

查找相同索引项。如果`intersect`为true时，则第一个相交项用于确定数据中的索引。如`intersect`为false时，则使用最近的项来确定索引。

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        interaction: {
            mode: 'dataset'
        }
    }
});
```

## x

返回基于`x`坐标相交的所有项目。对于垂直游标实现将是有用的。仅适用于笛卡尔图表。

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        interaction: {
            mode: 'x'
        }
    }
});
```

## y

返回基于`y`坐标相交的所有项目。这对于水平光标实现将是有用的。仅适用于笛卡尔图表。

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        interaction: {
            mode: 'y'
        }
    }
});
```
