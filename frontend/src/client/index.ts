import createClient from "openapi-fetch";
import type { paths } from "../../schema";

export const client = createClient<paths>({
  baseUrl: "http://localhost:1337/api",
  headers: { Authorization: `Bearer ${import.meta.env.API_KEY}` },
});
