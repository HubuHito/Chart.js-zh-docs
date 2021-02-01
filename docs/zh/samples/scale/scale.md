# 坐标轴
```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'scatter',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': -20,
                        'y': -30
                    },
                    {
                        'x': 0,
                        'y': 0
                    },
                    {
                        'x': 20,
                        'y': 15
                    }
                ]
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'axis': 'x',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'borderColor': 'blue',
                    'borderWidth': 5,
                    'color': 'red',
                    'drawBorder': true,
                    'drawOnChartArea': false
                },
                'ticks': {
                    'display': false
                }
            },
            'y': {
                'axis': 'y',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'color': 'red',
                    'drawOnChartArea': false
                },
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            [
                'Label1',
                'line 2',
                'line3'
            ],
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'scales': {
            'x': {
                'ticks': {
                    'crossAlign': 'center'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            [
                'Label1',
                'line 2',
                'line3'
            ],
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'scales': {
            'x': {
                'ticks': {
                    'crossAlign': 'far'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            [
                'Label1',
                'line 2',
                'line3'
            ],
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'scales': {
            'x': {
                'ticks': {
                    'crossAlign': 'near'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            'Long long label 1',
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'y': {
                'position': 'left',
                'ticks': {
                    'crossAlign': 'center'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            'Long long label 1',
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'y': {
                'position': 'left',
                'ticks': {
                    'crossAlign': 'far'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            'Long long label 1',
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'y': {
                'position': 'left',
                'ticks': {
                    'crossAlign': 'near'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            'Long long label 1',
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'y': {
                'position': 'right',
                'ticks': {
                    'crossAlign': 'center'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            'Long long label 1',
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'y': {
                'position': 'right',
                'ticks': {
                    'crossAlign': 'far'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            'Long long label 1',
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'y': {
                'position': 'right',
                'ticks': {
                    'crossAlign': 'near'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            [
                'Label1',
                'line 2',
                'line3'
            ],
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'scales': {
            'x': {
                'position': 'top',
                'ticks': {
                    'crossAlign': 'center'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            [
                'Label1',
                'line 2',
                'line3'
            ],
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'scales': {
            'x': {
                'position': 'top',
                'ticks': {
                    'crossAlign': 'far'
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            [
                'Label1',
                'line 2',
                'line3'
            ],
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'scales': {
            'x': {
                'position': 'top',
                'ticks': {
                    'crossAlign': 'near'
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
    'type': 'line',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            'Label1',
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'scales': {
            'x': {
                'ticks': {
                    'align': 'center'
                }
            },
            'y': {
                'ticks': {
                    'align': 'center'
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
    'type': 'line',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            'Label1',
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'scales': {
            'x': {
                'ticks': {
                    'align': 'end'
                }
            },
            'y': {
                'ticks': {
                    'align': 'end'
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
    'type': 'line',
    'data': {
        'datasets': [
            {
                'data': [
                    1,
                    2,
                    3
                ]
            }
        ],
        'labels': [
            'Label1',
            'Label2',
            'Label3'
        ]
    },
    'options': {
        'scales': {
            'x': {
                'ticks': {
                    'align': 'start'
                }
            },
            'y': {
                'ticks': {
                    'align': 'start'
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
    'type': 'bar',
    'data': {
        'labels': [
            '◀',
            '■',
            '◆',
            '●'
        ],
        'datasets': [
            {
                'data': [
                    12,
                    19,
                    3,
                    5
                ]
            }
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'x': {
                'ticks': {
                    'display': false
                },
                'gridLines': {
                    'display': false,
                    'drawBorder': false
                }
            },
            'y': {
                'ticks': {
                    'labelOffset': 25
                },
                'gridLines': {
                    'display': false,
                    'drawBorder': false
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
    'type': 'bar',
    'data': {
        'labels': [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ],
        'datasets': []
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'x': {
                'type': 'category',
                'position': 'top',
                'id': 'x-axis-1',
                'ticks': {
                    'display': false
                },
                'gridLines': {
                    'drawOnChartArea': false,
                    'drawBorder': false,
                    'color': 'rgba(0, 0, 0, 1)'
                }
            },
            'x2': {
                'type': 'category',
                'position': 'bottom',
                'ticks': {
                    'display': false
                },
                'gridLines': {
                    'drawOnChartArea': false,
                    'drawBorder': false,
                    'color': 'rgba(0, 0, 0, 1)'
                }
            },
            'y': {
                'position': 'left',
                'id': 'y-axis-1',
                'type': 'linear',
                'offset': false,
                'min': -100,
                'max': 100,
                'ticks': {
                    'display': false
                },
                'gridLines': {
                    'offsetGridLines': false,
                    'drawOnChartArea': false,
                    'drawBorder': false,
                    'color': 'rgba(0, 0, 0, 1)'
                }
            },
            'y2': {
                'type': 'linear',
                'position': 'right',
                'offset': false,
                'min': 0,
                'max': 50,
                'ticks': {
                    'display': false
                },
                'gridLines': {
                    'offsetGridLines': false,
                    'drawOnChartArea': false,
                    'drawBorder': false,
                    'color': 'rgba(0, 0, 0, 1)'
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
    'type': 'bar',
    'data': {
        'labels': [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
        ],
        'datasets': []
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'x': {
                'type': 'category',
                'position': 'top',
                'id': 'x-axis-1',
                'ticks': {
                    'display': false
                },
                'gridLines': {
                    'drawOnChartArea': false,
                    'drawBorder': false,
                    'color': 'rgba(0, 0, 0, 1)',
                    'width': 1,
                    'tickColor': 'rgba(255, 0, 0, 1)',
                    'tickWidth': 5
                }
            },
            'y': {
                'position': 'left',
                'id': 'y-axis-1',
                'type': 'linear',
                'offset': false,
                'min': -100,
                'max': 100,
                'ticks': {
                    'display': false
                },
                'gridLines': {
                    'offsetGridLines': false,
                    'drawOnChartArea': false,
                    'drawBorder': false,
                    'color': 'rgba(0, 0, 0, 1)',
                    'tickColor': 'rgba(255, 0, 0, 1)',
                    'tickWidth': 5
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
    'type': 'scatter',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': -20,
                        'y': -30
                    },
                    {
                        'x': 0,
                        'y': 0
                    },
                    {
                        'x': 20,
                        'y': 15
                    }
                ]
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'position': 'center',
                'axis': 'x',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'color': 'red',
                    'drawOnChartArea': false
                },
                'ticks': {
                    'display': true
                }
            },
            'y': {
                'position': 'left',
                'axis': 'y',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'color': 'red',
                    'drawOnChartArea': false
                },
                'ticks': {
                    'display': true
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
    'type': 'scatter',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': -20,
                        'y': -30
                    },
                    {
                        'x': 0,
                        'y': 0
                    },
                    {
                        'x': 20,
                        'y': 15
                    }
                ]
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'position': {
                    'y': 30
                },
                'axis': 'x',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'color': 'red',
                    'drawOnChartArea': false
                },
                'ticks': {
                    'display': true
                }
            },
            'y': {
                'position': 'left',
                'axis': 'y',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'color': 'red',
                    'drawOnChartArea': false
                },
                'ticks': {
                    'display': true
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
    'type': 'scatter',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': -20,
                        'y': -30
                    },
                    {
                        'x': 0,
                        'y': 0
                    },
                    {
                        'x': 20,
                        'y': 15
                    }
                ]
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'position': 'bottom',
                'axis': 'x',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'color': 'red',
                    'drawOnChartArea': false
                },
                'ticks': {
                    'display': true
                }
            },
            'y': {
                'position': 'center',
                'axis': 'y',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'color': 'red',
                    'drawOnChartArea': false
                },
                'ticks': {
                    'display': true
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
    'type': 'scatter',
    'data': {
        'datasets': [
            {
                'data': [
                    {
                        'x': -20,
                        'y': -30
                    },
                    {
                        'x': 0,
                        'y': 0
                    },
                    {
                        'x': 20,
                        'y': 15
                    }
                ]
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'position': 'bottom',
                'axis': 'x',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'color': 'red',
                    'drawOnChartArea': false
                },
                'ticks': {
                    'display': true
                }
            },
            'y': {
                'position': {
                    'x': -50
                },
                'axis': 'y',
                'min': -100,
                'max': 100,
                'gridLines': {
                    'color': 'red',
                    'drawOnChartArea': false
                },
                'ticks': {
                    'display': true
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

