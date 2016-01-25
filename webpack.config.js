/*global __dirname */
var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        'bootstrap-loader',
        path.resolve(__dirname, "app", "app.js")],
    output: {
        filename: "bundle.js",
        path: __dirname
    },
    plugins: [
        new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
        })
    ],
    resolve: {
      extensions: ['','.js','.jsx']
    },
    module: {
    loaders: [
        {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ["react-hot", "babel?cacheDirectory"],
        },
        { test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
        { test: /\.(ttf|eot)$/, loader: 'file' },
        { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
        { test: /\.scss$/, loaders: ["style", "css", "sass"] }
    ],
    },
}
