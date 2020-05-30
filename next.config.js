module.exports = {
  exportTrailingSlash: true,
  webpack: (config, { dev }) => {
    console.warn(`Enviroment: ${dev ? 'DEVELOPMENT' : 'PRODUCTION'}`)

    config.module.rules.push({
      test: /\.(jpe?g|png|gif|ico|svg|webp)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1024,
            fallback: 'file-loader',
            publicPath: '/_next/static/images',
            outputPath: 'static/images',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    })

    return config
  },
}
