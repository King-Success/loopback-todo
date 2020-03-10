import {ApplicationConfig} from '@loopback/core';
import {TodoListApplication} from './application';

export {TodoListApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new TodoListApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
