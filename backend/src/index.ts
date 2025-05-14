// import type { Core } from '@strapi/strapi';
import fs from "node:fs";
import path from "node:path";
import openapiTS, { astToString } from "openapi-typescript";
import schemas from "./extensions/documentation/documentation/1.0.0/full_documentation.json";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap(/* { strapi }: { strapi: Core.Strapi } */) {
    if (process.env.NODE_ENV === "production") {
      return;
    }

    const ast = await openapiTS(JSON.stringify(schemas));
    const contents = astToString(ast);
    fs.writeFileSync("../frontend/schema.d.ts", contents);
  },
};
