 const proxy = [
        {
          context: '/restaurants',
          target: 'http://localhost:8080',
          pathRewrite: { '^/restaurants': '' }
        }
      ];
      module.exports = proxy;