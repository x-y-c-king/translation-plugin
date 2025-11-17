<script lang="ts" setup>
const props = defineProps({
	show: {
		type: Boolean,
		default: false
	}
})
const emits = defineEmits(["update:show", "pay"])

const onChange = () => {
	emits("update:show", false)
}
</script>

<template>
	<div class="base-pop">
		<van-popup v-model:show="props.show" @close="onChange" position="bottom">
			<div class="base-content">
				<slot></slot>
			</div>
		</van-popup>
	</div>
</template>

<style lang="scss" scoped>
.base-pop {
	position: relative;

	:deep(.van-popup) {
		background-color: transparent;
		overflow: hidden;
	}

	.base-content {
		width: 100vw;
		height: 100vw;
		background-color: #fff;
		border-radius: 30px 30px 0px 0px;
		border: 1.5px solid #f6e8c6;
		margin-left: -1.5px;
		border-bottom: none;
		box-sizing: content-box;
	}
}
</style>
