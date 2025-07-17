import { AdminConfig } from './../../types/cutom.d';

const config: AdminConfig = {
  locales: [],
};

const bootstrap = (app: unknown): void => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};