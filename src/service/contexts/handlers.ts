import { InitContextRequest, InitContextResponse } from "../../models/requests/contexts";

export async function InitContextApi(request: InitContextRequest): Promise<InitContextResponse> {
	console.log(`InitContext: ${JSON.stringify(request)}`)
	


	return Promise.reject("Not implemented")
}