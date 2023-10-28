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


## Design:

### Overview of the system usage:
1. Creation, search and usage of Prompts
2. Creation, lookup and storage of context databases

### Creation and search of Prompts:
1. Prompts have the following properties:
   -  Prompt text
   - Prompt description
   - Prompt parameters (a list of {name, value} struct)
   - context database reference
2. The prompts are stored in Postgres, with the params stored as a JSONB field.
3. The prompts are searched using ElasticSearch using the description field


### Creation and storage of context databases
Summary: 
1. A database table indexing all the context databases
2. All the actual context databases
Each prompt can have context data associated with it. This data is referred when a query is made to the prompt.

#### Example usage story of context data:
```
1. A customer built a lawyer support help. 
2. Any questions asked by a lawyer needs to come from the law books. 
3. The law books are the context in this case.
4. So when a query comes, the law books are searched for answers, instead of the existing knowledge of the LLM.
5. The source of information then also be referred in the response.
```

#### The context data for the prompt can come from very different kinds of places. Examples: 
```
1. User uploaded text data in form of PDF, doc files, text files etc. Ex: medical, law, engineering books etc.
2. Scraping websites. Ex: news websites, wikipedia etc.
3. S3 file store containing PDF, text, docx, html pages etc kinds of text files.
4. Google drive of a company containing google docs
5. Codebase on Github
6. Slack messages of the company slack
```

#### How do we store this data for usage in prompt queries?

We create vector databases for storing this data.The vector databases store the vector and the metadata to retrive the sources. 

The vectorDatabases - in our case called context database exists independently of the prompt. This means more than 1 prompt can use the context database. 

**LATER:** A prompt can also choose which context database to use during prompt-usage.

#### How do we create vector databases?
Vector databases are created using the following ways:

**Method 1:** Use script to fetch data from api and store in vectorDB:
```
1. Reads environment variables: api endpoint, urls, last-data-fetch-time
2. Makes api call to get all the data after last-data-fetch-time
3. Uses already available vectorizer function to break data into vectors
4. Uses already available store data function to store data into vectorDB with additional metadata.
```


**Method 2:** Provide S3 storage for users to upload reference files and store in vectorDB:
```
1. Provide add data function to add data to vectorDB
2. Store the reference files in S3
3. Run S3 syncronizer script to automatically fetch new data and update vector database
```

### Context database design
Database will contain the following fields:
1. id
2. environment variables: a json object
3. script: a reference to simple python3 code script stored in our S3 bucket with env variables inserted
   - **Future:** users can build an image locally and push it to our ECR which can used to create vectorDB.
4. vectorDB reference
5. S3 bucket for reference files
6. Name and Description

### Usage of Context database in prompt
1. Prompt can be told to use a particular context database using id field
2. Api to fetch data from contextDB using text query

