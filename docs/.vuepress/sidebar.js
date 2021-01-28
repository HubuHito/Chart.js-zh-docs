module.exports = {
  '/v1/': [
    {
      title: '介绍',
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: '入门',
      collapsable: false,
      children: [
        "getting-started/",
        "getting-started/installation",
        "getting-started/integration",
        "getting-started/usage",
      ]
    },
    {
      title: '概览',
      collapsable: false,
      children: [
        "general/data-structures",
        "general/accessibility",
        "general/responsive",
        "general/device-pixel-ratio",
        {
          title: '图表交互',
          collapsable: false,
          children: [
            "general/interactions/",
            "general/interactions/events",
            "general/interactions/modes"
          ]
        },
        "general/options",
        "general/colors",
        "general/fonts",
        "general/performance",
      ]
    },
    {
      title: '图表配置',
      collapsable: false,
      children: [
        "configuration/",
        "configuration/animations",
        "configuration/layout",
        "configuration/legend",
        "configuration/title",
        "configuration/tooltip",
        "configuration/elements",
        "configuration/crosshair"
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
        "charts/dashBoard",
        "charts/mixed"
      ]
    },
    {
      title: '坐标轴',
      collapsable: false,
      children: [
        "axes/",
        {
          title: '笛卡尔坐标(cartesian)',
          collapsable: false,
          children: [
            "axes/cartesian/",
            "axes/cartesian/category",
            "axes/cartesian/linear",
            "axes/cartesian/logarithmic",
            "axes/cartesian/time",
          ]
        },
        {
          title: '径向坐标(radial)',
          collapsable: false,
          children: [
            'axes/radial/',
            'axes/radial/linear'
          ]
        },
        "axes/labelling",
        "axes/styling",
      ]
    },
    {
      title: "开发指南",
      collapsable: false,
      children: [
        "developers/api",
        "developers/updates",
        "developers/plugins",
        "developers/charts",
        "developers/axes"
      ]
    }
  ],
  '/v2/': [
    {
      title: '介绍',
      collapsable: false,
      children: [
        ''
      ]
    },
    {
      title: '入门',
      collapsable: false,
      children: [
        // "getting-started/",
        "getting-started/installation",
        "getting-started/integration",
        "getting-started/usage",
      ]
    },
    {
      title: '概览',
      collapsable: false,
      children: [
        "general/data-structures",
        "general/accessibility",
        "general/responsive",
        "general/device-pixel-ratio",
        {
          title: '图表交互',
          collapsable: false,
          children: [
            "general/interactions/",
            "general/interactions/events",
            "general/interactions/modes"
          ]
        },
        "general/options",
        "general/colors",
        "general/fonts",
        "general/performance",
      ]
    },
    {
      title: '图表配置',
      collapsable: false,
      children: [
        "configuration/",
        "configuration/animations",
        "configuration/layout",
        "configuration/legend",
        "configuration/title",
        "configuration/tooltip",
        "configuration/elements",
        // "configuration/crosshair"
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
        // "charts/dashBoard",
        "charts/mixed"
      ]
    },
    {
      title: '坐标轴',
      collapsable: false,
      children: [
        "axes/",
        {
          title: '笛卡尔坐标(cartesian)',
          collapsable: false,
          children: [
            "axes/cartesian/",
            "axes/cartesian/category",
            "axes/cartesian/linear",
            "axes/cartesian/logarithmic",
            "axes/cartesian/time",
          ]
        },
        {
          title: '径向坐标(radial)',
          collapsable: false,
          children: [
            'axes/radial/',
            'axes/radial/linear'
          ]
        },
        "axes/labelling",
        "axes/styling",
      ]
    },
    {
      title: "开发指南",
      collapsable: false,
      children: [
        "developers/api",
        "developers/updates",
        "developers/plugins",
        "developers/charts",
        "developers/axes"
      ]
    }
  ]
}
