---
title: 图例
---

图例是用于显示数据集的数据。

## 配置项

图例配置通过`options.plugins.legend`设置，全局配置可通过`Chart.defaults.plugins.legend`配置。

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `display` | `boolean` | `true` | 是否显示图例
| `position` | `string` | `'top'` | 图例的位置 [查看](#位置)
| `align` | `string` | `'center'` | 对齐方式 [查看](#对齐)
| `maxHeight` | `number` | | 最大高度（像素）
| `maxWidth` | `number` | | 最大宽度（像素）
| `fullWidth` | `boolean` | `true` | 是否应该占据画布全部宽度，一般用不到
| `onClick` | `function` | | 图例点击事件，参数：`[event, legendItem, legend]`
| `onHover` | `function` | | 图例悬浮事件，参数：`[event, legendItem, legend]`
| `onLeave` | `function` | | 鼠标离开事件，参数：`[event, legendItem, legend]`
| `reverse` | `boolean` | `false` | 倒序排列
| `labels` | `object` | | 查看[图例配置](#图例配置)
| `rtl` | `boolean` | | `true` 从右到左渲染
| `textDirection` | `string` | -- | 强制画布上的文本按照`'rtl'` 或者 `'ltr'` 方式渲染（css属性也无效）
| `title` | `object` | | 查看[图例标题配置](#图例标题配置)

## 位置

图例的位置：

* `'top'`
* `'left'`
* `'bottom'`
* `'right'`

## 对齐

对齐方式：

* `'start'`
* `'center'`
* `'end'`

默认值为`center`

## 图例配置

可通过`options.plugins.legend.labels`配置图例，配置项如下：

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `boxWidth` | `number` | `40` | 宽度
| `boxHeight` | `number` | `font.size` | 高度
| `color` | [`颜色`](../general/colors.md) | `Chart.defaults.color` | 颜色
| `font` | `Font` | `Chart.defaults.font` | 查看 [字体](../general/fonts.md)
| `padding` | `number` | `10` | 内边距
| `generateLabels` | `function` | -- | 图例生成函数，默认返回文本和样式，查看[图例接口](#图例接口)
| `filter` | `function` | `null` | 过滤图例，接收两个参数，查看[图例接口](#图例接口)
| `sort` | `function` | `null` | 排序图例，接收三个参数，查看[图例接口](#图例接口)
| `pointStyle` | | | 图例样式，只有`usePointStyle`为`true`时生效
| `usePointStyle` | `boolean` | `false` | 是否使用自定义`pointStyle`图例样式（大小默认取`boxWidth`和`font.size`的最小值）

## 图例标题配置

可通过`options.plugins.legend.title`配置图例标题，配置项如下：

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `color` | [颜色](../general/colors.md) | `Chart.defaults.color` | 字体颜色
| `display` | `boolean` | `false` | 是否显示标题
| `font` | `Font` | `Chart.defaults.font` | 查看 [字体](../general/fonts.md)
| `padding` | `number`\|`object` | `0` | 内边距
| `text` | `string` | | 文本

## 图例接口

图例`onClick`回调的函数的参数是`labels.generateLabels`函数的返回值，图例可实现如下接口：

```javascript
{
    // 文本
    text: string,

    // 数据集索引
    datasetIndex: number,

    // 填充颜色
    fillStyle: Color,

    // 是否隐藏图例
    hidden: boolean,

    // 边框属性，查看 https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap
    lineCap: string,

    // 边框属性，查看 See https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash
    lineDash: number[],

    // 边框属性，查看 https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset
    lineDashOffset: number,

    // 边框属性，查看 https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin
    lineJoin: string,

    // 边框线宽
    lineWidth: number,

    // 描边
    strokeStyle: Color,

    // 图例样式（usePointStyle必须设置true）
    pointStyle: string | Image,

    // 旋转角度（usePointStyle必须设置true）
    rotation: number
}
```

## 例子

创建一个所有图例标题都为红色的图表：

```js chart-editor
//<block:数据>
let seed = 10
const rand = (min, max) => {
  min = min === undefined ? 0 : min
  max = max === undefined ? 1 : max
  seed = (seed * 9301 + 49297) % 233280
  return min + (seed / 233280) * (max - min)
}
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: '数据集1',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'red',
      borderWidth: 1,
      data: [
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100))
      ]
    }, {
      label: '数据集2',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'blue',
      borderWidth: 1,
      data: [
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100))
      ]
    }]
}
//</block:数据>
const config =/*<block:配置>*/ {
    type: 'bar',
    data: data,
    options: {
        plugins: {
            legend: {
                display: true,
                labels: {
                    color: 'rgb(255, 99, 132)'
                }
            }
        }
    }
}/*</block:配置>*/
module.exports = {
  config: config
}
```

## 自定义点击事件

可通过配置`onClick`回调自定义点击操作，默认不配置的情况下，内置处理如下：

```javascript
function(e, legendItem, legend) {
    const index = legendItem.datasetIndex;
    const ci = legend.chart;
    if (ci.isDatasetVisible(index)) {
        ci.hide(index);
        legendItem.hidden = true;
    } else {
        ci.show(index);
        legendItem.hidden = false;
    }
}
```

如：想控制前两个图例的点击行为，让他们一起显示或者隐藏，其余图例保持不变，可通过如下代码实现：

```javascript
var defaultLegendClickHandler = Chart.defaults.plugins.legend.onClick;
var newLegendClickHandler = function (e, legendItem, legend) {
    var index = legendItem.datasetIndex;

    if (index > 1) {
        // Do the original logic
        defaultLegendClickHandler(e, legendItem);
    } else {
        let ci = legend.chart;
        [
            ci.getDatasetMeta(0),
            ci.getDatasetMeta(1)
        ].forEach(function(meta) {
            meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
        });
        ci.update();
    }
};

var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                onClick: newLegendClickHandler
            }
        }
    }
});
```
