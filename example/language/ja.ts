import feedGuideTitle from "@/assets/images/ja/feed_guildline_head.png"
import shareImg from "@/assets/images/ja/phb_fx_icon.png"
import ruleImg from "@/assets/images/ja/phb_hdsm_icon.png"
import shareBg from "@/assets/images/ja/phb_sj_bigbg_img.png"
import empty from "@/assets/images/ja/phb_wjl_img.png"
import timeRank from "@/assets/images/ja/phb_csb_banner_img.png"
import speedRank from "@/assets/images/ja/phb_banner_img.png"
import reviceImg from "@/assets/images/ja/receive_icon.png"

export default {
	btnConfirm: "確認",
	feedGuide: {
		title: feedGuideTitle
	},
	// 外出记录
	outgoingRecord: {
		title: "記録",
		tips: "これ以上ありません",
		loading: "読み込み中",
		outReward: "外出報酬",
		growthRate: "成長値",
		lockStory: "ストーリーをアンロック",
		affection: "好感度"
	},
	// 外出故事
	petStory: {
		title: "物語",
		empty: "データがありません...",
		loading: "読み込み中...",
		pop: {
			lock: "アンロック",
			lockNum: "<span>{num}</span>回アンロックしました",
			tips: "外出中に入手するチャンス"
		}
	},
	// 宠物信息
	petInfo: {
		title: "ペット情報",
		info: {
			birthday: "誕生日",
			age: "年齢",
			tips: "約<span>{day}</span>日間の健康的な飼育で成長できます",
			day: "{day}日",
			year: "{year}年",
			name: "kitty",
			levelEnd: "現在のレベル進捗は満杯です",
			maxLevel: "すでに最高レベルに達しています"
		},
		affection: {
			label: "あなたの好感度",
			tips: "アップグレードにはさらに<span>{num}</span>の好感度が必要です",
			btn: "好感報酬"
		},
		diary: {
			title: "成長日記"
		},
		favorabilityPop: {
			title: "以下の方法で好感度を得ることができます",
			text1: "ペットを撫でる",
			text2: "猫を撫でる",
			text3: "お風呂",
			text4: "外出でランダム取得"
		},
		levelPop: {
			title: "ペットを健康に保てば成長ポイント獲得〜",
			tips: "約<span>{day}</span>日間健康に育てると次の形態に成長します"
		},
		namePop: {
			title: "ニックネーム変更",
			confirm: "確定",
			cancel: "キャンセル",
			placeholder: "ニックネーム入力 (最大6文字)"
		}
	},
	// 宠物奖励
	petAward: {
		reviceImg,
		title: "好感報酬",
		affection: {
			title: "アップグレードにはさらに<span>{num}</span>の好感度が必要です",

			tips: "好感度を得るにはどうすればよいですか？"
		},
		stageHead: "ペットの新しいアクション",
		stageGoods: {
			title: "会員追加報酬",
			tips: "会員登録で受け取る報酬"
		},
		btnList: {
			btn1: "まだそのレベルに達していません",
			btn2: "すべての報酬を受け取りました",
			btn3: "会員登録で受け取る報酬",
			btn4: "報酬を受け取る"
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
			"1. 猫撫ランキングは毎週月曜日の0 時に更新されます。",
			"2. 猫撫結果が快適であれば、ランキングにカウントされます。",
			"3. 猫撫ランキング 同じ数値のユーザーの場合、ランキング時間順に基づく。",
			"4. 猫撫ランキングは上位 100 名のみを表示します。",
			"5.疑問がある場合は、個人センターでフィードバックしてください。"
		],
		tab1: "手速ランキング",
		tab2: "回数ランキング",
		speed: "速度：{speed}s",
		count: "{num}回",
		tips: "後ろで恥ずかしくて顔を出せない",
		share: {
			title1: "猫撫でスピード",
			title2: "猫を撫でた回数",
			tips: "飼い主に勝つ"
		},
		goCat: "猫を撫でに行く",
		vtInst: "イベ説明"
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
	"newpet_how_to_address_you": "どのようにお呼びすればいいですか",
  "newpet_call_partner_nickname": "【パートナーのあだ名】と呼ぶには",
  "newpet_enter_key_sequence": "入力してください...",
  "newpet_nickname": "ニックネーム",
  "newpet_age": "年齢",
  "newpet_personality": "性格",
  "newpet_growth_progress_tracking": "次のレベルまであと<span>{num}</span>の成長値が必要です",
  "newpet_growth_gift_pack": "成長ギフトパック",
  "newpet_pet_preference_user_specific": "{petname}は{username}のことを少し気にかけているようですよ～",
  "newpet_saved_successfully": "保存に成功しました",
  "newpet_save": "保存",
  "newpet_cat_care_affection_game": "猫を世話して好意度を獲得しましょう。誰がより多く世話をするかで、よりその人に懐きます！",
  "newpet_reward_system": "報酬",
  "newpet_unlock_moves": "新しいアクションをアンロックする",
  "newpet_receive": "受け取る",
  "newpet_received": "受け取り済み",
  "newpet_locked": "ロック解除されていません",
  "newpet_claimed_by_partner": "もう一方のユーザーによって受け取られました",
  "newpet_pet_level": "ペットレベル",
	"newpet_claimed_successfully": '受け取り成功',
	"pet_FeedingGuide_pet_base_stats": "ペットの基本ステータス",
  "pet_FeedingGuide_how_to_increase": "満腹度／気分値／清潔度を上げる方法",
  "pet_FeedingGuide_growth_value_explanation": "成長値とは？",
  "pet_FeedingGuide_affection_value_usage": "好感値の用途は何ですか？",
  "pet_FeedingGuide_community_takeover_explanation": "コミュニティ引継ぎとは？",
  "pet_FeedingGuide_other_questions_feedback": "他のご質問やご意見はありますか？",
	"pet_FeedingGuide_pet_props_interaction_effects": "ペットにフードアイテム、おもちゃアイテム、またはクリーニングアイテムを使うと、満腹度／気分値／清潔度がアップしますよ～",
  "pet_FeedingGuide_pet_growth_upgrade": "成長値が一定の段階に達すると、ペットはレベルアップしますよ～！ペットがレベルアップすると、追加のレベルアップボーナスがもらえます。 \nペットが健康な状態を維持していると、継続的に成長値を獲得できます。 \n一部のアイテムも成長値を提供しますよ～！",
  "pet_FeedingGuide_83bbcd7e": "好感度が高くなるほど、ペットと触れ合ったときに、より豊かなアクションで反応してくれますよ～",
  "pet_FeedingGuide_pet_custody_fee_reclaim": "ペットが長期間世話をされないと、couple2コミュニティが引き取ります。飼い主は預かり料金を支払ってペットを引き取る必要がありますよ～",
  "pet_FeedingGuide_user_feedback_center": "ご質問が他にもある場合は、ユーザー反馈センターからお気軽にお問い合わせください！",
	 "pet_set_name_failed_toast": "最大16文字まで",
  "pet_FeedingGuide_pet_health_values_tracker": "ペットが健康的に成長するには、満腹度・気分・清潔度をしっかり維持する必要があります。 \n満腹度／気分／清潔度は20分ごとに1％ずつ減少します。 \nこまめに確認して、常に健康な状態を保ちましょう。",
  "newpet_growth_notice": "{name}の愛は偏っていません、皆さんに頼っていますよ～"


}
