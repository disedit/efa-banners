<script setup>
const date = defineModel('date')
const time = defineModel('time')
const custom = defineModel('custom')

const customDate = ref(false)
const customDateInput = ref(null)
watch(customDate, (isCustom) => {
  if (!isCustom) {
    custom.value = null
  } else {
    nextTick(() => {
      customDateInput.value.$refs.textarea.focus()
    })
  }
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
  <PaneToggle label="Custom date">
    <UToggle v-model="customDate" />
  </PaneToggle>
</template>