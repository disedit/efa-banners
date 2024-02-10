<script setup>
defineProps({
  colorful: { type: Boolean, default: false },
  append: { type: Array, default: null },
  disclaimer: { type: String, default: null }
})
</script>

<template>
  <div class="banner-footer-logos">
    <div class="banner-logos">
      <LogosEfa :colorful="colorful" class="logo-efa" />
      <div
        v-for="item in append"
        class="logo-append"
      >
        <img v-if="item.logo && item.logo.url" :src="item.logo.url" :class="`logo-${item.logo.key}`" />
      </div>
    </div>
    <div v-if="disclaimer" class="banner-disclaimer">
      {{ disclaimer }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-footer-logos {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: var(--banner-padding);
}

.banner-logos {
  display: flex;
  align-items: center;
  gap: 20px;
}

.banner-disclaimer {
  line-height: 1.1;
  font-size: 12px;
  margin-top: 12px;
}

.logo-efa {
  height: 34px;
  width: auto;
}

.logo-append {
  img {
    height: 34px;
  }

  .logo-efay {
    height: 42px;
    margin-top: -10px;
  }
}
</style>