module.exports = {
  label: '简体中文',
  selectText: '选择语言',
  ariaLabel: '选择语言',
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '上次更新',
  nav: [
      { text: '首页', link: '/zh/' },
      { text: '指南', link: '/zh/guide/getting-started/' },
      { text: 'API例子', link: '/zh/samples/charts/bar' }
  ],
  sidebar: {
    '/zh/guide/': [
      {
        title: '入门',
        collapsable: false,
        children: [
          'getting-started/',
          'getting-started/installation',
          'getting-started/integration',
          'getting-started/usage'
        ]
      },
      {
        title: '基本配置',
        collapsable: false,
        children: [
          'general/data-structures',
          'general/accessibility',
          'general/responsive',
          'general/device-pixel-ratio',
          {
            title: '交互',
            collapsable: false,
            children: [
              'general/interactions/',
              'general/interactions/events',
              'general/interactions/modes'
            ]
          },
          'general/options',
          'general/colors',
          'general/fonts',
          'general/performance',
          'general/locale'
        ]
      },
      {
        title: '通用配置',
        collapsable: false,
        children: [
            'configuration/',
            'configuration/animations',
            'configuration/layout',
            'configuration/legend',
            'configuration/title',
            'configuration/tooltip',
            'configuration/elements'
        ]
      },
      {
        title: '图表类型',
        collapsable: false,
        children: [
            "charts/line",
            "charts/bar",
            "charts/radar",
            "charts/doughnut",
            "charts/polar",
            "charts/bubble",
            "charts/scatter",
            "charts/area",
            "charts/mixed"
        ]
      },
      {
        title: '坐标轴',
        collapsable: false,
        children: [
            "axes/",
            {
              title: '笛卡尔坐标',
              collapsable: false,
              children: [
                "axes/cartesian/",
                "axes/cartesian/category",
                "axes/cartesian/linear",
                "axes/cartesian/logarithmic",
                "axes/cartesian/time",
                "axes/cartesian/timeseries",
              ]
            },
            {
              title: '径向坐标',
              collapsable: false,
              children: [
                'axes/radial/',
                'axes/radial/linear'
              ]
            },
            "axes/labelling",
            "axes/styling",
        ]
      }
    ],
    '/zh/samples/': [{
      "title": "图表",
      "collapsable": false,
      "children": ["charts/bar", "charts/bubble", "charts/doughnut", "charts/line", "charts/polarArea", "charts/radar", "charts/scatter", "charts/mixed"]
    }, {
      "title": "布局",
      "collapsable": false,
      "children": ["layouts/layouts"]
    }, {
      "title": "坐标轴",
      "collapsable": false,
      "children": ["scale/scale", "scale/category", "scale/linear", "scale/radialLinear", "scale/time"]
    }, {
      "title": "图形元素",
      "collapsable": false,
      "children": ["elements/line", "elements/point"]
    }, {
      "title": "插件",
      "collapsable": false,
      "children": ["plugins/filler", "plugins/legend", "plugins/tooltip"]
    }]
  }
}