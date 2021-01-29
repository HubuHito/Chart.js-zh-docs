---
title: 本地化
---

对于坐标轴数字需要根据当前语言进行本地格式化的，可以使用`locale`配置。

可通过[Unicode BCP 47](https://www.unicode.org/reports/tr35/tr35.html#BCP_47_Conformance)字符串区分语言环境。

Unicode BCP 47 语言标识包括：

  1. 语言代码，
  2. （可选）脚本代码，
  3. （可选）地区（或国家）代码，
  4. （可选） 一个或多个变体代码，
  5. （可选）一个或者多个扩展序列

所有上面的代码通过连字符隔开。

::: tip
默认情况下，图表使用运行平台的默认语言环境。
:::

## 配置项

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `locale` | `string` | `undefined` | BCP 47语言代码 [INTL NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat).
