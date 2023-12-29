<script setup>
const template = useTemplate()
</script>

<template>
  <nav class="grid grid-cols-4 items-end mb-6 relative z-10">
    <NuxtLink to="/">
      <LogosEfa />
    </NuxtLink>
    <div>
      <Component v-if="template" :is="`${template.id}Icon`" class="h-7 w-7" />
    </div>
    <div class="text-xl font-bold leading-none">
      <span v-if="template">{{ template.name }}</span>
    </div>
    <div class="text-xl text-right leading-none">
      Banner Generator
    </div>
  </nav>
</template>