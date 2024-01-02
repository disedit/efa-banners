<script setup>
const banner = useState('slogan')
</script>

<template>
  <div v-if="banner" :class="[`banner`, `layout-${banner.layout}`, `color-${banner.color}`]">
    fdfdf
  </div>
</template>

<style lang="scss" scoped>
.banner {
  background: var(--banner-color); 
}
</style>
