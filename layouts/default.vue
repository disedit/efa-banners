<script setup>
useHead({
  htmlAttrs: {
    class: 'bg-gray-900'
  }
})
</script>

<template>
  <div class="p-6 overflow-hidden">
    <NuxtLoadingIndicator color="var(--purple)" />
    <AppNav />
    
    <div class="relative z-10">
      <slot />
    </div>

    <AppDecorativeGrid />
  </div>
</template>
