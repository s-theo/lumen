export default {
  types: {
    feat: { title: 'Features' },
    fix: { title: 'Bug Fixes' },
    style: { title: 'Styles' },
    refactor: { title: 'Refactors' },
    perf: { title: 'Performance' }
  },

  // 重大更改
  titles: { breakingChanges: 'Breaking Changes' },

  // 是否包含贡献者列表
  contributors: false,

  // 是否将每条提交信息首字母大写
  capitalize: false,

  // 是否根据提交的作用域分组
  group: false
}
