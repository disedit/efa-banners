<script setup>
const date = defineModel('date')
const time = defineModel('time')
</script>

<template>
  <div class="grid grid-cols-3">
    <UFormGroup label="Date" name="date" class="col-span-2">
      <UInput v-model="date" type="date" />
    </UFormGroup>
    <UFormGroup label="Time" name="date" class="border-s border-gray-500">
      <UInput v-model="time" type="time" />
    </UFormGroup>
  </div>
</template>