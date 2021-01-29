module.exports = {
  title: 'Chart.js-zh-docs',
  description: 'Chartjs中文文档',
  base: '/Chart.js-zh-docs/',
  head: [
      ['link', { rel: 'icon', href: `/favicon.png` }],
  ],
  // patterns: ['**/*.md', '**/*.vue', '**/*.mdx'],
  plugins: [
      ['redirect', {
          redirectors: [
              // Default sample page when accessing /samples.
              { base: '/', alternative: ['zh/'] },
          ],
      }],
      [require('./plugins/chart-editor'), {
          defaults: {
              // plugins: {
              //     legend: {
              //         display: false
              //     },
              //     title: {
              //         display: false
              //     },
              //     tooltip: {
              //         enabled: false
              //     },
              // }
          }
      }]
  ],
  locales: {
      '/en/': {
          lang: 'en-US',
          title: 'Chart.js Documents',
          description: 'Chart.js Documents',
      },
      '/zh/': {
          lang: 'zh-CN',
          title: 'Chart.js 中文文档',
          description: 'Chart.js 中文文档',
      }
  },
  themeConfig: {
      repo: '',
      logo: '/favicon.png',
      editLinks: true,
      docsDir: 'docs',
      // algolia: {
      //     apiKey: '7224f458f773f7cf4cbbc4c53621d30c',
      //     indexName: 'chartjs-plugin-datalabels'
      // },
      locales: {
          '/en/': require('./locales/en.js'),
          '/zh/': require('./locales/zh.js')
      }
  },
  // configureWebpack: (config, isServer) => {
  //   return {
  //     module: {
  //       rules: [
  //         {
  //           test: /.mdx?$/,
  //           use: ['babel-loader', '@mdx-js/vue-loader']
  //         }
  //       ]
  //     }
  //   }
  // }
}