const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: './dist',
        },
        port: 3002,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
        ],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'microApp1',
            filename: 'remoteEntry.js',
            exposes: {
                './app': './src/App'
            },
            // shared: {
            //     react: { singleton: true },
            //     'react-dom': { singleton: true }
            // },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};
