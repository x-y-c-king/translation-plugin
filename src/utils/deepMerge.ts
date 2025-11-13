import { isObject } from './utils'

type MergeArrayCallback = (targetArr: any[], sourceArr: any[]) => any[]

type R = Record<string, any>

export const deepMerge = <T extends R, S extends R>(
	target: T,
	source: S,
	mergeArray?: MergeArrayCallback
): T & S => {
	const merged: R = { ...target }

	// 处理字符串键
	for (const key in source) {
		if (source.hasOwnProperty(key)) {
			const targetValue = merged[key]
			const sourceValue = source[key]

			if (Array.isArray(sourceValue)) {
				merged[key] = mergeArray
					? mergeArray(Array.isArray(targetValue) ? targetValue : [], sourceValue)
					: sourceValue
			} else if (isObject(sourceValue)) {
				merged[key] = deepMerge(isObject(targetValue) ? targetValue : {}, sourceValue, mergeArray)
			} else {
				merged[key] = sourceValue
			}

			if (source[key] && isObject(source[key]) && !Array.isArray(source[key])) {
				if (!merged[key] || !isObject(merged[key]) || Array.isArray(merged[key])) {
					merged[key] = {}
				}

				merged[key] = deepMerge(merged[key], source[key])
			} else {
				merged[key] = source[key]
			}
		}
	}

	return merged as T & S
}
