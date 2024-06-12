const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;
const pageNames = ['index.html', 'main.html'];
function getMpa() {
  const htmlwebpackplugins = [];
  pageNames.forEach((pageName) => {
    htmlwebpackplugins.push(
      new HtmlWebpackPlugin({
        Title: `${pageName} page`,
        template: path.resolve(__dirname, 'src', 'pages', `${pageName}`) ,
        filename: `${pageName}`,
        MiniFy: true, // Generate the compressed HTML code.
      }),
    );
  });

  return htmlwebpackplugins;
}

const htmlwebpackplugins = getMpa(pageNames);
module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3500,
    historyApiFallback: true,
    open: true,
    hot: true,
    compress: true,
  },
  entry: path.resolve(__dirname, 'src', 'js', 'app.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    filename: '[name].[contenthash].js',
  },
  plugins: [
    ...htmlwebpackplugins,
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
        generator: {
          filename: 'pages/[name][ext]',
        },
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: 'defaults',
                },
              ],
            ],
          },
        },
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        type: 'asset/resource',
        use: {
          loader: 'image-webpack-loader',
          options: {
            mozjpeg: {
              progressive: true,
            },
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: [-20, 1],
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            webp: {
              quality: 75,
            },
          },
        },
        generator: {
          filename: 'img/[name][ext]',
        },
      },
    ],
  },
};
