<script setup>
useHead({
  htmlAttrs: {
    class: 'bg-dark'
  }
})
</script>

<template>
  <div class="p-6 overflow-hidden">
    <NuxtLoadingIndicator color="#fff" />
    <AppNav />
    
    <div class="relative z-10">
      <slot />
    </div>

    <AppDecorativeGrid />
  </div>
</template>
