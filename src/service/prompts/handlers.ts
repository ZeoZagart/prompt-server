import { CreatePromptRequest, CreatePromptResponse, SearchPromptRequest, SearchPromptResponse, UsePromptRequest, UsePromptResponse } from '../../models/requests/prompts';
import { createPrompt, getPrompt } from '../../clients/db/promptdb_client';
import { insertPrompt, searchPrompt } from '../../clients/elasticsearch_client';
import { Prompt } from '../../models/prompts';
import { respond } from '../../clients/openai_client';
import { Variable, VariableValue } from '../../models/requests/shared';

export async function CreatePromptApi(request: CreatePromptRequest): Promise<CreatePromptResponse> {
	console.log(`CreatePrompt: ${request.text}`)
	const result = await createPrompt(request)

	await insertPrompt(result)

	return {
		id: result.id,
		success: true,
		url: "http://localhost:3000/prompt/" + result.id,
	}
}

export async function SearchPromptApi(request: SearchPromptRequest): Promise<SearchPromptResponse> {
	console.log(`SearchPrompt: ${JSON.stringify(request)}`)
	const result = await searchPrompt(request)

	return result
}

export async function UsePromptApi(request: UsePromptRequest): Promise<UsePromptResponse> {
	console.log(`UsePrompt: ${JSON.stringify(request)}`)
	const prompt = await getPrompt(request.id)
	const filledPrompt = applyParams(prompt, request.params)
	console.log(`Applied params: ${filledPrompt}`)
	return {
		result: filledPrompt,
	}
	//const result = await respond(filledPrompt)
	//return {
		//result: result,
	//}
}

function applyParams(prompt: Prompt, params: VariableValue[]): string {
	let result = prompt.text
	for (const param of params) {
		result = result.replace(`{{${param.name}}}`, param.value)
	}
	return result
}	