# 折线图
```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    4,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            },
            {
                'data': [
                    -4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': true
            },
            'point': {
                'backgroundColor': '#0000ff',
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'backgroundColor': '#ff0000'
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': true,
                'backgroundColor': '#00ff00'
            },
            'point': {
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
            0,
            1,
            2,
            3
        ],
        'datasets': [
            {
                'data': [
                    null,
                    3,
                    3
                ]
            },
            {
                'data': [
                    null,
                    2,
                    2
                ]
            },
            {
                'data': [
                    null,
                    1,
                    1
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#ff0000',
                'borderWidth': 32,
                'fill': false
            },
            'point': {
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3
        ],
        'datasets': [
            {
                'data': [
                    null,
                    3,
                    3
                ],
                'borderCapStyle': 'round'
            },
            {
                'data': [
                    null,
                    2,
                    2
                ],
                'borderCapStyle': 'square'
            },
            {
                'data': [
                    null,
                    1,
                    1
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderCapStyle': 'butt',
                'borderColor': '#00ff00',
                'borderWidth': 32,
                'fill': false
            },
            'point': {
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    4,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            },
            {
                'data': [
                    -4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderWidth': 10,
                'fill': false
            },
            'point': {
                'borderColor': '#ff0000',
                'borderWidth': 10,
                'radius': 16
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'borderColor': '#ff0000'
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#0000ff',
                'fill': false
            },
            'point': {
                'borderColor': '#0000ff',
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    4,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            },
            {
                'data': [
                    -4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#00ff00'
            },
            'point': {
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'borderColor': '#ff0000',
                'borderDash': [
                    5
                ]
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#00ff00',
                'borderDash': [
                    10
                ],
                'fill': false
            },
            'point': {
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3
        ],
        'datasets': [
            {
                'data': [
                    1,
                    1,
                    1,
                    1
                ],
                'borderColor': '#ff0000',
                'borderDash': [
                    20
                ]
            },
            {
                'data': [
                    0,
                    0,
                    0,
                    0
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#00ff00',
                'borderDash': [
                    20
                ],
                'fill': false
            },
            'point': {
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                'borderColor': '#ff0000',
                'borderDash': [
                    20
                ],
                'borderDashOffset': 5
            },
            {
                'data': [
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
        'elements': {
            'line': {
                'borderColor': '#00ff00',
                'borderDash': [
                    20
                ],
                'borderDashOffset': 0,
                'fill': false
            },
            'point': {
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2
        ],
        'datasets': [
            {
                'data': [
                    6,
                    18,
                    6
                ],
                'borderColor': '#ff0000'
            },
            {
                'data': [
                    2,
                    14,
                    2
                ],
                'borderColor': '#0000ff'
            },
            {
                'data': [
                    -2,
                    10,
                    -2
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#00ff00',
                'borderWidth': 25,
                'fill': false,
                'tension': 0
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2
        ],
        'datasets': [
            {
                'data': [
                    6,
                    18,
                    6
                ],
                'borderColor': '#ff0000',
                'borderJoinStyle': 'round'
            },
            {
                'data': [
                    2,
                    14,
                    2
                ],
                'borderColor': '#0000ff',
                'borderJoinStyle': 'bevel'
            },
            {
                'data': [
                    -2,
                    10,
                    -2
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#00ff00',
                'borderJoinStyle': 'miter',
                'borderWidth': 25,
                'fill': false,
                'tension': 0
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    4,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'borderColor': '#0000ff',
                'pointBorderColor': '#00ff00'
            },
            {
                'data': [
                    -4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#ff0000',
                'fill': false
            },
            'point': {
                'borderColor': '#00ff00',
                'borderWidth': 5,
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'borderColor': '#0000ff',
                'borderWidth': 6
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#00ff00',
                'borderWidth': 3,
                'fill': false
            },
            'point': {
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'backgroundColor': '#0000ff',
                'borderColor': '#0000ff',
                'borderWidth': 0
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#00ff00',
                'borderWidth': 3,
                'fill': false
            },
            'point': {
                'backgroundColor': '#00ff00',
                'radius': 10
            }
        },
        'layout': {
            'padding': 32
        },
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
                'borderColor': 'red',
                'data': [
                    {
                        'x': -5,
                        'y': 5
                    },
                    {
                        'x': -4,
                        'y': 6
                    },
                    {
                        'x': -3,
                        'y': 7
                    },
                    {
                        'x': -2,
                        'y': 6
                    },
                    {
                        'x': -1,
                        'y': 5
                    },
                    {
                        'x': 0,
                        'y': 4
                    },
                    {
                        'x': 1,
                        'y': 3
                    },
                    {
                        'x': 2,
                        'y': 2
                    },
                    {
                        'x': 3,
                        'y': 5
                    },
                    {
                        'x': 4,
                        'y': 7
                    },
                    {
                        'x': 5,
                        'y': 9
                    }
                ],
                'fill': false,
                'showLine': true,
                'borderWidth': 20,
                'pointRadius': 0
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'max': 3,
                'ticks': {
                    'display': false
                }
            },
            'y': {
                'ticks': {
                    'display': false
                }
            }
        },
        'layout': {
            'padding': 24
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
                'borderColor': 'red',
                'data': [
                    {
                        'x': -5,
                        'y': 5
                    },
                    {
                        'x': -4,
                        'y': 6
                    },
                    {
                        'x': -3,
                        'y': 7
                    },
                    {
                        'x': -2,
                        'y': 6
                    },
                    {
                        'x': -1,
                        'y': 5
                    },
                    {
                        'x': 0,
                        'y': 4
                    },
                    {
                        'x': 1,
                        'y': 3
                    },
                    {
                        'x': 2,
                        'y': 2
                    },
                    {
                        'x': 3,
                        'y': 5
                    },
                    {
                        'x': 4,
                        'y': 7
                    },
                    {
                        'x': 5,
                        'y': 9
                    }
                ],
                'fill': false,
                'showLine': true,
                'borderWidth': 20,
                'pointRadius': 0
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'min': -2,
                'ticks': {
                    'display': false
                }
            },
            'y': {
                'ticks': {
                    'display': false
                }
            }
        },
        'layout': {
            'padding': 24
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
                'borderColor': 'red',
                'data': [
                    {
                        'x': -5,
                        'y': 5
                    },
                    {
                        'x': -4,
                        'y': 6
                    },
                    {
                        'x': -3,
                        'y': 7
                    },
                    {
                        'x': -2,
                        'y': 6
                    },
                    {
                        'x': -1,
                        'y': 5
                    },
                    {
                        'x': 0,
                        'y': 4
                    },
                    {
                        'x': 1,
                        'y': 3
                    },
                    {
                        'x': 2,
                        'y': 2
                    },
                    {
                        'x': 3,
                        'y': 5
                    },
                    {
                        'x': 4,
                        'y': 7
                    },
                    {
                        'x': 5,
                        'y': 9
                    }
                ],
                'fill': false,
                'showLine': true,
                'borderWidth': 20,
                'pointRadius': 0
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'min': -2,
                'max': 3,
                'ticks': {
                    'display': false
                }
            },
            'y': {
                'ticks': {
                    'display': false
                }
            }
        },
        'layout': {
            'padding': 24
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
                'borderColor': 'red',
                'data': [
                    {
                        'x': -5,
                        'y': 5
                    },
                    {
                        'x': -4,
                        'y': 6
                    },
                    {
                        'x': -3,
                        'y': 7
                    },
                    {
                        'x': -2,
                        'y': 6
                    },
                    {
                        'x': -1,
                        'y': 5
                    },
                    {
                        'x': 0,
                        'y': 4
                    },
                    {
                        'x': 1,
                        'y': 3
                    },
                    {
                        'x': 2,
                        'y': 2
                    },
                    {
                        'x': 3,
                        'y': 5
                    },
                    {
                        'x': 4,
                        'y': 7
                    },
                    {
                        'x': 5,
                        'y': 9
                    }
                ],
                'fill': false,
                'showLine': true,
                'borderWidth': 20,
                'pointRadius': 0
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'ticks': {
                    'display': false
                }
            },
            'y': {
                'max': 6,
                'ticks': {
                    'display': false
                }
            }
        },
        'layout': {
            'padding': 24
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
                'borderColor': 'red',
                'data': [
                    {
                        'x': -5,
                        'y': 5
                    },
                    {
                        'x': -4,
                        'y': 6
                    },
                    {
                        'x': -3,
                        'y': 7
                    },
                    {
                        'x': -2,
                        'y': 6
                    },
                    {
                        'x': -1,
                        'y': 5
                    },
                    {
                        'x': 0,
                        'y': 4
                    },
                    {
                        'x': 1,
                        'y': 3
                    },
                    {
                        'x': 2,
                        'y': 2
                    },
                    {
                        'x': 3,
                        'y': 5
                    },
                    {
                        'x': 4,
                        'y': 7
                    },
                    {
                        'x': 5,
                        'y': 9
                    }
                ],
                'fill': false,
                'showLine': true,
                'borderWidth': 20,
                'pointRadius': 0
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'ticks': {
                    'display': false
                }
            },
            'y': {
                'min': 2,
                'ticks': {
                    'display': false
                }
            }
        },
        'layout': {
            'padding': 24
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
                'borderColor': 'red',
                'data': [
                    {
                        'x': -5,
                        'y': 5
                    },
                    {
                        'x': -4,
                        'y': 6
                    },
                    {
                        'x': -3,
                        'y': 7
                    },
                    {
                        'x': -2,
                        'y': 6
                    },
                    {
                        'x': -1,
                        'y': 5
                    },
                    {
                        'x': 0,
                        'y': 4
                    },
                    {
                        'x': 1,
                        'y': 3
                    },
                    {
                        'x': 2,
                        'y': 2
                    },
                    {
                        'x': 3,
                        'y': 5
                    },
                    {
                        'x': 4,
                        'y': 7
                    },
                    {
                        'x': 5,
                        'y': 9
                    }
                ],
                'fill': false,
                'showLine': true,
                'borderWidth': 20,
                'pointRadius': 0
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'ticks': {
                    'display': false
                }
            },
            'y': {
                'min': 2,
                'max': 6,
                'ticks': {
                    'display': false
                }
            }
        },
        'layout': {
            'padding': 24
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
                'showLine': true,
                'borderColor': 'red',
                'data': [
                    {
                        'x': -4,
                        'y': -4
                    },
                    {
                        'x': 4,
                        'y': 4
                    }
                ],
                'clip': false
            },
            {
                'showLine': true,
                'borderColor': 'green',
                'data': [
                    {
                        'x': -4,
                        'y': -5
                    },
                    {
                        'x': 4,
                        'y': 3
                    }
                ],
                'clip': 5
            },
            {
                'showLine': true,
                'borderColor': 'blue',
                'data': [
                    {
                        'x': -4,
                        'y': -3
                    },
                    {
                        'x': 4,
                        'y': 5
                    }
                ],
                'clip': -5
            },
            {
                'showLine': true,
                'borderColor': 'brown',
                'data': [
                    {
                        'x': -3,
                        'y': -3
                    },
                    {
                        'x': -1,
                        'y': 3
                    },
                    {
                        'x': 1,
                        'y': -2
                    },
                    {
                        'x': 2,
                        'y': 3
                    }
                ],
                'clip': {
                    'top': 8,
                    'left': false,
                    'right': -20,
                    'bottom': -20
                }
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'min': -2,
                'max': 2,
                'ticks': {
                    'display': false
                }
            },
            'y': {
                'min': -2,
                'max': 2,
                'ticks': {
                    'display': false
                }
            }
        },
        'layout': {
            'padding': 24
        },
        'elements': {
            'line': {
                'fill': false,
                'borderWidth': 20
            },
            'point': {
                'radius': 0
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    4,
                    2,
                    6,
                    4,
                    8
                ],
                'borderColor': '#ff0000'
            },
            {
                'data': [
                    2,
                    6,
                    4,
                    8,
                    6,
                    10
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#00ff00',
                'borderWidth': 20,
                'fill': false,
                'tension': 0.4
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    4,
                    2,
                    6,
                    4,
                    8
                ],
                'borderColor': '#ff0000',
                'cubicInterpolationMode': 'monotone'
            },
            {
                'data': [
                    2,
                    6,
                    4,
                    8,
                    6,
                    10
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'borderColor': '#00ff00',
                'borderWidth': 20,
                'cubicInterpolationMode': 'default',
                'fill': false,
                'tension': 0.4
            }
        },
        'layout': {
            'padding': 32
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    3,
                    1,
                    2,
                    0,
                    8,
                    1
                ],
                'backgroundColor': '#ff0000'
            },
            {
                'data': [
                    0,
                    4,
                    2,
                    6,
                    4,
                    8
                ],
                'backgroundColor': '#00ff00'
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': true
            },
            'point': {
                'radius': 0
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    3,
                    1,
                    2,
                    0,
                    8,
                    1
                ],
                'backgroundColor': '#ff0000',
                'order': 2
            },
            {
                'data': [
                    0,
                    4,
                    2,
                    6,
                    4,
                    8
                ],
                'backgroundColor': '#00ff00',
                'order': 1
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': true
            },
            'point': {
                'radius': 0
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    -2,
                    -6,
                    -4,
                    -8,
                    -6,
                    -10
                ],
                'backgroundColor': '#ff0000'
            },
            {
                'data': [
                    0,
                    4,
                    2,
                    6,
                    4,
                    8
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'backgroundColor': '#00ff00'
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    -2,
                    -6,
                    -4,
                    -8,
                    -6,
                    -10
                ],
                'backgroundColor': '#ff0000',
                'fill': false
            },
            {
                'data': [
                    0,
                    4,
                    2,
                    6,
                    4,
                    8
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'backgroundColor': '#00ff00',
                'fill': true
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
        'xLabels': [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ],
        'yLabels': [
            '',
            'Request Added',
            'Request Viewed',
            'Request Accepted',
            'Request Solved',
            'Solving Confirmed'
        ],
        'datasets': [
            {
                'label': 'My First dataset',
                'data': [
                    '',
                    'Request Added',
                    'Request Added',
                    'Request Added',
                    'Request Viewed',
                    'Request Viewed',
                    'Request Viewed'
                ],
                'fill': false,
                'borderColor': 'red',
                'backgroundColor': 'red'
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
                'type': 'category',
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
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        'datasets': [
            {
                'borderColor': 'transparent',
                'data': [
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3
                ],
                'pointBackgroundColor': '#00ff00',
                'pointBorderColor': 'transparent',
                'pointBorderWidth': 0,
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
                'borderColor': 'transparent',
                'data': [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                ],
                'pointBackgroundColor': 'transparent',
                'pointBorderColor': '#0000ff',
                'pointBorderWidth': 1,
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
                'borderColor': 'transparent',
                'data': [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                'pointBackgroundColor': '#00ff00',
                'pointBorderColor': '#0000ff',
                'pointBorderWidth': 1,
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        'datasets': [
            {
                'borderColor': 'transparent',
                'data': [
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3
                ],
                'pointBackgroundColor': '#00ff00',
                'pointBorderColor': 'transparent',
                'pointBorderWidth': 0,
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
                'borderColor': 'transparent',
                'data': [
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2
                ],
                'pointBackgroundColor': 'transparent',
                'pointBorderColor': '#0000ff',
                'pointBorderWidth': 1,
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
                'borderColor': 'transparent',
                'data': [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                'pointBackgroundColor': '#00ff00',
                'pointBorderColor': '#0000ff',
                'pointBorderWidth': 1,
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBackgroundColor': [
                    '#ff0000',
                    '#00ff00',
                    '#0000ff',
                    '#ffff00',
                    '#ff00ff',
                    '#000000'
                ]
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'backgroundColor': [
                    '#ff88ff',
                    '#888888',
                    '#ff8800',
                    '#00ff88',
                    '#8800ff',
                    '#ffff88'
                ],
                'radius': 10
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'radius': 10
            }
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBackgroundColor': '#ff0000'
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'backgroundColor': '#00ff00',
                'radius': 10
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBorderColor': [
                    '#ff0000',
                    '#00ff00',
                    '#0000ff',
                    '#ffff00',
                    '#ff00ff',
                    '#000000'
                ]
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'borderColor': [
                    '#ff88ff',
                    '#888888',
                    '#ff8800',
                    '#00ff88',
                    '#8800ff',
                    '#ffff88'
                ],
                'radius': 10
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'radius': 10
            }
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBorderColor': '#ff0000'
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'borderColor': '#00ff00',
                'radius': 10
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBorderColor': '#00ff00',
                'pointBorderWidth': [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ]
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'borderColor': '#ff0000',
                'borderWidth': [
                    6,
                    5,
                    4,
                    3,
                    2,
                    1
                ],
                'radius': 10
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBorderColor': '#0000ff'
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'borderColor': '#ff0000',
                'radius': 10
            }
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBorderColor': '#0000ff',
                'pointBorderWidth': 6
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'borderColor': '#00ff00',
                'borderWidth': 3,
                'radius': 10
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBackgroundColor': '#ff0000',
                'pointBorderColor': '#ff0000',
                'pointStyle': [
                    'circle',
                    'cross',
                    'crossRot',
                    'dash',
                    'line',
                    'rect'
                ]
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'backgroundColor': '#00ff00',
                'borderColor': '#00ff00',
                'pointStyle': [
                    'line',
                    'rect',
                    'rectRounded',
                    'rectRot',
                    'star',
                    'triangle'
                ],
                'radius': 10
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBackgroundColor': '#ff0000',
                'pointBorderColor': '#ff0000'
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'backgroundColor': '#0000ff',
                'borderColor': '#0000ff',
                'radius': 10
            }
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBorderColor': '#ff0000',
                'pointStyle': 'star'
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'backgroundColor': '#00ff00',
                'pointStyle': 'rect',
                'radius': 10
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBackgroundColor': '#00ff00',
                'pointRadius': [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ]
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'backgroundColor': '#ff0000',
                'radius': [
                    6,
                    5,
                    4,
                    3,
                    2,
                    1
                ]
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBackgroundColor': '#0000ff'
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'backgroundColor': '#ff0000'
            }
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBackgroundColor': '#0000ff',
                'pointRadius': 6
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'backgroundColor': '#00ff00',
                'radius': 3
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBorderColor': '#00ff00',
                'pointRotation': [
                    0,
                    30,
                    60,
                    90,
                    120,
                    150
                ]
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'borderColor': '#ff0000',
                'borderWidth': 10,
                'pointStyle': 'line',
                'rotation': [
                    150,
                    120,
                    90,
                    60,
                    30,
                    0
                ]
            }
        },
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
    'type': 'line',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBorderColor': '#0000ff'
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'borderColor': '#ff0000',
                'pointStyle': 'line',
                'radius': 10
            }
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'beginAtZero': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'pointBorderColor': '#0000ff',
                'pointRotation': 90
            },
            {
                'data': [
                    4,
                    -5,
                    -10,
                    null,
                    10,
                    5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': false
            },
            'point': {
                'borderColor': '#00ff00',
                'pointStyle': 'line',
                'radius': 10,
                'rotation': 0
            }
        },
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
    'type': 'line',
    'data': {
        'datasets': [
            {
                'data': [
                    10,
                    15,
                    0,
                    -4
                ],
                'label': 'dataset1',
                'borderColor': 'red',
                'backgroundColor': 'green',
                'showLine': false,
                'fill': false
            }
        ],
        'labels': [
            'label1',
            'label2',
            'label3',
            'label4'
        ]
    },
    'options': {
        'showLine': true,
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
                    15,
                    0,
                    -4
                ],
                'label': 'dataset1',
                'borderColor': 'red',
                'backgroundColor': 'green',
                'fill': true
            }
        ],
        'labels': [
            'label1',
            'label2',
            'label3',
            'label4'
        ]
    },
    'options': {
        'showLine': false,
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    3,
                    1,
                    2,
                    0,
                    8,
                    1
                ],
                'backgroundColor': '#ff0000'
            },
            {
                'data': [
                    0,
                    4,
                    2,
                    6,
                    4,
                    8
                ],
                'backgroundColor': '#00ff00'
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': true
            },
            'point': {
                'radius': 0
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'stacked': true,
                'display': false
            },
            'y': {
                'stacked': true,
                'display': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
            0,
            1,
            2,
            3,
            4,
            5
        ],
        'datasets': [
            {
                'data': [
                    3,
                    1,
                    2,
                    0,
                    8,
                    1
                ],
                'backgroundColor': '#ff0000',
                'order': 2
            },
            {
                'data': [
                    0,
                    4,
                    2,
                    6,
                    4,
                    8
                ],
                'backgroundColor': '#00ff00',
                'order': 1
            }
        ]
    },
    'options': {
        'elements': {
            'line': {
                'fill': true
            },
            'point': {
                'radius': 0
            }
        },
        'layout': {
            'padding': 32
        },
        'scales': {
            'x': {
                'stacked': true,
                'display': false
            },
            'y': {
                'stacked': true,
                'display': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
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
                'label': 'label1',
                'data': [
                    {
                        'x': 0,
                        'y': 30
                    },
                    {
                        'x': 5,
                        'y': 35
                    },
                    {
                        'x': 10,
                        'y': 20
                    }
                ],
                'backgroundColor': '#42A8E4'
            },
            {
                'label': 'label2',
                'data': [
                    {
                        'x': 0,
                        'y': 10
                    },
                    {
                        'x': 5,
                        'y': 15
                    },
                    {
                        'x': 10,
                        'y': 15
                    }
                ],
                'backgroundColor': '#FC3F55'
            },
            {
                'label': 'label3',
                'data': [
                    {
                        'x': 0,
                        'y': -15
                    },
                    {
                        'x': 5,
                        'y': -10
                    },
                    {
                        'x': 10,
                        'y': -20
                    }
                ],
                'backgroundColor': '#FFBE3F'
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'display': false,
                'position': 'bottom'
            },
            'y': {
                'stacked': true,
                'display': false,
                'position': 'left'
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'tooltip': false,
            'filler': true
        }
    }
};
module.exports = {
	config: config
}
/* </block:配置> */
```

