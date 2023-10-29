import { Context } from "../../models/contexts";
import { Variable } from "../../models/requests/shared";
import { prisma } from "./shared";

export async function initContext(ctx: Context): Promise<Context> {
	const res = await prisma.context.create({data: ctx})
	console.log(`InitContext result: ${JSON.stringify(res)}`)
	return {
		...res,
		scriptEnv: res.scriptEnv as Variable[],
	}
}

export async function getContext(id: number): Promise<Context> {
	const res = await prisma.context.findUnique({where: {id: id}})
	console.log(`GetContext result: ${JSON.stringify(res)}`)
	if (res == null) {
		return Promise.reject("Unable to find context")
	}
	return {
		...res,
		scriptEnv: res.scriptEnv as Variable[],
	}
}