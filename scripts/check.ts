import type { ProcessOutput } from 'zx'
import { $ } from 'zx'
import { log, printObject } from './utils'

// check spelling
await $`pnpm spellcheck`.catch((out: ProcessOutput) => {
	log.error('Please fix the spelling errors', out.stdout)
	throw new Error(out.stdout)
})

// check type and stage
await Promise.all([$`pnpm lint:stage`]).catch((out: ProcessOutput) => {
	printObject(out)
	throw new Error(out.stdout)
})
