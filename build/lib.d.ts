/**
 * A method of text extraction.
 */
export type InputType = 'buffer';
export type ExtractionPayload = {
    input: Uint8Array;
    mime: string;
};
export type TextExtractionMethod = {
    mimes: string[];
    apply: (_: Uint8Array) => Promise<string>;
};
/**
 * The text extractor class.
 */
export declare class TextExtractor {
    methods: TextExtractionMethod[];
    /**
     * Registers a new method to this instance of the extractor.
     *
     * @param method The method of text extraction to add.
     * @returns The current instance, for method chaining.
     */
    addMethod: (method: TextExtractionMethod) => this;
    /**
     * Extracts text from the given input.
     *
     * @param payload The input and type of input to extract text from.
     * @returns The extracted text as a simple string.
     */
    extractText: ({ input, mime }: ExtractionPayload) => Promise<string>;
}
