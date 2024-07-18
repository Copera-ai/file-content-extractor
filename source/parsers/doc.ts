// source/parsers/docx.ts
// The text extracter for DOCX files.

import { convertToHtml as parseWordFile } from 'mammoth'

import type { TextExtractionMethod } from '../lib.js'

export class DocExtractor implements TextExtractionMethod {
	/**
	 * The type(s) of input acceptable to this method.
	 */
	mimes = [
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	]

	/**
	 * Extract text from a DOCX file if possible.
	 *
	 * @param payload The input and its type.
	 * @returns The text extracted from the input.
	 */
	apply = async (input: Uint8Array): Promise<string> => {
		// Convert the DOCX to text and return the text.
		const parsedDocx = await parseWordFile({
			arrayBuffer: input.buffer,
		})
		return parsedDocx.value
	}
}
