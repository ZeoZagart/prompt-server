import { Elysia } from 'elysia';
import { CreatePromptApi, SearchPromptApi, UsePromptApi } from '../service/prompts/handlers';
import { ECreatePromptRequest, ECreatePromptResponse, ESearchPromptRequest, ESearchPromptResponse, EUsePromptRequest, EUsePromptResponse } from '../models/requests/prompts';
import { InitContextApi } from '../service/contexts/handlers';
import { EInitContextRequest, EInitContextResponse } from '../models/requests/contexts';

const promptsGroup = new Elysia({ prefix: '/prompts' }).
  post("/", ({body, set}) => InitContextApi(body), {
    body: EInitContextRequest,
    response: EInitContextResponse,
  })

export {promptsGroup as PromptsGroup};