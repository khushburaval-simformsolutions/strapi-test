import { factories } from '@strapi/strapi';
import type { Core } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', ({ strapi }: { strapi: Core.Strapi }) => ({
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