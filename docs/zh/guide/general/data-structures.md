---
title: 数据源结构
---

data属性可以以各种方式传递。默认情况下根据当前图表类型和坐标轴类型解析data数据结构。

::: tip
如果`data`配置中有`labels`属性，则必须有一个数据集的数据项和`labels`一致，`labels`属性必须为数组，且每项都是可以被渲染的字符串或者数字类型，其中每一项都对应坐标轴的刻度，
如果需要多行标签，则可以为每个行提供一个数组作为数组中的一个条目。
:::

## 基本类型数组

```javascript
data: [20, 10],
labels: ['a', 'b']
```

When the `data` is an array of numbers, values from `labels` array at the same index are used for the index axis (`x` for vertical, `y` for horizontal charts).

## 对象数组

```javascript
data: [{x: 10, y: 20}, {x: 15, y: 10}]
```

```javascript
data: [{x:'2016-12-25', y:20}, {x:'2016-12-26', y:10}]
```

```javascript
data: [{x:'Sales', y:20}, {x:'Revenue', y:10}]
```

上面三种数据格式也支持，如果数据格式跟这个一致，可以设置`parsing: false`来禁用数据源的解析操作，禁用后数据源必须自己排序并且使用自带的图表类型和坐标轴。

## 自定义属性的对象数组

```javascript
type: 'bar',
data: {
    datasets: [{
        data: [{id: 'Sales', nested: {value: 1500}}, {id: 'Purchases', nested: {value: 500}}]
    }]
},
options: {
    parsing: {
        xAxisKey: 'id',
        yAxisKey: 'nested.value'
    }
}
```

## 对象

```javascript
data: {
    January: 10,
    February: 20
}
```

上面这个数据格式，属性名会当作 x 轴数据，值会当作 y 轴数据解析，如果是垂直图表则相反。

## 数据集配置项

| 名称 | 类型 | 描述
| ---- | ---- | -----------
| `label` | `string` | 图例或者tooltips上显示的标签
| `clip` | `number`\|`object` | 对图表区域进行裁剪，正值表示允许溢出，负值会截断绘制区域，0表示图表区域。也可以配置具体值，如：`{left: 5, top: false, right: -2, bottom: 0}`。
| `order` | `number` | 数据集绘制顺序，也会影响堆叠图、tooltip和图例的顺序。
| `stack` | `string` | 数据集所属组ID（对于堆叠图，每个组都是一个堆叠）。
| `parsing` | `boolean`\|`object` | 如何解析数据源格式，可以通过设置options或者dataset的`parsing`属性禁用解析。禁用后数据源必须自己排序并且使用自带的图表类型和坐标轴。

### parsing

```javascript
const data = [{x: 'Jan', net: 100, cogs: 50, gm: 50}, {x: 'Feb', net: 120, cogs: 55, gm: 75}];
const cfg = {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb'],
        datasets: [{
            label: 'Net sales',
            data: data,
            parsing: {
                yAxisKey: 'net'
            }
        }, {
            label: 'Cost of goods sold',
            data: data,
            parsing: {
                yAxisKey: 'cogs'
            }
        }, {
            label: 'Gross margin',
            data: data,
            parsing: {
                yAxisKey: 'gm'
            }
        }]
    },
};
```
