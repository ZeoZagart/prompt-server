import {PrismaClient } from "@prisma/client";
import { Prompt } from "../../models/prompts";
import { CreatePromptRequest } from "../../models/requests/prompts";
import { integer } from "@elastic/elasticsearch/api/types";
import { Variable } from "../../models/requests/shared";
import { prisma } from "./shared";


export async function createPrompt(prompt: CreatePromptRequest): Promise<Prompt> {
	const res = await prisma.prompt.create({data: prompt})
	console.log(`CreatePrompt result: ${JSON.stringify(res)}`)
 	return {
		...res, 
		params: res.params as Variable[],
	}
}

export async function getPrompt(id: integer): Promise<Prompt> {
	const res = await prisma.prompt.findUnique({where: {id: id}})
	console.log(`GetPrompt result: ${JSON.stringify(res)}`)
	if (res == null) {
		return Promise.reject("Unable to find prompt")
	}
	return {
		...res,
		params: res.params as Variable[],
	}
}