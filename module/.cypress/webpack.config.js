module.exports = () => {
  return {
    mode: 'development',
    devServer: {
      compress: true,
      port: 3001,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.scss', '.css'], // search for files ending with these extensions when importing
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
        },
        {
          test: /\.(jpg|ttf|svg|woff2?|eot|png|mp4|mp3)$/, // add extensions for new file types here
          use: {
            loader: 'file-loader', // copy files to proxy and update paths to be absolute
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
              publicPath: '/assets',
            },
          },
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader', // turn url() and @import calls into require
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [require('autoprefixer')],
                },
              },
            },
            'sass-loader', // compile sass
          ],
        },
        {
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        },
      ],
    },
    devtool: 'eval',
  };
};
