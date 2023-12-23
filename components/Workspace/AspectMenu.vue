<script setup>
const template = useTemplate()
const { aspects, aspect } = useAspect()
const availableAspects = template.value.aspects.map(a => aspects[a])
</script>

<template>
  <USelectMenu v-model="aspect" :options="availableAspects">
    <template #label>
      <span class="truncate">{{ aspect.name }}</span>
    </template>
    <template #option="{ option: thisAspect }">
      <span class="truncate">{{ thisAspect.name }}</span>
    </template>
  </USelectMenu>
</template>