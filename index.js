module.exports = () => ({
  presets: [
    ['@babel/preset-env', { useBuiltIns: 'usage', corejs: 3 }],
  ],
  plugins: [
    ['@babel/plugin-transform-runtime', { useESModules: true }],
    '@babel/plugin-syntax-dynamic-import',
  ],
  exclude: [/node_modules/],
});
