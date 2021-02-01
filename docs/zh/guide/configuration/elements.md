---
title: 图形元素
---

可以通过 **all datasets the same way** 配置所有数据集的图形元素（`elements`）样式，不用每个数据集单独配置，如一个常见的例子：柱形图描边一样，但是每个柱子的填充色不一样。有四种图形元素可供配置：**[arc](#arc-configuration)**， **[lines](#line-configuration)**， **[points](#point-configuration)** 和 **[bars](#bar-configuration)**，配置后，所有改类型的图形元素都会应用，除非被数据集里面的配置覆盖。

## 全局配置

图形元素`elements`支持全局配置和图表配置，全局配置通过`Chart.defaults.elements`设置，如下，设置所有柱形图的边框为1px：

::: tip
全局配置一般在`Chart.defaults`命名空间下，图表配置一般在`options`配置项下面，数据集`datasets`的配置可覆盖全局和图表的配置。
:::

```javascript
Chart.defaults.elements.bar.borderWidth = 2;
```

## 点配置

点元素一般用来绘制折线图、雷达图或者气泡图中的点，点元素全局配置项为 `Chart.defaults.elements.point`。

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `radius` | `number` | `3` | 半径
| [`pointStyle`](#点样式) | `string`\|`Image` | `'circle'` | 点样式
| `rotation` | `number` | `0` | 旋转角度
| `backgroundColor` | [颜色](../general/colors.md) | `Chart.defaults.backgroundColor` | 填充色
| `borderWidth` | `number` | `1` | 描边
| `borderColor` | [颜色](../general/colors.md) | `Chart.defaults.borderColor` | 描边颜色
| `hitRadius` | `number` | `1` | Extra radius added to point radius for hit detection.
| `hoverRadius` | `number` | `4` | 悬浮时点半径
| `hoverBorderWidth` | `number` | `1` | 悬浮时描边

### 点样式

可选值如下：

- `'circle'`
- `'cross'`
- `'crossRot'`
- `'dash'`
- `'line'`
- `'rect'`
- `'rectRounded'`
- `'rectRot'`
- `'star'`
- `'triangle'`

如果值类型是图像，则会调用canvas[drawImage](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage)方法。

## 线配置

线元素表示绘制折线，全局线元素配置`Chart.defaults.elements.line`

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `tension` | `number` | `0` | 张力 (`0` 表示不是贝塞尔曲线，即直线)
| `backgroundColor` | [颜色](../general/colors.md) | `Chart.defaults.backgroundColor` | 填充色
| `borderWidth` | `number` | `3` | 描边
| `borderColor` | [颜色](../general/colors.md) | `Chart.defaults.borderColor` | 描边色
| `borderCapStyle` | `string` | `'butt'` | 线帽样式，查看[MDN](https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap)
| `borderDash` | `number[]` | `[]` | 虚线模式，查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash)
| `borderDashOffset` | `number` | `0.0` | 虚线偏移量，查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset).
| `borderJoinStyle` | `string` | `'miter'` | 连接方式，查看[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin)
| `capBezierPoints` | `boolean` | `true` | `true`表示在图表内受贝塞尔曲线控制，`false`为没限制
| `cubicInterpolationMode` | `string` | `'default'` |  插值模式，[查看](./charts/line.mdx/#cubicinterpolationmode)
| `fill` | `boolean`\|`string` | `false` | 如何填充折线以下部分，查看[面积图](../charts/area.md#filling-modes)
| `stepped` | `boolean` | `false` | `true` 表示显示阶梯线 (`tension` 属性会被忽略)

## 条形配置

条形元素用于绘制柱形图的条形，全局配置在`Chart.defaults.elements.bar`中设置。

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `backgroundColor` | [颜色](../general/colors.md) | `Chart.defaults.backgroundColor` | 填充色
| `borderWidth` | `number` | `0` | 描边
| `borderColor` | [颜色](../general/colors.md) | `Chart.defaults.borderColor` | 描边色
| `borderSkipped` | `string` | `'start'` | Skipped (excluded) border: `'start'`, `'end'`, `'bottom'`, `'left'`, `'top'` or `'right'`.

## 圆弧配置

圆弧一般用于绘制南丁格尔玫瑰图、圆环图和饼图，全局配置在`Chart.defaults.elements.arc`中设置。

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `angle` - for polar only | `number` | `circumference / (arc count)` | 弧度
| `backgroundColor` | [颜色](../general/colors.md) | `Chart.defaults.backgroundColor` | 填充色
| `borderAlign` | `string` | `'center'` | 对齐方式
| `borderColor` | [颜色](../general/colors.md) | `'#fff'` | 描边色
| `borderWidth`| `number` | `2` | 描边
