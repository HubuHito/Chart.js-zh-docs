# 柱形图
```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'bar',
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
                'backgroundColor': [
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
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': [
                    '#ff88ff',
                    '#888888',
                    '#ff8800',
                    '#00ff88',
                    '#8800ff',
                    '#ffff88'
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
    'type': 'bar',
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
                    2,
                    3,
                    4,
                    5,
                    6
                ],
                'backgroundColor': [
                    '#ff0000',
                    '#00ff00',
                    '#0000ff'
                ]
            },
            {
                'data': [
                    6,
                    5,
                    4,
                    3,
                    2,
                    1
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': [
                    '#000000',
                    '#888888'
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
    'type': 'bar',
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
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {}
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
    'type': 'bar',
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
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': '#00ff00'
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
    'type': 'bar',
    'data': {
        'labels': [
            0,
            1,
            3,
            4
        ],
        'datasets': [
            {
                'data': [
                    5,
                    20,
                    10,
                    11
                ],
                'base': 10,
                'backgroundColor': '#00ff00',
                'borderColor': '#ff0000',
                'borderWidth': 2
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
    'type': 'bar',
    'data': {
        'labels': [
            0,
            1,
            3,
            4
        ],
        'datasets': [
            {
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'data': {
                    '0': 5,
                    '1': 20,
                    '2': 1,
                    '3': 10
                },
                'backgroundColor': '#00ff00',
                'borderColor': '#ff0000'
            },
            {
                'data': {
                    '0': 10,
                    '1': null,
                    '2': 1,
                    '3': null
                },
                'backgroundColor': '#ff0000',
                'borderColor': '#ff0000'
            }
        ]
    },
    'options': {
        'skipNull': true,
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
    'type': 'bar',
    'data': {
        'labels': [
            0,
            1,
            3,
            4
        ],
        'datasets': [
            {
                'data': [
                    5,
                    20,
                    1,
                    10
                ],
                'backgroundColor': '#00ff00',
                'borderColor': '#ff0000'
            },
            {
                'data': [
                    10,
                    null,
                    1,
                    null
                ],
                'backgroundColor': '#ff0000',
                'borderColor': '#ff0000'
            }
        ]
    },
    'options': {
        'skipNull': true,
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
    'type': 'bar',
    'data': {
        'labels': [
            '2017',
            '2018',
            '2019',
            '2024',
            '2025'
        ],
        'datasets': [
            {
                'backgroundColor': 'rgba(255, 99, 132, 0.5)',
                'barPercentage': 1,
                'categoryPercentage': 1,
                'barThickness': 128,
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'offset': true,
                'display': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2017',
            '2018',
            '2020',
            '2024',
            '2038'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'barPercentage': 1,
                'categoryPercentage': 1,
                'barThickness': 'flex',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'offset': true,
                'display': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'barThickness': 'flex',
                'barPercentage': 1,
                'categoryPercentage': 1,
                'data': [
                    1
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'reverse': true,
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'barThickness': 'flex',
                'barPercentage': 1,
                'categoryPercentage': 1,
                'data': [
                    1
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2017',
            '2018',
            '2020',
            '2024',
            '2038'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'barPercentage': 1,
                'categoryPercentage': 1,
                'barThickness': 'flex',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'barPercentage': 1,
                'categoryPercentage': 1,
                'maxBarThickness': 8,
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'barPercentage': 1,
                'categoryPercentage': 1,
                'data': [
                    {
                        'x': '2001',
                        'y': 1
                    },
                    {
                        'x': '2099',
                        'y': 5
                    }
                ]
            },
            {
                'backgroundColor': '#8463FF',
                'barPercentage': 1,
                'categoryPercentage': 1,
                'data': [
                    {
                        'x': '2019',
                        'y': 2
                    },
                    {
                        'x': '2020',
                        'y': 3
                    }
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'min': '2000',
                'max': '2100',
                'time': {
                    'parser': 'YYYY'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'barPercentage': 1,
                'categoryPercentage': 1,
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    5,
                    4,
                    3,
                    null,
                    1
                ]
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    3,
                    5,
                    2,
                    null,
                    4
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'datasets': {
            'bar': {
                'barPercentage': 1,
                'categoryPercentage': 1
            }
        },
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    {
                        'y': '1',
                        'x': '2016'
                    },
                    {
                        'y': '2',
                        'x': '2017'
                    },
                    {
                        'y': '3',
                        'x': '2017-08'
                    },
                    {
                        'y': '4',
                        'x': '2024'
                    },
                    {
                        'y': '5',
                        'x': '2030'
                    }
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'datasets': {
            'bar': {
                'barPercentage': 1,
                'categoryPercentage': 1
            }
        },
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY-MM'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    5,
                    4,
                    3,
                    null,
                    1
                ]
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    3,
                    5,
                    2,
                    null,
                    4
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'datasets': {
            'bar': {
                'barPercentage': 1,
                'categoryPercentage': 1
            }
        },
        'scales': {
            'x': {
                'type': 'time',
                'offset': true,
                'display': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'type': 'bar',
                'barThickness': 16,
                'backgroundColor': '#FF6384',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            },
            {
                'type': 'bar',
                'barThickness': 8,
                'backgroundColor': '#36A2EB',
                'data': [
                    5,
                    4,
                    3,
                    null,
                    1
                ]
            },
            {
                'type': 'bar',
                'barThickness': 4,
                'backgroundColor': '#FFCE56',
                'data': [
                    3,
                    5,
                    2,
                    null,
                    4
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'offset': true,
                'stacked': true,
                'display': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
            },
            'y': {
                'display': false,
                'stacked': true,
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
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'type': 'bar',
                'barThickness': 16,
                'backgroundColor': '#FF6384',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            },
            {
                'type': 'bar',
                'barThickness': 8,
                'backgroundColor': '#36A2EB',
                'data': [
                    5,
                    4,
                    3,
                    null,
                    1
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'offset': true,
                'display': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    5,
                    4,
                    3,
                    null,
                    1
                ]
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    3,
                    5,
                    2,
                    null,
                    4
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'datasets': {
            'bar': {
                'barPercentage': 1,
                'categoryPercentage': 1
            }
        },
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'reverse': true,
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'barPercentage': 1,
                'categoryPercentage': 1,
                'backgroundColor': '#FF6384',
                'data': [
                    {
                        'x': '2022',
                        'y': 42
                    }
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'barPercentage': 1,
                'categoryPercentage': 1,
                'backgroundColor': '#FF6384',
                'data': [
                    1
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'type': 'time',
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'min': '2013',
                'ticks': {
                    'source': 'labels'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    5,
                    4,
                    3,
                    null,
                    1
                ]
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    3,
                    5,
                    2,
                    null,
                    4
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'datasets': {
            'bar': {
                'barPercentage': 1,
                'categoryPercentage': 1
            }
        },
        'scales': {
            'x': {
                'type': 'time',
                'stacked': true,
                'display': false,
                'offset': false,
                'time': {
                    'parser': 'YYYY'
                },
                'ticks': {
                    'source': 'labels'
                }
            },
            'y': {
                'display': false,
                'stacked': true,
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
    'type': 'bar',
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
                'borderWidth': 2,
                'borderRadius': 5
            },
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'borderSkipped': false,
                'borderRadius': 1.7976931348623157e+308
            }
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
    'type': 'bar',
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
                'borderColor': [
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
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': [
                    '#ff88ff',
                    '#888888',
                    '#ff8800',
                    '#00ff88',
                    '#8800ff',
                    '#ffff88'
                ],
                'borderWidth': 8
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
    'type': 'bar',
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
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderWidth': 8
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
    'type': 'bar',
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
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#00ff00',
                'borderWidth': 8
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
    'type': 'bar',
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
                'borderSkipped': [
                    'top',
                    'top',
                    'right',
                    'right',
                    'bottom',
                    'left'
                ]
            },
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#888',
                'borderWidth': 8,
                'borderSkipped': [
                    'bottom',
                    'bottom',
                    'left',
                    'left',
                    'top',
                    'right'
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
    'type': 'bar',
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
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#888',
                'borderWidth': 8
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
    'type': 'bar',
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
                    0,
                    5,
                    -10,
                    null
                ],
                'borderSkipped': 'top'
            },
            {
                'data': [
                    0,
                    5,
                    -10,
                    null
                ],
                'borderSkipped': 'right'
            },
            {
                'data': [
                    0,
                    5,
                    -10,
                    null
                ],
                'borderSkipped': 'bottom'
            },
            {
                'data': [
                    0,
                    5,
                    -10,
                    null
                ]
            },
            {
                'data': [
                    0,
                    5,
                    -10,
                    null
                ],
                'borderSkipped': false
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#888',
                'borderSkipped': 'left',
                'borderWidth': 8
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
    'type': 'bar',
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
                'borderSkipped': false,
                'borderWidth': [
                    {},
                    {
                        'bottom': 1,
                        'left': 1,
                        'top': 1,
                        'right': 1
                    },
                    {
                        'bottom': 1,
                        'left': 2,
                        'top': 1,
                        'right': 2
                    },
                    {
                        'bottom': 1,
                        'left': 3,
                        'top': 1,
                        'right': 3
                    },
                    {
                        'bottom': 1,
                        'left': 4,
                        'top': 1,
                        'right': 4
                    },
                    {
                        'bottom': 1,
                        'left': 5,
                        'top': 1,
                        'right': 5
                    }
                ]
            },
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#80808080',
                'borderSkipped': false,
                'borderWidth': [
                    {
                        'bottom': 1,
                        'left': 5,
                        'top': 1,
                        'right': 5
                    },
                    {
                        'bottom': 1,
                        'left': 4,
                        'top': 1,
                        'right': 4
                    },
                    {
                        'bottom': 1,
                        'left': 3,
                        'top': 1,
                        'right': 3
                    },
                    {
                        'bottom': 1,
                        'left': 2,
                        'top': 1,
                        'right': 2
                    },
                    {
                        'bottom': 1,
                        'left': 1,
                        'top': 1,
                        'right': 1
                    },
                    {}
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
    'type': 'bar',
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
                'borderWidth': [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5
                ]
            },
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#888',
                'borderWidth': [
                    5,
                    4,
                    3,
                    2,
                    1,
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
    'type': 'bar',
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
                'borderWidth': -2
            },
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
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'borderWidth': {
                    'left': -5,
                    'top': -5,
                    'bottom': -5,
                    'right': -5
                },
                'borderSkipped': false
            },
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'borderWidth': {}
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': '#888',
                'borderColor': '#f00',
                'borderWidth': -4
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
    'type': 'bar',
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
                'borderSkipped': false,
                'borderWidth': {
                    'bottom': 1,
                    'left': 2,
                    'top': 3,
                    'right': 4
                }
            },
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#888',
                'borderSkipped': false,
                'borderWidth': {
                    'bottom': 4,
                    'left': 3,
                    'top': 2,
                    'right': 1
                }
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
    'type': 'bar',
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
                'borderSkipped': false
            },
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#80808080',
                'borderSkipped': false
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
    'type': 'bar',
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
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#888'
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
    'type': 'bar',
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
                'borderWidth': 2
            },
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ]
            }
        ]
    },
    'options': {
        'elements': {
            'bar': {
                'backgroundColor': 'transparent',
                'borderColor': '#888',
                'borderWidth': 4
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
    'type': 'bar',
    'data': {
        'labels': [
            0,
            1,
            3,
            4
        ],
        'datasets': [
            {
                'data': [
                    5,
                    20,
                    -5,
                    -20
                ],
                'borderColor': '#ff0000'
            }
        ]
    },
    'options': {
        'layout': {
            'padding': {
                'left': 0,
                'right': 0,
                'top': 50,
                'bottom': 50
            }
        },
        'elements': {
            'bar': {
                'backgroundColor': '#00ff00',
                'borderWidth': 8
            }
        },
        'scales': {
            'x': {
                'display': false
            },
            'y': {
                'display': false,
                'min': -10,
                'max': 10
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
            'a',
            'b',
            'c'
        ],
        'datasets': [
            {
                'data': {
                    'a': 10,
                    'b': 2,
                    'c': -5
                },
                'backgroundColor': '#ff0000'
            },
            {
                'data': {
                    'a': 8,
                    'b': 12,
                    'c': 5
                },
                'backgroundColor': '#00ff00'
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
    'type': 'bar',
    'data': {
        'labels': [
            'Jan',
            'Feb'
        ],
        'datasets': [
            {
                'label': 'Net sales',
                'backgroundColor': 'blue',
                'data': [
                    {
                        'x': 'Jan',
                        'net': 100,
                        'cogs': 50,
                        'gm': 50
                    },
                    {
                        'x': 'Feb',
                        'net': 120,
                        'cogs': 55,
                        'gm': 75
                    }
                ],
                'parsing': {
                    'yAxisKey': 'net'
                }
            },
            {
                'label': 'Cost of goods sold',
                'backgroundColor': 'red',
                'data': [
                    {
                        'x': 'Jan',
                        'net': 100,
                        'cogs': 50,
                        'gm': 50
                    },
                    {
                        'x': 'Feb',
                        'net': 120,
                        'cogs': 55,
                        'gm': 75
                    }
                ],
                'parsing': {
                    'yAxisKey': 'cogs'
                }
            },
            {
                'label': 'Gross margin',
                'backgroundColor': 'green',
                'data': [
                    {
                        'x': 'Jan',
                        'net': 100,
                        'cogs': 50,
                        'gm': 50
                    },
                    {
                        'x': 'Feb',
                        'net': 120,
                        'cogs': 55,
                        'gm': 75
                    }
                ],
                'parsing': {
                    'yAxisKey': 'gm'
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            'a',
            'b',
            'c'
        ],
        'datasets': [
            {
                'data': [
                    {
                        'y': 'b',
                        'x': [
                            2,
                            8
                        ]
                    },
                    {
                        'y': 'c',
                        'x': [
                            2,
                            5
                        ]
                    }
                ],
                'backgroundColor': '#ff0000'
            },
            {
                'data': [
                    {
                        'y': 'a',
                        'x': 10
                    },
                    {
                        'y': 'c',
                        'x': [
                            6,
                            10
                        ]
                    }
                ],
                'backgroundColor': '#00ff00'
            }
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'x': {
                'display': false,
                'min': 0
            },
            'y': {
                'display': false,
                'stacked': true
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
            'a',
            'b',
            'c'
        ],
        'datasets': [
            {
                'data': [
                    {
                        'x': 'b',
                        'y': [
                            2,
                            8
                        ]
                    },
                    {
                        'x': 'c',
                        'y': [
                            2,
                            5
                        ]
                    }
                ],
                'backgroundColor': '#ff0000'
            },
            {
                'data': [
                    {
                        'x': 'a',
                        'y': 10
                    },
                    {
                        'x': 'c',
                        'y': [
                            6,
                            10
                        ]
                    }
                ],
                'backgroundColor': '#00ff00'
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'display': false,
                'stacked': true
            },
            'y': {
                'display': false,
                'min': 0
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
            '2030',
            '2034',
            '2038',
            '2042'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    11,
                    [
                        6,
                        2
                    ],
                    [
                        -4,
                        -7
                    ],
                    -2
                ]
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        4
                    ],
                    [
                        -2,
                        -3
                    ],
                    [
                        1,
                        4
                    ]
                ]
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        2
                    ],
                    [
                        -2,
                        -1
                    ],
                    [
                        1,
                        -7
                    ]
                ]
            }
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'x': {
                'display': false,
                'min': -8,
                'max': 12
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
    'type': 'bar',
    'data': {
        'labels': [
            '2030',
            '2034',
            '2038',
            '2042'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    11,
                    [
                        6,
                        2
                    ],
                    [
                        -4,
                        -7
                    ],
                    -2
                ]
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        4
                    ],
                    [
                        -2,
                        -3
                    ],
                    [
                        1,
                        4
                    ]
                ]
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        2
                    ],
                    [
                        -2,
                        -1
                    ],
                    [
                        1,
                        -7
                    ]
                ]
            }
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'x': {
                'display': false,
                'stacked': true
            },
            'y': {
                'display': false,
                'stacked': true,
                'min': -8,
                'max': 12
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
            '2030',
            '2034',
            '2038',
            '2042'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    11,
                    [
                        6,
                        2
                    ],
                    [
                        -4,
                        -7
                    ],
                    -2
                ]
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        4
                    ],
                    [
                        -2,
                        -3
                    ],
                    [
                        1,
                        4
                    ]
                ]
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        2
                    ],
                    [
                        -2,
                        -1
                    ],
                    [
                        1,
                        -7
                    ]
                ]
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'display': false,
                'stacked': true,
                'min': -8,
                'max': 12
            },
            'y': {
                'display': false,
                'stacked': true
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
            '2030',
            '2034',
            '2038',
            '2042'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    11,
                    [
                        6,
                        2
                    ],
                    [
                        -4,
                        -7
                    ],
                    -2
                ]
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    [
                        1,
                        2
                    ],
                    [
                        3,
                        4
                    ],
                    [
                        -2,
                        -3
                    ],
                    [
                        1,
                        4
                    ]
                ]
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    [
                        0,
                        1
                    ],
                    [
                        1,
                        2
                    ],
                    [
                        -2,
                        -1
                    ],
                    [
                        1,
                        -7
                    ]
                ]
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'display': false,
                'min': -8,
                'max': 12
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
    'type': 'bar',
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
                'borderWidth': 2
            },
            {
                'data': [
                    0,
                    5,
                    10,
                    null,
                    -10,
                    -5
                ],
                'borderSkipped': false
            }
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
    'type': 'bar',
    'data': {
        'labels': [
            0,
            1,
            2
        ],
        'datasets': [
            {
                'data': [
                    0,
                    -0.01,
                    -30
                ],
                'backgroundColor': '#00ff00',
                'borderWidth': 0,
                'minBarLength': 20
            }
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'x': {
                'ticks': {
                    'display': false
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            0,
            1,
            2
        ],
        'datasets': [
            {
                'data': [
                    0,
                    0.01,
                    30
                ],
                'backgroundColor': '#00ff00',
                'borderWidth': 0,
                'minBarLength': 20
            }
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'x': {
                'ticks': {
                    'display': false
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            0,
            1,
            2,
            3,
            4
        ],
        'datasets': [
            {
                'data': [
                    0,
                    -0.01,
                    0.01,
                    30,
                    -30
                ],
                'backgroundColor': '#00ff00',
                'borderWidth': 0,
                'minBarLength': 20
            }
        ]
    },
    'options': {
        'indexAxis': 'y',
        'scales': {
            'x': {
                'ticks': {
                    'display': false
                }
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
    'type': 'bar',
    'data': {
        'labels': [
            0,
            1,
            2
        ],
        'datasets': [
            {
                'data': [
                    0,
                    -0.01,
                    -30
                ],
                'backgroundColor': '#00ff00',
                'borderWidth': 0,
                'minBarLength': 20
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'display': false
            },
            'y': {
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
        'labels': [
            0,
            1,
            2
        ],
        'datasets': [
            {
                'data': [
                    0,
                    0.01,
                    30
                ],
                'backgroundColor': '#00ff00',
                'borderWidth': 0,
                'minBarLength': 20
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'display': false
            },
            'y': {
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
        'labels': [
            0,
            1,
            2,
            3,
            4
        ],
        'datasets': [
            {
                'data': [
                    0,
                    -0.01,
                    0.01,
                    30,
                    -30
                ],
                'backgroundColor': '#00ff00',
                'borderWidth': 0,
                'minBarLength': 20
            }
        ]
    },
    'options': {
        'scales': {
            'x': {
                'display': false
            },
            'y': {
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
                    '10',
                    '100',
                    '10',
                    '100'
                ],
                'backgroundColor': '#ff0000'
            },
            {
                'data': [
                    '100',
                    '10',
                    '0',
                    '100'
                ],
                'backgroundColor': '#00ff00'
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
        'datasets': {
            'bar': {
                'barPercentage': 1
            }
        },
        'scales': {
            'x': {
                'type': 'category',
                'display': false,
                'stacked': true
            },
            'y': {
                'type': 'logarithmic',
                'display': false,
                'stacked': true
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
                    10,
                    100,
                    10,
                    100
                ],
                'backgroundColor': '#ff0000'
            },
            {
                'data': [
                    100,
                    10,
                    0,
                    100
                ],
                'backgroundColor': '#00ff00'
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
        'datasets': {
            'bar': {
                'barPercentage': 1
            }
        },
        'scales': {
            'x': {
                'type': 'category',
                'display': false,
                'stacked': true
            },
            'y': {
                'type': 'logarithmic',
                'display': false,
                'stacked': true
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
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ]
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    5,
                    4,
                    3,
                    null,
                    1
                ]
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    3,
                    5,
                    2,
                    null,
                    4
                ]
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'display': false,
                'stacked': true
            },
            'y': {
                'display': false,
                'stacked': true,
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
    'type': 'bar',
    'data': {
        'labels': [
            '2016',
            '2018',
            '2020',
            '2024',
            '2030'
        ],
        'datasets': [
            {
                'backgroundColor': '#FF6384',
                'data': [
                    1,
                    null,
                    3,
                    4,
                    5
                ],
                'order': 20
            },
            {
                'backgroundColor': '#36A2EB',
                'data': [
                    5,
                    4,
                    3,
                    null,
                    1
                ],
                'order': 25
            },
            {
                'backgroundColor': '#FFCE56',
                'data': [
                    3,
                    5,
                    2,
                    null,
                    4
                ],
                'order': 10
            }
        ]
    },
    'options': {
        'responsive': false,
        'scales': {
            'x': {
                'display': false,
                'stacked': true
            },
            'y': {
                'display': false,
                'stacked': true,
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

