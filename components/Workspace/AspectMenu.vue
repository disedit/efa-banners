<script setup>
const template = useTemplate()
const { aspects, aspect } = useAspect()
const availableAspects = template.value.aspects.map(a => aspects[a])

const icons = {
  square: resolveComponent('IconsSquare'),
  landscape: resolveComponent('IconsLandscape'),
  vertical: resolveComponent('IconsVertical'),
  story: resolveComponent('IconsStory'),
}
</script>

<template>
  <USelectMenu v-model="aspect" :options="availableAspects">
    <template #label>
      <Component :is="icons[aspect.icon]" class="w-3 mr-1" />
      <span>
        {{ aspect.name }}
      </span>
      <span class="truncate text-gray-500">
        {{ aspect.description }}
      </span>
    </template>
    <template #option="{ option: thisAspect }">
      <Component :is="icons[thisAspect.icon]" class="w-3 mr-1" />
      <span>
        {{ thisAspect.name }}
      </span>
      <span class="truncate text-gray-500">
        {{ thisAspect.description }}
      </span>
    </template>
  </USelectMenu>
</template>