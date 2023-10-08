import { Elysia, t } from 'elysia'
import { Static } from '@sinclair/typebox'
import { EType } from './prompts'

export const EPromptParam = t.Object({
	name: t.String(),
	type: t.Enum(EType),
})

export const ECreatePromptRequest = t.Object({
	prompt: t.String(),
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

export type PromptParam = Static<typeof EPromptParam>;
export type CreatePromptRequest = Static<typeof ECreatePromptRequest>;
export type CreatePromptResponse = Static<typeof ECreatePromptResponse>;
export type GetPromptRequest = Static<typeof EGetPromptRequest>;
export type GetPromptResponse = Static<typeof EGetPromptResponse>;