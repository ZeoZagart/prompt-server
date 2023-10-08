export type Prompt = {
	id?: number;
	desc: string;
	text: string;
	params: PromptParam[];
}

export type PromptParam = {
	name: string;
	type: EType;
}

export enum EType {
	Number = 'number',
	String = 'string',
	Boolean = 'boolean',
}
