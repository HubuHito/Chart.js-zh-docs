---
title: 响应式图表
---

当窗口变化要求图表跟着变化时，canvas 渲染大小是根据当前的绝对值决定的，而不是相对值（百分比、vw这些）决定。因此窗口变化时 canvas 渲染大小不会自动调整。

下面例子在不设置`responsive: false`情况下，图表是不会根据窗口自动适应的：

- `<canvas height="40vh" width="80vw">`: 无效值，canvas不会根据窗口自适应([例子](https://codepen.io/chartjs/pen/oWLZaR))
- `<canvas style="height:40vh; width:80vw">`: 无效的行为, canvas会变得模糊 ([例子](https://codepen.io/chartjs/pen/WjxpmO))

Chart.js 提供以下[配置](#配置项)来支持图表响应式的变化。

## 配置项

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `responsive` | `boolean` | `true` | 当容器窗口大小变化时自动调整图表大小([重要提示](#重要提示)).
| `maintainAspectRatio` | `boolean` | `true` | 是否保持宽高等比缩放。
| `aspectRatio` | `number` | `2` | 画布宽高比（eg：1 表示正方形），提示：如果明确指定 canvas 的高度，则此选项会被忽略。
| `onResize` | `function` | `null` | 图表自适应的回调事件，回调参数为 chart实例和当前大小。

## 重要提示

::: warning
由于无法通过`canvas`元素来检测画布大小是否变化。Chart.js会使用父容器来更新画布渲染和大小。但是，这要求父容器是相对定位和父容器不添加其他元素。可以设置父容器宽高为相对值实现图表响应式。
:::

```html
<div class="chart-container" style="position: relative; height:40vh; width:80vw">
    <canvas id="chart"></canvas>
</div>
```

可以通过操作Dom方式修改父容器宽高：

```javascript
chart.canvas.parentNode.style.height = '128px';
chart.canvas.parentNode.style.width = '128px';
```

要让canvas严格按照父元素的宽高大小绘制图表，需要设置[`maintainAspectRatio`](#配置项)为`false`。

## 打印图表时调整大小

CSS媒体查询允许在打印界面时更改CSS样式。这些媒体查询样式可能会需要图表重新调整大小，但是图表可能不会自动触发resize。你可以通过[onbeforeprint](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint)的事件钩子来手动触发图表resize方法。

```javascript
function beforePrintHandler () {
    for (var id in Chart.instances) {
        Chart.instances[id].resize();
    }
}
```

有时打印操作因为界面布局的复杂性会导致resize方法失效，此时你可以显示的设置调整大小，然后在打印完[onafterprint](https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint)后注册还原事件即可。

```javascript
window.addEventListener('beforeprint', () => {
	myChart.resize(600, 600);
});
window.addEventListener('afterprint', () => {
	myChart.resize();
});
```
