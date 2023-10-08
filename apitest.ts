import { test } from 'bun:test';

async function testCreatePrompt() {
	const res = await fetch('http://localhost:3000/prompts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			text: 'Hello World',
			desc: 'Hello world prompt',
			params: [{
				name: 'name',
				type: 'string',
			}]
		}),
	});
	const body = await res.json();
	console.log(`Insert response: ${JSON.stringify(body)}`);
}

async function testSearchPrompt() {
	const res = await fetch('http://localhost:3000/prompts/find', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: 'Hello World',
		}),
	});
	const body = await res.json();
	console.log(`Search result: ${JSON.stringify(body)}`);
}

await testCreatePrompt()
await testSearchPrompt()