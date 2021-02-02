---
title: Axes
---

Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X-axis and 1 or more Y-axis to map points onto the 2-dimensional canvas. These axes are known as ['cartesian axes'](./cartesian/index#cartesian-axes).

In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as ['radial axes'](./radial/index#radial-axes).

Scales in Chart.js >v2.0 are significantly more powerful, but also different than those of v1.0.

* Multiple X & Y axes are supported.
* A built-in label auto-skip feature detects would-be overlapping ticks and labels and removes every nth label to keep things displaying normally.
* Scale titles are supported.
* New scale types can be extended without writing an entirely new chart type.

## Common Configuration

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `type` | `string` | | Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.
| `display` | `boolean`\|`string` | `true` | Controls the axis global visibility (visible when `true`, hidden when `false`). When `display: 'auto'`, the axis is visible only if at least one associated dataset is visible.
| `gridLines` | `object` | | Grid line configuration. [more...](./styling.mdx#grid-line-configuration)
| `min` | `number` | | User defined minimum number for the scale, overrides minimum value from data. [more...](./index.mdx#axis-range-settings)
| `max` | `number` | | User defined maximum number for the scale, overrides maximum value from data. [more...](./index.mdx#axis-range-settings)
| `reverse` | `boolean` | `false` | Reverse the scale.
| `suggestedMax` | `number` | | Adjustment used when calculating the maximum data value. [more...](./index.mdx#axis-range-settings)
| `suggestedMin` | `number` | | Adjustment used when calculating the minimum data value. [more...](./index.mdx#axis-range-settings)
| `ticks` | `object` | | Tick configuration. [more...](#tick-configuration)
| `weight` | `number` | `0` | The weight used to sort the axis. Higher weights are further away from the chart area.

## Tick Configuration

| 名称 | 类型 | Scriptable | Default | Description
| ---- | ---- | :-------------------------------: | ------- | -----------
| `callback` | `function` | | | Returns the string representation of the tick value as it should be displayed on the chart. See [callback](../axes/labelling.md#creating-custom-tick-formats).
| `display` | `boolean` | | `true` | If true, show tick labels.
| `color` | [颜色](../general/colors.md) | Yes | `Chart.defaults.color` | Color of ticks.
| `font` | `Font` | Yes | `Chart.defaults.font` | See [Fonts](../general/fonts.md)
| `major` | `object` | | `{}` | [Major ticks configuration](./styling.mdx#major-tick-configuration).
| `padding` | `number` | | `0` | Sets the offset of the tick labels from the axis
| `textStrokeColor` | [颜色](../general/colors.md) | Yes | `` | The color of the stroke around the text.
| `textStrokeWidth` | `number` | Yes | `0` | Stroke width around the text.
| `z` | `number` | | `0` | z-index of tick layer. Useful when ticks are drawn on chart area. Values &lt;= 0 are drawn under datasets, &gt; 0 on top.

## Axis Range Settings

Given the number of axis range settings, it is important to understand how they all interact with each other.

The `suggestedMax` and `suggestedMin` settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour.

```javascript
let minDataValue = Math.min(mostNegativeValue, options.suggestedMin);
let maxDataValue = Math.max(mostPositiveValue, options.suggestedMax);
```

In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the `suggestedMin` setting, it is ignored.

```javascript
let chart = new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            label: 'First dataset',
            data: [0, 20, 40, 50]
        }],
        labels: ['January', 'February', 'March', 'April']
    },
    options: {
        scales: {
            y: {
                suggestedMin: 50,
                suggestedMax: 100
            }
        }
    }
});
```

In contrast to the `suggested*` settings, the `min` and `max` settings set explicit ends to the axes. When these are set, some data points may not be visible.

### Callbacks

There are a number of config callbacks that can be used to change parameters in the scale at different points in the update process. The options are supplied at the top level of the axis options.

| Name | Arguments | Description
| ---- | --------- | -----------
| `beforeUpdate` | `axis` | Callback called before the update process starts.
| `beforeSetDimensions` | `axis` | Callback that runs before dimensions are set.
| `afterSetDimensions` | `axis` | Callback that runs after dimensions are set.
| `beforeDataLimits` | `axis` | Callback that runs before data limits are determined.
| `afterDataLimits` | `axis` | Callback that runs after data limits are determined.
| `beforeBuildTicks` | `axis` | Callback that runs before ticks are created.
| `afterBuildTicks` | `axis` | Callback that runs after ticks are created. Useful for filtering ticks.
| `beforeTickToLabelConversion` | `axis` | Callback that runs before ticks are converted into strings.
| `afterTickToLabelConversion` | `axis` | Callback that runs after ticks are converted into strings.
| `beforeCalculateTickRotation` | `axis` | Callback that runs before tick rotation is determined.
| `afterCalculateTickRotation` | `axis` | Callback that runs after tick rotation is determined.
| `beforeFit` | `axis` | Callback that runs before the scale fits to the canvas.
| `afterFit` | `axis` | Callback that runs after the scale fits to the canvas.
| `afterUpdate` | `axis` | Callback that runs at the end of the update process.

### Updating Axis Defaults

The default configuration for a scale can be easily changed. All you need to do is set the new options to `Chart.defaults.scales[type]`.

For example, to set the minimum value of 0 for all linear scales, you would do the following. Any linear scales created after this time would now have a minimum of 0.

```javascript
Chart.defaults.scales.linear.min = 0;
```

## Creating New Axes

To create a new axis, see the [developer docs](../developers/axes.md).