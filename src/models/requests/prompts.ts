import { t } from 'elysia'
import { Static } from '@sinclair/typebox'
import { EVariable, EVariableValue } from './shared'

export const ECreatePromptRequest = t.Object({
	text: t.String(),
  	desc: t.String(),
	params: t.Array(EVariable),
})

export const ECreatePromptResponse = t.Object({
	id: t.Integer(),
	success: t.Boolean(),
	url: t.String(),
})

export const EGetPromptRequest = t.Object({
	id: t.Integer(),
})

export const EGetPromptResponse = t.Object({
	id: t.Integer(),
	desc: t.String(),
	params: t.Array(EVariable),
})

export const ESearchPromptRequest = t.Object({
	query: t.String(),
	offset: t.Integer(),
	page_size: t.Integer(),
})

export const ESearchPromptResponse = t.Object({
	prompts: t.Array(EGetPromptResponse),
	next_offset: t.Integer(),
})

export const EUsePromptRequest = t.Object({
	id: t.Integer(),
	params: t.Array(EVariableValue),
})

export const EUsePromptResponse = t.Object({
	result: t.String(),
})

export type PromptParam = Static<typeof EVariable>;
export type CreatePromptRequest = Static<typeof ECreatePromptRequest>;
export type CreatePromptResponse = Static<typeof ECreatePromptResponse>;
export type GetPromptRequest = Static<typeof EGetPromptRequest>;
export type GetPromptResponse = Static<typeof EGetPromptResponse>;
export type SearchPromptRequest = Static<typeof ESearchPromptRequest>;
export type SearchPromptResponse = Static<typeof ESearchPromptResponse>;
export type UsePromptRequest = Static<typeof EUsePromptRequest>;
export type UsePromptResponse = Static<typeof EUsePromptResponse>;