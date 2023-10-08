import { CreatePromptRequest, CreatePromptResponse } from '../../models/requests';
import { CreatePrompt } from '../../clients/promptdb_client';

export async function CreatePromptApi(request: CreatePromptRequest): Promise<CreatePromptResponse> {
	console.log(`CreatePrompt: ${request.prompt}`)
	const result = await CreatePrompt({
			text: request.prompt,
			desc: request.desc,
			params: request.params,
	})
	console.log(`result: ${JSON.stringify(result)}`);
	return {
		id: result.id!!,
		success: true,
		url: "http://localhost:3000/prompt/" + result.id,
	}
}