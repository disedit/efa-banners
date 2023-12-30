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
    <template #option="{ option }">
      <Component :is="icons[option.icon]" class="w-3 mr-1" />
      <span>
        {{ option.name }}
      </span>
      <span class="truncate text-gray-500">
        {{ option.description }}
      </span>
    </template>
  </USelectMenu>
</template>