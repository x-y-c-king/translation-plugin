import feedGuideTitle from "@/assets/images/zh/feed_guildline_head.png"
import shareImg from "@/assets/images/zh/phb_fx_icon.png"
import ruleImg from "@/assets/images/zh/phb_hdsm_icon.png"
import shareBg from "@/assets/images/zh/phb_sj_bigbg_img.png"
import empty from "@/assets/images/zh/phb_wjl_img.png"
import timeRank from "@/assets/images/zh/phb_csb_banner_img.png"
import speedRank from "@/assets/images/zh/phb_banner_img.png"
import reviceImg from "@/assets/images/zh/receive_icon.png"

export default {
	btnConfirm: "确认",
	// 喂养指南
	feedGuide: {
		title: feedGuideTitle
	},
	// 外出记录
	outgoingRecord: {
		title: "记录",
		tips: "没有更多了",
		loading: "加载中",
		outReward: "外出奖励",
		growthRate: "成长值",
		lockStory: "解锁故事",
		affection: "好感值"
	},
	// 外出故事
	petStory: {
		title: "故事",
		empty: "暂无数据...",
		loading: "加载中...",
		pop: {
			lock: "解锁",
			lockNum: "解锁次数<span>{times}</span>次",
			tips: "外出有机会获取"
		}
	},
	// 宠物信息
	petInfo: {
		title: "宠物信息",
		info: {
			birthday: "生日",
			age: "年龄",
			tips: "大约再健康喂养<span>{day}</span>天可以成长",
			day: "{day}天",
			year: "{year}年",
			name: "喵喵",
			levelEnd: "当前等级进度已满",
			maxLevel: "已达目前最高等级"
		},
		affection: {
			label: "对你的好感值",
			tips: "还差<span>{num}</span>好感值可升级",
			btn: "好感奖励"
		},
		diary: {
			title: "成长日记"
		},
		favorabilityPop: {
			title: "以下方式可以获得好感值",
			text1: "抚摸宠物",
			text2: "撸猫",
			text3: "洗澡",
			text4: "外出随机获得"
		},
		levelPop: {
			title: "保持宠物健康，宠物就会\n持续获得成长值哦~",
			tips: "大约再健康喂养<span>{day}</span>天可以成长为下一个形态"
		},
		namePop: {
			title: "修改昵称",
			confirm: "确定",
			cancel: "再想想",
			placeholder: "请输入昵称，最长6个字"
		}
	},
	// 宠物奖励
	petAward: {
		reviceImg,
		title: "好感奖励",
		affection: {
			title: "还差<span>{num}</span>好感值可升级",
			tips: "如何获得好感值？"
		},
		stageHead: "宠物新动作",
		stageGoods: {
			title: "会员额外奖励",
			tips: "开通会员后可额外领取的奖励"
		},
		btnList: {
			btn1: "暂未达到该等级",
			btn2: "已领取全部奖励",
			btn3: "开通会员领取额外奖励",
			btn4: "领取奖励"
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
			"1.撸猫排行榜每周一0点更新一次。",
			"2.撸猫结果为舒适才会统计到排行榜中。",
			"3.撸猫排行榜如果数值相同的用户，排名以时间顺序为准。",
			"4.撸猫排行榜只展示前100名。",
			"5.如有疑问，可打开个人中心/我的-意见反馈，输入你的问题就行了~"
		],
		tab1: "撸猫手速榜",
		tab2: "撸猫次数榜",
		speed: "速度：{speed}s",
		count: "{num}次",
		tips: "后面不好意思露面呢~",
		share: {
			title1: "撸猫手速",
			title2: "撸猫次数",
			tips: "战胜铲屎官"
		},
		goCat: "去撸猫",
		vtInst: "活动说明"
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
	 "newpet_how_to_address_you": "如何称呼你",
  "newpet_call_partner_nickname": "如何称呼【另一半昵称】",
  "newpet_enter_key_sequence": "请输入...",
  "newpet_nickname": "昵称",
  "newpet_age": "年龄",
  "newpet_personality": "性格",
  "newpet_growth_progress_tracking": "距离下一等级还差<span>{num}</span>成长值",
  "newpet_growth_gift_pack": "成长礼包",
  "newpet_pet_preference_user_specific": "{petname}似乎更喜欢{username}一些哦~",
  "newpet_saved_successfully": "保存成功",
  "newpet_save": "保存",
  "newpet_cat_care_affection_game": "照顾猫以获得好感值，谁照顾更多，就更偏向谁！",
  "newpet_reward_system": "奖励",
  "newpet_unlock_moves": "解锁新动作",
  "newpet_receive": "领取",
  "newpet_received": "已领取",
  "newpet_locked": "未解锁",
  "newpet_claimed_by_partner": "已被另一半领取",
  "newpet_pet_level": "宠物等级",
	"newpet_claimed_successfully": '领取成功',
	"pet_FeedingGuide_pet_base_stats": "宠物的基础数值",
  "pet_FeedingGuide_how_to_increase": "如何增加饱腹值/心情值/清洁值",
  "pet_FeedingGuide_growth_value_explanation": "什么是成长值？",
  "pet_FeedingGuide_affection_value_usage": "好感值有什么用？",
  "pet_FeedingGuide_community_takeover_explanation": "社区接管是什么？",
  "pet_FeedingGuide_other_questions_feedback": "有其他疑问&意见？",
  "pet_FeedingGuide_pet_props_interaction_effects": "对宠物使用食物道具、玩具道具或者清洁道具就能增加他们的饱腹值/心情值/清洁值啦~",
  "pet_FeedingGuide_pet_growth_upgrade": "成长值达到一定阶段，宠物就会升级哦~宠物升级会有额外的等级礼包。\n当宠物保持健康时，会持续地获得成长值。\n一些道具也会提供成长值哦~",
  "pet_FeedingGuide_83bbcd7e": "更高的好感值，意味着你在和宠物互动时，它会给你更丰富的动作反馈哦~",
  "pet_FeedingGuide_pet_custody_fee_reclaim": "宠物长期未获得照顾时会被couple2社区进行接管，主人需要通过支付托管费接回宠物哦~",
  "pet_FeedingGuide_user_feedback_center": "如果你有其他疑问，欢迎你到用户反馈中心联系我们！",
  "pet_set_name_failed_toast": "最大支持16个字符",
  "pet_FeedingGuide_pet_health_values_tracker": "宠物想要保持健康的成长需要维持饱腹值、心情值和清洁值的健康哦...\n饱腹值/心情值/清洁值每20分钟会减少1%\n所以要常常关注这些数值，维持它们处于健康水准。",
	"newpet_growth_notice": "{name}的爱没有偏向，对你们都很依赖哦~"

}
