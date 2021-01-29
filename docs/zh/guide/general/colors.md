---
title: 颜色
---

颜色相关的配置项支持十六进制格式、RGB格式和HSL格式。如果没有指定颜色，则会使用默认全局配置的颜色，`Chart.defaults`有3个颜色相关配置项：

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `backgroundColor` | `Color` | `rgba(0, 0, 0, 0.1)` | 背景色
| `borderColor` | `Color` | `rgba(0, 0, 0, 0.1)` | 边框色
| `color` | `Color` | `#666` | 字体色

::: tip
颜色配置项支持[CanvasGradient](https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient)对象，可以用它来实现渐变效果。
:::

## 模式和渐变

颜色类型的配置项支持[CanvasPattern](https://developer.mozilla.org/en-US/docs/Web/API/CanvasPattern) 或 [CanvasGradient](https://developer.mozilla.org/en/docs/Web/API/CanvasGradient)对象。

例如，你可以用一个图片填充数据集。如下：

```javascript
var img = new Image();
img.src = 'https://example.com/my_image.png';
img.onload = function() {
    var ctx = document.getElementById('canvas').getContext('2d');
    var fillPattern = ctx.createPattern(img, 'repeat');

    var chart = new Chart(ctx, {
        data: {
            labels: ['Item 1', 'Item 2', 'Item 3'],
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: fillPattern
            }]
        }
    });
};
```

使用图片填充数据集有助于视力障碍者观看图表，查看[如何让数据更容易理解](http://betweentwobrackets.com/data-graphics-and-colour-vision/)。

使用[Patternomaly](https://github.com/ashiguruma/patternomaly)库，可以方便给数据集配置各种模式。

```javascript
var chartData = {
    datasets: [{
        data: [45, 25, 20, 10],
        backgroundColor: [
            pattern.draw('square', '#ff6384'),
            pattern.draw('circle', '#36a2eb'),
            pattern.draw('diamond', '#cc65fe'),
            pattern.draw('triangle', '#ffce56')
        ]
    }],
    labels: ['Red', 'Blue', 'Purple', 'Yellow']
};
```
