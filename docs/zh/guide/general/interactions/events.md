---
title: 事件
---

下面配置项定义了图表支持的交互事件。

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `events` | `string[]` | `['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove']` | 监听的事件类型[更多]](#事件配置)
| `onHover` | `function` | `null` | 上面任何事件触发都会调用这个方法，回调参数为：event对象、elements数组、chart实例。
| `onClick` | `function` | `null` | `'mouseup'` 或者 `'click'`会调用，回调参数同上。

## 事件配置
例如，要监听图表点击事件，可通过如下配置：
```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        // 此时图表只监听点击事件，不会监听mousemove、mouseout等这些事件
        events: ['click']
    }
});
```

## 事件对应图表数据

常见的场景：点击图表元素时显示此的横纵坐标。Chart.js提供帮助类处理该类问题，如：

```javascript
const chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        onClick: (e) => {
            const canvasPosition = Chart.helpers.getRelativePosition(e, chart);

            // Substitute the appropriate scale IDs
            const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
            const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
        }
    }
});
```
