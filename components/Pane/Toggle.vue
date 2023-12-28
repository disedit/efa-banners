<script setup>
defineProps({
  label: { type: String, required: true },
  borderless: { type: Boolean, default: false }
})
</script>

<template>
  <label :class="['flex p-3 gap-3 items-center', !borderless && 'border-b border-gray-500', borderless && 'pb-0']">
    
    <slot />
    <span>{{ label }}</span>
  </label>
</template>