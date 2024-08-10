#!/usr/bin/env zx

import { log } from './utils'

log.info('开始执行代码质量评估...\n')

await import('./check').catch((out: string) => {
	log.error(out)
	throw new Error('代码质量评估失败, 请检查代码')
})

log.success('\n检测通过, commit中...\n')
