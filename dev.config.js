module.exports = {
  // Development server configuration
  devServer: {
    port: 8080,
    host: 'localhost',
    open: true, // Auto-open browser
    hot: false, // No hot reload for PHP
  },
  
  // File watching patterns
  watch: [
    '*.php',
    '*.css',
    '*.js',
    'img/**/*',
    'fonts/**/*'
  ],
  
  // Browser sync configuration (if needed in future)
  browserSync: {
    proxy: 'localhost:8000',
    port: 3000,
    open: false,
    notify: false
  }
};
