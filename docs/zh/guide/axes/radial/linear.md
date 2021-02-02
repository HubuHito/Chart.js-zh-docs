---
title: Linear Radial Axis
---

The linear radial scale is used to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation to the center of the axis.

The following additional configuration options are provided by the radial linear scale.

## Configuration Options

### Linear Radial Axis specific options

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `animate` | `boolean` | `true` | Whether to animate scaling the chart from the centre
| `angleLines` | `object` | | Angle line configuration. [more...](#angle-line-options)
| `beginAtZero` | `boolean` | `false` | if true, scale will include 0 if it is not already included.
| `pointLabels` | `object` | | Point label configuration. [more...](#point-label-options)

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `bounds` | `string` | `'ticks'` | Determines the scale bounds. [more...](./index.mdx#scale-bounds)
| `position` | `string` | | Position of the axis. [more...](./index.mdx#axis-position)
| `axis` | `string` | | Which type of axis this is. Possible values are: `'x'`, `'y'`. If not set, this is inferred from the first character of the ID which should be `'x'` or `'y'`.
| `offset` | `boolean` | `false` | If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to `true` for a bar chart by default.
| `scaleLabel` | `object` | | Scale title configuration. [more...](../labelling.md#scale-title-configuration)

## Tick Configuration

### Linear Radial Axis specific options

| 名称 | 类型 | Scriptable | Default | Description
| ---- | ---- | ------- | ------- | -----------
| `backdropColor` | [`Color`](../../general/colors.md) | Yes | `'rgba(255, 255, 255, 0.75)'` | Color of label backdrops.
| `backdropPaddingX` | `number` | | `2` | Horizontal padding of label backdrop.
| `backdropPaddingY` | `number` | | `2` | Vertical padding of label backdrop.
| `format` | `object` | | | The [`Intl.NumberFormat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat) options used by the default label formatter
| `maxTicksLimit` | `number` | | `11` | Maximum number of ticks and gridlines to show.
| `precision` | `number` | | | if defined and `stepSize` is not specified, the step size will be rounded to this many decimal places.
| `stepSize` | `number` | | | User defined fixed step size for the scale. [more...](#step-size)
| `showLabelBackdrop` | `boolean` | Yes | `true` | If true, draw a background behind the tick labels.

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

The scriptable context is described in [Options](../../general/options.md#tick) section.

## Axis Range Settings

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour.

```javascript
let minDataValue = Math.min(mostNegativeValue, options.ticks.suggestedMin);
let maxDataValue = Math.max(mostPositiveValue, options.ticks.suggestedMax);
```

In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the `suggestedMin` setting, it is ignored.

```javascript
let chart = new Chart(ctx, {
    type: 'radar',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [0, 20, 40, 50]
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        scale: {
            suggestedMin: 50,
            suggestedMax: 100
        }
    }
});
```

In contrast to the `suggested*` settings, the `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

## Step Size

If set, the scale ticks will be enumerated by multiple of `stepSize`, having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.

This example sets up a chart with a y axis that creates ticks at `0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5`.

```javascript
let options = {
    scale: {
        max: 5,
        min: 0,
        ticks: {
            stepSize: 0.5
        }
    }
};
```

## Angle Line Options

The following options are used to configure angled lines that radiate from the center of the chart to the point labels. They can be found in the `angleLines` sub options.

| 名称 | 类型 | Scriptable | Default | Description
| ---- | ---- | ------- | ------- | -----------
| `display` | `boolean` | | `true` | if true, angle lines are shown.
| `color` | [`Color`](../../general/colors.md) | Yes | `Chart.defaults.borderColor` | Color of angled lines.
| `lineWidth` | `number` | Yes | `1` | Width of angled lines.
| `borderDash` | `number[]` | Yes<sup>1</sup> | `[]` | Length and spacing of dashes on angled lines. 查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash).
| `borderDashOffset` | `number` | Yes | `0.0` | Offset for line dashes. 查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).

  1. the `borderDash` setting only accepts a static value or a function. Passing an array of arrays is not supported.

The scriptable context is described in [Options](../../general/options.md#scale) section.

## Point Label Options

The following options are used to configure the point labels that are shown on the perimeter of the scale. They can be found in the `pointLabels` sub options.

| 名称 | 类型 | Scriptable | Default | Description
| ---- | ---- | ------- | ------- | -----------
| `display` | `boolean` | | `true` | if true, point labels are shown.
| `callback` | `function` | | | Callback function to transform data labels to point labels. The default implementation simply returns the current string.
| `color` | [`Color`](../../general/colors.md) | Yes | `Chart.defaults.color` | Color of label.
| `font` | `Font` | Yes | `Chart.defaults.font` | See [Fonts](./general/fonts.md)

The scriptable context is described in [Options](../../general/options.md#scale) section.

## Internal data format

Internally, the linear radial scale uses numeric data
