<script setup>
const { presets } = defineProps({
  presets: { type: Array, default: () => [] }
})

const logo = defineModel()

const logos = [
  { key: 'none', label: 'None' },
  ...presets,
  { key: 'custom', label: 'Upload custom logo', url: '', custom: null, icon: 'i-heroicons-arrow-up-tray-20-solid' }
]
</script>

<template>
  <USelectMenu v-model="logo" :options="logos" by="key">
    <template #label>
      <template v-if="logo">
        <img v-if="(logo.url || logo.sm) && logo.key != 'custom'" :src="logo.sm || logo.url" class="h-5 w-5 fit-contain" />
        <UIcon v-else-if="logo.icon" :name="logo.icon" class="h-5 w-5" />
        <span v-if="logo" class="truncate">{{ logo.label }}</span>
      </template>
      <span v-else>Select a logo...</span>
    </template>
    <template #option="{ option }">
      <img v-if="option.sm || option.url" :src="option.sm || option.url" class="h-5 w-5 fit-contain" />
      <UIcon v-else-if="option.icon" :name="option.icon" class="h-5 w-5" />
      <span class="truncate">{{ option.label }}</span>
    </template>
  </USelectMenu>
</template>