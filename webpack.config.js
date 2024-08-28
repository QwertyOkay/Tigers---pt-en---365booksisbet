const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    contact: './src/contact.js',
    terms: './src/terms.js',
    privacy: './src/privacy.js',
    thankyou: './src/thankyou.js',
    'en/contact': './src/en/contact-en.js',
    'en/terms': './src/en/terms-en.js',
    'en/privacy': './src/en/privacy-en.js',
    'en/thankyou': './src/en/thankyou-en.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  plugins: [
    // Default language templates
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'index.html',
      chunks: ['index'],
      title: '365booksisbet.com - Home',
      favicon: './public/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'contact.html',
      chunks: ['contact'],
      title: '365booksisbet.com - Contact Us',
      favicon: './public/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'terms.html',
      chunks: ['terms'],
      title: '365booksisbet.com - Terms of Service',
      favicon: './public/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'privacy.html',
      chunks: ['privacy'],
      title: '365booksisbet.com - Privacy Policy',
      favicon: './public/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './public/template.html',
      filename: 'thankyou.html',
      chunks: ['thankyou'],
      title: '365booksisbet.com - Thank You',
      favicon: './public/favicon.png',
    }),

    // English language templates
    new HtmlWebpackPlugin({
      template: './public/template-en.html',
      filename: 'en/contact.html',
      chunks: ['en/contact'],
      title: '365booksisbet.com - Contact Us (EN)',
      favicon: './public/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './public/template-en.html',
      filename: 'en/terms.html',
      chunks: ['en/terms'],
      title: '365booksisbet.com - Terms of Service (EN)',
      favicon: './public/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './public/template-en.html',
      filename: 'en/privacy.html',
      chunks: ['en/privacy'],
      title: '365booksisbet.com - Privacy Policy (EN)',
      favicon: './public/favicon.png',
    }),
    new HtmlWebpackPlugin({
      template: './public/template-en.html',
      filename: 'en/thankyou.html',
      chunks: ['en/thankyou'],
      title: '365booksisbet.com - Thank You (EN)',
      favicon: './public/favicon.png',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 8080,
    historyApiFallback: {
      index: '/index.html',
      rewrites: [
        { from: /^\/en$/, to: '/index.html' }, // Redirects /en to /index.html
        { from: /^\/en\/terms.html$/, to: '/en/terms.html' },
        { from: /^\/en\/privacy.html$/, to: '/en/privacy.html' },
        { from: /^\/en\/contact.html$/, to: '/en/contact.html' },
        { from: /^\/en\/thankyou.html$/, to: '/en/thankyou.html' },
        { from: /^\/terms.html$/, to: '/terms.html' },
        { from: /^\/privacy.html$/, to: '/privacy.html' },
        { from: /^\/contact.html$/, to: '/contact.html' },
        { from: /^\/thankyou.html$/, to: '/thankyou.html' },
      ],
    },
  },
};
