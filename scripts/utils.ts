 
import { ProcessOutput } from 'zx/core'

/**
 * Print object to console
 * @param object The object to print
 * @param method The method to use to print the object
 */
export function printObject(
	object: Record<string, unknown> | ProcessOutput,
	method: 'log' | 'warn' | 'error' = 'log'
) {
	for (const [key, value] of Object.entries(object)) {
		log[method as keyof typeof log](`${key}:\n${value}\n`)
	}
}

const colors = {
	blue: '\x1b[34m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	red: '\x1b[31m',
	reset: '\x1b[0m'
}

const logMessage = (color: string, ...message: string[]) => {
	console.log(`${color}${message.join(' ')}${colors.reset}`)
}

export const log = {
	info: (...message: string[]) => logMessage(colors.blue, ...message),
	success: (...message: string[]) => logMessage(colors.green, ...message),
	warn: (...message: string[]) => logMessage(colors.yellow, ...message),
	error: (...message: string[]) => logMessage(colors.red, ...message)
}
