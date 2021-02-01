---
title: 辅助功能
---

Chart.js 使用 `canvas` 元素绘制的，绘制元素不像Dom一样可以被被选中。所有浏览器都支持`canvas`，但是`canvas`内部的元素内容是无法渲染的。

可在`canvas`上添加 ARIA 属性或者添加一个闭合的元素来提示用户当前环境无法支持`canvas`。

查看[canvas](http://pauljadam.com/demos/canvas.html)了解详细信息。

## 例子

下面这些例子是支持**accessible** `canvas`

1. 设置`role` 和 `aria-label`属性

```html
<canvas id="goodCanvas1" width="400" height="100" aria-label="Hello ARIA World" role="img"></canvas>
```

2. 添加内部闭合标签

```html
<canvas id="okCanvas2" width="400" height="100">
    <p>Hello Fallback World</p>
</canvas>
```

下面这些例子不建议使用

1. 不设置任何`role` 和 `aria-label`属性

```html
<canvas id="badCanvas1" width="400" height="100"></canvas>
```

2. 添加的元素没有放到闭合标签里面

```html
<canvas id="badCanvas2" width="400" height="100">Your browser does not support the canvas element.</canvas>
```
