---
title: 折线图
---

折线图是在一条线上绘制数据点的展现方式，通常用于显示数据趋势或两个数据集的比较。

## 实例

```js chart-editor
const config =/*<block:配置>*/ {
  type: 'line',
  data: {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  }
};/*</block:配置>*/

module.exports = {
  config
}
```

## 数据集属性

可以给每个数据集设置特定的属性，折线图相关配置如下：

| 名称 | 类型 | [函数选项](../general/options.md#函数选项) | [索引选项](../general/options.md#索引选项) | 默认值
| ---- | ---- | :----: | :----: | ----
| [`backgroundColor`](#线样式) | [颜色](../general/colors.md) | Yes | - | `'rgba(0, 0, 0, 0.1)'`
| [`borderCapStyle`](#线样式) | `string` | Yes | - | `'butt'`
| [`borderColor`](#线样式) | [颜色](../general/colors.md) | Yes | - | `'rgba(0, 0, 0, 0.1)'`
| [`borderDash`](#线样式) | `number[]` | Yes | - | `[]`
| [`borderDashOffset`](#线样式) | `number` | Yes | - | `0.0`
| [`borderJoinStyle`](#线样式) | `string` | Yes | - | `'miter'`
| [`borderWidth`](#线样式) | `number` | Yes | - | `3`
| [`clip`](#基本配置) | `number`\|`object` | - | - | `undefined`
| [`cubicInterpolationMode`](#插值模式) | `string` | Yes | - | `'default'`
| [`fill`](#线样式) | `boolean`\|`string` | Yes | - | `false`
| [`hoverBackgroundColor`](#线样式) | [颜色](../general/colors.md) | Yes | - | `undefined`
| [`hoverBorderCapStyle`](#线样式) | `string` | Yes | - | `undefined`
| [`hoverBorderColor`](#线样式) | [颜色](../general/colors.md) | Yes | - | `undefined`
| [`hoverBorderDash`](#线样式) | `number[]` | Yes | - | `undefined`
| [`hoverBorderDashOffset`](#线样式) | `number` | Yes | - | `undefined`
| [`hoverBorderJoinStyle`](#线样式) | `string` | Yes | - | `undefined`
| [`hoverBorderWidth`](#线样式) | `number` | Yes | - | `undefined`
| [`indexAxis`](#基本配置) | `string` | - | - | `'x'`
| [`label`](#基本配置) | `string` | - | - | `''`
| [`tension`](#线样式) | `number` | - | - | `0`
| [`order`](#基本配置) | `number` | - | - | `0`
| [`pointBackgroundColor`](#点样式) | `Color` | Yes | Yes | `'rgba(0, 0, 0, 0.1)'`
| [`pointBorderColor`](#点样式) | `Color` | Yes | Yes | `'rgba(0, 0, 0, 0.1)'`
| [`pointBorderWidth`](#点样式) | `number` | Yes | Yes | `1`
| [`pointHitRadius`](#点样式) | `number` | Yes | Yes | `1`
| [`pointHoverBackgroundColor`](#交互) | `Color` | Yes | Yes | `undefined`
| [`pointHoverBorderColor`](#交互) | `Color` | Yes | Yes | `undefined`
| [`pointHoverBorderWidth`](#交互) | `number` | Yes | Yes | `1`
| [`pointHoverRadius`](#交互) | `number` | Yes | Yes | `4`
| [`pointRadius`](#点样式) | `number` | Yes | Yes | `3`
| [`pointRotation`](#点样式) | `number` | Yes | Yes | `0`
| [`pointStyle`](#点样式) | `string`\|`Image` | Yes | Yes | `'circle'`
| [`showLine`](#线样式) | `boolean` | - | - | `undefined`
| [`spanGaps`](#线样式) | `boolean`\|`number` | - | - | `undefined`
| [`stepped`](#阶梯) | `boolean`\|`string` | - | - | `false`
| [`xAxisID`](#基本配置) | `string` | - | - | first x axis
| [`yAxisID`](#基本配置) | `string` | - | - | first y axis

### 基本配置

| 名称 | 描述
| ---- | ----
| `clip` | 对图表区域进行裁剪，正值表示允许溢出，负值会截断绘制区域，0表示图表区域。也可以配置具体值，如：`{left: 5, top: false, right: -2, bottom: 0}`。
| `indexAxis` | 数据集主轴，`'x'`表示水平坐标轴，`'y'`表示垂直坐标轴。
| `label` | 数据集标签（图例或者tooltips上面的标签）
| `order` | 数据集绘制顺序，也会影响堆叠图、tooltip和图例的顺序。
| `xAxisID` | x轴ID
| `yAxisID` | Y轴ID

### 点样式

折线图点的样式可通过如下属性配置：

| 名称 | 描述
| ---- | ----
| `pointBackgroundColor` | 填充色
| `pointBorderColor` | 描边色
| `pointBorderWidth` | 描边
| `pointHitRadius` | 可交互半径（热区），值越大表示触发事件的区域越大（触发区域也受交互模式的影响），注意与半径的区域，半径表示绘制的大小，交互半径表示触发事件的面积。
| `pointRadius` | 半径，如果为 0 则不会渲染点，便于提升性能
| `pointRotation` | 旋转角度
| `pointStyle` | 点样式 [查看](../configuration/elements.md#点样式)

如果这些属性为`undefined`，则会取图表的配置，图表没有配置的话就取全局默认的点配置项[`elements.point.*`](../configuration/elements.md#点配置)。

### 线样式

线条的样式可以通过以下属性来配置：

| 名称 | 描述
| ---- | ----
| `backgroundColor` | 填充色
| `borderCapStyle` | 线帽，查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| `borderColor` | 描边色
| `borderDash` | 虚线模式，查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| `borderDashOffset` | 虚线偏移量，查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| `borderJoinStyle` | 连接方式，查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| `borderWidth` | 描边
| `fill` | 如何填充折线以下部分，查看[面积图](../charts/area.md#filling-modes)
| `tension` |  张力 (`0` 表示不是贝塞尔曲线，即直线)，配置[单次三次插值法](https://en.wikipedia.org/wiki/Monotone_cubic_interpolation)会使张力失效，如`stepped`不为false时会不生效。
| `showLine` | 是否显示
| `spanGaps` | 是否允许断线，如果为 true，则会在无数据或空数据的点之间绘制线条。如果为 false，则带有 NaN 数据的点将会产生一个中断。设置具体数字表示允许的最大中断点数，值的单位取决于坐标轴类型。

如果值为`undefined`，`showLine` 和 `spanGaps` 会取[图表配置](#configuration-options)默认值，其他属性会使用全局配置[`elements.line.*`](../configuration/elements.md#line-configuration)的默认值。

### 交互

每个数据点相关交互配置项如下：

| 名称 | 描述
| ---- | -----------
| `pointHoverBackgroundColor` | 悬浮时背景色
| `pointHoverBorderColor` | 悬浮时描边色
| `pointHoverBorderWidth` | 悬浮时描边
| `pointHoverRadius` | 悬浮时半径

### 插值模式

可选值如下：

* `'default'`
* `'monotone'`

`'default'`表示使用加权三次插值算法（weighted cubic interpolation），它会生成更加平滑的曲线。`'monotone'`算法适用于`y = f(x)`的数据集，它会保留数据集的[单调性](https://en.wikipedia.org/wiki/Monotonic_function)（或每段的单调性），并且确保函数局部极值（如果有）停留在输入数据点。

如果属性值为`undefined`，则会使用`options.elements.line.cubicInterpolationMode`属性值。

### 阶梯

`stepped`属性支持一下值：

* `false`（默认值）: 不显示阶梯线
* `true`: 插值之前绘制阶梯线 (等于`'before'`)
* `'before'`: 插值之前绘制阶梯线
* `'after'`: 插值之后绘制阶梯线
* `'middle'`: 插值过程中绘制阶梯线

如果`stepped`设置为false以外的任何值，`tension`将被忽略。

## 其他配置项

数据集的以下配置项会和全局图表`Chart.defaults`配置合并：

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `showLine` | `boolean` | `true` | 是否显示
| `spanGaps` | `boolean`\|`number` | `false` | 是否允许断线，如果为 true，则会在无数据或空数据的点之间绘制线条。如果为 false，则带有 NaN 数据的点将会产生一个中断。设置具体数字表示允许的最大中断点数，值的单位取决于坐标轴类型。

## 默认配置

通常要将配置应用于所有已创建的折线图，全局折线图配置为`Chart.defaults.controllers.line`。更改全局配置仅影响之后创建的图表，现有图表不会改变。例如：设置所有折线图`spanGaps = true`

```javascript
Chart.defaults.controllers.line.spanGaps = true;
```

## 数据源结构

参考[`数据源结构`](../general/data-structures.md)

## 堆叠面积图

通过更改y轴上的设置以启用堆叠，可以将折线图配置为面积图。面积图可以用来显示一个由许多小块组成的数据趋势。

```js chart-editor
//<block:配置>
const config = {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
          label: '数据集1',
          data: [65, 59, 80, 81, 26, 55, 40],
          backgroundColor: '#ff0000',
      },{
          label: '数据集2',
          data: [5, 70, 30, 10, 66, 55, 80],
          backgroundColor: '#00ff00',
      }]
    },
    options: {
        elements: {
            line: {
                fill: true
            }
        },
        scales: {
            y: {
                stacked: true
            }
        }
    }
};
//</block:配置>
module.exports = {
  config
}
```

## 垂直折线图


垂直折线图是水平折线图的变体，可通过将`options.indexAxis`主轴设置为`'y'`实现：

```js chart-editor
//<block:配置>
const config = {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          axis: 'y',
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
    },
    options: {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true
        }
      }
    }
}
//</block:配置>
module.exports = {
  config
}
```

### 配置项

垂直折线图的配置选项与[折线图]（＃数据集属性）相同，只是折线图 x 轴上指定的配置都会应用到垂直折线图的 y 轴上。

## 内部数据格式

`{x, y}`
