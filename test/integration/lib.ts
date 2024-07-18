// test/integration/lib.ts
// This file contains the integration test for the library.

import { readFileSync, statSync } from 'node:fs'

import test from 'ava'

import { getTextExtractor, type InputType } from '../../source/index.js'
import mime from 'mime' // Import the mime package

const extractor = getTextExtractor()

const macro = test.macro(
	async (t, input: Uint8Array, mime: string, expected: string | Buffer) => {
		const text = await extractor.extractText({ input, mime })

		console.log('----> Extracted text', text)
		t.is(typeof text, 'string')
		t.is(text, expected.toString())
	},
)

// for (const fileType of ['pdf', 'txt', 'docx', 'pptx', 'xlsx']) {
for (const fileType of ['xlsx']) {
	const filePath = `./test/fixtures/docs/${fileType}.${fileType}`
	const fileContent = readFileSync(`./test/fixtures/texts/${fileType}.txt`)

	const fileBuffer = readFileSync(filePath)
	const int8Array = new Uint8Array(
		fileBuffer.buffer,
		fileBuffer.byteOffset,
		fileBuffer.byteLength,
	)

	const fileMime = mime.getType(filePath) || 'application/octet-stream'

	test(`${fileType} (file)`, macro, int8Array, fileMime, fileContent)
}
