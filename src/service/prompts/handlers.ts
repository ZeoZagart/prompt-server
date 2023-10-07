import { CreatePromptRequest, CreatePromptResponse } from '../../models/prompts';

import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export async function CreatePrompt(request: CreatePromptRequest): Promise<CreatePromptResponse> {
	console.log(`CreatePrompt: ${request.prompt}`)
	const result = await prisma.prompt.create({
		data: {
			text: request.prompt,
			desc: request.desc,
			params: request.params,
		}
	})
	console.log(`result: ${JSON.stringify(result)}`);
	return {
		id: result.id,
		success: true,
		url: "http://localhost:3000/prompt/" + result.id,
	}
}