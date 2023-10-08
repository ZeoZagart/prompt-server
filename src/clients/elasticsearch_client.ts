import { Client } from '@elastic/elasticsearch';
import { Prompt } from '../models/prompts';

const client = new Client({ node: Bun.env.ELASTIC_URL!! });

async function searchPrompt(query: string): Promise<Prompt[]> {
	const res = await client.search({
		index: PromptIndex,
		body: {
			query: {
				match: {
					desc: query
				}
			}
		}
	})
	console.log(`Found ${JSON.stringify(res.body.hits.hits)} prompts matching ${query}`)
	return res.body.hits.hits.map((hit: any) => hit._source)
}

async function insertPrompt(prompt: Prompt): Promise<any> {
	try {
		const res = await client.index({
			body: prompt,
			index: PromptIndex,
			id: prompt.id.toString(),
		})
		console.log(`Inserted prompt ${JSON.stringify(prompt.id)} into ElasticSearch`)
		return res
	} catch (err) {
		console.log(`Error inserting prompt ${JSON.stringify(prompt)} into ElasticSearch: ${err}`)
		return err
	}
}

const PromptIndex = 'prompts';

export { searchPrompt, insertPrompt };
