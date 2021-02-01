# 分类轴
```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    10,
                    5,
                    0,
                    25,
                    78
                ]
            }
        ],
        'labels': [
            'tick1',
            'tick2',
            'tick3',
            'tick4',
            'tick5'
        ]
    },
    'options': {
        'indexAxis': 'y',
        'elements': {
            'bar': {
                'backgroundColor': '#AAAAAA80',
                'borderColor': '#80808080',
                'borderWidth': {
                    'bottom': 6,
                    'left': 15,
                    'top': 6,
                    'right': 15
                }
            }
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': true
            }
        }
    }
};
module.exports = {
	config: config
}
/* </block:配置> */
```

