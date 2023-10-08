import { Elysia } from 'elysia';
import { CreatePromptApi, SearchPromptApi } from '../service/prompts/handlers';
import { ECreatePromptRequest, ECreatePromptResponse, ESearchPromptRequest, ESearchPromptResponse } from '../models/requests';

const promptsGroup = new Elysia({ prefix: '/prompts' }).
  post("/", ({body, set}) => CreatePromptApi(body), {
    body: ECreatePromptRequest,
    response: ECreatePromptResponse,
  })
  .post("/find", ({body, set}) => SearchPromptApi(body), {
    body: ESearchPromptRequest,
    response: ESearchPromptResponse,
  })
  .get("/:id", ({ params: {id: string} }) => "Hello Elysia pokemon")


export {promptsGroup as PromptsGroup};