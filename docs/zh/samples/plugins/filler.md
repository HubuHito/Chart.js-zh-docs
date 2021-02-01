# 过滤器
```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'line',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    5.5,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6.5,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'end',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    5.5,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6.5,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'end',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 64, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': {
                    'target': 'origin',
                    'below': 'rgba(255, 0, 0, 0.25)'
                },
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 64, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'origin',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    4,
                    2,
                    1,
                    -1,
                    1,
                    2
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    4,
                    2,
                    null,
                    3,
                    2.5,
                    null,
                    -2,
                    1.5,
                    3
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    3.5,
                    2,
                    1,
                    2.5,
                    -2,
                    3,
                    -1,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(128, 0, 128, 0.25)',
                'data': [
                    5,
                    6,
                    5,
                    -2,
                    -4,
                    -3,
                    4,
                    2,
                    4.5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent',
                'fill': {
                    'target': 'origin',
                    'below': 'transparent'
                }
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    4,
                    2,
                    1,
                    -1,
                    1,
                    2
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    4,
                    2,
                    null,
                    3,
                    2.5,
                    null,
                    -2,
                    1.5,
                    3
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    3.5,
                    2,
                    1,
                    2.5,
                    -2,
                    3,
                    -1,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(128, 0, 128, 0.25)',
                'data': [
                    5,
                    6,
                    5,
                    -2,
                    -4,
                    -3,
                    4,
                    2,
                    4.5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent',
                'fill': 'origin'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    4,
                    2,
                    1,
                    -1,
                    1,
                    2
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    4,
                    2,
                    null,
                    3,
                    2.5,
                    null,
                    -2,
                    1.5,
                    3
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    3.5,
                    2,
                    1,
                    2.5,
                    -2,
                    3,
                    -1,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(128, 0, 128, 0.25)',
                'data': [
                    5,
                    6,
                    5,
                    -2,
                    -4,
                    -3,
                    4,
                    2,
                    4.5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent',
                'fill': 'origin'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    4,
                    2,
                    1,
                    -1,
                    1,
                    2
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    4,
                    2,
                    null,
                    3,
                    2.5,
                    null,
                    -2,
                    1.5,
                    3
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    3.5,
                    2,
                    1,
                    2.5,
                    -2,
                    3,
                    -1,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(128, 0, 128, 0.25)',
                'data': [
                    5,
                    6,
                    5,
                    -2,
                    -4,
                    -3,
                    4,
                    2,
                    4.5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent',
                'stepped': true,
                'fill': 'origin'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    4,
                    2,
                    1,
                    -1,
                    1,
                    2
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    4,
                    2,
                    null,
                    3,
                    2.5,
                    null,
                    -2,
                    1.5,
                    3
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    3.5,
                    2,
                    1,
                    2.5,
                    -2,
                    3,
                    -1,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(128, 0, 128, 0.25)',
                'data': [
                    5,
                    6,
                    5,
                    -2,
                    -4,
                    -3,
                    4,
                    2,
                    4.5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent',
                'stepped': true,
                'fill': 'origin'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 64, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'origin',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'start',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'start',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'black',
                'borderWidth': 5,
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    0,
                    1,
                    2,
                    -1,
                    0,
                    2,
                    1,
                    -1,
                    -2
                ],
                'fill': {
                    'target': '+1',
                    'above': 'rgba(255, 0, 0, 0.25)',
                    'below': 'rgba(0, 0, 255, 0.25)'
                }
            },
            {
                'data': [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
                'borderColor': 'rgba(255, 0, 0, 0.5)',
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    {
                        'x': 0,
                        'y': 0
                    },
                    {
                        'x': 1,
                        'y': 0.03182561363494727
                    },
                    {
                        'x': 2,
                        'y': 0.06361898390404276
                    },
                    {
                        'x': 3,
                        'y': 0.09534790010803629
                    },
                    {
                        'x': 4,
                        'y': 0.12698021684778552
                    },
                    {
                        'x': 5,
                        'y': 0.15848388659160487
                    },
                    {
                        'x': 6,
                        'y': 0.18982699214346235
                    },
                    {
                        'x': 7,
                        'y': 0.22097777897913012
                    },
                    {
                        'x': 8,
                        'y': 0.2519046874175275
                    },
                    {
                        'x': 9,
                        'y': 0.28257638459466383
                    },
                    {
                        'x': 10,
                        'y': 0.31296179620778664
                    },
                    {
                        'x': 11,
                        'y': 0.3430301379975745
                    },
                    {
                        'x': 12,
                        'y': 0.3727509469364797
                    },
                    {
                        'x': 13,
                        'y': 0.4020941120916223
                    },
                    {
                        'x': 14,
                        'y': 0.43102990513096767
                    },
                    {
                        'x': 15,
                        'y': 0.45952901044188105
                    },
                    {
                        'x': 16,
                        'y': 0.487562554831546
                    },
                    {
                        'x': 17,
                        'y': 0.5151021367791546
                    },
                    {
                        'x': 18,
                        'y': 0.5421198552102349
                    },
                    {
                        'x': 19,
                        'y': 0.5685883377639631
                    },
                    {
                        'x': 20,
                        'y': 0.5944807685248221
                    },
                    {
                        'x': 21,
                        'y': 0.6197709151905099
                    },
                    {
                        'x': 22,
                        'y': 0.6444331556485751
                    },
                    {
                        'x': 23,
                        'y': 0.6684425039348527
                    },
                    {
                        'x': 24,
                        'y': 0.691774635547401
                    },
                    {
                        'x': 25,
                        'y': 0.7144059120902944
                    },
                    {
                        'x': 26,
                        'y': 0.736313405222303
                    },
                    {
                        'x': 27,
                        'y': 0.7574749198861987
                    },
                    {
                        'x': 28,
                        'y': 0.7778690167951507
                    },
                    {
                        'x': 29,
                        'y': 0.7974750341534307
                    },
                    {
                        'x': 30,
                        'y': 0.8162731085894215
                    },
                    {
                        'x': 31,
                        'y': 0.8342441952797205
                    },
                    {
                        'x': 32,
                        'y': 0.8513700872439518
                    },
                    {
                        'x': 33,
                        'y': 0.8676334337907361
                    },
                    {
                        'x': 34,
                        'y': 0.8830177580961318
                    },
                    {
                        'x': 35,
                        'y': 0.89750747389674
                    },
                    {
                        'x': 36,
                        'y': 0.9110879012805561
                    },
                    {
                        'x': 37,
                        'y': 0.9237452815595754
                    },
                    {
                        'x': 38,
                        'y': 0.9354667912090815
                    },
                    {
                        'x': 39,
                        'y': 0.9462405548594964
                    },
                    {
                        'x': 40,
                        'y': 0.9560556573276295
                    },
                    {
                        'x': 41,
                        'y': 0.9649021546751365
                    },
                    {
                        'x': 42,
                        'y': 0.972771084282985
                    },
                    {
                        'x': 43,
                        'y': 0.9796544739317193
                    },
                    {
                        'x': 44,
                        'y': 0.9855453498783258
                    },
                    {
                        'x': 45,
                        'y': 0.990437743921515
                    },
                    {
                        'x': 46,
                        'y': 0.9943266994482632
                    },
                    {
                        'x': 47,
                        'y': 0.9972082764554879
                    },
                    {
                        'x': 48,
                        'y': 0.999079555541768
                    },
                    {
                        'x': 49,
                        'y': 0.9999386408650661
                    },
                    {
                        'x': 50,
                        'y': 0.9997846620634563
                    },
                    {
                        'x': 51,
                        'y': 0.9986177751369107
                    },
                    {
                        'x': 52,
                        'y': 0.9964391622892512
                    },
                    {
                        'x': 53,
                        'y': 0.9932510307304285
                    },
                    {
                        'x': 54,
                        'y': 0.9890566104403391
                    },
                    {
                        'x': 55,
                        'y': 0.9838601508964477
                    },
                    {
                        'x': 56,
                        'y': 0.9776669167685306
                    },
                    {
                        'x': 57,
                        'y': 0.9704831825848993
                    },
                    {
                        'x': 58,
                        'y': 0.9623162263755121
                    },
                    {
                        'x': 59,
                        'y': 0.9531743222984094
                    },
                    {
                        'x': 60,
                        'y': 0.9430667322569473
                    },
                    {
                        'x': 61,
                        'y': 0.9320036965163202
                    },
                    {
                        'x': 62,
                        'y': 0.9199964233288779
                    },
                    {
                        'x': 63,
                        'y': 0.9070570775787515
                    },
                    {
                        'x': 64,
                        'y': 0.8931987684572888
                    },
                    {
                        'x': 65,
                        'y': 0.8784355361817884
                    },
                    {
                        'x': 66,
                        'y': 0.8627823377709856
                    },
                    {
                        'x': 67,
                        'y': 0.8462550318917049
                    },
                    {
                        'x': 68,
                        'y': 0.8288703627920264
                    },
                    {
                        'x': 69,
                        'y': 0.8106459433372488
                    },
                    {
                        'x': 70,
                        'y': 0.7916002371658316
                    },
                    {
                        'x': 71,
                        'y': 0.7717525399833982
                    },
                    {
                        'x': 72,
                        'y': 0.75112296001375
                    },
                    {
                        'x': 73,
                        'y': 0.7297323976266944
                    },
                    {
                        'x': 74,
                        'y': 0.7076025241633322
                    },
                    {
                        'x': 75,
                        'y': 0.6847557599802515
                    },
                    {
                        'x': 76,
                        'y': 0.6612152517348749
                    },
                    {
                        'x': 77,
                        'y': 0.6370048489349738
                    },
                    {
                        'x': 78,
                        'y': 0.6121490797761028
                    },
                    {
                        'x': 79,
                        'y': 0.5866731262914412
                    },
                    {
                        'x': 80,
                        'y': 0.560602798839214
                    },
                    {
                        'x': 81,
                        'y': 0.5339645099535378
                    },
                    {
                        'x': 82,
                        'y': 0.5067852475851883
                    },
                    {
                        'x': 83,
                        'y': 0.47909254775939986
                    },
                    {
                        'x': 84,
                        'y': 0.45091446667839175
                    },
                    {
                        'x': 85,
                        'y': 0.42227955229689373
                    },
                    {
                        'x': 86,
                        'y': null
                    },
                    {
                        'x': 87,
                        'y': null
                    },
                    {
                        'x': 88,
                        'y': null
                    },
                    {
                        'x': 89,
                        'y': null
                    },
                    {
                        'x': 90,
                        'y': null
                    },
                    {
                        'x': 91,
                        'y': null
                    },
                    {
                        'x': 92,
                        'y': null
                    },
                    {
                        'x': 93,
                        'y': null
                    },
                    {
                        'x': 94,
                        'y': null
                    },
                    {
                        'x': 95,
                        'y': null
                    },
                    {
                        'x': 96,
                        'y': null
                    },
                    {
                        'x': 97,
                        'y': null
                    },
                    {
                        'x': 98,
                        'y': null
                    },
                    {
                        'x': 99,
                        'y': null
                    },
                    {
                        'x': 100,
                        'y': null
                    },
                    {
                        'x': 101,
                        'y': null
                    },
                    {
                        'x': 102,
                        'y': null
                    },
                    {
                        'x': 103,
                        'y': null
                    },
                    {
                        'x': 104,
                        'y': null
                    },
                    {
                        'x': 105,
                        'y': -0.19931725965781547
                    },
                    {
                        'x': 106,
                        'y': -0.23040332599591754
                    },
                    {
                        'x': 107,
                        'y': -0.2612559646672744
                    },
                    {
                        'x': 108,
                        'y': -0.29184391805254806
                    },
                    {
                        'x': 109,
                        'y': -0.32213619669202354
                    },
                    {
                        'x': 110,
                        'y': -0.3521021106818435
                    },
                    {
                        'x': 111,
                        'y': -0.3817113007667571
                    },
                    {
                        'x': 112,
                        'y': -0.41093376909788054
                    },
                    {
                        'x': 113,
                        'y': -0.43973990962430304
                    },
                    {
                        'x': 114,
                        'y': -0.4681005380877605
                    },
                    {
                        'x': 115,
                        'y': -0.49598692158997026
                    },
                    {
                        'x': 116,
                        'y': -0.5233708077026886
                    },
                    {
                        'x': 117,
                        'y': -0.5502244530909871
                    },
                    {
                        'x': 118,
                        'y': -0.5765206516207552
                    },
                    {
                        'x': 119,
                        'y': -0.6022327619219496
                    },
                    {
                        'x': 120,
                        'y': -0.6273347343796662
                    },
                    {
                        'x': 121,
                        'y': -0.651801137525691
                    },
                    {
                        'x': 122,
                        'y': -0.6756071838037883
                    },
                    {
                        'x': 123,
                        'y': -0.6987287546826255
                    },
                    {
                        'x': 124,
                        'y': -0.721142425090892
                    },
                    {
                        'x': 125,
                        'y': -0.7428254871498533
                    },
                    {
                        'x': 126,
                        'y': -0.7637559731793018
                    },
                    {
                        'x': 127,
                        'y': -0.7839126779535901
                    },
                    {
                        'x': 128,
                        'y': -0.8032751801852016
                    },
                    {
                        'x': 129,
                        'y': -0.8218238632140968
                    },
                    {
                        'x': 130,
                        'y': -0.8395399348818634
                    },
                    {
                        'x': 131,
                        'y': -0.8564054465705497
                    },
                    {
                        'x': 132,
                        'y': -0.8724033113868781
                    },
                    {
                        'x': 133,
                        'y': -0.8875173214734277
                    },
                    {
                        'x': 134,
                        'y': -0.9017321644292412
                    },
                    {
                        'x': 135,
                        'y': -0.915033438823219
                    },
                    {
                        'x': 136,
                        'y': -0.9274076687845899
                    },
                    {
                        'x': 137,
                        'y': -0.9388423176556677
                    },
                    {
                        'x': 138,
                        'y': -0.9493258006930703
                    },
                    {
                        'x': 139,
                        'y': -0.9588474968045277
                    },
                    {
                        'x': 140,
                        'y': -0.967397759309389
                    },
                    {
                        'x': 141,
                        'y': -0.9749679257119288
                    },
                    {
                        'x': 142,
                        'y': -0.981550326477549
                    },
                    {
                        'x': 143,
                        'y': -0.9871382928029862
                    },
                    {
                        'x': 144,
                        'y': -0.9917261633726514
                    },
                    {
                        'x': 145,
                        'y': -0.9953092900942581
                    },
                    {
                        'x': 146,
                        'y': -0.9978840428079259
                    },
                    {
                        'x': 147,
                        'y': -0.9994478129639919
                    },
                    {
                        'x': 148,
                        'y': -0.9999990162658001
                    },
                    {
                        'x': 149,
                        'y': -0.9995370942747949
                    },
                    {
                        'x': 150,
                        'y': -0.9980625149762888
                    },
                    {
                        'x': 151,
                        'y': -0.9955767723053351
                    },
                    {
                        'x': 152,
                        'y': -0.9920823846331827
                    },
                    {
                        'x': 153,
                        'y': -0.9875828922158477
                    },
                    {
                        'x': 154,
                        'y': -0.9820828536073872
                    },
                    {
                        'x': 155,
                        'y': -0.9755878410415089
                    },
                    {
                        'x': 156,
                        'y': -0.9681044347861931
                    },
                    {
                        'x': 157,
                        'y': -0.9596402164770522
                    },
                    {
                        'x': 158,
                        'y': -0.9502037614361747
                    },
                    {
                        'x': 159,
                        'y': -0.9398046299842419
                    },
                    {
                        'x': 160,
                        'y': -0.9284533577547156
                    },
                    {
                        'x': 161,
                        'y': -0.9161614450199098
                    },
                    {
                        'x': 162,
                        'y': -0.9029413450397645
                    },
                    {
                        'x': 163,
                        'y': -0.8888064514451182
                    },
                    {
                        'x': 164,
                        'y': -0.8737710846682707
                    },
                    {
                        'x': 165,
                        'y': -0.8578504774345758
                    },
                    {
                        'x': 166,
                        'y': -0.8410607593297651
                    },
                    {
                        'x': 167,
                        'y': -0.8234189404586443
                    },
                    {
                        'x': 168,
                        'y': -0.8049428942117046
                    },
                    {
                        'x': 169,
                        'y': -0.7856513391571246
                    },
                    {
                        'x': 170,
                        'y': -0.7655638200764951
                    },
                    {
                        'x': 171,
                        'y': -0.7447006881634859
                    },
                    {
                        'x': 172,
                        'y': -0.7230830804055194
                    },
                    {
                        'x': 173,
                        'y': -0.7007328981693293
                    },
                    {
                        'x': 174,
                        'y': -0.6776727850121139
                    },
                    {
                        'x': 175,
                        'y': -0.6539261037407516
                    },
                    {
                        'x': 176,
                        'y': -0.6295169127423244
                    },
                    {
                        'x': 177,
                        'y': -0.6044699416099384
                    },
                    {
                        'x': 178,
                        'y': null
                    },
                    {
                        'x': 179,
                        'y': null
                    },
                    {
                        'x': 180,
                        'y': null
                    },
                    {
                        'x': 181,
                        'y': null
                    },
                    {
                        'x': 182,
                        'y': null
                    },
                    {
                        'x': 183,
                        'y': null
                    },
                    {
                        'x': 184,
                        'y': null
                    },
                    {
                        'x': 185,
                        'y': null
                    },
                    {
                        'x': 186,
                        'y': null
                    },
                    {
                        'x': 187,
                        'y': null
                    },
                    {
                        'x': 188,
                        'y': null
                    },
                    {
                        'x': 189,
                        'y': null
                    },
                    {
                        'x': 190,
                        'y': null
                    },
                    {
                        'x': 191,
                        'y': null
                    },
                    {
                        'x': 192,
                        'y': null
                    },
                    {
                        'x': 193,
                        'y': null
                    },
                    {
                        'x': 194,
                        'y': null
                    },
                    {
                        'x': 195,
                        'y': null
                    },
                    {
                        'x': 196,
                        'y': null
                    },
                    {
                        'x': 197,
                        'y': null
                    },
                    {
                        'x': 198,
                        'y': null
                    },
                    {
                        'x': 199,
                        'y': null
                    }
                ],
                'fill': false
            },
            {
                'borderColor': 'rgba(0, 0, 255, 0.5)',
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    {
                        'x': 0,
                        'y': 1
                    },
                    {
                        'x': 10,
                        'y': 0.9497657153816387
                    },
                    {
                        'x': 20,
                        'y': 0.8041098282287917
                    },
                    {
                        'x': 30,
                        'y': 0.5776661771246111
                    },
                    {
                        'x': 40,
                        'y': 0.29318523170827376
                    },
                    {
                        'x': 50,
                        'y': -0.020751614459130804
                    },
                    {
                        'x': 60,
                        'y': -0.33260357561247483
                    },
                    {
                        'x': 70,
                        'y': -0.6110393314010147
                    },
                    {
                        'x': 80,
                        'y': -0.8280848398163316
                    },
                    {
                        'x': 90,
                        'y': -0.9619338491686807
                    },
                    {
                        'x': 100,
                        'y': -0.9991387409946791
                    },
                    {
                        'x': 110,
                        'y': -0.9359615930439619
                    },
                    {
                        'x': 120,
                        'y': -0.7787497229795936
                    },
                    {
                        'x': 130,
                        'y': -0.543297982453972
                    },
                    {
                        'x': 140,
                        'y': -0.25326187096200165
                    },
                    {
                        'x': 150,
                        'y': 0.06221909834773645
                    },
                    {
                        'x': 160,
                        'y': 0.37144900386727936
                    },
                    {
                        'x': 170,
                        'y': 0.64335995942387
                    },
                    {
                        'x': 180,
                        'y': 0.8506334603529485
                    },
                    {
                        'x': 190,
                        'y': 0.9724450345754839
                    }
                ],
                'fill': 0
            },
            {
                'borderColor': 'rgba(0, 255, 0, 0.5)',
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    {
                        'x': 0,
                        'y': 6.123233995736766e-17
                    },
                    {
                        'x': 15,
                        'y': -0.45952901044188116
                    },
                    {
                        'x': 30,
                        'y': -0.8162731085894214
                    },
                    {
                        'x': 45,
                        'y': -0.990437743921515
                    },
                    {
                        'x': 60,
                        'y': -0.9430667322569474
                    },
                    {
                        'x': 75,
                        'y': -0.6847557599802515
                    },
                    {
                        'x': 90,
                        'y': -0.2732823994031184
                    },
                    {
                        'x': 105,
                        'y': 0.19931725965781585
                    },
                    {
                        'x': 120,
                        'y': 0.6273347343796658
                    },
                    {
                        'x': 135,
                        'y': 0.915033438823219
                    },
                    {
                        'x': 150,
                        'y': 0.9980625149762888
                    },
                    {
                        'x': 165,
                        'y': 0.8578504774345758
                    },
                    {
                        'x': 180,
                        'y': 0.5257591807357896
                    },
                    {
                        'x': 195,
                        'y': 0.0760689728650892
                    }
                ],
                'fill': 1
            }
        ]
    },
    'options': {
        'animation': false,
        'responsive': false,
        'datasets': {
            'line': {
                'tension': 0.4,
                'borderWidth': 1,
                'pointRadius': 1.5
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
        },
        'scales': {
            'x': {
                'type': 'linear',
                'display': false
            },
            'y': {
                'type': 'linear',
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
    'type': 'line',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': {
                    'target': 1,
                    'above': 'rgba(255, 0, 0, 0.25)',
                    'below': 'rgba(122, 0, 0, 0.25)'
                }
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': {
                    'target': '+1',
                    'above': 'rgba(0, 255, 0, 0.25)',
                    'below': 'rgba(0, 255, 120, 0.25)'
                }
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': {
                    'target': '-2',
                    'above': 'rgba(255, 0, 255, 0.25)',
                    'below': 'rgba(255, 0, 120, 0.25)'
                }
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': {
                    'target': '-1',
                    'above': 'rgba(255, 255, 0, 0.25)',
                    'below': 'rgba(255, 120, 0, 0.25)'
                }
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': {
                    'target': 1,
                    'below': 'transparent'
                }
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': {
                    'target': '+1',
                    'below': 'transparent'
                }
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': {
                    'target': '-2',
                    'below': 'transparent'
                }
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': {
                    'target': '-1',
                    'below': 'transparent'
                }
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': {
                    'target': 1,
                    'above': 'transparent'
                }
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': {
                    'target': '+1',
                    'above': 'transparent'
                }
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': {
                    'target': '-2',
                    'above': 'transparent'
                }
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': {
                    'target': '-1',
                    'above': 'transparent'
                }
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'cubicInterpolationMode': 'monotone',
                'borderColor': 'transparent'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'stepped': true,
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'stepped': 'after',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'stepped': 'before',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'stepped': 'middle',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'stepped': false,
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'black'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    1,
                    0,
                    1,
                    null,
                    0,
                    1
                ],
                'fill': 'stack'
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    1,
                    null,
                    1,
                    0,
                    null,
                    1,
                    1,
                    0
                ],
                'fill': 'stack'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    null,
                    2,
                    0,
                    2,
                    0
                ],
                'fill': 'stack'
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    null,
                    0,
                    2,
                    0,
                    2,
                    0,
                    2
                ],
                'fill': 'stack'
            },
            {
                'backgroundColor': 'rgba(0, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    null,
                    2,
                    null,
                    2,
                    2
                ],
                'fill': 'stack'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    1,
                    3,
                    1,
                    1,
                    3,
                    1,
                    1
                ],
                'fill': 'stack'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'stacked': true,
                'min': 0
            }
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    -4,
                    4,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': {
                    'value': 2
                }
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
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
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    5.5,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6.5,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scale': {
            'display': false,
            'gridLines': {
                'circular': true
            }
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'end'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    5.5,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6.5,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'end'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    5.5,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6.5,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'end'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    4,
                    2,
                    1,
                    -1,
                    1,
                    2
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    4,
                    2,
                    null,
                    3,
                    2.5,
                    null,
                    -2,
                    1.5,
                    3
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    3.5,
                    2,
                    1,
                    2.5,
                    -2,
                    3,
                    -1,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(128, 0, 128, 0.25)',
                'data': [
                    5,
                    6,
                    5,
                    -2,
                    -4,
                    -3,
                    4,
                    2,
                    4.5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scale': {
            'display': false,
            'gridLines': {
                'circular': true
            }
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'origin'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 64, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'origin'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    4,
                    2,
                    1,
                    -1,
                    1,
                    2
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    4,
                    2,
                    null,
                    3,
                    2.5,
                    null,
                    -2,
                    1.5,
                    3
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    3.5,
                    2,
                    1,
                    2.5,
                    -2,
                    3,
                    -1,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(128, 0, 128, 0.25)',
                'data': [
                    5,
                    6,
                    5,
                    -2,
                    -4,
                    -3,
                    4,
                    2,
                    4.5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0.5,
                'fill': 'origin'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    4,
                    2,
                    1,
                    -1,
                    1,
                    2
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    4,
                    2,
                    null,
                    3,
                    2.5,
                    null,
                    -2,
                    1.5,
                    3
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    3.5,
                    2,
                    1,
                    2.5,
                    -2,
                    3,
                    -1,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(128, 0, 128, 0.25)',
                'data': [
                    5,
                    6,
                    5,
                    -2,
                    -4,
                    -3,
                    4,
                    2,
                    4.5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0.5,
                'fill': 'origin'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 192, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(192, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 64, 192, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'origin'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scale': {
            'display': false,
            'gridLines': {
                'circular': true
            }
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'start'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'start'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    null,
                    null,
                    2,
                    3,
                    4,
                    -4,
                    -2,
                    1,
                    0
                ]
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    6,
                    2,
                    null,
                    4,
                    5,
                    null,
                    null,
                    2,
                    1
                ]
            },
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    7,
                    3,
                    4,
                    5,
                    6,
                    1,
                    4,
                    null,
                    null
                ]
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    8,
                    7,
                    6,
                    -6,
                    -4,
                    -6,
                    4,
                    5,
                    8
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'plugins': {
            'legend': false,
            'title': false
        },
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': 'start'
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'black',
                'borderWidth': 5,
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            'English',
            'Maths',
            'Physics',
            'Chemistry',
            'Biology',
            'History'
        ],
        'datasets': [
            {
                'order': 1,
                'borderColor': '#D50000',
                'backgroundColor': 'rgba(245, 205, 121,0.5)',
                'data': [
                    65,
                    75,
                    70,
                    80,
                    60,
                    80
                ]
            },
            {
                'order': 0,
                'backgroundColor': 'rgba(0, 168, 255,1)',
                'data': [
                    54,
                    65,
                    60,
                    70,
                    70,
                    75
                ]
            }
        ]
    },
    'options': {
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
        },
        'scale': {
            'display': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': true,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'plugins': {
            'legend': false,
            'title': false
        },
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0.5
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 0, 0, 0.25)',
                'data': [
                    null,
                    null,
                    0,
                    -1,
                    0,
                    1,
                    0,
                    -1,
                    0
                ],
                'fill': 1
            },
            {
                'backgroundColor': 'rgba(0, 255, 0, 0.25)',
                'data': [
                    1,
                    0,
                    null,
                    1,
                    0,
                    null,
                    -1,
                    0,
                    1
                ],
                'fill': '+1'
            },
            {
                'backgroundColor': 'rgba(0, 0, 255, 0.25)',
                'data': [
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0
                ],
                'fill': 3
            },
            {
                'backgroundColor': 'rgba(255, 0, 255, 0.25)',
                'data': [
                    2,
                    0,
                    -2,
                    0,
                    2,
                    0,
                    -2,
                    0,
                    2
                ],
                'fill': '-2'
            },
            {
                'backgroundColor': 'rgba(255, 255, 0, 0.25)',
                'data': [
                    3,
                    1,
                    -1,
                    -3,
                    -1,
                    1,
                    3,
                    1,
                    -1
                ],
                'fill': '-1'
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scale': {
            'display': false
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'tension': 0
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
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
    'type': 'radar',
    'data': {
        'labels': [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(0, 0, 192, 0.25)',
                'data': [
                    0,
                    -4,
                    2,
                    4,
                    2,
                    1,
                    -1,
                    1,
                    2
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'spanGaps': false,
        'scale': {
            'display': false,
            'gridLines': {
                'circular': true
            }
        },
        'elements': {
            'point': {
                'radius': 0
            },
            'line': {
                'borderColor': 'transparent',
                'fill': {
                    'value': 3
                }
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false
        }
    }
};
module.exports = {
	config: config
}
/* </block:配置> */
```

