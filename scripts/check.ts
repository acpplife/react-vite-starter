// #!/usr/bin/env zx
/* eslint-disable no-console */

import type { ProcessOutput } from 'zx'
import { $ } from 'zx'
import { printObject } from './utils'

await $`pnpm spellcheck`.catch((out: ProcessOutput) => {
	console.log(out)
	throw new Error(out.stdout)
})

// check type and stage
await Promise.all([$`pnpm lint:stage`]).catch((out: ProcessOutput) => {
	printObject(out)
	throw new Error(out.stdout)
})
