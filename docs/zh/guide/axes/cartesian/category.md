---
title: Category Axis
---

If the global configuration is used, labels are drawn from one of the label arrays included in the chart data. If only `data.labels` is defined, this will be used. If `data.xLabels` is defined and the axis is horizontal, this will be used. Similarly, if `data.yLabels` is defined and the axis is vertical, this property will be used. Using both `xLabels` and `yLabels` together can create a chart that uses strings for both the X and Y axes.

Specifying any of the settings above defines the x-axis as `type: 'category'` if not defined otherwise. For more fine-grained control of category labels, it is also possible to add `labels` as part of the category axis definition. Doing so does not apply the global defaults.

## Category Axis Definition

Globally:

```javascript
let chart = new Chart(ctx, {
    type: ...
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: ...
    }
});
```

As part of axis definition:

```javascript
let chart = new Chart(ctx, {
    type: ...
    data: ...
    options: {
        scales: {
            x: {
                type: 'category',
                labels: ['January', 'February', 'March', 'April', 'May', 'June']
            }
        }
    }
});
```

## Configuration Options

### Category Axis specific options

类别轴配：

| 名称 | 类型 | Description
| ---- | ---- | -----------
| `min` | `string`\|`number` | The minimum item to display. [more...](#min-max-configuration)
| `max` | `string`\|`number` | The maximum item to display. [more...](#min-max-configuration)
| `labels` | `string[]`\|`string[][]` | An array of labels to display. When an individual label is an array of strings, each item is rendered on a new line.

通用配置：

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `bounds` | `string` | `'ticks'` | Determines the scale bounds. [more...](./index.mdx#scale-bounds)
| `position` | `string` | | Position of the axis. [more...](./index.mdx#axis-position)
| `axis` | `string` | | Which type of axis this is. Possible values are: `'x'`, `'y'`. If not set, this is inferred from the first character of the ID which should be `'x'` or `'y'`.
| `offset` | `boolean` | `false` | If true, extra space is added to the both edges and the axis is scaled to fit into the chart area. This is set to `true` for a bar chart by default.
| `scaleLabel` | `object` | | Scale title configuration. [more...](../labelling.md#scale-title-configuration)

## Tick Configuration

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

## Min Max Configuration

For both the `min` and `max` properties, the value must be `string` in the `labels` array or `numeric` value as an index of a label in that array. In the example below, the x axis would only display "March" through "June".

```javascript
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            data: [10, 20, 30, 40, 50, 60]
        }],
        labels: ['January', 'February', 'March', 'April', 'May', 'June']
    },
    options: {
        scales: {
            x: {
                min: 'March'
            }
        }
    }
});
```

## Internal data format

Internally category scale uses label indices
