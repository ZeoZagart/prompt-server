import { CreatePromptRequest, CreatePromptResponse, SearchPromptRequest, SearchPromptResponse } from '../../models/requests';
import { CreatePrompt } from '../../clients/promptdb_client';
import { insertPrompt, searchPrompt } from '../../clients/elasticsearch_client';

export async function CreatePromptApi(request: CreatePromptRequest): Promise<CreatePromptResponse> {
	console.log(`CreatePrompt: ${request.text}`)
	const result = await CreatePrompt(request)

	await insertPrompt(result)

	return {
		id: result.id,
		success: true,
		url: "http://localhost:3000/prompt/" + result.id,
	}
}

export async function SearchPromptApi(request: SearchPromptRequest): Promise<SearchPromptResponse> {
	console.log(`SearchPrompt: ${request}`)
	const result = await searchPrompt(request)

	return result
}