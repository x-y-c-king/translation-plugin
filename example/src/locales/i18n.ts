import { createI18n, I18nOptions } from "vue-i18n"
import { deepMerge } from 'xdrc-translation'

import en from "./language/en"
import ko from "./language/ko"
import tw from "./language/zh-Hant"
import ja from "./language/ja"
import pt from './language/pt'
import de from "./language/de"
import fr from "./language/fr"
import es from "./language/es"
import id from "./language/id"
import vi from "./language/vi"

import enJson from './plugin/json/en.json'
import koJson from './plugin/json/ko.json'
import twJson from './plugin/json/zh-Hant.json'
import jaJson from './plugin/json/ja.json'
import ptJson from './plugin/json/pt.json'
import deJson from './plugin/json/de.json'
import frJson from './plugin/json/fr.json'
import esJson from './plugin/json/es.json'
import idJson from './plugin/json/id.json'
import viJson from './plugin/json/vi.json'

export enum Language {
	en = "en",
	zh = "zh",
	jp = "ja",
	ko = "ko",
	tw = "zh-Hant",
	pt = "pt",
	de = "de",
	fr = "fr",
	es = "es",
	id = "id",
	vi = "vi"
}

const messages = {
	[Language.zh]: deepMerge(enJson, en),
	[Language.en]: deepMerge(enJson, en),
	[Language.jp]: deepMerge(jaJson, ja),
	[Language.ko]: deepMerge(koJson, ko),
	[Language.tw]: deepMerge(twJson, tw),
	[Language.pt]: deepMerge(ptJson, pt),
	[Language.de]: deepMerge(deJson, de),
	[Language.fr]: deepMerge(frJson, fr),
	[Language.es]: deepMerge(esJson, es),
	[Language.id]: deepMerge(idJson, id),
	[Language.vi]: deepMerge(viJson, vi)
} as I18nOptions["messages"]

const i18n = createI18n({
	legacy: false,
	locale: 'en',
	globalInjection: true,
	warnHtmlMessage: false,
	messages
})
export default i18n
