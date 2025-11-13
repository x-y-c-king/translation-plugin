import { fit } from "./utils"
import fs from "fs"
import path from "path"
import { utils, write } from "xlsx"

/**
 * 从 .ts 文件内容中提取导出的翻译 JSON
 * @param content .ts 文件内容
 */
function extractTranslationJson(content: string): Record<string, any> | null {
	let constStr = ""
	let isStart = false
	const cleanedContent = content
		.split("\n")
		.map((line) => {
			const importMatch = line.match(/import\s+(\w+)\s+from\s+['"](.*?)['"]/)
			if (importMatch) {
				constStr += `const ${importMatch[1]} = "${importMatch[2]}";\n`
				return ""
			}

			const isExportDefault = line.match(/export\s+default\s+/)
			if (isExportDefault) {
				isStart = true
				return line.replace(/export\s+default\s+/, "")
			}

			return isStart ? line.trim() : ""
		})
		.filter((line) => !!line.trim())
		.join("\n")

	try {
		return new Function(`${constStr}return ${cleanedContent}`)()
	} catch (err) {
		console.warn("解析翻译文件失败:", err)
	}
	return null
}

/**
 * 加载所有语言文件并返回一个对象，其中包含每种语言的翻译数据。
 */
function loadLanguages(filePath: string) {
	const files = fs.readdirSync(filePath, { withFileTypes: true })
	const result: Record<string, any> = {}

	for (const file of files) {
		const fullPath = path.join(filePath, file.name)

		const content = fs.readFileSync(fullPath, "utf-8")
		const translation = extractTranslationJson(content)

		// 取文件名当key
		const fileName = file.name.split(".").shift() || ""
		result[fileName] = fit(translation || {})
	}

	return result
}

const objToArray = (obj: Record<string, { key: string; value: string }[]>) => {
	const ans: any = {}
	Object.entries(obj).forEach(([lang, data]) => {
		data.forEach((item) => {
			if (!Reflect.has(ans, item.key)) {
				ans[item.key] = { [lang]: item.value, key: item.key }
			} else {
				ans[item.key][lang] = item.value
			}
		})
	})

	return ans
}

const createFile = (headers: string[], list: any[], fileName: string) => {
	const data = utils.json_to_sheet(list, { header: headers })
	// 创建工作簿
	const wb = utils.book_new()
	// 将工作表放入工作簿中
	utils.book_append_sheet(wb, data, "data")
	// 生成文件并下载

	const excelBuffer = write(wb, { type: "buffer", bookType: "xlsx" })

	const dirPath = path.dirname(fileName)

	// 检查目录是否存在，不存在则创建（递归创建多级目录）
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true }) // recursive: true 支持创建多级目录
	}

	fs.writeFileSync(fileName, excelBuffer)
}

export type Options = {
	filePath: string // 翻译文件文件目录：例：../locales/language
	outPath: string // 输出文件目录：例：../output/language.xlsx
	title?: Record<string, string> // Excel第一行标题：例：{ key: "语言", zh: "中文" }
}

export const runJsonToXlsx = ({ filePath, outPath, title }: Options) => {
	console.time("init json to xlsx")
	const langs = loadLanguages(path.resolve(__dirname, filePath))
	const defaultTitle = Object.keys(langs)
	const ans = Object.values(objToArray(langs))
	const headers = title ? Object.keys(title) : defaultTitle

	if (title) {
		ans.unshift(title)
	}

	createFile(headers, ans, outPath)
	console.timeEnd("init json to xlsx")
}

// // export const defaultTitle = {
// // 	key: "语言",
// // 	[Luanauge.zh]: "中文",
// // 	[Luanauge.en]: "英文",
// // 	[Luanauge.tw]: "繁体",
// // 	[Luanauge.ja]: "日文",
// // 	[Luanauge.ko]: "韩文",
// // 	[Luanauge.de]: "德文",
// // 	[Luanauge.es]: "西班牙文",
// // 	[Luanauge.fr]: "法文",
// // 	[Luanauge.id]: "印尼文",
// // 	[Luanauge.pt]: "葡萄牙文",
// // 	[Luanauge.vi]: "越南文"
// // }
