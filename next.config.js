/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['three'])

module.exports = withTM({
  webpack5: true,
  reactStrictMode: true,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glsl|frag|vert)$/,
      use: [
        options.defaultLoaders.babel,
        { loader: 'raw-loader' },
        { loader: 'glslify-loader' },
      ],
    })

    return config
  },
})
