<script setup>
import aspects from '~/templates/aspects.js'

const { template } = defineProps({
  template: { type: Object, required: true }
})

const aspect = useState('aspect', () => aspects[template.aspects[0]])

const availableAspects = template.aspects.map(a => aspects[a])
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