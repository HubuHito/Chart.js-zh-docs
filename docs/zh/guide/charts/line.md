---
title: 折线图
---

折线图是在一条线上绘制数据点的展现方式，通常用于显示数据趋势或两个数据集的比较。

## Example Usage

```js chart-editor
const config = /*<block:配置>*/{
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
}/*</block:配置>*/

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
| `clip` | How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. `0` = clip at chartArea. Clipping can also be configured per side: `clip: {left: 5, top: false, right: -2, bottom: 0}`
| `indexAxis` | The base axis of the dataset. `'x'` for horizontal lines and `'y'` for vertical lines.
| `label` | The label for the dataset which appears in the legend and tooltips.
| `order` | The drawing order of dataset. Also affects order for stacking, tooltip, and legend.
| `xAxisID` | The ID of the x-axis to plot this dataset on.
| `yAxisID` | The ID of the y-axis to plot this dataset on.

### 点样式

The style of each point can be controlled with the following properties:

| Name | Description
| ---- | ----
| `pointBackgroundColor` | The fill color for points.
| `pointBorderColor` | The border color for points.
| `pointBorderWidth` | The width of the point border in pixels.
| `pointHitRadius` | The pixel size of the non-displayed point that reacts to mouse events.
| `pointRadius` | The radius of the point shape. If set to 0, the point is not rendered.
| `pointRotation` | The rotation of the point in degrees.
| `pointStyle` | Style of the point. [more...](../configuration/elements.md#point-styles)

All these values, if `undefined`, fallback first to the dataset options then to the associated [`elements.point.*`](../configuration/elements.md#point-configuration) options.

### 线样式

The style of the line can be controlled with the following properties:

| Name | Description
| ---- | ----
| `backgroundColor` | The line fill color.
| `borderCapStyle` | Cap style of the line. 查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap).
| `borderColor` | The line color.
| `borderDash` | Length and spacing of dashes. 查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| `borderDashOffset` | Offset for line dashes. 查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| `borderJoinStyle` | Line joint style. 查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin).
| `borderWidth` | The line width (in pixels).
| `fill` | How to fill the area under the line. See [area charts](area.md).
| `tension` | Bezier curve tension of the line. Set to 0 to draw straightlines. This option is ignored if monotone cubic interpolation is used.
| `showLine` | If false, the line is not drawn for this dataset.
| `spanGaps` | If true, lines will be drawn between points with no or null data. If false, points with `NaN` data will create a break in the line. Can also be a number specifying the maximum gap length to span. The unit of the value depends on the scale used.

If the value is `undefined`, `showLine` and `spanGaps` fallback to the associated [chart configuration options](#configuration-options). The rest of the values fallback to the associated [`elements.line.*`](../configuration/elements.md#line-configuration) options.

### 交互

The interaction with each point can be controlled with the following properties:

| Name | Description
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