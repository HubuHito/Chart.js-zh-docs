---
title: 布局
---

可通过`options.layout`配置图表布局，也可通过`Chart.defaults.layout`配置全局的。

| 名称 | 类型 | 默认值 | [函数选项](../general/options.md#函数选项) | 描述
| ---- | ---- | ------- | :----: | -----------
| `padding` | `number`\|`object` | `0` | Yes | 图表内边距 [查看](#内边距)

## 内边距

数值类型表示（左，上，右，下）边距都一样，对象类型可设置每个方向的具体值。

如给图表添加50px的左边距：

```javascript
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
    }
});
```
