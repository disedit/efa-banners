<script setup>
const props = defineProps({
  presets: { type: Array, default: () => null },
  modelValue: { type: Object, default: () => null }
})

const emit = defineEmits(['update:modelValue'])

const logo = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})

const customLogo = computed({
  get () {
    if (props.modelValue && props.modelValue.key !== 'custom') return null
    return props.modelValue.custom
  },
  set (picture) {
    emit('update:modelValue', { ...logo.value, url: picture && picture.blob, custom: picture })
  }
})

const defaultLogos = [
  { key: 'efay', label: 'EFA Youth', url: '/images/logos/efay.svg' },
  { key: 'euparl', label: 'European Parliament', url: '/images/logos/euparl.svg', sm: '/images/logos/euparl-sm.svg' },
]
</script>

<template>
  <PaneLogoSelector
    :presets="presets ? presets : defaultLogos"
    v-model="logo"
  />
  <div v-if="logo && logo.key === 'custom'" class="mt-3">
    <PanePicture
      v-model="customLogo"
      :croppable="false"
    />
  </div>
</template>