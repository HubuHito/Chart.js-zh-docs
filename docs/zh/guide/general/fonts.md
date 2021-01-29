---
title: 字体
---

`Chart.defaults.font`可配置图表全局字体样式，当然也可以在每个配置项里面单独配置。

例如，设置全局字体大小为 16px，但是图例的字体大小为 14px。

```javascript
Chart.defaults.font.size = 16;
let chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 14
                    }
                }
            }
        }
    }
});
```

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `family` | `string` | `"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"` | 字体
| `size` | `number` | `12` | 字号（radialLinear类型坐标轴不适用）
| `style` | `string` | `'normal'` | 样式（标题、页脚不生效）
| `weight` | `string` | `undefined` | 字重([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight)).
| `lineHeight` | `number`\|`string` | `1.2` | 行高 ([MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/line-height)).

## 字体不存在

如果系统不存在指定的的字体，则不会生效。更多自定义字体信息[查看](https://github.com/chartjs/Chart.js/issues/3318)。

## 加载字体

如果未缓存字体并且需要加载该字体，则在加载该字体后，需要更新使用了该字体的图表。[查看](https://github.com/chartjs/Chart.js/issues/8020)。
