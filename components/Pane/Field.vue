<script setup>
defineProps({
  label: { type: String, default: null }
})
</script>

<template>
  <div class="p-3 border-b border-gray-500">
    <span
      v-if="label"
      class="block text-sm text-gray-500 mb-3"
    >
      {{ label }}
    </span>
    <slot />
  </div>
</template> 