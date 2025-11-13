const path = require("path") // "path";
const { runJsonToXlsx } =  require("../../dist/index.js")

const Luanauge = {
	en: "en",
	zh: "zh",
	ja: "ja",
	ko: "ko",
	tw: "zh-Hant",
	pt: "pt",
	de: "de",
	fr: "fr",
	es: "es",
	id: "id",
	vi: "vi"
};

(() => {
	const defaultTitle = {
		key: "语言",
		[Luanauge.zh]: "中文",
		[Luanauge.en]: "英文",
		[Luanauge.tw]: "繁体",
		[Luanauge.ja]: "日文",
		[Luanauge.ko]: "韩文",
		[Luanauge.de]: "德文",
		[Luanauge.es]: "西班牙文",
		[Luanauge.fr]: "法文",
		[Luanauge.id]: "印尼文",
		[Luanauge.pt]: "葡萄牙文",
		[Luanauge.vi]: "越南文"
	}

	const filePath = path.resolve(__dirname, "../language");
	const output = path.resolve(__dirname, "../output/language.xlsx");
	// console.log(output)
	// return
	runJsonToXlsx({
		filePath: filePath,
		outPath: output,
		title: defaultTitle
	})
})()
