import { factories } from '@strapi/strapi';
import type { Core } from '@strapi/strapi';

export default factories.createCoreService('api::article.article', ({ strapi }: { strapi: Core.Strapi }) => ({
  async getPublishedCount(): Promise<number> {
    try {
      const count = await strapi.db.query('api::article.article').count({
        where: {
          publishedAt: {
            $notNull: true, // Count only articles where publishedAt is not null
          },
        },
      });
      return count;
    } catch (err) {
      console.error('Error in getPublishedCount service:', err);
      throw new Error('Could not retrieve published count.');
    }
  },
}));