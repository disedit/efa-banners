<script setup>
import DOMPurify from 'dompurify'
import ForAllSvg from './forall.svg?raw'

const banner = useState('slogan')
const headlineFontSize = useFontSize(banner, 'text', { min: 60, max: 100, maxLength: 100 })
const { colorfulLogo } = useBannerUtils(banner)

const text = computed(() => {
  if (!banner.value.text) return ''

  let bannerText = banner.value.text
  bannerText = bannerText.replace(/\[em\]/g, '<em>').replace(/\[\/em\]/g, '</em>')
  bannerText = bannerText.replace(/\n/g, '<br>')

  if (banner.value.stylizeForAll) {
    bannerText = bannerText.replace(/for all/gi, `<em class="for-all">for ${ForAllSvg}</em>`)
  }

  return DOMPurify.sanitize(bannerText)
})
</script>

<template>
  <div v-if="banner" :class="[
    `banner`, 'slogan', `layout-${banner.layout}`, `color-${banner.color}`,
    { 'has-picture': !!banner.picture },
    { 'has-wordmark': banner.showForAll },
    { 'has-addon-logo': !!banner.logo },
    { 'has-disclaimer': !!banner.disclaimer }
  ]">
    <div class="slogan-picture">
      <img v-if="banner.picture" :src="banner.picture.crop.result">
    </div>
    <div class="slogan-text banner-headline" :style="{ fontSize: headlineFontSize }">
      <h1 v-html="text" />
    </div>
    <div v-if="banner.showForAll" class="slogan-wordmark">
      <LogosForAll />
    </div>
    <div class="banner-footer">
      <BannerLogos :colorful="colorfulLogo" :append="banner.logos" :disclaimer="banner.disclaimer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-purple {
  --text-color: var(--black);
  --highlight-color: var(--white);
  --secondary-color: var(--orange);
}

.color-orange {
  --text-color: var(--black);
  --highlight-color: var(--white);
  --secondary-color: var(--purple);
}

.color-beige {
  --text-color: var(--black);
  --highlight-color: var(--purple);
  --secondary-color: var(--purple);
}

.layout-full.has-picture {
  --text-color: var(--white);
  --highlight-color: var(--white);
  --secondary-color: var(--white);
}

.layout-bottom,
.layout-right {
  --secondary-color: var(--white);
}

.slogan {
  background: var(--banner-color);
  display: grid;

  &-picture {
    grid-area: picture;
    display: flex;
    position: relative;

    img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  &-text {
    position: relative;
    grid-area: text;
    padding: var(--banner-padding);
    line-height: .9;
    color: var(--text-color);
    z-index: 10;

    h1 {
      padding-top: .1em;
    }

    :deep(em) {
      font-style: normal;
      color: var(--highlight-color);
    }

    :deep(.for-all) {
      white-space: nowrap;

      svg {
        display: inline-block;
        height: .85em;
        width: .85em;
        transform: translateY(-5%);
      }
    }
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
  &-full {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: "picture";

    .slogan-text {
      grid-area: unset;
      position: absolute;
      
      h1 {
        font-size: 1.25em;
      }
    }

    .slogan-picture {
      background: transparent;
    }
  }

  &-top {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.25fr;
    grid-template-areas: "picture" "text";

    .slogan-picture {
      border-bottom: 1px var(--black) solid;
    }

    .slogan-text {
      margin-bottom: 50px;
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
  :not(.layout-full) {
    .slogan-text {
      h1 {
        font-size: 1.25em;
      }
    }
  }
}

.aspect-916 {
  .banner {
    --banner-padding: 20px;
  }

  .slogan-text {
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
  
  .layout-full .slogan-text {
    margin-top: 60px;
  }
}
</style>
