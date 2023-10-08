import { test } from 'bun:test';

async function testCreatePrompt() {
	const res = await fetch('http://localhost:3000/prompts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			prompt: 'Hello World',
			desc: 'Hello world prompt',
			params: [{
				name: 'name',
				type: 'string',
			}]
		}),
	});
	const body = await res.text();
	console.log(body);
}

await testCreatePrompt()