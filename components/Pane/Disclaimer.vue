<script setup>
defineProps({
  modelValue: { type: String, default: null }
})

const emit = defineEmits(['update:modelValue'])

const addDisclaimer = ref(false)
const disclaimerText = ref('This event received financial support from the European Parliament. The contents of the event are the sole responsibility of the author, and the European Parliament cannot be held responsible for any use which may be made of the information contained therein.')

watch(addDisclaimer, (add) => {
  if (!add) {
    emit('update:modelValue', null)
  } else {
    emit('update:modelValue', disclaimerText.value)
  }
})

watch(disclaimerText, (text) => {
  emit('update:modelValue', text)
})
</script>

<template>
  <PaneToggle label="Add disclaimer">
    <UToggle v-model="addDisclaimer" />
  </PaneToggle>
  <UFormGroup
    v-if="addDisclaimer"
    label="Disclaimer"
    name="disclaimerText">
    <UTextarea
      autoresize
      v-model="disclaimerText"
      :rows="1"
    />
  </UFormGroup>
</template>