
import type { _center } from '#tailwind-config/theme/backgroundPosition';

import type { _flex } from '#tailwind-config/theme';
<script setup>
defineProps({
  append: { type: Object, default: null }
})
</script>

<template>
  <footer class="banner-logos">
    <LogosEfa class="logo-efa" />
    <div v-if="append" class="logo-append">
      <img :src="append.url" :class="`logo-${append.key}`" />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.banner-logos {
  position: absolute;
  display: flex;
  bottom: 0;
  padding: var(--banner-padding);
  align-items: center;
  gap: 30px;
}

.logo-efa {
  height: 40px;
  width: auto;
}

.logo-append {
  img {
    height: 40px;
  }

  .logo-efay {
    height: 50px;
    margin-top: -10px;
  }
}
</style>