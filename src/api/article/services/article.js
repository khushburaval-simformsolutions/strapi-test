'use strict';

/**
 * article service
 */

// const { createCoreService } = require('@strapi/strapi').factories;

// module.exports = createCoreService('api::article.article');


const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::article.article', ({ strapi }) => ({
  // Add your custom service method here
  async getPublishedCount() {
    try {
      // Find all articles where the 'publishedAt' field is not null
      // Strapi's default content-type builder automatically adds 'publishedAt' for publishable content types.
      const count = await strapi.db.query('api::article.article').count({
        where: {
          publishedAt: {
            $notNull: true, // Filters for entries where publishedAt is not null (i.e., published)
          },
        },
      });

      return count;
    } catch (err) {
      // Log the error and re-throw or handle as appropriate
      console.error('Error in getPublishedCount service:', err);
      throw new Error('Could not retrieve published count.');
    }
  },
}));