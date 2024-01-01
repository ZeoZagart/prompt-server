import {GetObjectCommand, PutObjectCommand, S3Client} from "@aws-sdk/client-s3";
import { Credentials } from "aws-sdk";
const script_store_bucket = "script-store-bucket"

const s3client = new S3Client({
	region: Bun.env.SCRIPT_STORE_REGION!!,
	credentials: new Credentials({
		accessKeyId: Bun.env.SCRIPT_STORE_KEY!!,
		secretAccessKey: Bun.env.SCRIPT_STORE_SECRET!!,
	}),
});

export async function storeScript(file: File): Promise<string> {
	const id = crypto.randomUUID();
	const uploadCommand = new PutObjectCommand({
		Bucket: script_store_bucket,
		Key: id,
		Body: file,
	});
	const result = await s3client.send(uploadCommand)
	return id
}

export async function getScript(id: string): Promise<Uint8Array> {
	const downloadCommand = new GetObjectCommand({
		Bucket: script_store_bucket,
		Key: id,
	});
	const result = await s3client.send(downloadCommand)
	return result.Body?.transformToByteArray()!!
}
