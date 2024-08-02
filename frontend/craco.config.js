// craco.config.js
module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.resolve = {
          ...webpackConfig.resolve,
          fallback: {
            path: require.resolve('path-browserify'),
          },
        };
  
        webpackConfig.module.rules.push({
          test: /\.html$/,
          use: [
            {
              loader: 'html-loader',
            },
          ],
        });
        return webpackConfig;
      },
    },
  };
  