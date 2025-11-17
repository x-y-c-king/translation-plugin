import { runJsonToXlsx } from "xdrc-translation"
import { resolve } from "path";

;(() => {
	const title = {
		key: "语言",
		zh: "中文",
		en: "英文",
		"zh-Hant": "繁体",
		ja: "日文",
		ko: "韩文",
		de: "德文",
		es: "西班牙文",
		fr: "法文",
		id: "印尼文",
		pt: "葡萄牙文",
		vi: "越南文"
	}

	runJsonToXlsx({
		filePath: resolve(__dirname, "../language"),
		outPath: resolve(__dirname, "./outout/lang.xlsx"),
		title: title
	})
})()
