<script setup>
const aspect = useState('aspect')

const bannerContainer = ref(null)
const scale = ref(1)
const margin = ref(0)

onMounted(() => {
  window.addEventListener('resize', scaleBanner)
})

onUnmounted(() => {
  window.removeEventListener('resize', scaleBanner)
})

watch(aspect, () => {
  scaleBanner()
})

function scaleBanner() {
  const minHeight = 450
  const maxHeight = 950
  const { minScale, maxScale, minMargin, maxMargin } = aspect.value
  const height = window.innerHeight
  const scaledHeight = (height - minHeight) / (maxHeight - minHeight)

  if (height > maxHeight) { // Max scale
    scale.value = maxScale
    margin.value = maxMargin
  } else if (height < minHeight) { // Min scale
    scale.value = minScale
    margin.value = minMargin
  } else { // In-between
    scale.value = minScale + scaledHeight * (maxScale - minScale)
    margin.value = minMargin + scaledHeight * (maxMargin - minMargin)
  }
}
</script>

<template>
  <div class="flex items-center justify-center p-10 h-full overflow-clip">
    <div
      ref="bannerContainer"
      class="flex border border-white transition-[height] transition-[width] duration-500 shrink-0"
      :style="{
        width: `${aspect.width}px`,
        height: `${aspect.height}px`,
        transform: `scale(${scale})`,
        margin: `${margin}px`
      }"
    >
      <div
        id="Banner"
        :class="['h-full', 'w-full', `aspect-${aspect.id}`]"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
