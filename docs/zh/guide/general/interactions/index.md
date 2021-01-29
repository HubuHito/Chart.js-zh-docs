---
title: 交互
---

可通过 `options.interaction` 配置项设置和图表相关交互模式，全局的配置项通过 `Chart.defaults.interaction` 设置。图表事件相关配置，查看[事件](./events.md#事件)。

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `mode` | `string` | `'nearest'` | 设置tooltip出现方式，查看[交互模式](./modes.md#交互模式)。
| `intersect` | `boolean` | `true` | 为 `true` 表示只有鼠标悬停在数据项时才生效。
| `axis` | `string` | `'x'` | 根据位置计算tooltip出现方向，可选值为：`'x'`, `'y'`, 或 `'xy'`。`index` 模式默认值为 `'x'`，`dataset` 和 `'nearest'` 模式默认值为：`'xy'`。
