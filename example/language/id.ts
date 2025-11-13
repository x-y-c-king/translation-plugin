import feedGuideTitle from "@/assets/images/id/feed_guildline_head.png"
import shareImg from "@/assets/images/id/phb_fx_icon.png"
import ruleImg from "@/assets/images/id/phb_hdsm_icon.png"
import shareBg from "@/assets/images/id/phb_sj_bigbg_img.png"
import empty from "@/assets/images/id/phb_wjl_img.png"
import timeRank from "@/assets/images/id/phb_csb_banner_img.png"
import speedRank from "@/assets/images/id/phb_banner_img.png"
import reviceImg from "@/assets/images/id/receive_icon.png"

export default {
	btnConfirm: "Konfirm",
	feedGuide: {
		title: feedGuideTitle
	},
	outgoingRecord: {
		title: "Rekam",
		tips: "Tak lagi",
		loading: "Memuat",
		outReward: "Hadiah Perjalanan",
		growthRate: "Pertumbuhan",
		lockStory: "Buka cerita baru",
		affection: "Kasih"
	},
	petStory: {
		title: "Cerita",
		empty: "Tidak ada data tersedia...",
		loading: "Memuat...",
		pop: {
			lock: "Buka",
			lockNum: "Terbuka <span>{num}</span> kali",
			tips: "Peluang dapat saat keluar"
		}
	},
	petInfo: {
		title: "Info Hewan",
		info: {
			birthday: "Ulang tahun",
			age: "Usia",
			tips: `Akan tumbuh setelah <span>{day}</span> hari pakan sehat.`,
			// tips: "<span>{day}</span> hari tersisa untuk pemberian makan sehat untuk pertumbuhan",
			day: "{day}hari",
			year: "{year}tahun",
			name: "kucing",
			levelEnd: "Progres level saat ini penuh",
			maxLevel: "Sudah capai level tertinggi"
		},
		affection: {
			label: "Nilai Afeksi",
			tips: "<span>{num}</span> Nilai Kasih untuk naik level",
			btn: "Hadiah"
		},
		diary: {
			title: "Buku Harian Tumbuh"
		},
		favorabilityPop: {
			title: "Nilai Afeksi dapat ditingkatkan melalui",
			text1: "Mengelus",
			text2: "Menggosok",
			text3: "Mandi",
			text4: "acak"
		},
		levelPop: {
			title: "Jaga kesehatan hewan peliharaanmu untuk dapatkan poin pertumbuhan!",
			tips: "<span>{day}</span> hari tersisa untuk pemberian makan sehat untuk morfologi yang ditingkatkan berikutnya"
		},
		namePop: {
			title: "Edit Nama Panggilan",
			confirm: "Konfirm",
			cancel: "Batal",
			placeholder: "maks 12 karakter"
		}
	},
	petAward: {
		reviceImg,
		title: "Hadiah Kasih Sayang",
		affection: {
			title: "<span>{num}</span> nilai kasih untuk naik level",
			tips: "Cara tingkatkan Nilai Afeksi?"
		},
		stageHead: "Aksi Baru Hewan Peliharaan",
		stageGoods: {
			title: "VIP Bonus Ekstra",
			tips: "Hadiah aktivasi keanggotaan"
		},
		btnList: {
			btn1: "Level belum tercapai",
			btn2: "Semua hadiah diklaim",
			btn3: "Hadiah aktivasi keanggotaan",
			btn4: "Klaim Hadiah"
		}
	},
	catStrokeRank: {
		shareImg,
		ruleImg,
		shareBg,
		empty,
		timeRank,
		speedRank,
		rule: [
			"Papan Peringkat Petting Kucing diperbarui setiap Senin pukul 0:00.",
			"2. Hasil membelai kucing adalah kenyamanan, yang akan dihitung di papan peringkat.",
			"3. Jika nilai pengguna sama, peringkat akan diurutkan secara kronologis.",
			"Peringkat hanya menampilkan 100 teratas.",
			"5. Jika ada pertanyaan, beri umpan balik di pusat pribadi."
		],
		tab1: "CEPAT",
		tab2: "KALI",
		speed: "Kecepatan: {speed}s",
		count: "{num} kali",
		tips: "Terlalu malu untuk muncul nanti~",
		share: {
			title1: "Kecepatan membelai kucing",
			title2: "waktu elus kucing",
			tips: "Kalahkan Pemilik Kucing"
		},
		goCat: "Pergi elus kucing.",
		vtInst: "Deskripsi Aktivitas"
	},
	month_array: [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"Mei",
		"Jun",
		"Juli",
		"Agt",
		"Sept",
		"Okt",
		"Nov",
		"Des"
	],
	"newpet_how_to_address_you": "Bagaimana cara memanggilmu",
  "newpet_call_partner_nickname": "Bagaimana memanggil 【Nama Panggilan Pasangan】",
  "newpet_enter_key_sequence": "Silakan masukkan...",
  "newpet_nickname": "Nama panggilan",
  "newpet_age": "Usia",
  "newpet_personality": "Kepribadian",
  "newpet_growth_progress_tracking": "Masih kurang <span>{num}</span> poin pertumbuhan untuk naik level berikutnya",
  "newpet_growth_gift_pack": "Paket Pertumbuhan",
  "newpet_pet_preference_user_specific": "{petname} sepertinya lebih menyukai {username}~",
  "newpet_saved_successfully": "Berhasil disimpan",
  "newpet_save": "Simpan",
  "newpet_cat_care_affection_game": "Merawat kucing untuk mendapatkan poin kebaikan, siapa yang merawat lebih banyak, maka kucing akan lebih condong padanya!",
  "newpet_reward_system": "Hadiah",
  "newpet_unlock_moves": "Buka kunci gerakan baru",
  "newpet_receive": "Terima",
  "newpet_received": "Sudah Diambil",
  "newpet_locked": "Tidak terkunci",
  "newpet_claimed_by_partner": "Sudah diambil oleh pasangan",
  "newpet_pet_level": "Tingkat hewan peliharaan",
	"newpet_claimed_successfully": 'Berhasil menerima',
	"pet_FeedingGuide_pet_base_stats": "Stat dasar hewan peliharaan",
  "pet_FeedingGuide_how_to_increase": "Cara meningkatkan nilai kenyang/mood/kebersihan",
  "pet_FeedingGuide_growth_value_explanation": "Apa itu Poin Pertumbuhan?",
  "pet_FeedingGuide_affection_value_usage": "Apa gunanya nilai afinitas?",
  "pet_FeedingGuide_community_takeover_explanation": "Apa itu pengambilalihan komunitas?",
  "pet_FeedingGuide_other_questions_feedback": "Ada pertanyaan atau saran lain?",
  "pet_FeedingGuide_pet_props_interaction_effects": "Gunakan item makanan, mainan, atau pembersih pada hewan peliharaan untuk meningkatkan nilai kenyang/mood/kebersihan mereka~",
  "pet_FeedingGuide_pet_growth_upgrade": "Saat nilai pertumbuhan mencapai tahap tertentu, hewan peliharaan akan naik level~ Naik level memberikan hadiah tambahan. \nHewan peliharaan akan terus mendapatkan nilai pertumbuhan selama dalam kondisi sehat. \nBeberapa item juga memberikan nilai pertumbuhan~",
  "pet_FeedingGuide_83bbcd7e": "Nilai afinitas yang lebih tinggi berarti hewan peliharaanmu akan memberikan respons gerakan yang lebih beragam saat berinteraksi denganmu~",
  "pet_FeedingGuide_pet_custody_fee_reclaim": "Hewan peliharaan yang lama tidak dirawat akan diambil alih oleh komunitas couple2, dan pemilik perlu membayar biaya penitipan untuk mengambil kembali hewan peliharaannya, ya~",
  "pet_FeedingGuide_user_feedback_center": "Jika kamu memiliki pertanyaan lain, silakan hubungi kami melalui Pusat Umpan Balik Pengguna!",
	"pet_set_name_failed_toast": "Maks. 16 kar.",
  "pet_FeedingGuide_pet_health_values_tracker": "Agar hewan peliharaan tetap sehat dan tumbuh dengan baik, mereka perlu mempertahankan tingkat kekenyangan, suasana hati, dan kebersihan...\nTingkat kekenyangan/suasana hati/kebersihan berkurang 1% setiap 20 menit.\nJadi, pastikan untuk memantau statistik ini dan menjaganya pada tingkat yang sehat.",
  "newpet_growth_notice": "Cinta {name} tidak memihak, bergantung pada kalian semua~"


}
