<script setup lang="ts">
import { reactive, watch } from "vue"

const emits = defineEmits(["update:show", "pay"])
const props = defineProps({
	show: {
		type: Boolean,
		default: false
	}
})
const state = reactive({
	show: false
})

const onChange = () => {
	emits("update:show", false)
}

const onClose = () => {
	state.show = false
}

const onConfirm = (payType: 1 | 2) => {
	onClose()

	emits("pay", payType)
}

watch(
	() => props.show,
	(newVal) => {
		if (newVal !== state.show) {
			state.show = newVal
		}
	},
	{ immediate: true }
)
</script>
<template>
	<div class="pay-pop">
		<van-popup v-model:show="state.show" @close="onChange" position="bottom">
			<div class="pay-content">
				<div class="pay-type">
					<div class="pay-wx" @click="onConfirm(1)">
						<img src="@/assets/images/icon_wx.png" alt="" />
						<p>微信支付</p>
					</div>
					<div class="pay-zfb" @click="onConfirm(2)">
						<img src="@/assets/images/icon_zfb.png" alt="" />
						<p>支付宝支付</p>
					</div>
				</div>
				<div class="pay-cancel" @click="onClose">
					<p>取消</p>
				</div>
			</div>
		</van-popup>
	</div>
</template>
<style lang="scss" scoped>
.pay-pop {

	:deep(.van-popup) {
		background-color: transparent;
	}

	.pay-content {
		// background-color: #FFFEFB;
		background-image: url("@/assets/images/pay_bg.png");
		background-size: 100% 100%;
		width: 100%;
		height: 424px;

		.pay-type {
			width: 100%;
			height: 266px;
			display: flex;
			align-items: center;
			justify-content: center;
			border-bottom: 1px solid #f2ecce;

			> div {
				text-align: center;

				img {
					margin: 0 auto;
					width: 104px;
					display: block;
				}

				p {
					white-space: nowrap;
					font-size: 24px;
					font-weight: 400;
					color: #aeafb0;
					line-height: 34px;
					margin-top: 12px;
				}
			}

			.pay-zfb {
				margin-left: 230px;
			}
		}

		.pay-cancel {
			text-align: center;

			p {
				padding: 24px 0;
				font-size: 30px;
				font-weight: 400;
				color: #5f5b52;
				line-height: 42px;
			}
		}
	}
}
</style>
