import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: Bun.env.OPENAI_API_KEY,
});

export async function respond(prompt: string): Promise<string> {
	const result = await openai.chat.completions.create({
		model: 'gpt-3.5-turbo',
		messages: [{
			role: 'user',
			content: prompt,
		}],
		stop: ["\n", " Human:", " AI:"],
	})
	return result.choices[0].message.content!!
}