# tooltip
```js chart-editor
/* <block:配置:0> */
var patternCanvas = document.createElement('canvas');
var patternContext = patternCanvas.getContext('2d');

patternCanvas.width = 6;
patternCanvas.height = 6;
patternContext.fillStyle = '#ff0000';
patternContext.fillRect(0, 0, 6, 6);
patternContext.fillStyle = '#ffff00';
patternContext.fillRect(0, 0, 4, 4);

var pattern = patternContext.createPattern(patternCanvas, 'repeat');

var gradient;

module.exports = {
	config: {
		type: 'line',
		data: {
			datasets: [{
				data: [8, 8, 8, 8, 8, 8, 7, 8, 8, 8, 8],
				pointBorderColor: '#ff0000',
				pointBackgroundColor: '#00ff00',
				showLine: false
			}, {
				label: '',
				data: [4, 4, 4, 4, 4, 5, 3, 4, 4, 4, 4],
				pointBorderColor: pattern,
				pointBackgroundColor: pattern,
				showLine: false
			}, {
				label: '',
				data: [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
				showLine: false
			}],
			labels: ['', '', '', '', '', '', '', '', '', '', '']
		},
		options: {
			scales: {
				x: {display: false},
				y: {display: false}
			},
			elements: {
				line: {
					fill: false
				}
			},
			plugins: {
				legend: false,
				title: false,
				filler: false
			},
			tooltips: {
				mode: 'nearest',
				intersect: false,
				callbacks: {
					label: function() {
						return '\u200b';
					}
				}
			},
			layout: {
				padding: 15
			}
		},
		plugins: [{
			beforeDatasetsUpdate: function(chart) {
				if (!gradient) {
					gradient = chart.ctx.createLinearGradient(0, 0, 512, 256);
					gradient.addColorStop(0, '#ff0000');
					gradient.addColorStop(1, '#0000ff');
				}
				chart.config.data.datasets[2].pointBorderColor = gradient;
				chart.config.data.datasets[2].pointBackgroundColor = gradient;

				return true;
			},
			afterDraw: function(chart) {
				var canvas = chart.canvas;
				var rect = canvas.getBoundingClientRect();
				var point, event;

				for (var i = 0; i < 3; ++i) {
					for (var j = 0; j < 11; ++j) {
						point = chart.getDatasetMeta(i).data[j];
						event = {
							type: 'mousemove',
							target: canvas,
							clientX: rect.left + point.x,
							clientY: rect.top + point.y
						};
						chart._handleEvent(event);
						chart.tooltip.handleEvent(event);
						chart.tooltip.opacity = j / 10;
						chart.tooltip.draw(chart.ctx);
					}
				}
			}
		}]
	},
	options: {
		canvas: {
			height: 256,
			width: 512
		}
	}
};

/* </block:配置> */
```


```js chart-editor
/* <block:配置:0> */
const config = {
    'type': 'line',
    'data': {
        'datasets': [
            {
                'label': '',
                'data': [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0
                ],
                'pointStyle': 'circle',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            },
            {
                'label': '',
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
                'pointStyle': 'cross',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            },
            {
                'label': '',
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
                'pointStyle': 'crossRot',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            },
            {
                'label': '',
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
                'pointStyle': 'dash',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            },
            {
                'label': '',
                'data': [
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4,
                    4
                ],
                'pointStyle': 'line',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            },
            {
                'label': '',
                'data': [
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5,
                    5
                ],
                'pointStyle': 'rect',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            },
            {
                'label': '',
                'data': [
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6,
                    6
                ],
                'pointStyle': 'rectRounded',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            },
            {
                'label': '',
                'data': [
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7,
                    7
                ],
                'pointStyle': 'rectRot',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            },
            {
                'label': '',
                'data': [
                    8,
                    8,
                    8,
                    8,
                    8,
                    8,
                    8,
                    8,
                    8,
                    8
                ],
                'pointStyle': 'star',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            },
            {
                'label': '',
                'data': [
                    9,
                    9,
                    9,
                    9,
                    9,
                    9,
                    9,
                    9,
                    9,
                    9
                ],
                'pointStyle': 'triangle',
                'pointBackgroundColor': '#0000ff',
                'pointBorderColor': '#00ff00',
                'showLine': false
            }
        ],
        'labels': [
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            ''
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
            'line': {
                'fill': false
            }
        },
        'plugins': {
            'legend': false,
            'title': false,
            'filler': false
        },
        'tooltips': {
            'mode': 'nearest',
            'intersect': false,
            'usePointStyle': true,
            'callbacks': {}
        },
        'layout': {
            'padding': 15
        }
    },
    'plugins': [
        {}
    ]
};
module.exports = {
	config: config
}
/* </block:配置> */
```

