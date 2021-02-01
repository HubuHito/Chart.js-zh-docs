---
title: 标题
---

图表顶部标题配置

## 标题配置

可通过`options.plugins.title`配置图表标题，也可通过`Chart.defaults.plugins.title`配置全局的。

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `align` | `string` | `'center'` | 对齐方式 [对齐](#对齐)
| `color` | [颜色](../general/colors.md) | `Chart.defaults.color` | 颜色
| `display` | `boolean` | `false` | 是否显示
| `position` | `string` | `'top'` | 位置 [位置](#位置)
| `font` | `Font` | `{style: 'bold'}` | [字体](../general/fonts.md)
| `padding` | `number`\|`{top: number, bottom: number}` | `10` | 内边距
| `text` | `string`\|`string[]` | `''` | 标题文本，数组类型表示多行文本

### 位置

标题位置：

* `'top'`
* `'left'`
* `'bottom'`
* `'right'`

## 对齐

对齐方式：

* `'start'`
* `'center'`
* `'end'`

## 例子

创建一个带有‘自定义图表标题’的图表：

```js chart-editor
/*<block:数据>*/
let seed = 10;
const rand = (min, max) => {
  min = min === undefined ? 0 : min
  max = max === undefined ? 1 : max
  seed = (seed * 9301 + 49297) % 233280
  return min + (seed / 233280) * (max - min)
};
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: '数据集1',
      borderColor: 'red',
      data: [
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100))
      ]
    }]
};
/*</block:数据>*/

const config =/*<block:配置>*/ {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: '自定义图表标题'
            }
        }
    }
};/*</block:配置>*/
module.exports = {
  config: config
};
```

设置标题的内边距：

```js chart-editor
/*<block:数据>*/
let seed = 10;
const rand = (min, max) => {
  min = min === undefined ? 0 : min
  max = max === undefined ? 1 : max
  seed = (seed * 9301 + 49297) % 233280
  return min + (seed / 233280) * (max - min)
};
const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: '数据集1',
      borderColor: 'red',
      data: [
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100)),
        Math.round(rand(-100, 100))
      ]
    }]
};
/*</block:数据>*/

const config =/*<block:配置>*/ {
    type: 'line',
    data: data,
    options: {
        plugins: {
            title: {
                display: true,
                text: '自定义图表标题',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
    }
};/*</block:配置>*/
module.exports = {
  config: config
}
```
