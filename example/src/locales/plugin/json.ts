import { runXlsxToJson } from "xdrc-translation"
import { resolve } from "path"

;(() => {
	runXlsxToJson({
		filePath: resolve(__dirname, "./outout/lang.xlsx"),
		output: resolve(__dirname, "./json")
	})
})()
