import { t } from 'elysia'
import { Static } from '@sinclair/typebox'

export enum VariableType {
	Number = 'number',
	String = 'string',
	Boolean = 'boolean',
	ContextId = 'context_id',
}

export const EVariable = t.Object({
	name: t.String(),
	type: t.Enum(VariableType),
})

export const EVariableValue = t.Object({
	name: t.String(),
	value: t.String(),
})


export type Variable = Static<typeof EVariable>;