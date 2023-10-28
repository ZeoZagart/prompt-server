import { Elysia, t } from 'elysia'
import { Static } from '@sinclair/typebox'
import { EType } from '../prompts'

export const EPromptParam = t.Object({
	name: t.String(),
	type: t.Enum(EType),
})

export const EPromptParamValue = t.Object({
	name: t.String(),
	value: t.String(),
})

export const ECreatePromptRequest = t.Object({
	text: t.String(),
  	desc: t.String(),
	params: t.Array(EPromptParam),
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
	params: t.Array(EPromptParam),
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
	params: t.Array(EPromptParamValue),
})

export const EUsePromptResponse = t.Object({
	result: t.String(),
})

export type PromptParam = Static<typeof EPromptParam>;
export type CreatePromptRequest = Static<typeof ECreatePromptRequest>;
export type CreatePromptResponse = Static<typeof ECreatePromptResponse>;
export type GetPromptRequest = Static<typeof EGetPromptRequest>;
export type GetPromptResponse = Static<typeof EGetPromptResponse>;
export type SearchPromptRequest = Static<typeof ESearchPromptRequest>;
export type SearchPromptResponse = Static<typeof ESearchPromptResponse>;
export type UsePromptRequest = Static<typeof EUsePromptRequest>;
export type UsePromptResponse = Static<typeof EUsePromptResponse>;