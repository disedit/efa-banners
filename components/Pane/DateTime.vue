<script setup>
const date = defineModel('date')
const time = defineModel('time')
const custom = defineModel('custom')
const align = defineModel('align')

const customDate = ref(false)
const customDateInput = ref(null)
watch(customDate, (isCustom) => {
  if (!isCustom) {
    custom.value = null
  } else {
    align.value = align.value === 'center' ? 'left' : align.value
    nextTick(() => {
      customDateInput.value.$refs.textarea.focus()
    })
  }
})

const alignOptions = [
  { label: 'Left', value: 'left', icon: 'bi-arrow-bar-left', availableInCustom: true },
  { label: 'Expanded', value: 'center', icon: 'bi-arrows-expand-vertical', availableInCustom: false },
  { label: 'Right', value: 'right', icon: 'bi-arrow-bar-right', availableInCustom: true },
]

const availableAlignOptions = computed(() => {
  return alignOptions.filter((option) => customDate.value ? option.availableInCustom : true)
})
</script>

<template>
  <div v-if="!customDate" class="grid grid-cols-3">
    <UFormGroup label="Date" name="date" class="col-span-2 border-gray-700 border-dashed">
      <UInput v-model="date" type="date" />
    </UFormGroup>
    <UFormGroup label="Time" name="date" class="border-s border-gray-700 border-dashed">
      <UInput v-model="time" type="time" />
    </UFormGroup>
  </div>
  <UFormGroup
    v-if="customDate"
    label="Custom date text"
    name="customDateText"
    class="border-gray-700 border-dashed">
    <UTextarea
      ref="customDateInput"
      autoresize
      v-model="custom"
      placeholder="Feb 24th to Feb 26th"
      :rows="1"
    />
  </UFormGroup>
  <PaneToggle label="Custom date" :class="{ 'border-gray-700 border-dashed': !!align }">
    <UToggle v-model="customDate" />
  </PaneToggle>
  <PaneField v-if="align" label="Date alignment">
    <PaneRadioButtons
      v-model="align"
      :options="availableAlignOptions"
    />
  </PaneField>
</template>