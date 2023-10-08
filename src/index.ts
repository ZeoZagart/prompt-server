import { Elysia } from "elysia";
import { PromptsGroup } from "./routes/prompts";

const app = new Elysia()
  .use(PromptsGroup)
  .get("/", () => "Hello Elysia pokemon").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
