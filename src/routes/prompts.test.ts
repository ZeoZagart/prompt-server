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
			params: []
		}),
	});
	const body = await res.json();
	console.log(body);
}

test('create prompt', testCreatePrompt)