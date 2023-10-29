import { VariableType } from "./requests/shared";

export type Prompt = {
	id: number;
	desc: string;
	text: string;
	params: PromptParam[];
}

export type PromptParam = {
	name: string;
	type: VariableType;
}

export type PromptParamValue = {
	name: string;
	value: string;
}