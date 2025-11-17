<template>
	<div class="text-stroke">
		<p
			class="text"
			:style="{ WebkitTextStroke: `${size}px ${color}` }"
			:data-title="text"
			v-if="isShow"
		>
			<span>{{ text }}</span>
		</p>
	</div>
</template>

<script setup lang="ts">
import { watch, ref, nextTick } from "vue"
const props = withDefaults(defineProps<{ color: string; text: string | number; size?: number, bgColor?: string }>(), {
	bgColor: "#fff",
	color: "#aa5a2b",
	text: "9999",
	size: 3
})

const isShow = ref(false)

watch(
	() => props.text,
	() => {
		isShow.value = false
		nextTick(() => {
			isShow.value = true
		})
	},
	{
		immediate: true
	}
)
</script>

<style lang="scss" scoped>
.text-stroke {
	.text {
		white-space: nowrap;
		
		&::before {
			content: attr(data-title);
			position: absolute;
			background-color: v-bind(bgColor);
			background-clip: text;
			-webkit-background-clip: text;
			-webkit-text-fill-color: transparent;
			-webkit-text-stroke: 0;
			white-space: nowrap;
		}
	}
}
</style>
