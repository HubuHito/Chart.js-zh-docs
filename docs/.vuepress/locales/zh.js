module.exports = {
  label: '简体中文',
  selectText: '选择语言',
  ariaLabel: '选择语言',
  editLinkText: '在 GitHub 上编辑此页',
  lastUpdated: '上次更新',
  nav: [
      { text: '首页', link: '/zh/' },
      { text: '指南', link: '/zh/guide/getting-started/' }
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
        title: '通用配置',
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
      }
    ]
  }
}