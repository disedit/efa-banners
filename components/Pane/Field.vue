<script setup>
defineProps({
  label: { type: String, default: null },
  borderless: { type: Boolean, default: false }
})
</script>

<template>
  <div :class="['p-3', { 'border-b border-gray-500' : !borderless }]">
    <span
      v-if="label"
      class="block text-sm text-gray-500 mb-3 leading-none"
    >
      {{ label }}
    </span>
    <slot />
  </div>
</template> 