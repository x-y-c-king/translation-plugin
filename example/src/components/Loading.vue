<script lang="ts" setup>
import { ref, onMounted, nextTick } from "vue"
import { Parser, Player } from "svga"

const overlay = ref(true)
const visible = ref(false)
const domRef = ref<HTMLCanvasElement>()
// const url = "https://cdn.couple2.com/h5/image/loading/loading.svga"
const url = new URL("../assets/svga/loading.svga", import.meta.url).href

console.log(url)

let instance: Player | null = null

// 初始化SVGA动画播放器：创建解析器加载SVGA文件，配置播放器参数并挂载动画
const initSvga = async () => {
	if (!domRef.value) {
		return
	}

	const parser = new Parser()
	const svga = await parser.load(url)

	instance = new Player({
		container: domRef.value,
		loop: true,
		isCacheFrames: true,
		isUseIntersectionObserver: true
	})
	await instance.mount(svga)

	visible.value && onPlay()
}

const onPlay = (mask = true) => {
	visible.value = true
  overlay.value = mask
	if (instance) {
		instance.start()
	} else {
		nextTick(() => {
			initSvga()
		})
	}
}

const onPause = () => {
	visible.value = false
	if (instance) {
		instance.pause()
	}
}

const destroy = () => {
	visible.value = false
	if (instance) {
		instance.destroy()
		instance = null
	}
}

onMounted(() => {
	console.log("initSvga")
})

defineExpose({
	instance,
	onPlay,
	onPause,
	destroy
})
</script>

<template>
	<div class="loading">
		<van-popup v-model:show="visible" :close-on-click-overlay="false" :overlay="overlay">
			<canvas class="loding-content" ref="domRef"></canvas>
		</van-popup>
	</div>
</template>

<style scoped lang="scss">
.loading {
	:deep(.van-popup) {
		background-color: transparent;
	}

	.loding-content {
		width: 93px;
		height: 93px;
	}
}
</style>
