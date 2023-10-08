import { test } from 'bun:test';

async function testCreatePrompt() {
	const res = await fetch('http://localhost:3000/prompts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			text: 'Hello {{name}}',
			desc: 'Hello world prompt',
			params: [{
				name: 'name',
				type: 'string',
			}]
		}),
	});
	const body = await res.text();
	console.log(`Insert response: ${JSON.stringify(body)}`);
}

async function testSearchPrompt() {
	const res = await fetch('http://localhost:3000/prompts/find', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: 'Hello',
			offset: 0,
			page_size: 2,
		}),
	});
	const body = await res.text();
	console.log(`Search result: ${JSON.stringify(body)}`);
}

async function testUsePrompt() {
	const res = await fetch('http://localhost:3000/prompts/use', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			id: 6,
			params: [{
				name: 'name',
				value: 'tester',
			}],
		}),
	});
	const body = await res.text();
	console.log(`UsePrompt result: ${JSON.stringify(body)}`);
}

await testCreatePrompt()
await testSearchPrompt()
await testUsePrompt()