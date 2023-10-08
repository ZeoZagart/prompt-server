import {PrismaClient } from "@prisma/client";
import { Prompt } from "../models/prompts";
import { CreatePromptRequest } from "../models/requests";
const prisma = new PrismaClient();


export async function CreatePrompt(prompt: CreatePromptRequest): Promise<Prompt> {
	const res = await prisma.prompt.create({data: prompt})
	console.log(`result: ${JSON.stringify(res)}`)
	return res
}