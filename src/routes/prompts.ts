import { Elysia } from 'elysia';
import { CreatePromptApi } from '../service/prompts/handlers';
import { ECreatePromptRequest, ECreatePromptResponse } from '../models/requests';

const promptsGroup = new Elysia({ prefix: '/prompts' }).
  post("/", ({body, set}) => CreatePromptApi(body), {
    body: ECreatePromptRequest,
    response: ECreatePromptResponse,
  }).
  get("/:id", ({ params: {id: string} }) => "Hello Elysia pokemon")


export {promptsGroup as PromptsGroup};