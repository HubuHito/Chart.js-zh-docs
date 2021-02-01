---
title: 配置项
---

## 函数选项

脚本类型选项接受一个函数，每个数据项都会调用函数，回调参数(参见[选项上下文](options.md#上下文对象))。

例子:

```javascript
color: function(context) {
    var index = context.dataIndex;
    var value = context.dataset.data[index];
    return value < 0 ? 'red' :  // draw negative values in red
        index % 2 ? 'blue' :    // else, alternate values in blue and green
        'green';
}
```

## 索引选项

索引类型的选项接受一个数组，其中每个数据项对应于同一索引处的值。注意，如果数据项少于数组长度，则将被循环。在大多数情况下，推荐使用[函数选项]（＃函数选项）。

Example:

```javascript
color: [
    'red',    // color for data at index 0
    'blue',   // color for data at index 1
    'green',  // color for data at index 2
    'black',  // color for data at index 3
    //...
]
```

## 上下文对象

脚本类型的配置项提供`context`回调参数，用于提供当前上下文信息。

::: tip
修改对象时会修改原始值，其他数据项调用时也会被修改。
:::

有如下几种不同级别的上下文对象：

- `chart`
  - `dataset`
    - `data`
  - `scale`
    - `tick`


::: tip
每个级别都继承其父级，并且可以通过子级获得存储在父级中的任何上下文信息。
:::

上下文对象包含以下属性：

### chart

- `chart`: 图表实例
- `type`: `'chart'`

### dataset

除了继承[chart](#chart)属性之外，还有如下属性：

- `active`: 如果元素处于active状态（hover），则返回true。
- `dataset`: `datasetIndex` 索引处的数据集。
- `datasetIndex`: 当前数据集的索引。
- `index`: `datasetIndex`的别名.
- `type`: `'dataset'`

### data

除了继承[dataset](#dataset)属性之外，还有如下属性：

- `active`: 如果元素处于active状态（hover），则返回true。
- `dataIndex`: 当前数据集的索引。
- `dataPoint`: 根据`dataIndex` 和 `datasetIndex` 解析过的数据。
- `element`: 当前数据项对应的元素（point, arc, bar等）。
- `index`: `datasetIndex`的别名.
- `type`: `'data'`

### scale

除了继承[chart](#chart)属性之外，还有如下属性：

- `scale`: 图表实例
- `type`: `'scale'`

### tick

除了继承[scale](#scale)属性之外，还有如下属性：

- `tick`: tick对象
- `index`: tick索引
- `type`: `'tick'`
