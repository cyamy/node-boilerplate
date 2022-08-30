/* eslint-disable */
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  externals: [
    nodeExternals({
      modulesFromFile: {
        exclude: ['dependencies'],
        include: ['devDependencies'],
      },
    }),
  ],
  entry: {
    '': path.resolve(__dirname, './src/index.ts'),
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules'],
  },
};
