module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathPrefix: '@app',
            rootPathSuffix: 'src/app',
          },
          {
            rootPathPrefix: '@pages',
            rootPathSuffix: 'src/pages',
          },
          {
            rootPathPrefix: '@widgets',
            rootPathSuffix: 'src/widgets',
          },
          {
            rootPathPrefix: '@entities',
            rootPathSuffix: 'src/entities',
          },
          {
            rootPathPrefix: '@features',
            rootPathSuffix: 'src/features',
          },
          {
            rootPathPrefix: '@shared',
            rootPathSuffix: 'src/shared',
          },
        ],
      },
    ],
    'react-native-worklets/plugin',
  ],
};
