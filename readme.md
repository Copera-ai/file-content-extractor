# <div align="center"> file-content-extractor </div>

<div align="center">

yet another library to extract text from docx, pptx, xlsx, and pdf files.

</div>

## similar libraries

there are other great libraries that do the same job and have inspired this
project, such as:

- [`any-text`](https://github.com/abhinaba-ghosh/any-text)
- [`officeparser`](https://github.com/harshankur/officeParser)
- [`textract`](https://www.npmjs.com/package/textract)

however, office-text-extractor has the following differences:

- parses file based on its **mime type**, not its file extension.
- **does not spawn** a child process to use a tool installed on the device.
- reads and returns text from the file if it contains **plain text**.

## libraries used

this package uses some amazing existing libraries that perform better than the
ones that originally existed in this module, and are therefore used instead:

- [`pdf-parse`](https://www.npmjs.com/package/pdf-parse), for parsing pdf files
- [`xlsx`](https://www.npmjs.com/package/xlsx), for parsing xlsx files
- [`mammoth`](https://www.npmjs.com/package/mammoth), for parsing docx files

a big thank you to the contributors of these projects!

## installation

#### node

> from version 2.0.0 onwards, this package is pure esm. please read
> [this article](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
> for a guide on how to ensure your project can import this library.

to use office-text-extractor in an Node project, install it using `npm`/`pnpm`/`yarn`:

```sh
> npm install office-text-extractor
> pnpm add office-text-extractor
> yarn add office-text-extractor
```

#### ~browser~

the library currently cannot be used in the browser due to its usage of the `node:buffer`
library. pull requests that can replace `node:buffer` with a different library are welcome!

## usage NodeJS

an example of using the library to extract text is as follows:

```ts
import { getTextExtractor } from 'file-content-extractor'

// this function returns a new instance of the `TextExtractor` class, with the default
// extraction methods (docx, pptx, xlsx, pdf) registered.
const extractor = getTextExtractor()

// extract text from a url, because that's a neat first example :p
const url = 'https://raw.githubusercontent.com/Copera-ai/file-content-extractor/main/test/fixtures/texts/txt.txt'

// fetch file 
const fileResponse = await fetch(url)
const buffer = await fileResponse.arrayBuffer();

// convert content to a Uint8Array
const int8Array = new Uint8Array(
  fileBuffer.buffer,
  fileBuffer.byteOffset,
  fileBuffer.byteLength,
)
const text = await extractor.extractText({ input: int8Array, mime: 'text/plain' })

console.log(text)
```

# usage Browser

an example of using the library to extract text is as follows:

```ts
import { getTextExtractor } from 'file-content-extractor';

const reader = new FileReader();

reader.onload = async (loadEvent) => {
    if (!(loadEvent?.target?.result instanceof ArrayBuffer)) return
  
  const arrayBuffer = loadEvent.target.result;
  const uint8Array = new Uint8Array(arrayBuffer);
  
  const text = await textExtractor.extractText({
    input: uint8Array,
    mime: file.type,
  });
  console.log(text)
};

reader.readAsArrayBuffer(file);
```

## license

this project is licensed under the ISC license. please see [`license.md`](./license.md)
for more details.
