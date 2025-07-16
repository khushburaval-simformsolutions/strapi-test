'use strict';

/**
 * article router
 */

// const { createCoreRouter } = require('@strapi/strapi').factories;

// module.exports = createCoreRouter('api::article.article');


module.exports = {
    routes: [
      // --- Add this new custom route ---
      {
        method: 'GET',
        path: '/articles/published-count', // Your custom endpoint
        handler: 'api::article.article.publishedCount', // Points to the new controller method
        config: {
          policies: [], // You can add policies here to restrict access if needed
          auth: false // Set to true if authentication is required
        },
      },
      // ---------------------------------
      {
        method: 'GET',
        path: '/articles',
        handler: 'api::article.article.find',
        config: {
          policies: [],
        },
      },
      {
        method: 'GET',
        path: '/articles/:id',
        handler: 'api::article.article.findOne',
        config: {
          policies: [],
        },
      },
      {
        method: 'POST',
        path: '/articles',
        handler: 'api::article.article.create',
        config: {
          policies: [],
        },
      },
      {
        method: 'PUT',
        path: '/articles/:id',
        handler: 'api::article.article.update',
        config: {
          policies: [],
        },
      },
      {
        method: 'DELETE',
        path: '/articles/:id',
        handler: 'api::article.article.delete',
        config: {
          policies: [],
        },
      },
    ],
  };