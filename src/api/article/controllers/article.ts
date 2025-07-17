import { factories } from '@strapi/strapi';
import type { Strapi } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }: { strapi: Strapi }) => ({
  async publishedCount(ctx: any) {
    try {
      const count = await strapi.service('api::article.article').getPublishedCount();
      ctx.body = { publishedCount: count };
    } catch (err) {
      ctx.body = err;
      ctx.status = 500;
    }
  },
}));