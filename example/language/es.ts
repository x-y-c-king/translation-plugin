import feedGuideTitle from "@/assets/images/es/feed_guildline_head.png"
import shareImg from "@/assets/images/es/phb_fx_icon.png"
import ruleImg from "@/assets/images/es/phb_hdsm_icon.png"
import shareBg from "@/assets/images/es/phb_sj_bigbg_img.png"
import empty from "@/assets/images/es/phb_wjl_img.png"
import timeRank from "@/assets/images/es/phb_csb_banner_img.png"
import speedRank from "@/assets/images/es/phb_banner_img.png"
import reviceImg from "@/assets/images/es/receive_icon.png"

export default {
	btnConfirm: "Confirmar",
	feedGuide: {
		title: feedGuideTitle
	},
	outgoingRecord: {
		title: "Registro",
		tips: "No hay más",
		loading: "Cargando",
		outReward: "Recompensas de viaje",
		growthRate: "Crecimiento",
		lockStory: "Desbloquear historia nueva",
		affection: "Afecto"
	},
	petStory: {
		title: "Historia",
		empty: "Sin datos disponibles...",
		loading: "Cargando...",
		pop: {
			lock: "Desbloquear",
			lockNum: "Desbloqueado <span>{num}</span> veces",
			tips: "Posibilidad de obtener al salir"
		}
	},
	petInfo: {
		title: "Información de la mascota",
		info: {
			birthday: "Cumpleaños",
			age: "Edad",
			tips: "Faltan <span>{day}</span> días de alimentación saludable para crecer",
			day: "{day} días",
			year: "{year} años",
			name: "Kitty",
			levelEnd: "Progreso de nivel completo",
			maxLevel: "Nivel máximo alcanzado"
		},
		affection: {
			label: "Valor de afecto",
			tips: "Faltan <span>{num}</span> de afecto para subir de nivel",
			btn: "Recompensas"
		},
		diary: {
			title: "Diario de crecimiento"
		},
		favorabilityPop: {
			title: "El afecto puede aumentar mediante",
			text1: "Acariciar",
			text2: "Frotar",
			text3: "Baño",
			text4: "Aleatorio"
		},
		levelPop: {
			title: "Mantén a tu mascota sana para seguir ganando puntos de crecimiento.",
			tips: "<span>{day}</span> días de alimentación saludable para la próxima morfología mejorada"
		},
		namePop: {
			title: "Editar Apodo",
			confirm: "Confirmar",
			cancel: "Cancelar",
			placeholder: "Editar apodo (máx. 12 car.)"
		}
	},
	petAward: {
		reviceImg,
		title: "Recompensas Afecto",
		affection: {
			title: "Faltan <span>{num}</span> de afecto para subir de nivel",
			tips: "¿Cómo aumentar el Valor Afectivo?"
		},
		stageHead: "Nuevas Acciones Mascota",
		stageGoods: {
			title: "Bono extra VIP",
			tips: "Recompensas por activación VIP"
		},
		btnList: {
			btn1: "Nivel no alcanzado aún",
			btn2: "Todos los premios reclamados",
			btn3: "Recompensas por activación VIP",
			btn4: "Reclamar recompensa"
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
			"1. El ranking de acariciar gatos se actualiza cada lunes a las 0:00.",
			"2. Acariciar gatos da confort, contado en el leaderboard.",
			"3. Si los usuarios tienen el mismo valor, el ranking será en orden cronológico.",
			"4. El ranking solo muestra los 100 mejores.",
			"5. Si tienes preguntas, puedes dar feedback en el centro personal."
		],
		tab1: "VELOCIDAD",
		tab2: "TIEMPOS",
		speed: "Velocidad: {speed}s",
		count: "{num} veces",
		tips: "Demasiado tímido para aparecer luego~",
		share: {
			title1: "Velocidad de acariciar gatos",
			title2: "tiempos de acariciar gatos",
			tips: "Derrotad a los Dueños de Gatos"
		},
		goCat: "Acaricia al gato",
		vtInst: "Descripción de Actividad"
	},
	month_array: [
		"Ene",
		"Feb",
		"Mar",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Ago",
		"Sept",
		"​Oct",
		"Nov",
		"Dic"
	],
	"newpet_how_to_address_you": "¿Cómo te llamo?",
  "newpet_call_partner_nickname": "Cómo llamar a 【Nombre de pila de la otra mitad】",
  "newpet_enter_key_sequence": "Por favor, introduzca...",
  "newpet_nickname": "Apodo",
  "newpet_age": "Edad",
  "newpet_personality": "Personalidad",
  "newpet_growth_progress_tracking": "Faltan <span>{num}</span> puntos de crecimiento para el próximo nivel",
  "newpet_growth_gift_pack": "Paquete de crecimiento",
  "newpet_pet_preference_user_specific": "{petname} parece preferir un poco más a {username}~",
  "newpet_saved_successfully": "Guardado correctamente",
  "newpet_save": "Guardar",
  "newpet_cat_care_affection_game": "Cuida al gato para obtener puntos de afinidad. ¡Quien más lo cuide, más le gustará!",
  "newpet_reward_system": "Recompensa",
  "newpet_unlock_moves": "Desbloquea nuevos movimientos",
  "newpet_receive": "Recibir",
  "newpet_received": "Recibido",
  "newpet_locked": "No desbloqueado",
  "newpet_claimed_by_partner": "Ya ha sido reclamado por tu pareja",
  "newpet_pet_level": "Nivel de la mascota",
	"newpet_claimed_successfully": 'Recibido correctamente',
	"pet_FeedingGuide_pet_base_stats": "Estadísticas base de la mascota",
  "pet_FeedingGuide_how_to_increase": "Cómo aumentar el valor de saciedad/estado de ánimo/limpieza",
  "pet_FeedingGuide_growth_value_explanation": "¿Qué es el valor de crecimiento?",
  "pet_FeedingGuide_affection_value_usage": "¿Para qué sirve el valor de afinidad?",
  "pet_FeedingGuide_community_takeover_explanation": "¿Qué es la toma de control de la comunidad?",
  "pet_FeedingGuide_other_questions_feedback": "¿Tienes otras dudas u opiniones?",
  "pet_FeedingGuide_pet_props_interaction_effects": "¡Usa artículos de comida, juguetes o artículos de limpieza en tus mascotas para aumentar su saciedad, estado de ánimo o nivel de limpieza!",
  "pet_FeedingGuide_pet_growth_upgrade": "Cuando el valor de crecimiento alcance cierta etapa, ¡tu mascota subirá de nivel! Al subir de nivel, recibirá un paquete adicional. \nMientras la mascota esté saludable, seguirá obteniendo valor de crecimiento. \n¡Algunos objetos también proporcionan valor de crecimiento!",
  "pet_FeedingGuide_83bbcd7e": "Una mayor afinidad significa que tu mascota te dará respuestas más variadas al interactuar contigo.",
  "pet_FeedingGuide_pet_custody_fee_reclaim": "Cuando una mascota no recibe cuidados durante mucho tiempo, será adoptada por la comunidad de couple2. El dueño deberá pagar una tarifa de custodia para recuperarla.",
  "pet_FeedingGuide_user_feedback_center": "¡Si tienes otras preguntas, bienvenido a contactarnos en el Centro de Comentarios de Usuarios!",
	 "pet_set_name_failed_toast": "Máx. 16 car.",
  "pet_FeedingGuide_pet_health_values_tracker": "Las mascotas necesitan mantener sus niveles de saciedad, estado de ánimo y limpieza para mantenerse saludables y crecer adecuadamente...\nLa saciedad/el estado de ánimo/la limpieza disminuyen un 1 % cada 20 minutos.\nAsí que asegúrate de vigilar estas estadísticas y mantenerlas en un nivel saludable.",
  "newpet_growth_notice": "El amor de {name} no es parcial, depende de todos ustedes por igual~"


}
