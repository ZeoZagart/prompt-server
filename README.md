# PromptServer

## Setup
```
1. bun install
2. docker-compose up
3. bun prisma migrate
```

## Development
To start the development server run:
```bash
bun run dev
```


## Testing
```
1. bun dev
2. bun apitest.ts
```

### Common errors:

Invalid `prisma.prompt.create()` invocation in `async function CreatePrompt(prompt: CreatePromptRequest): Promise<Prompt>`. The table `public.Prompt` does not exist in the current database.
> This happens because prisma needs the database tables to exist before the client can insert. To fix this, run `bun prisma migrate reset` to create the tables in the database.


