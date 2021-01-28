---
title: 设备像素比
---

Chart.js 默认使用 1:1 的[像素比](https://github.com/jawil/blog/issues/21)（物理像素:逻辑像素），除非显示器有更高的像素比（eg：视网膜屏幕）。

对于需要把图表转换成位图或者高DPI媒介的场景时，可能需要渲染更高分辨率的图表而不是默认 1:1 像素比方式。

设置`devicePixelRatio`属性不等于 1 时，表示放大或者缩小当前图表。在屏幕上无法看出差异，只有当图片放大或者缩小时才会体现。

## 配置项

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `devicePixelRatio` | `number` | `window.devicePixelRatio` | 设置像素比
