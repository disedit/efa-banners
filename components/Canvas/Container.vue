<script setup>
const template = useTemplate()
const aspect = useState('aspect')
</script>

<template>
  <div class="flex items-center justify-center p-10 h-full">
    <div
      class="flex border border-white transition-all duration-500"
      :style="{
        width: `${aspect.width}px`,
        height: `${aspect.height}px`
      }"
    >
      <div
        id="Banner"
        class="h-full w-full"
      >
        <slot />
      </div>
    </div>
  </div>
</template>
