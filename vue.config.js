const path = require('path');
function resolve(dir) {
    return path.join(__dirname,dir);
}
module.exports = {
    chainWebpack:(config)=>{
        config.resolve.alias
            .set( 'src', resolve('src'))
            .set( 'assets', resolve('src/assets'))
            .set( 'css', resolve('src/assets/css'))
            .set( 'components', resolve('src/components'))
            .set( 'views', resolve('src/views'))
    },
    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'scss',
        patterns: [
          // 这个是绝对路径,不能使用 alias 中配置的别名路径，如@表示的src
          path.resolve(__dirname, './src/assets/css/*.scss')
        ]
      }
    }
}
