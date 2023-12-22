<script setup>
import templates from '~/templates/templates.js'
const route = useRoute()
const template = computed(() => templates.find(t => t.id === route.params.template))
</script>

<template>
  <nav>
    <NuxtLink to="/">
      <LogosEfa />
    </NuxtLink>
    <div v-if="template">
      {{ template.name }}
    </div>
    <div>
      Banner Generator
    </div>
  </nav>
</template>