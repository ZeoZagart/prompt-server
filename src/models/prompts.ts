export type Prompt = {
	id: number;
	desc: string;
	text: string;
	params: PromptParam[];
}

export type PromptParam = {
	name: string;
	type: EType;
}

export type PromptParamValue = {
	name: string;
	value: string;
}

export enum EType {
	Number = 'number',
	String = 'string',
	Boolean = 'boolean',
}
