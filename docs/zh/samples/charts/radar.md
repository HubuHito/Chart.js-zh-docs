# 雷达图
```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'radar',
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
                'fill': true
            },
            'point': {
                'backgroundColor': '#0000ff',
                'radius': 10
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
    'type': 'radar',
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
                'backgroundColor': '#00ff00',
                'fill': true
            },
            'point': {
                'radius': 10
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
    'type': 'radar',
    'data': {
        'labels': [
            0,
            1,
            2
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
        'scale': {
            'display': false,
            'beginAtZero': true
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
            0,
            1,
            2
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
        'scale': {
            'display': false,
            'beginAtZero': true
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
                'borderWidth': 10,
                'fill': false
            },
            'point': {
                'borderColor': '#ff0000',
                'borderWidth': 10,
                'radius': 16
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
                'borderColor': '#00ff00',
                'fill': true
            },
            'point': {
                'radius': 10
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -1
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
        'scale': {
            'display': false,
            'min': -1
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
            0,
            1,
            2,
            3
        ],
        'datasets': [
            {
                'data': [
                    3,
                    3,
                    null,
                    3
                ],
                'borderColor': '#ff0000'
            },
            {
                'data': [
                    2,
                    2,
                    null,
                    2
                ],
                'borderColor': '#0000ff'
            },
            {
                'data': [
                    1,
                    1,
                    null,
                    1
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
        'scale': {
            'display': false,
            'beginAtZero': true
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
            0,
            1,
            2,
            3
        ],
        'datasets': [
            {
                'data': [
                    3,
                    3,
                    null,
                    3
                ],
                'borderColor': '#ff0000',
                'borderJoinStyle': 'round'
            },
            {
                'data': [
                    2,
                    2,
                    null,
                    2
                ],
                'borderColor': '#0000ff',
                'borderJoinStyle': 'bevel'
            },
            {
                'data': [
                    1,
                    1,
                    null,
                    1
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
        'scale': {
            'display': false,
            'beginAtZero': true
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
                'pointBorderColor': '#00ff00'
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
                'borderColor': '#ff0000',
                'fill': false
            },
            'point': {
                'borderColor': '#00ff00',
                'borderWidth': 5,
                'radius': 10
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
                'borderWidth': 1,
                'fill': false
            },
            'point': {
                'backgroundColor': '#00ff00',
                'radius': 10
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
                'backgroundColor': '#00ff00'
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
    'type': 'radar',
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
                'backgroundColor': '#ff0000',
                'fill': false
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
                'backgroundColor': '#00ff00',
                'fill': true
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
    'type': 'radar',
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
                'pointRadius': 16,
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
                'pointRadius': 16,
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
                'pointRadius': 16,
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
        'scale': {
            'display': false,
            'min': 0,
            'max': 3
        },
        'elements': {
            'line': {
                'fill': false
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
    'type': 'radar',
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
                'borderWidth': 5,
                'radius': 10
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
                'borderWidth': 5,
                'radius': 10
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
                'borderWidth': 5,
                'radius': 10
            }
        },
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
        'scale': {
            'display': false,
            'min': -15
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
                'backgroundColor': '#ff0000',
                'fill': false,
                'showLine': true
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
            },
            {
                'data': [
                    1,
                    1,
                    1,
                    1,
                    1,
                    1
                ],
                'showLine': true,
                'backgroundColor': 'rgba(0,0,255,0.5)'
            }
        ]
    },
    'options': {
        'showLine': false,
        'elements': {
            'line': {
                'borderColor': '#ff0000',
                'backgroundColor': 'rgba(0,255,0,0.5)',
                'fill': true
            }
        },
        'scale': {
            'display': false,
            'min': -15
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

