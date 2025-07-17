import type { Configuration, WebpackPluginInstance } from 'webpack';

const webpackConfig = (
  config: Configuration,
  webpack: typeof import('webpack')
): Configuration => {
  // Perform customizations to webpack config
  // Important: return the modified config
  return config;
};

export default webpackConfig;