<script setup>
const banner = useState('slogan')
const headlineFontSize = useFontSize(banner, 'text', { min: 60, max: 90, maxLength: 100 })
</script>

<template>
  <div v-if="banner" :class="[`banner`, 'slogan', `layout-${banner.layout}`, `color-${banner.color}`]">
    <div class="slogan-picture">
      <img v-if="banner.picture" :src="banner.picture.crop.result">
    </div>
    <div class="slogan-text banner-headline" :style="{ fontSize: headlineFontSize }">
      <h1>{{ banner.text }}</h1>
    </div>
    <div class="banner-footer">
      <BannerLogos :append="banner.logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slogan {
  background: var(--banner-color);
  display: grid;

  &-picture {
    grid-area: picture;
    display: flex;
    background: var(--empty-picture-color);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &-text {
    grid-area: text;
    padding: var(--banner-padding);
    line-height: 1;
  }
}

.layout {
  &-full {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "picture";

    .slogan-text {
      grid-area: unset;
      position: absolute;
    }

    .slogan-picture {
      background: transparent;
    }
  }

  &-top {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "picture" "text";

    .slogan-picture {
      border-bottom: 1px var(--black) solid;
    }
  }

  &-bottom {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "text" "picture";
  }

  &-left {
    grid-template-columns: 1fr 1.25fr;
    grid-template-rows: 1fr;
    grid-template-areas: "picture text";
  }

  &-right {
    grid-template-columns: 1.25fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "text picture";
  }
}

.aspect-45 {
  .slogan-text {
    h1 {
      font-size: .85em;
    }
  }
}

.aspect-916 {
  .slogan-text {
    h1 {
      font-size: .55em;
    }
  }
}
</style>
