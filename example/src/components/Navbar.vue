<script setup lang="ts">
import { computed } from "vue"
import { useSetting } from "@/store/setting.ts"

type PropsType = {
	title?: string
}

const setting = useSetting()
const props = withDefaults(defineProps<PropsType>(), {
	title: ''
})

const navHeight = computed(() => {
	return setting.height
})
</script>
<template>
	<div class="nav-pos" :style="{ height: `${navHeight + 44}px` }">
		<div class="navbar" :style="{ 'padding-top': `${navHeight}px` }">
			<div class="navbar-inner" style="height: 44px">
				<div class="icon-back"></div>
				<div class="nav-title">{{ props.title }}</div>
				<div class="nav-right">
					<slot name="right"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.nav-pos {
	width: 100%;

	.navbar {
		width: 100%;
		background-color: transparent;
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2000;

		.navbar-inner {
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: relative;
			padding: 0 32px;

			.nav-title {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				font-size: 16px;
				font-weight: 500;
				color: #774B41;
				line-height: 34px;
				white-space: nowrap;
			}

			.nav-right {
				font-size: 16px;
				font-weight: normal;
				color: #774B41;
			}
		}
	}
}
</style>
