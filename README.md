# 用于 i18n excel <-> json 转换的工具库

## 安装

```bash
pnpm install xdrc-translation-plus -D
```

## 使用

### xlsx 转 json
*json.js*
```js
import { runXlsxToJson } from "xdrc-translation"
import path from "path"

runXlsxToJson({
	filePath: path.resolve(__dirname, "./file/your.xlsx"), // xlsx 文件目录
	output: path.resolve(__dirname, "./output") // 输出文件目录
})
```

### json 转 xlsx

#### 翻译文件目录结构
```text
example/
└── language/
    ├── de.ts
    ├── en.ts
    ├── es.ts
    ├── fr.ts
    ├── id.ts
    ├── ja.ts
    ├── ko.ts
    ├── pt.ts
    ├── vi.ts
    ├── zh-Hant.ts
    └── zh.ts
```

#### 示例代码

*xlsx.js*
```js
import { runJsonToXlsx } from "xdrc-translation"
import path from "path"

const defaultTitle = {
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
	filePath: path.resolve(__dirname, "./file/language"), // 翻译文件目录：例：../locales/language
	outPath: path.resolve(__dirname, "./output/language.xlsx"), // 输出文件目录：例：../output/language.xlsx
	title: defaultTitle // Excel第一行标题：例：{ key: "语言", zh: "中文" }
})
```


### package.json 配置使用
```text
"xlsx": "node example/src/xlsx.js",
"json": "node example/src/json.js",
<!-- 如果是ts文件，可以使用ts-node 运行 -->
```

## 运行
```bash
# xlsx 转 json
pnpm run json
# json 转 xlsx
pnpm run xlsx
```