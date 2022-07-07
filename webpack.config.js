import { URL } from 'url';
import path from 'path';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __dirname = new URL('.', import.meta.url).pathname;
const dstPath = path.join(__dirname, 'project/dist');
const srcPath = path.join(__dirname, 'project/src');

export default {
    entry: './index.ts',
    mode: 'development',
    context: srcPath,
    output: {
        path: dstPath,
        filename: '[name].bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            /**
             * Путь до шаблона следует указывать относительно
             * точки входа (например, entry.js). Так же следует
             * обратить внимание на отсутствие "./"
             */
            template: 'index.html',
            /**
             * Путь указывается относительно директории с выходными
             * файлами (dstPath). Здесь "./" нужна.
             */
            filename: './index.html',
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
        ],
    },
};
