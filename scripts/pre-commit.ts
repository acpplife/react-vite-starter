#!/usr/bin/env zx

console.log('开始执行代码质量评估...\n')

await import('./check').catch((out) => {
	console.log(out)
	throw new Error('代码质量评估失败, 请检查代码')
})

console.log('\n检测通过, commit中...\n')
