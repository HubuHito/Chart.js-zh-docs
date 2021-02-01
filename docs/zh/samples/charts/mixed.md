# 混合图表
```js chart-editor
/* <block:配置:0> */
const config = {
    'data': {
        'datasets': [
            {
                'type': 'line',
                'data': [
                    6,
                    16,
                    3,
                    19
                ],
                'borderColor': '#0000ff',
                'fill': false
            },
            {
                'type': 'bar',
                'data': [
                    5,
                    20,
                    1,
                    10
                ],
                'backgroundColor': '#00ff00',
                'borderColor': '#ff0000'
            }
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'horz': {
                'position': 'top'
            },
            'vert': {
                'axis': 'y',
                'labels': [
                    'a',
                    'b',
                    'c',
                    'd'
                ]
            }
        }
    }
};
module.exports = {
	config: config
}
/* </block:配置> */
```

