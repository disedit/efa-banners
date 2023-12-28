<script setup>
defineProps({
  label: { type: String, default: null },
  name: { type: String, default: null }
})
</script>

<template>
  <UFormGroup :label="label" :name="name" class="p-3 border-b border-gray-500">
    <slot />
  </UFormGroup>
</template> 