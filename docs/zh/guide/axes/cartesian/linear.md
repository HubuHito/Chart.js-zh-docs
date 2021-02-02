---
title: Linear Axis
---

The linear scale is used to chart numerical data. It can be placed on either the x or y-axis. The scatter chart type automatically configures a line chart to use one of these scales for the x-axis. As the name suggests, linear interpolation is used to determine where a value lies on the axis.

## Configuration Options

### Linear Axis specific options

| 名称 | 类型 | Description
| ---- | ---- | -----------
| `beginAtZero` | `boolean` | if true, scale will include 0 if it is not already included.

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `bounds` | `string` | `'ticks'` | Determines the scale bounds. [more...](./index.mdx#scale-bounds)
| `position` | `string` | | Position of the axis. [more...](./index.mdx#axis-position)
| `axis` | `string` | | Which type of axis this is. Possible values are: `'x'`, `'y'`. If not set, this is inferred from the first character of the ID which should be `'x'` or `'y'`.
| `offset` | `boolean` | `false` | If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to `true` for a bar chart by default.
| `scaleLabel` | `object` | | Scale title configuration. [more...](../labelling.md#scale-title-configuration)

## Tick Configuration

### Linear Axis specific options

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `format` | `object` | | The [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) options used by the default label formatter
| `maxTicksLimit` | `number` | `11` | Maximum number of ticks and gridlines to show.
| `precision` | `number` | | if defined and `stepSize` is not specified, the step size will be rounded to this many decimal places.
| `stepSize` | `number` | | User-defined fixed step size for the scale. [more...](#step-size)

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
## Step Size

If set, the scale ticks will be enumerated by multiple of `stepSize`, having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.

This example sets up a chart with a y axis that creates ticks at `0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5`.

```javascript
let options = {
    scales: {
        y: {
            max: 5,
            min: 0,
            ticks: {
                stepSize: 0.5
            }
        }
    }
};
```

## Internal data format

Internally, the linear scale uses numeric data
