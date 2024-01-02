<script setup>
defineProps({
  label: { type: String, required: true },
  help: { type: String, default: '' },
  borderless: { type: Boolean, default: false }
})
</script>

<template>
  <label :class="['flex p-3 gap-3 items-center', !borderless && 'border-b border-gray-500', borderless && 'pb-0']">
    
    <slot />
    <span>{{ label }}</span>
    <UPopover mode="hover" v-if="help">
      <UIcon name="i-heroicons-question-mark-circle" class="relative top-[2px]" />

      <template #panel>
        <div class="max-w-[10rem] text-xs text-gray-200 p-3">{{ help }}</div>
      </template>
    </UPopover>
  </label>
</template>