import createClient from "openapi-fetch";
import type { paths } from "../../schema";

export const client = createClient<paths>({
  baseUrl: `${import.meta.env.BACKEND_URL}/api`,
  headers: { Authorization: `Bearer ${import.meta.env.API_KEY}` },
});
