---
title: Cartesian Axes
---

Axes that follow a cartesian grid are known as 'Cartesian Axes'. Cartesian axes are used for line, bar, and bubble charts. Four cartesian axes are included in Chart.js by default.

* [linear](./linear)
* [logarithmic](./logarithmic)
* [category](./category)
* [time](./time)
* [timeseries](./timeseries)

## Common Configuration

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `bounds` | `string` | `'ticks'` | Determines the scale bounds. [more...](./index.mdx#scale-bounds)
| `position` | `string` | | Position of the axis. [more...](./index.mdx#axis-position)
| `axis` | `string` | | Which type of axis this is. Possible values are: `'x'`, `'y'`. If not set, this is inferred from the first character of the ID which should be `'x'` or `'y'`.
| `offset` | `boolean` | `false` | If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to `true` for a bar chart by default.
| `scaleLabel` | `object` | | Scale title configuration. [more...](../labelling.md#scale-title-configuration)

### Axis Position

An axis can either be positioned at the edge of the chart, at the center of the chart area, or dynamically with respect to a data value.

To position the axis at the edge of the chart, set the `position` option to one of: `'top'`, `'left'`, `'bottom'`, `'right'`.
To position the axis at the center of the chart area, set the `position` option to `'center'`. In this mode, either the `axis` option is specified or the axis ID starts with the letter 'x' or 'y'.
To position the axis with respect to a data value, set the `position` option to an object such as:

```javascript
{
    x: -20
}
```

This will position the axis at a value of -20 on the axis with ID "x". For cartesian axes, only 1 axis may be specified.

### Scale Bounds

The `bounds` property controls the scale boundary strategy (bypassed by `min`/`max` options).

* `'data'`: makes sure data are fully visible, labels outside are removed
* `'ticks'`: makes sure ticks are fully visible, data outside are truncated

### Tick Configuration

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `align` | `string` | `'center'` | The tick alignment along the axis. Can be `'start'`, `'center'`, or `'end'`.
| `crossAlign` | `string` | `'near'` | The tick alignment perpendicular to the axis. Can be `'near'`, `'center'`, or `'far'`. See [Tick Alignment](./index#tick-alignment)
| `sampleSize` | `number` | `ticks.length` | The number of ticks to examine when deciding how many labels will fit. Setting a smaller value will be faster, but may be less accurate when there is large variability in label length.
| `autoSkip` | `boolean` | `true` | If true, automatically calculates how many labels can be shown and hides labels accordingly. Labels will be rotated up to `maxRotation` before skipping any. Turn `autoSkip` off to show all labels no matter what.
| `autoSkipPadding` | `number` | `0` | Padding between the ticks on the horizontal axis when `autoSkip` is enabled.
| `labelOffset` | `number` | `0` | Distance in pixels to offset the label from the centre point of the tick (in the x-direction for the x-axis, and the y-direction for the y-axis). *Note: this can cause labels at the edges to be cropped by the edge of the canvas*
| `maxRotation` | `number` | `50` | Maximum rotation for tick labels when rotating to condense labels. Note: Rotation doesn't occur until necessary. *Note: Only applicable to horizontal scales.*
| `minRotation` | `number` | `0` | Minimum rotation for tick labels. *Note: Only applicable to horizontal scales.*
| `mirror` | `boolean` | `false` | Flips tick labels around axis, displaying the labels inside the chart instead of outside. *Note: Only applicable to vertical scales.*
| `padding` | `number` | `0` | Padding between the tick label and the axis. When set on a vertical axis, this applies in the horizontal (X) direction. When set on a horizontal axis, this applies in the vertical (Y) direction.

### Tick Alignment

The alignment of ticks is primarily controlled using two settings on the tick configuration object: `align` and `crossAlign`. The `align` setting configures how labels align with the tick mark along the axis direction (i.e. horizontal for a horizontal axis and vertical for a vertical axis). The `crossAlign` setting configures how labels align with the tick mark in the perpendicular direction (i.e. vertical for a horizontal axis and horizontal for a vertical axis). In the example below, the `crossAlign` setting is used to left align the labels on the Y axis.

```js chart-editor
//<block:配置>
const config = {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      axis: 'y',
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
    indexAxis: 'y',
    scales: {
      y: {
        ticks: {
          crossAlign: 'far',
        }
      }
    }
  }
};
//</block:配置>
module.exports = {
  config
}
```

::: tip
the `crossAlign` setting is not used the the tick rotation is not `0`, the axis position is `'center'` or the position is with respect to a data value.
:::

### Axis ID

The properties `dataset.xAxisID` or `dataset.yAxisID` have to match to `scales` property. This is especially needed if multi-axes charts are used.

```javascript
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            // This dataset appears on the first axis
            yAxisID: 'first-y-axis'
        }, {
            // This dataset appears on the second axis
            yAxisID: 'second-y-axis'
        }]
    },
    options: {
        scales: {
            'first-y-axis': {
                type: 'linear'
            },
            'second-y-axis': {
                type: 'linear'
            }]
        }
    }
});
```

## Creating Multiple Axes

With cartesian axes, it is possible to create multiple X and Y axes. To do so, you can add multiple configuration objects to the `xAxes` and `yAxes` properties. When adding new axes, it is important to ensure that you specify the type of the new axes as default types are **not** used in this case.

In the example below, we are creating two Y axes. We then use the `yAxisID` property to map the datasets to their correct axes.

```javascript
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [20, 50, 100, 75, 25, 0],
            label: 'Left dataset',

            // This binds the dataset to the left y axis
            yAxisID: 'left-y-axis'
        }, {
            data: [0.1, 0.5, 1.0, 2.0, 1.5, 0],
            label: 'Right dataset',

            // This binds the dataset to the right y axis
            yAxisID: 'right-y-axis'
        }],
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
    },
    options: {
        scales: {
            'left-y-axis': {
                type: 'linear',
                position: 'left'
            },
            'right-y-axis': {
                type: 'linear',
                position: 'right'
            }]
        }
    }
});
```
