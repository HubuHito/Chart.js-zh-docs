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

## 数据集属性配置

可以给每个数据集设置特定的属性，折线图相关颜色的配置如下：

| 名称 | 类型 | [函数选项](../general/options.md#函数选项) | [索引选项](../general/options.md#索引选项) | 默认值
| ---- | ---- | :----: | :----: | ----
| [`backgroundColor`](#line-styling) | [颜色](../general/colors.md) | Yes | - | `'rgba(0, 0, 0, 0.1)'`
| [`borderCapStyle`](#line-styling) | `string` | Yes | - | `'butt'`
| [`borderColor`](#line-styling) | [颜色](../general/colors.md) | Yes | - | `'rgba(0, 0, 0, 0.1)'`
| [`borderDash`](#line-styling) | `number[]` | Yes | - | `[]`
| [`borderDashOffset`](#line-styling) | `number` | Yes | - | `0.0`
| [`borderJoinStyle`](#line-styling) | `string` | Yes | - | `'miter'`
| [`borderWidth`](#line-styling) | `number` | Yes | - | `3`
| [`clip`](#general) | `number`\|`object` | - | - | `undefined`
| [`cubicInterpolationMode`](#cubicinterpolationmode) | `string` | Yes | - | `'default'`
| [`fill`](#line-styling) | `boolean`\|`string` | Yes | - | `false`
| [`hoverBackgroundColor`](#line-styling) | [颜色](../general/colors.md) | Yes | - | `undefined`
| [`hoverBorderCapStyle`](#line-styling) | `string` | Yes | - | `undefined`
| [`hoverBorderColor`](#line-styling) | [颜色](../general/colors.md) | Yes | - | `undefined`
| [`hoverBorderDash`](#line-styling) | `number[]` | Yes | - | `undefined`
| [`hoverBorderDashOffset`](#line-styling) | `number` | Yes | - | `undefined`
| [`hoverBorderJoinStyle`](#line-styling) | `string` | Yes | - | `undefined`
| [`hoverBorderWidth`](#line-styling) | `number` | Yes | - | `undefined`
| [`indexAxis`](#general) | `string` | - | - | `'x'`
| [`label`](#general) | `string` | - | - | `''`
| [`tension`](#line-styling) | `number` | - | - | `0`
| [`order`](#general) | `number` | - | - | `0`
| [`pointBackgroundColor`](#point-styling) | `Color` | Yes | Yes | `'rgba(0, 0, 0, 0.1)'`
| [`pointBorderColor`](#point-styling) | `Color` | Yes | Yes | `'rgba(0, 0, 0, 0.1)'`
| [`pointBorderWidth`](#point-styling) | `number` | Yes | Yes | `1`
| [`pointHitRadius`](#point-styling) | `number` | Yes | Yes | `1`
| [`pointHoverBackgroundColor`](#interactions) | `Color` | Yes | Yes | `undefined`
| [`pointHoverBorderColor`](#interactions) | `Color` | Yes | Yes | `undefined`
| [`pointHoverBorderWidth`](#interactions) | `number` | Yes | Yes | `1`
| [`pointHoverRadius`](#interactions) | `number` | Yes | Yes | `4`
| [`pointRadius`](#point-styling) | `number` | Yes | Yes | `3`
| [`pointRotation`](#point-styling) | `number` | Yes | Yes | `0`
| [`pointStyle`](#point-styling) | `string`\|`Image` | Yes | Yes | `'circle'`
| [`showLine`](#line-styling) | `boolean` | - | - | `undefined`
| [`spanGaps`](#line-styling) | `boolean`\|`number` | - | - | `undefined`
| [`stepped`](#stepped) | `boolean`\|`string` | - | - | `false`
| [`xAxisID`](#general) | `string` | - | - | first x axis
| [`yAxisID`](#general) | `string` | - | - | first y axis

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
| `tension` |  张力 (`0` 表示不是贝塞尔曲线，即直线)，配置monotone cubic interpolation会使张力失效。
| `showLine` | 是否显示
| `spanGaps` | 是否允许断线，如果为 true，则会在无数据或空数据的点之间绘制线条。如果为 false，则带有 NaN 数据的点将会产生一个中断。设置具体数字表示允许的最大中断点数。值的单位取决于坐标轴类型。

如果值为`undefined`，`showLine` 和 `spanGaps` 会取[图表配置](#configuration-options)作为默认配置项，其他属性会使用全局配置[`elements.line.*`](../configuration/elements.md#line-configuration)的默认值。

### 交互

The interaction with each point can be controlled with the following properties:

| 名称 | 描述
| ---- | -----------
| `pointHoverBackgroundColor` | Point background color when hovered.
| `pointHoverBorderColor` | Point border color when hovered.
| `pointHoverBorderWidth` | Border width of point when hovered.
| `pointHoverRadius` | The radius of the point when hovered.

### 插值模式

The following interpolation modes are supported.

* `'default'`
* `'monotone'`

The `'default'` algorithm uses a custom weighted cubic interpolation, which produces pleasant curves for all types of datasets.

The `'monotone'` algorithm is more suited to `y = f(x)` datasets: it preserves monotonicity (or piecewise monotonicity) of the dataset being interpolated, and ensures local extremums (if any) stay at input data points.

If left untouched (`undefined`), the global `options.elements.line.cubicInterpolationMode` property is used.

### 阶梯

The following values are supported for `stepped`.

* `false`: No Step Interpolation (default)
* `true`: Step-before Interpolation (eq. `'before'`)
* `'before'`: Step-before Interpolation
* `'after'`: Step-after Interpolation
* `'middle'`: Step-middle Interpolation

If the `stepped` value is set to anything other than false, `tension` will be ignored.

## Configuration Options

The line chart defines the following configuration options. These options are merged with the global chart configuration options, `Chart.defaults`, to form the options passed to the chart.

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `showLine` | `boolean` | `true` | If false, the lines between points are not drawn.
| `spanGaps` | `boolean`\|`number` | `false` | If true, lines will be drawn between points with no or null data. If false, points with `NaN` data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.

## Default Options

It is common to want to apply a configuration setting to all created line charts. The global line chart settings are stored in `Chart.defaults.controllers.line`. Changing the global options only affects charts created after the change. Existing charts are not changed.

For example, to configure all line charts with `spanGaps = true` you would do:

```javascript
Chart.defaults.controllers.line.spanGaps = true;
```

## Data Structure

See [`Data structures`](../general/data-structures.md)

## Stacked Area Chart

Line charts can be configured into stacked area charts by changing the settings on the y-axis to enable stacking. Stacked area charts can be used to show how one data trend is made up of a number of smaller pieces.

```javascript
var stackedLine = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            y: {
                stacked: true
            }
        }
    }
});
```

## Vertical Line Chart

A vertical line chart is a variation on the horizontal line chart.
To achieve this you will have to set the `indexAxis` property in the options object to `'y'`.
The default for this property is `'x'` and thus will show horizontal lines.

export const ExampleChart1 = () => {
	useEffect(() => {
		const cfg = {
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
		};
		const chart = new Chart(document.getElementById('chartjs-1').getContext('2d'), cfg);
		return () => chart.destroy();
	});
	return <div className="chartjs-wrapper"><canvas id="chartjs-1" className="chartjs"></canvas></div>;
}

<ExampleChart1/>

## Example

```javascript
var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
    	indexAxis: 'y'
    }
});
```

### Config Options

The configuration options for the vertical line chart are the same as for the [line chart](#configuration-options). However, any options specified on the x-axis in a line chart, are applied to the y-axis in a vertical line chart.

## Internal data format

`{x, y}`
