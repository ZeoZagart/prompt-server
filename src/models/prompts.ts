import { Variable } from "./requests/shared";

export type Prompt = {
	id: number;
	desc: string;
	text: string;
	params: Variable[];
}
