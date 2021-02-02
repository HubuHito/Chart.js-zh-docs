---
title: 柱形图
---

柱状图提供了一种用竖条表示数据值的显示方法，有时也用于显示数据趋势，可以并排多个数据集。

```js chart-editor
//<block:配置>
const config = {
    type: 'bar',
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
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
};
//</block:配置>
module.exports = {
  config
}
```

## 数据集属性

可以给每个数据集设置特定的属性，柱形图图相关配置如下：

| 名称 | 类型 | [函数选项](../general/options.md#函数选项) | [索引选项](../general/options.md#索引选项) | 默认值
| ---- | ---- | :----: | :----: | ----
| [`backgroundColor`](#styling) | [颜色](../general/colors.md) | Yes | Yes | `'rgba(0, 0, 0, 0.1)'`
| [`base`](#general) | `number` | Yes | Yes |
| [`borderColor`](#styling) | [颜色](../general/colors.md) | Yes | Yes | `'rgba(0, 0, 0, 0.1)'`
| [`borderSkipped`](#borderskipped) | `string` | Yes | Yes | `'start'`
| [`borderWidth`](#borderwidth) | `number`\|`object` | Yes | Yes | `0`
| [`borderRadius`](#borderradius) | `number`\|`object` | Yes | Yes | `0`
| [`clip`](#general) | `number`\|`object` | - | - | `undefined`
| [`data`](#data-structure) | `object[]` | - | - | **required**
| [`hoverBackgroundColor`](#interactions) | [颜色](../general/colors.md) | Yes | Yes | `undefined`
| [`hoverBorderColor`](#interactions) | [颜色](../general/colors.md) | Yes | Yes | `undefined`
| [`hoverBorderWidth`](#interactions) | `number` | Yes | Yes | `1`
| [`hoverBorderRadius`](#interactions) | `number` | Yes | Yes | `0`
| [`indexAxis`](#general) | `string` | - | - | `'x'`
| [`label`](#general) | `string` | - | - | `''`
| [`order`](#general) | `number` | - | - | `0`
| [`xAxisID`](#general) | `string` | - | - | first x axis
| [`yAxisID`](#general) | `string` | - | - | first y axis

### 基本配置

| 名称 | 描述
| ---- | ----
| `base` | 基本值（单位以数值轴（一般为y轴）的为准），如果没有设置，默认取值轴为基本值。
| `clip` | 对图表区域进行裁剪，正值表示允许溢出，负值会截断绘制区域，0表示图表区域。也可以配置具体值，如：`{left: 5, top: false, right: -2, bottom: 0}`。
| `indexAxis` | 数据集主轴，`'x'`表示水平坐标轴，`'y'`表示垂直坐标轴。
| `label` | 数据集标签（图例或者tooltips上面的标签）
| `order` | 数据集绘制顺序，也会影响堆叠图、tooltip和图例的顺序。
| `xAxisID` | x轴ID
| `yAxisID` | Y轴ID

### 样式

每个柱子的样式可通过如下配置项设置：

| 名称 | 描述
| ---- | ----
| `backgroundColor` | 背景色
| `borderColor` | 描边色
| [`borderSkipped`](#borderskipped) | 边框绘制方式
| [`borderWidth`](#描边) | 描边
| [`borderRadius`](#圆角) | 圆角
| `clip` | 对图表区域进行裁剪，正值表示允许溢出，负值会截断绘制区域，0表示图表区域。也可以配置具体值，如：`{left: 5, top: false, right: -2, bottom: 0}`。

如果上面这些配置值为`undefined`，则会取图表配置项默认值[`elements.bar.*`](../configuration/elements.md#条形配置)。

#### borderSkipped

此设置用于避免基线被填充，一般来说，除非创建从柱状图派生的图表类型，否则不需要更改。

::: tip
垂直负数的柱形图，`top` 和 `bottom` 反向的，同样水平柱形图`left` 和 `right`也是反向的。
:::

可选值如下：

* `'start'`
* `'end'`
* `'bottom'`
* `'left'`
* `'top'`
* `'right'`
* `false`

#### 描边

数值类型表示设置（left, top, right, bottom）边框，对象类型可设置具体的值，[`borderSkipped`](#borderskipped)会影响边框的绘制。

#### 圆角

数值类型表示设置（topLeft, topRight, bottomLeft, bottomRight）圆角，对象类型可设置具体的值，[`borderSkipped`](#borderskipped)会影响圆角的绘制。

### 交互

每个柱形相关交互配置项如下：

| 名称 | 描述
| ---- | -----------
| `hoverBackgroundColor` | 悬浮时背景色
| `hoverBorderColor` | 悬浮时描边色
| `hoverBorderWidth` | 悬浮时描边
| `hoverBorderRadius` | 悬浮时圆角

如果上面这些配置值为`undefined`，则会取图表配置项默认值[`elements.bar.*`](../configuration/elements.md#条形配置)。

## 数据集配置项

柱状图接受以下相关的数据集选项配置：

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `barPercentage` | `number` | `0.9` | Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other. [more...](#barpercentage-vs-categorypercentage)
| `categoryPercentage` | `number` | `0.8` | Percent (0-1) of the available width each category should be within the sample width. [more...](#barpercentage-vs-categorypercentage)
| `barThickness` | `number`\|`string` | | Manually set width of each bar in pixels. If set to `'flex'`, it computes "optimal" sample widths that globally arrange bars side by side. If not set (default), bars are equally sized based on the smallest interval. [more...](#barthickness)
| `base` | `number` | | Base value for the bar in data units along the value axis. If not set, defaults to the value axis base value.
| `maxBarThickness` | `number` | | Set this to ensure that bars are not sized thicker than this.
| `minBarLength` | `number` | | Set this to ensure that bars have a minimum length in pixels.

```js chart-editor
//<block:配置>
const config = {
    type: 'bar',
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
          label: '数据集',
          barPercentage: 0.5,
          barThickness: 6,
          maxBarThickness: 8,
          minBarLength: 2,
          data: [10, 20, 30, 40, 50, 60, 70]
      }]
    },
};
//</block:配置>
module.exports = {
  config
}
```

### barThickness

If this value is a number, it is applied to the width of each bar, in pixels. When this is enforced, `barPercentage` and `categoryPercentage` are ignored.

If set to `'flex'`, the base sample widths are calculated automatically based on the previous and following samples so that they take the full available widths without overlap. Then, bars are sized using `barPercentage` and `categoryPercentage`. There is no gap when the percentage options are 1. This mode generates bars with different widths when data are not evenly spaced.

If not set (default), the base sample widths are calculated using the smallest interval that prevents bar overlapping, and bars are sized using `barPercentage` and `categoryPercentage`. This mode always generates bars equally sized.

## Config Options

These are the customisation options specific to Bar charts. These options are merged with the global chart configuration options, and form the options of the chart.

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `skipNull` | `boolean` | `undefined` | If `true`, null or undefined values will not be drawn

## Scale Configuration

The bar chart sets unique default values for the following configuration from the associated `scale` options:

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `offset` | `boolean` | `true` | If true, extra space is added to both edges and the axis is scaled to fit into the chart area.
| `gridLines.offsetGridLines` | `boolean` | `true` | If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval. If false, the grid line will go right down the middle of the bars. [more...](#offsetgridlines)

### Example Usage

```javascript
options = {
    scales: {
        x: {
            gridLines: {
                offsetGridLines: true
            }
        }
    }
};
```

### offsetGridLines

If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval, which is the space between the grid lines. If false, the grid line will go right down the middle of the bars. This is set to true for a category scale in a bar chart while false for other scales or chart types by default.

## Default Options

It is common to want to apply a configuration setting to all created bar charts. The global bar chart settings are stored in `Chart.defaults.controllers.bar`. Changing the global options only affects charts created after the change. Existing charts are not changed.

## barPercentage vs categoryPercentage

The following shows the relationship between the bar percentage option and the category percentage option.

```text
// categoryPercentage: 1.0
// barPercentage: 1.0
Bar:        | 1.0 | 1.0 |
Category:   |    1.0    |
Sample:     |===========|

// categoryPercentage: 1.0
// barPercentage: 0.5
Bar:          |.5|  |.5|
Category:  |      1.0     |
Sample:    |==============|

// categoryPercentage: 0.5
// barPercentage: 1.0
Bar:             |1.0||1.0|
Category:        |   .5   |
Sample:     |==================|
```

## Data Structure

All of the supported [data structures](../general/data-structures.md) can be used with bar charts.

## Stacked Bar Chart

Bar charts can be configured into stacked bar charts by changing the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces.

```javascript
var stackedBar = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        scales: {
            x: {
                stacked: true
            },
            y: {
                stacked: true
            }
        }
    }
});
```

The following dataset properties are specific to stacked bar charts.

| 名称 | 类型 | Description
| ---- | ---- | -----------
| `stack` | `string` | The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack).

## Horizontal Bar Chart

A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.
To achieve this you will have to set the `indexAxis` property in the options object to `'y'`.
The default for this property is `'x'` and thus will show vertical bars.

```js chart-editor
//<block:配置>
var config = {
    type: 'bar',
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
//</block:配置>
module.exports = {
  config
}
```

### Config Options

The configuration options for the horizontal bar chart are the same as for the [bar chart](#scale-configuration). However, any options specified on the x-axis in a bar chart, are applied to the y-axis in a horizontal bar chart.

## Internal data format

`{x, y, _custom}` where `_custom` is an optional object defining stacked bar properties: `{start, end, barStart, barEnd, min, max}`. `start` and `end` are the input values. Those two are repeated in `barStart` (closer to origin), `barEnd` (further from origin), `min` and `max`.
