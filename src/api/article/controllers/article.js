'use strict';

/**
 * article controller
 */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::article.article');


const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article', ({ strapi }) => ({
  // Add your custom controller method here
  async publishedCount(ctx) {
    try {
      // Call the custom service method
      const count = await strapi.service('api::article.article').getPublishedCount();

      // Return the count as a JSON response
      ctx.body = { publishedCount: count };
    } catch (err) {
      // Handle any errors that occur
      ctx.body = err;
      ctx.status = 500; // Internal Server Error
    }
  },
}));
