import { Elysia } from 'elysia';
import { CreatePrompt } from '../service/prompts/handlers';
import { ECreatePromptRequest, ECreatePromptResponse } from '../models/prompts';

const promptsGroup = new Elysia({ prefix: '/prompts' }).
  post("/", ({body, set}) => CreatePrompt(body), {
    body: ECreatePromptRequest,
    response: ECreatePromptResponse,
  }).
  get("/:id", ({ params: {id: string} }) => "Hello Elysia pokemon")


export {promptsGroup as PromptsGroup};