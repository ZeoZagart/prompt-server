import { Elysia } from 'elysia';
import { CreatePromptApi, SearchPromptApi, UsePromptApi } from '../service/prompts/handlers';
import { ECreatePromptRequest, ECreatePromptResponse, ESearchPromptRequest, ESearchPromptResponse, EUsePromptRequest, EUsePromptResponse } from '../models/requests';

const promptsGroup = new Elysia({ prefix: '/prompts' }).
  post("/", ({body, set}) => CreatePromptApi(body), {
    body: ECreatePromptRequest,
    response: ECreatePromptResponse,
  })
  .post("/find", ({body, set}) => SearchPromptApi(body), {
    body: ESearchPromptRequest,
    response: ESearchPromptResponse,
  })
  .post("/use", ({body, set}) => UsePromptApi(body), {
    body: EUsePromptRequest,
    response: EUsePromptResponse,
  })
  .get("/:id", ({ params: {id: string} }) => "Hello Elysia pokemon")


export {promptsGroup as PromptsGroup};