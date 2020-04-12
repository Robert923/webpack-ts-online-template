const path = require('path');

module.exports = {
    entry: './src/index.ts',
    // 'mode': 'production',
    'mode': 'development',
    devtool: 'inline-source-map',
    optimization: {
        usedExports: true,
    },
    module: {
        rules: [
        {
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        ],
    },
    resolve: {
        extensions: [ '.ts', '.js' ],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
