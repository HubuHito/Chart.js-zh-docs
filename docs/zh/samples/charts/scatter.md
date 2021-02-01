# 散点图
```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'scatter',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': 10,
                        'y': 15
                    },
                    {
                        'x': 15,
                        'y': 10
                    }
                ],
                'pointRadius': 10,
                'backgroundColor': 'red',
                'showLine': true,
                'label': 'dataset1'
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false
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
    'type': 'scatter',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': 10,
                        'y': 15
                    },
                    {
                        'x': 15,
                        'y': 10
                    }
                ],
                'pointRadius': 10,
                'backgroundColor': 'red',
                'label': 'dataset1'
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false
            }
        }
    }
};
module.exports = {
	config: config
}
/* </block:配置> */
```

