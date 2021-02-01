# 气泡图
```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'line',
    'data': {
        'labels': [
            0,
            5,
            10,
            15,
            20,
            25,
            30,
            50,
            55,
            60
        ],
        'datasets': [
            {
                'data': [
                    6,
                    11,
                    10,
                    10,
                    3,
                    22,
                    7,
                    24
                ],
                'type': 'bubble',
                'label': 'test',
                'borderColor': '#3e95cd',
                'fill': false
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'ticks': {
                    'display': false
                }
            },
            'y': {
                'min': 8,
                'max': 25,
                'beginAtZero': true,
                'ticks': {
                    'display': false
                }
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
    'type': 'bubble',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': 0,
                        'y': 3
                    },
                    {
                        'x': 1,
                        'y': 3
                    },
                    {
                        'x': 2,
                        'y': 3
                    },
                    {
                        'x': 3,
                        'y': 3
                    },
                    {
                        'x': 4,
                        'y': 3
                    },
                    {
                        'x': 5,
                        'y': 3
                    },
                    {
                        'x': 6,
                        'y': 3
                    },
                    {
                        'x': 7,
                        'y': 3
                    },
                    {
                        'x': 8,
                        'y': 3
                    },
                    {
                        'x': 9,
                        'y': 3
                    }
                ],
                'backgroundColor': '#00ff00',
                'borderColor': 'transparent',
                'borderWidth': 0,
                'pointStyle': [
                    'circle',
                    'cross',
                    'crossRot',
                    'dash',
                    'line',
                    'rect',
                    'rectRounded',
                    'rectRot',
                    'star',
                    'triangle'
                ]
            },
            {
                'data': [
                    {
                        'x': 0,
                        'y': 2
                    },
                    {
                        'x': 1,
                        'y': 2
                    },
                    {
                        'x': 2,
                        'y': 2
                    },
                    {
                        'x': 3,
                        'y': 2
                    },
                    {
                        'x': 4,
                        'y': 2
                    },
                    {
                        'x': 5,
                        'y': 2
                    },
                    {
                        'x': 6,
                        'y': 2
                    },
                    {
                        'x': 7,
                        'y': 2
                    },
                    {
                        'x': 8,
                        'y': 2
                    },
                    {
                        'x': 9,
                        'y': 2
                    }
                ],
                'backgroundColor': 'transparent',
                'borderColor': '#0000ff',
                'borderWidth': 1,
                'pointStyle': [
                    'circle',
                    'cross',
                    'crossRot',
                    'dash',
                    'line',
                    'rect',
                    'rectRounded',
                    'rectRot',
                    'star',
                    'triangle'
                ]
            },
            {
                'data': [
                    {
                        'x': 0,
                        'y': 1
                    },
                    {
                        'x': 1,
                        'y': 1
                    },
                    {
                        'x': 2,
                        'y': 1
                    },
                    {
                        'x': 3,
                        'y': 1
                    },
                    {
                        'x': 4,
                        'y': 1
                    },
                    {
                        'x': 5,
                        'y': 1
                    },
                    {
                        'x': 6,
                        'y': 1
                    },
                    {
                        'x': 7,
                        'y': 1
                    },
                    {
                        'x': 8,
                        'y': 1
                    },
                    {
                        'x': 9,
                        'y': 1
                    }
                ],
                'backgroundColor': '#00ff00',
                'borderColor': '#0000ff',
                'borderWidth': 1,
                'pointStyle': [
                    'circle',
                    'cross',
                    'crossRot',
                    'dash',
                    'line',
                    'rect',
                    'rectRounded',
                    'rectRot',
                    'star',
                    'triangle'
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'min': 0,
                'max': 4
            }
        },
        'elements': {
            'line': {
                'borderColor': 'transparent',
                'borderWidth': 1,
                'fill': false
            },
            'point': {
                'radius': 16
            }
        },
        'layout': {
            'padding': {
                'left': 24,
                'right': 24
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
    'type': 'bubble',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': 0,
                        'y': 5,
                        'r': 1
                    },
                    {
                        'x': 1,
                        'y': 4,
                        'r': 2
                    },
                    {
                        'x': 2,
                        'y': 3,
                        'r': 6
                    },
                    {
                        'x': 3,
                        'y': 2
                    },
                    {
                        'x': 4,
                        'y': 1,
                        'r': 2
                    },
                    {
                        'x': 5,
                        'y': 0,
                        'r': null
                    },
                    {
                        'x': 6,
                        'y': -1
                    },
                    {
                        'x': 7,
                        'y': -2,
                        'r': null
                    },
                    {
                        'x': 8,
                        'y': -3,
                        'r': '4'
                    },
                    {
                        'x': 9,
                        'y': -4,
                        'r': '4px'
                    }
                ]
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
        },
        'elements': {
            'point': {
                'backgroundColor': '#444',
                'radius': 10
            }
        },
        'layout': {
            'padding': {
                'left': 24,
                'right': 24
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
    'type': 'bubble',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': 0,
                        'y': 0
                    },
                    {
                        'x': 1,
                        'y': 0
                    },
                    {
                        'x': 2,
                        'y': 0
                    },
                    {
                        'x': 3,
                        'y': 0
                    },
                    {
                        'x': 4,
                        'y': 0
                    },
                    {
                        'x': 5,
                        'y': 0
                    }
                ]
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
        },
        'elements': {
            'point': {
                'backgroundColor': '#444'
            }
        },
        'layout': {
            'padding': {
                'left': 24,
                'right': 24
            }
        }
    }
};
module.exports = {
	config: config
}
/* </block:配置> */
```

