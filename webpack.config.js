const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { index: './src/index.tsx' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif|webp|zip|otf)$/,
        use: ['file-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  externals: {
    _require: "require",
    photoshop: 'commonjs2 photoshop',
    uxp: 'commonjs2 uxp',
    os: 'commonjs2 os',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }),
    new copyWebpackPlugin({
      patterns: [
        { from: "./manifest.json", to: "." },
        { from: "./src/assets/icons", to: "./icons" },
      ]
    })
  ],
  watch: true,
  watchOptions: {
    // ignored: /node_modules/,
  },
  devtool: 'eval-cheap-source-map',
  devServer: {
    allowedHosts: "all",
  }

};
