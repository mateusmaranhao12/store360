const { defineConfig } = require('@vue/cli-service')

// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        util: require.resolve('util/'),
        stream: require.resolve('stream-browserify')
      }
    }
  }
};
