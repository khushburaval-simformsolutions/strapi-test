interface RouteConfig {
  method: string;
  path: string;
  handler: string;
  config: {
    auth: boolean;
    policies: string[];
  };
}

const routes: RouteConfig[] = [
  {
    method: 'GET',
    path: '/articles/published-count',
    handler: 'api::article.article.publishedCount',
    config: {
      auth: false, // Set to false if you want the route to be public
      policies: [], // Apply your custom policy here
    },
  },
];

export default { routes };