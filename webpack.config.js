const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    module: 'development',
    entry: './view/index.js',

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-env"
                        ]
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                use: ["ts-loader"],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            "@": path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './view/index.html'
        })
    ],

}