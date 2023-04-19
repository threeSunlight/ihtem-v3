const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/effect':{
        // 代理地址
        target: 'http://ihrm-java.itheima.net/api',
        // 是否开启跨域
        changeOrigin: true,
        // 重写路径
        pathRewrite:{
          "^/effect": ""
        }
      }
    }
  }
})
