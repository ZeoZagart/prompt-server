import {PrismaClient } from "@prisma/client";
import { Prompt } from "../models/prompts";
const prisma = new PrismaClient();


export async function CreatePrompt(prompt: Prompt): Promise<Prompt> {
	return prisma.prompt.create({data: prompt})
}