import fs from "fs"
import path from "path"
import { read, utils } from "xlsx"

const cReadFile = (filePath: string): any[] => {
	try {
		const fileBuffer = fs.readFileSync(filePath)

		const workbook = read(fileBuffer, { type: "buffer", raw: false })
		const sheetName = workbook.SheetNames[0]
		const workSheet = workbook.Sheets[sheetName]

		const data: any[] = utils.sheet_to_json(workSheet)

		const headers = Object.keys(data[0])

		return data.slice(1).map((item: any) => {
			const keys = Object.keys(item)
			const ans = { ...item }

			// 处理缺失字段问题
			headers.forEach((key) => {
				if (!keys.includes(key)) {
					ans[key] = ""
				}
			})

			ans["en"] = ans["en"] || ans["en_old"] || ""

			// 处理英文校对问题
			if (Reflect.has(ans, "en_old")) {
				Reflect.deleteProperty(ans, "en_old")
			}
			return ans
		})
	} catch (e) {
		return []
	}
}

const setJsonValue = (json: any, keys: any[], value: string | number) => {
	const key = keys.shift()

	if (!key) return

	if (keys.length === 0) {
		if (Array.isArray(json)) {
			json.push(value)
		} else {
			Reflect.set(json, key, value)
		}
		return
	}

	if (!Reflect.has(json, key)) {
		if (keys[0] == 0) {
			Reflect.set(json, key, [])
		} else {
			Reflect.set(json, key, {})
		}
	}

	setJsonValue(json[key], keys, value)
}

const formatData = (dataList: any[]) => {
	const result: any = {}

	dataList.forEach((item: { [name: string]: string | number }) => {
		const key = item.key as string

		Object.entries(item).forEach(([lang, value]) => {
			if (lang !== "key") {
				if (!Reflect.has(result, lang)) {
					result[lang] = {}
				}

				setJsonValue(result[lang], key.split("."), value)
			}
		})
	})

	return result
}

/**
 * 确保目录存在，不存在则创建
 * @param {string} dirPath - 目录路径
 */
function ensureDirectoryExistence(dirPath: string) {
	if (!fs.existsSync(dirPath)) {
		// 递归创建目录（mode: 0o777 表示权限，默认即可）
		fs.mkdirSync(dirPath, { recursive: true })
	}
}

/**
 * 写入文件（自动创建不存在的文件夹）
 * @param {string} filePath - 文件完整路径
 * @param {string|Buffer} content - 要写入的内容
 */
function writeFileWithDir(filePath: string, content: any) {
	// 提取文件所在的目录路径
	const dirPath = path.dirname(filePath)
	// 确保目录存在
	ensureDirectoryExistence(dirPath)
	// 写入文件
	fs.writeFileSync(filePath, content)
}

/**
 * filePath xlsx 文件目录
 *  output 输入文件目录
 */
export type Options = { filePath: string; output: string }

export const runXlsxToJson = ({ filePath, output }: Options) => {
	console.time("init json to xlsx")
	const dataList = cReadFile(filePath)
	const data = formatData(dataList)
	Object.entries(data).forEach(([lang, data]) => {
		writeFileWithDir(path.join(output, `${lang}.json`), JSON.stringify(data, null, 2))
	})
	console.timeEnd("init json to xlsx")
}
