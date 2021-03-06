const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
require('@babel/register');

module.exports = {
    entry: ['@babel/polyfill', './src/index.ts'],
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            hash: true,
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './data',
                    to: './data',
                    filter: async (resourcePath) => {
                        // add your custom extension here if not listed
                        var texture = /\.(jpe?g|gif|png|svg|heic|pkm|pvr)$/;
                        var fnt = /\.(woff|woff2|ttf|fnt)$/;
                        var map = /\.(tmx|tsx)$/;
                        var audio =
                            /\.(wav|mp3|mpeg|opus|ogg|oga|aac|caf|m4a|m4b|mp4|weba|webm|dolby|flac)$/;
                        var misc = /\.(xml|bin|glsl|ym|json|js)$/;

                        // only copy production files
                        var ret =
                            texture.test(resourcePath) ||
                            fnt.test(resourcePath) ||
                            map.test(resourcePath) ||
                            audio.test(resourcePath) ||
                            misc.test(resourcePath);

                        if (ret === false) {
                            console.log('ignoring data: ' + resourcePath);
                        }
                        return ret;
                    },
                },
            ],
        }),
        new FaviconsWebpackPlugin({
            logo: './favicon/logo.png', // svg works too!
            mode: 'auto', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
            devMode: 'webapp', // optional can be 'webapp' or 'light' - 'light' by default
            favicons: {
                appName: 'Pacman',
                appDescription: 'pacman tutorial',
                developerName: '-',
                developerURL: '-', // prevent retrieving from the nearest package.json
                icons: {
                    coast: false,
                    yandex: false,
                },
            },
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        modules: [path.resolve('./src'), path.resolve('./node_modules')],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        hot: true,
        port: 9000,
        open: true,
    },
    watch: false,
};
