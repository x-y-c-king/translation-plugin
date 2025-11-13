// 判断是否是对象
export function isObject(value: any) {
	return Object.prototype.toString.call(value) === "[object Object]"
}

// 将对象扁平化处理，返回一个数组
export const fit = (data: any, path = "") => {
	const result = []
	if (isObject(data)) {
		Object.entries(data).map(([key, value]) => {
			const pathKey = path ? `${path}.${key}` : key

			result.push(...fit(value, pathKey))
		})
	} else if (Array.isArray(data)) {
		data.forEach((item, index) => {
			result.push(...fit(item, `${path}.${index}`))
		})
	} else {
		result.push({ key: path, value: data })
	}

	return result
}
