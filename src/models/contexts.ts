import { Variable } from "./requests/shared";

export type Context = {
	id: number;
	name: string;
	description: string;
	script: string;
	scriptEnv: Variable[];
	rawDataLoc: string;
	databaseLoc: string;
}