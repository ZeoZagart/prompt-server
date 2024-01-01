import { InitContextRequest, InitContextResponse } from "../../models/requests/contexts";
import {storeScript} from "../../clients/storage/script_store";

export async function InitContextApi(request: InitContextRequest): Promise<InitContextResponse> {
	console.log(`InitContext: ${JSON.stringify(request)}`)
	const scriptId = await storeScript(request.script)
	console.log(`InitContext: scriptId: ${scriptId}`)
	const response: InitContextResponse = {


	return Promise.reject("Not implemented")
}
