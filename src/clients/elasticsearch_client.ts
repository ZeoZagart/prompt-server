import { Client } from '@elastic/elasticsearch';
import { Prompt } from '../models/prompts';
import { SearchPromptRequest, SearchPromptResponse } from '../models/requests';

const client = new Client({ node: Bun.env.ELASTIC_URL!! });

async function searchPrompt(request: SearchPromptRequest): Promise<SearchPromptResponse> {
	const res = await client.search({
		index: PromptIndex,
		body: {
			query: {
				match: {
					desc: request.query,
				}
			},
		},
		size: request.page_size,
		from: request.offset,
	})
	console.log(`Found ${JSON.stringify(res.body.hits.hits)} prompts matching ${request}`)
	const data = res.body.hits.hits.map((hit: any) => hit._source)
	return {
		next_offset: request.offset + data.length,
		prompts: data,
	}
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
