---
title: 动画
---

Chart.js有开箱即用的动画功能，提供了许多选项来配置动画类型。

无限循环的动画：
```js chart-editor
const config =/*<block:配置>*/ {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Looping tension',
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      }]
    },
    options: {
        animation: {
            tension: {
                duration: 1000,
                easing: 'linear',
                from: 1,
                to: 0,
                loop: true
            }
        },
        scales: {
          y: { // defining min and max so hiding the dataset does not change scale range
            min: 0,
            max: 100
          }
        }
    }
}/*</block:配置>*/

module.exports = {
  config: config
}
```

自定义渲染动画（点击图例）：
```js chart-editor
const config =/*<block:配置>*/ {
    type: 'line',
      data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: '点击隐藏',
        data: [65, 59, 80, 81, 26, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      }]
    },
    options: {
        animation: {
          show: {
              x: {
                  from: 0
              },
              y: {
                  from: 0
              }
          },
          hide: {
              x: {
                  to: 0
              },
              y: {
                  to: 0
              }
          }
        }
    }
}/*</block:配置>*/
module.exports = {
  config: config
}
```

## 动画配置项

图表动画配置如下，可在`Chart.defaults.animation`配置全局动画。默认值配置项可参考：<a href="https://github.com/chartjs/Chart.js/blob/master/src/core/core.animations.js#L6-L55" target="_blank">core.animations.js</a>

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `duration` | `number` | `1000` | 持续时间
| `easing` | `string` | `'easeOutQuart'` | 动画函数 [查看](#easing函数)
| `debug` | `boolean` | `undefined` | 左上角是否显示FPS+
| `delay` | `number` | `undefined` | 延时
| `loop` | `boolean` | `undefined` | 是否无限循环
| [[mode]](#动画模式配置) | `object` | [模式](#图表模式) | 配置不同图表模式下的动画，核心模式有：`'active'`, `'hide'`, `'reset'`, `'resize'`, `'show'`，如：上面自定义渲染动画例子配置了图表`'show'`和`hide`模式下的动画。
| [[property]](#单属性动画配置) | `object` | `undefined` | 配置单个属性的动画，优先级高于`[collection]`。如：上面`tension`属性无限循环的例子。
| [[collection]](#属性集合动画配置) | `object` | [默认集合](#默认集合) | 属性数组，用于批量配置某一类属性的动画。

`options.animation` 或 `dataset.animation` 或 `tooltip.animation`下面的动画配置优先级比全局的高。上面这些配置项支持[函数](../general/options.md#函数选项)。

## 动画模式配置

动画模式指在图表在什么**更新模式**下执行动画，核心模式有：`'active'`, `'hide'`, `'reset'`, `'resize'`, `'show'`，也支持自定义模式[更新模式](../developers/api.md#updatemode)，不同模式下面的动画配置方式和正常动画[配置项](#动画配置项)一致。

### 图表模式

| 名称 | 类型 | 默认值 | 描述
| -----| ------ | ----- | -----
| `'active'` | duration | 400 | 鼠标悬浮时延时时间
| `'resize'` | duration | 0 | 图表resize时延时时间
| `'show'` | colors | `{ type: 'color', properties: ['borderColor', 'backgroundColor'], from: 'transparent' }` | 默认值表示当点击图例显示数据集时，颜色会从`transparent`慢慢淡入到正常色。
| `'show'` | visible | `{ type: 'boolean', duration: 0 }` | 数据集会里面显示，颜色从`transparent`到可见过渡。
| `'hide'` | colors | `{ type: 'color', properties: ['borderColor', 'backgroundColor'], to: 'transparent' }` | 默认值表示当点击图例隐藏数据集时，颜色会从正常色慢慢淡入到`transparent`。参考[api](../developers/api.md#hidedatasetIndex)。
| `'hide'` | visible | `{ type: 'boolean', easing: 'easeInExpo' }` | 在动画结束时元素不可见。

## 单属性动画配置

单属性动画配置是针对`element`的属性，通过配置它的起始和结束值来实现动画效果。基本配置项同[动画配置项](#动画配置项)，新增配置项如下：

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `type` | `string` | `typeof property` | 属性类型（用于确定相应的插值器），如：`'number'`, `'color'` 和 `'boolean'`，如果是`'color'`类型这必须指明，因为默认情况下`typeof`标识符无法识别`color`类型。
| `from`  | `number`\|`Color`\|`boolean` | `undefined` | 动画起始值，`undefined`时使用当前值。
| `to`  | `number`\|`Color`\|`boolean` | `undefined` | 动画结束值，`undefined`时使用更新过后的值。
| `fn` | <code>&lt;T&gt;(from: T, to: T, factor: number) => T;</code> | `undefined` | 自定义插值器（默认情况下根据`type`自动确定使用什么插值器）。

## 属性集合动画配置

属性集合用于配置一类属性的动画，属性名可以任意命名，但是不能和`[property]`和`[mode]`冲突，属性集的动画配置和[单属性动画配置](#单属性动画配置)一样。

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `properties` | `string[]` | `undefined` | 配置动画的属性集合

### 默认集合

Chart.js内置如下默认集合

| 名称 | 选项 | 值
| ---- | ------ | -----
| `numbers` | `type` | `'number'`
| `numbers` | `properties` | `['x', 'y', 'borderWidth', 'radius', 'tension']`
| `colors` | `type` | `'color'`
| `colors` | `properties` | `['borderColor', 'backgroundColor']`

[单属性动画配置](#单属性动画配置)的配置项会覆盖属性集合的动画配置。

::: tip
数据集控制器会重写默认集合的动画配置。
:::

## 禁用动画

可以设置`false`属性来禁用整个或者属性的动画，也可以通过设置`duration`为`0`来禁用不同模式下面的动画。

```javascript
chart.options.animation = false; // 禁用图表动画
chart.options.animation.active.duration = 0; // 禁用 'active' 模式下面的动画
chart.options.animation.colors = false; // 禁用颜色集合属性动画
chart.options.animation.x = false; // 禁用 'x' 定义的动画
```

## Easing函数

可选值如下：

* `'linear'`
* `'easeInQuad'`
* `'easeOutQuad'`
* `'easeInOutQuad'`
* `'easeInCubic'`
* `'easeOutCubic'`
* `'easeInOutCubic'`
* `'easeInQuart'`
* `'easeOutQuart'`
* `'easeInOutQuart'`
* `'easeInQuint'`
* `'easeOutQuint'`
* `'easeInOutQuint'`
* `'easeInSine'`
* `'easeOutSine'`
* `'easeInOutSine'`
* `'easeInExpo'`
* `'easeOutExpo'`
* `'easeInOutExpo'`
* `'easeInCirc'`
* `'easeOutCirc'`
* `'easeInOutCirc'`
* `'easeInElastic'`
* `'easeOutElastic'`
* `'easeInOutElastic'`
* `'easeInBack'`
* `'easeOutBack'`
* `'easeInOutBack'`
* `'easeInBounce'`
* `'easeOutBounce'`
* `'easeInOutBounce'`

查看 [Robert Penner's easing equations](http://robertpenner.com/easing/)。

## 动画回调

动画配置提供两个回调函数用给外部调用，便于自定义功能时和图表动画进行同步，回调函数的配置只能配置全局的，层级和[动画配置](#动画配置项)一样。

| 名称 | 类型 | 默认值 | 描述
| ---- | ---- | ------- | -----------
| `onProgress` | `function` | `null` | 动画执行过程中调用
| `onComplete` | `function` | `null` | 动画完成后调用

回调函数有以下参数：

```javascript
{
    // 图表实例
    chart: Chart,

    // 当前动画步骤
    currentStep: number,

    // 动画总步骤数
    numSteps: number,
}
```

展示动画进度条的例子，如下：

```javascript
var chart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
        animation: {
            onProgress: function(animation) {
                progress.value = animation.currentStep / animation.numSteps;
            }
        }
    }
});
```

::: tip
动画进度条完整例子可查看[Github](https://github.com/chartjs/Chart.js/blob/master/samples/advanced/progress-bar.html)
:::
