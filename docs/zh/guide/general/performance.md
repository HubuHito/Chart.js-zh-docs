---
title: 性能
---

Chart.js 是使用 `canvas` 渲染的，渲染速度一般情况下会很快。但对于大量数据的情况，可参考下面优化技巧：

## 数据结构和格式

### 提前解析

提供可以直接使用数据项，并设置`parsing: false`，查看[数据结构](data-structures.md)。

### 数据序列化

可以提前排序数据源，让每一项唯一并且有序，然后设置`normalized: true`可加快图表渲染。

### 数据采样

大量数据全部渲染在图表上，其实意义不大，可适当抽样取点。

::: tip
数据抽取的方法很多，选择什么算法将取决于数据和你想要的结果。例如：[min/max](https://digital.ni.com/public.nsf/allkb/F694FFEEA0ACF282862576020075F784)算法将保留数据中的峰值，但每个像素最多可能需要4个点，对于需要查看峰值的图表很有用。
:::

折线图在一定要条件下会自动进行[数据采样](#数据采样)，但是自动触发的条件在图表生命周期的后期，因此最好的方式还是在图表初始化之前进行数据采样。

## 刻度计算

### 旋转

通过设置`minRotation` 和 `maxRotation`设置刻度线旋转[指定的角度](./axes/cartesian/index.mdx#tick-configuration)，避免图表自动计算旋转角度。

### 采样

设置[`ticks.sampleSize`](./axes/cartesian/index.mdx#tick-configuration)配置。这将通过只查看标签的子集来确定标签的大小，以便更快地渲染轴。如果标签的大小没有很大的差异，这是最好的方式。

## 禁用动画


如果图表的渲染时间较长，则最好禁用动画。这样图表更新是只会渲染一次，而不是多次。这将具有减少CPU使用率和提高总体页面性能的效果，禁用动画时，折线图使用Path2D缓存。

```javascript
new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        animation: false
    }
});
```

## 设置坐标轴的最大和最小值

如果指定了坐标轴的最大和最小值，最大和最小值不会再去自动计算。

```javascript
new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                type: 'time',
                min: new Date('2019-01-01').valueOf(),
                max: new Date('2019-12-31').valueOf()
            },
            y: {
                type: 'linear',
                min: 0,
                max: 100
            }
        }
    }
});
```

## 利用web workers (Chrome)

Chrome(在版本69中)增加了[transferControlToOffscreen](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen)让开发者可以使用[OffscreenCanvas API](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas)创建不操作界面Dom的进程，Chart.js支持在web worker中使用。

通过将所有复杂计算移到一个单独的线程上，主线程可以被释放用于其他用途。可尝试在web worker中使用下面方式提高性能：
* 在线程之间传输数据是很昂贵的，所以要确保配置和数据对象尽可能小。如果可以的话，尝试在worker端生成它们(worker可以发出HTTP请求!)或者将它们作为ArrayBuffers传递给worker，这样可以快速地从一个线程传输到另一个线程。
* 你不能在线程之间传输函数，所以如果你的配置对象包含函数，你必须在传输之前删除它们，然后再把它们添加回去。
* 您不能从工作线程访问DOM，因此使用DOM的BKCharts插件(包括任何鼠标交互)可能无法工作。
* 如果你支持的浏览器不是最现代的Chrome浏览器，请确保你有一个后备方案。
* 调整图表的大小必须手动完成。参见下面工作代码中的示例。

主线程代码：

```javascript
const config = {};
const canvas = new HTMLCanvasElement();
const offscreenCanvas = canvas.transferControlToOffscreen();

const worker = new Worker('worker.js');
worker.postMessage({canvas: offscreenCanvas, config}, [offscreenCanvas]);
```

web worker代码 `worker.js`:

```javascript
onmessage = function(event) {
    const {canvas, config} = event.data;
    const chart = new Chart(canvas, config);

    // Resizing the chart must be done manually, since OffscreenCanvas does not include event listeners.
    canvas.width = 100;
    canvas.height = 100;
    chart.resize();
};
```

## 折线图

### 禁用贝塞尔曲线

贝塞尔曲线绘制比普通直接更消耗性能，可通过禁用它提升渲染速度。

禁用当前图表的贝塞尔曲线：
```javascript
new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        }
    }
});
```

### 数据采样

当`tension` 为 `0`, `stepped` 为 `false`（默认值） 并且 `borderDash` 为 `[]` （默认值）时会自动进行数据采样，通过不绘制不可见的线段提升渲染性能。

```javascript
new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        elements: {
            line: {
                tension: 0, // disables bezier curves
                fill: false,
                stepped: false,
                borderDash: []
            }
        }
    }
});
```

### 禁用spanGaps

如果数据点很多，启用`spanGaps`属性可以禁用线段分隔：

```javascript
new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            spanGaps: true // enable for a single dataset
        }]
    },
    options: {
        spanGaps: true // enable for all datasets
    }
});
```

### 禁用线绘制

如果数据点过多，可以禁用线的绘制：

To disable lines:

```javascript
new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            showLine: false // disable for a single dataset
        }]
    },
    options: {
        showLine: false // disable for all datasets
    }
});
```

### 禁用点绘制

相反，可以禁用点的绘制，只绘制线来提升性能：

```javascript
new Chart(ctx, {
    type: 'line',
    data: {
        datasets: [{
            pointRadius: 0 // disable for a single dataset
        }]
    },
    options: {
        datasets: {
            line: {
                pointRadius: 0 // disable for all `'line'` datasets
            }
        },
        elements: {
            point: {
                radius: 0 // default to disabled in all datasets
            }
        }
    }
});
```

## 使用Babel时，建议设置为`loose`模式

Babel 7.9更改了类的构造方式。使用非`loose`模式可能会很慢，[查看](https://github.com/babel/babel/issues/11356)。

