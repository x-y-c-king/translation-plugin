import feedGuideTitle from "@/assets/images/tw/feed_guildline_head.png"
import shareImg from "@/assets/images/tw/phb_fx_icon.png"
import ruleImg from "@/assets/images/tw/phb_hdsm_icon.png"
import shareBg from "@/assets/images/tw/phb_sj_bigbg_img.png"
import empty from "@/assets/images/tw/phb_wjl_img.png"
import timeRank from "@/assets/images/tw/phb_csb_banner_img.png"
import speedRank from "@/assets/images/tw/phb_banner_img.png"
import reviceImg from "@/assets/images/tw/receive_icon.png"

export default {
	btnConfirm: "確認",
	feedGuide: {
		title: feedGuideTitle
	},
	// 外出记录
	outgoingRecord: {
		title: "记录",
		tips: "没有更多了",
		loading: "加載中",
		outReward: "外出獎勵",
		growthRate: "成長值",
		lockStory: "解鎖故事",
		affection: "好感值"
	},
	// 外出故事
	petStory: {
		title: "故事",
		empty: "暫無數據...",
		loading: "加載中...",
		pop: {
			lock: "解鎖",
			lockNum: "已解鎖<span>{num}</span>次",
			tips: "外出有機會獲取"
		}
	},
	// 宠物信息
	petInfo: {
		title: "寵物資訊",
		info: {
			birthday: "生日",
			age: "年齡",
			tips: "大約再健康餵養<span>{day}</span>天可以成長",
			day: "{day}天",
			year: "{year}年",
			name: "喵喵",
			levelEnd: "當前等級進度已滿",
			maxLevel: "已達目前最高等級"
		},
		affection: {
			label: "對你的好感值",
			tips: "還差<span>{num}</span>好感值可升級",
			btn: "好感獎勵"
		},
		diary: {
			title: "成長日記"
		},
		favorabilityPop: {
			title: "以下方式可以獲得好感值",
			text1: "撫摸寵物",
			text2: "擼貓",
			text3: "洗澡",
			text4: "外出隨機獲得"
		},
		levelPop: {
			title: "保持寵物健康，寵物就會\n持續獲得成長值哦~",
			tips: "大約再健康餵養<span>{day}</span>天可以成長為下一個形態"
		},
		namePop: {
			title: "修改暱稱",
			confirm: "確定",
			cancel: "再想想",
			placeholder: "請輸入暱稱，最長6个字"
		}
	},
	// 宠物奖励
	petAward: {
		reviceImg,
		title: "好感獎勵",
		affection: {
			title: "還差<span>{num}</span>好感值可升級",
			tips: "如何獲得好感值？"
		},
		stageHead: "寵物新動作",
		stageGoods: {
			title: "會員額外獎勵",
			tips: "開通會員領取的獎勵"
		},
		btnList: {
			btn1: "暫未達到該等級",
			btn2: "已領取全部獎勵",
			btn3: "開通會員領取的獎勵",
			btn4: "領取獎勵"
		}
	},
	// 撸猫排行榜
	catStrokeRank: {
		shareImg,
		ruleImg,
		shareBg,
		empty,
		timeRank,
		speedRank,
		rule: [
			"1.擼貓排行榜每週一0點更新一次。",
			"2.擼貓結果為舒適才會統計到排行榜中。",
			"3.擼貓排行榜如果數值相同的用戶，排名以時間順序為準。",
			"4.擼貓排行榜只展示前100名。",
			"5.如有疑問，可打開個人中心/我的-意見反饋，輸入你的問題就行了~"
		],
		tab1: "擼貓手速榜",
		tab2: "擼貓次數榜",
		speed: "速度：{speed}s",
		count: "{num}次",
		tips: "後面不好意思露面呢~",
		share: {
			title1: "擼貓手速",
			title2: "擼貓次數",
			tips: "戰勝鏟屎官"
		},
		goCat: "去擼貓",
		vtInst: "活動說明"
	},
	month_array: [
		"1月",
		"2月",
		"3月",
		"4月",
		"5月",
		"6月",
		"7月",
		"8月",
		"9月",
		"10月",
		"11月",
		"12月"
	],
	"newpet_how_to_address_you": "你叫什麼名字",
  "newpet_call_partner_nickname": "如何稱呼【另一半昵稱】",
  "newpet_enter_key_sequence": "請輸入...",
  "newpet_nickname": "暱稱",
  "newpet_age": "年齡",
  "newpet_personality": "性格",
  "newpet_growth_progress_tracking": "距離下一個等級還差<span>{num}</span>成長值",
  "newpet_growth_gift_pack": "成長禮包",
  "newpet_pet_preference_user_specific": "{petname}似乎更喜歡{username}一些哦~",
  "newpet_saved_successfully": "儲存成功",
  "newpet_save": "儲存",
  "newpet_cat_care_affection_game": "照顧貓以獲得好感值，誰照顧更多，就更偏向誰！",
  "newpet_reward_system": "獎勵",
  "newpet_unlock_moves": "解鎖新動作",
  "newpet_receive": "領取",
  "newpet_received": "已領取",
  "newpet_locked": "未解鎖",
  "newpet_claimed_by_partner": "已被另一半領取",
  "newpet_pet_level": "寵物等級",
	"newpet_claimed_successfully": '領取成功',
	 "pet_FeedingGuide_pet_base_stats": "宠物的基础数值",
  "pet_FeedingGuide_how_to_increase": "如何增加饱腹值/心情值/清洁值",
  "pet_FeedingGuide_growth_value_explanation": "什麼是成長值？",
  "pet_FeedingGuide_affection_value_usage": "好感值有什么用？",
  "pet_FeedingGuide_community_takeover_explanation": "社區接管是什麼？",
  "pet_FeedingGuide_other_questions_feedback": "有其他疑問&意見？",
  "pet_FeedingGuide_pet_props_interaction_effects": "透過對寵物使用食物道具、玩具道具或清潔道具，就能提升牠們的飽足感/心情值/整潔度哦！",
  "pet_FeedingGuide_pet_growth_upgrade": "\"成長值達到一定階段，寵物就會升級哦~寵物升級會有額外的等級禮包。\n當寵物保持健康時，會持續地獲得成長值。\n一些道具也會提供成長值哦~\"",
  "pet_FeedingGuide_83bbcd7e": "更高的好感值，意味着你在和宠物互动时，它会给你更丰富的动作反馈哦~",
  "pet_FeedingGuide_pet_custody_fee_reclaim": "当宠物长期未获得照顾时，会被couple2社区接管，主人需要通过支付托管费来接回宠物哦~",
  "pet_FeedingGuide_user_feedback_center": "是的，如果你有其他疑问，欢迎你到用户反馈中心联系我们！",
	 "pet_set_name_failed_toast": "最多16字符",
  "pet_FeedingGuide_pet_health_values_tracker": "宠物想要保持健康的成長需要維持飽腹值、心情值和清潔值的健康哦...\n飽腹值/心情值/清潔值每20分鐘會減少1%\n所以要常常關注這些數值，維持它們處於健康水準。",
  "newpet_growth_notice": "{name}的愛沒有偏向，對你們都很依賴哦~"
}
