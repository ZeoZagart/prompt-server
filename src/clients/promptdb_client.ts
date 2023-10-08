import {PrismaClient } from "@prisma/client";
import { Prompt } from "../models/prompts";
import { CreatePromptRequest } from "../models/requests";
import { integer } from "@elastic/elasticsearch/api/types";
const prisma = new PrismaClient();


export async function createPrompt(prompt: CreatePromptRequest): Promise<Prompt> {
	const res = await prisma.prompt.create({data: prompt})
	console.log(`CreatePrompt result: ${JSON.stringify(res)}`)
	return res
}

export async function getPrompt(id: integer): Promise<Prompt> {
	const res = await prisma.prompt.findUnique({where: {id: id}})
	console.log(`GetPrompt result: ${JSON.stringify(res)}`)
	return res
}