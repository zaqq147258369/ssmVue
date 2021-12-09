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
    }
}
