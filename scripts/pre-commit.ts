#!/usr/bin/env zx
import { log } from './utils'

log.info('begin to check code quality...\n')

await import('./check').catch((out: string) => {
	log.error(out)
	throw new Error('Code quality check failed, please check the code')
})

log.success('\nCheck passed, committing...\n')
