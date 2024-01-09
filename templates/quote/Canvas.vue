<script setup>
const banner = useState('quote')
const textFontSize = useFontSize(banner, 'text', { min: 30, max: 70, maxLength: 200 })
const { colorfulLogo } = useBannerUtils(banner)
</script>

<template>
  <div v-if="banner" :class="[
    `banner`, 'quote', `layout-${banner.layout}`, `color-${banner.color}`,
    { 'has-picture': !!banner.picture },
    { 'has-wordmark': banner.showForAll },
    { 'accent-on-title': banner.accentOnTitle },
    { 'has-addon-logo': !!banner.logo }
  ]">
    <div class="quote-picture" v-if="banner.picture">
      <img :src="banner.picture.crop.result">
    </div>
    <div class="quote-content" :style="{ fontSize: textFontSize }">
      <p class="quote-text">
        <span v-if="banner.quoteMarks" class="quote-mark start">&ldquo;</span>
        <span>{{ banner.text }}</span>
        <span v-if="banner.quoteMarks" class="quote-mark end">&rdquo;</span></p>
      <p class="quote-author">{{ banner.author }}</p>
      <p class="quote-description">{{ banner.description }}</p>
    </div>
    <div v-if="banner.showForAll" class="quote-wordmark">
      <LogosForAll />
    </div>
    <div class="banner-footer" v-if="banner.showLogos"> 
      <BannerLogos :colorful="colorfulLogo" :append="banner.logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-purple {
  --text-color: var(--beige);
  --highlight-color: var(--white);
  --secondary-color: var(--orange);

  &.accent-on-title {
    --quote-color: var(--orange);
    --secondary-color: var(--beige);
    --text-color: var(--white);
  }
}

.color-orange {
  --text-color: var(--white);
  --highlight-color: var(--white);
  --secondary-color: var(--purple);
  --accent-color: var(--purple);

  &.accent-on-title {
    --text-color: var(--white);
    --quote-color: var(--purple);
    --accent-color: var(--white);
  }
}

.color-beige {
  --text-color: var(--black);
  --highlight-color: var(--purple);
  --secondary-color: var(--purple);
  --accent-color: var(--purple);

  &.accent-on-title {
    --quote-color: var(--purple);
    --secondary-color: var(--purple);
    --text-color: var(--black);
    --accent-color: var(--black);
  }
}

.layout-bottom,
.layout-right {
  --secondary-color: var(--white);

  &.color-purple {
    --accent-color: var(--orange);
  }
}

.quote {
  background: var(--banner-color);
  display: grid;

  &-picture {
    grid-area: picture;
    display: flex;
    position: relative;
    background: var(--empty-picture-color);

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &-content {
    position: relative;
    grid-area: text;
    padding: var(--banner-padding);
    line-height: .9;
    color: var(--text-color);
    z-index: 10;
  }

  &-mark.start {
    position: absolute;
    left: -.4em;
  }

  &-text {
    position: relative;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: -.025em;
    text-wrap: balance;
    margin-bottom: .3em;
    white-space: pre-wrap;
    color: var(--quote-color, var(--text-color));
  }

  &-author {
    font-weight: bold;
    font-size: .4em;
    margin-bottom: .3em;
    color: var(--accent-color, var(--secondary-color));
    white-space: pre-wrap;
  }

  &-description {
    font-size: .3em;
    white-space: pre-wrap;
  }

  &-wordmark {
    position: absolute;
    right: -10px;
    bottom: -10px;
    color: var(--secondary-color);

    svg {
      height: 200px;
      width: 200px;
      transform: rotate(-10deg);
    }
  }
}

.layout {
  &-top {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.25fr;
    grid-template-areas: "picture" "text";

    .quote-content {
      margin-bottom: 70px;
    }
  }

  &-bottom {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "text" "picture";
  }

  &-left {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "picture text";
  }

  &-right {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "text picture";
  }
}

.banner:not(.has-picture) {
  grid-template-areas: "text";

  .quote-text {
    font-size: 1.25em;
  }
}

.aspect-45 {
  .quote-text {
    font-size: 1.25em;
  }

  &:not(.has-picture) {
    .quote-text {
      font-size: 1.5em;
    }
  }
}

.aspect-916 {
  .banner {
    --banner-padding: 20px;
  }

  .quote-text {
    h1 {
      font-size: .55em;
      padding-top: 0;
    }
  }

  .banner-footer {
    transform: scale(.7) translate(10px, -80px);
    transform-origin: bottom left;
  }

  :not(.has-addon-logo) .banner-footer {
    display: none;
  }
}
</style>
