const webpack = require("webpack");
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    devtool: "inlinie-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        library: "slifavo"
    },
};