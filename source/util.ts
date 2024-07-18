// source/util.ts
// Utility functions to help with the handling of input.

import { got as fetch } from 'got'

export const fetchUrl = async (url: string): Promise<Uint8Array> =>
	fetch(url).buffer()
