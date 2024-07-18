// source/lib.ts
// The source code for the library.
/**
 * The text extractor class.
 */
export class TextExtractor {
    constructor() {
        // The list of methods supported by this instance of the extractor.
        this.methods = [];
        /**
         * Registers a new method to this instance of the extractor.
         *
         * @param method The method of text extraction to add.
         * @returns The current instance, for method chaining.
         */
        this.addMethod = (method) => {
            this.methods.push(method);
            return this;
        };
        /**
         * Extracts text from the given input.
         *
         * @param payload The input and type of input to extract text from.
         * @returns The extracted text as a simple string.
         */
        this.extractText = async ({ input, mime }) => {
            // Find the extractor that can handle that mime type, and call it.
            const extractor = this.methods.find((method) => method.mimes.includes(mime));
            if (!extractor?.apply) {
                const message = `text-extractor: could not find a method to handle ${mime}`;
                throw new Error(message);
            }
            return extractor.apply(input);
        };
    }
}
