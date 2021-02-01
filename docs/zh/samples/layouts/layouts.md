# 图表布局
```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'line',
    'data': {
        'datasets': [
            {
                'data': [
                    10,
                    5,
                    0,
                    25,
                    78,
                    -10
                ]
            }
        ],
        'labels': [
            'tick1 is very long one',
            'tick2',
            'tick3',
            'tick4',
            'tick5',
            'tick6 is very long one'
        ]
    },
    'options': {
        'plugins': {
            'legend': false
        },
        'scales': {
            'x': {
                'type': 'category',
                'ticks': {
                    'maxRotation': 0,
                    'autoSkip': false
                }
            },
            'y': {
                'type': 'linear',
                'position': 'right'
            }
        }
    }
};
module.exports = {
	config: config
}
/* </block:配置> */
```


```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'line',
    'data': {
        'datasets': [
            {
                'data': [
                    10,
                    5,
                    0,
                    25,
                    78,
                    -10
                ]
            }
        ],
        'labels': [
            'tick1',
            'tick2',
            'tick3',
            'tick4',
            'tick5',
            'tick6'
        ]
    },
    'options': {
        'layout': {},
        'plugins': {
            'legend': false
        },
        'scales': {
            'x': {
                'type': 'category',
                'ticks': {
                    'maxRotation': 0,
                    'autoSkip': false
                }
            },
            'y': {
                'type': 'linear',
                'position': 'right'
            }
        }
    }
};
module.exports = {
	config: config
}
/* </block:配置> */
```

