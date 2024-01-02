<script setup>
import DOMPurify from 'dompurify'

const all = `<svg width="147" height="147" viewBox="0 0 147 147" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_533)">
<path fill="currentColor" d="M33.2922 105.748H42.7804L44.3492 91.9918H53.4913L55.1467 105.748H66.0307L58.3709 43.7666H42.0075L33.3038 105.748H33.2922ZM49.0501 53.3413H49.2231L52.5339 82.9362H45.4797L49.0501 53.3413Z" />
<path fill="currentColor" d="M70.2007 43.7666V105.748H95.9715V96.1735H81.5173V43.7666H70.2007Z" />
<path fill="currentColor" d="M117.307 105.748H118.293C118.293 105.748 118.293 105.737 118.299 105.725C132.759 105.246 146.994 95.2276 146.994 73.5C147 32.9749 114.031 0 73.5 0C32.9692 0 0 32.9749 0 73.5C0 114.025 32.9749 147 73.5 147C93.1627 147 111.637 139.334 125.526 125.422L118.772 118.68C106.688 130.786 90.6075 137.46 73.5058 137.46C38.241 137.46 9.5516 108.771 9.5516 73.5058C9.5516 38.241 38.2352 9.54583 73.5 9.54583C108.765 9.54583 137.454 38.2352 137.454 73.5C137.454 93.3876 123.179 95.8967 118.264 96.1735H112.156V43.7666H100.84V105.748H117.203C117.238 105.748 117.267 105.748 117.301 105.748H117.307Z" />
</g>
<defs>
<clipPath id="clip0_5_533">
<rect fill="currentColor" width="147" height="147" />
</clipPath>
</defs>
</svg>`

const banner = useState('slogan')
const headlineFontSize = useFontSize(banner, 'text', { min: 60, max: 100, maxLength: 100 })

const text = computed(() => {
  if (!banner.value.text) return ''

  let bannerText = banner.value.text
  bannerText = bannerText.replace(/\[em\]/g, '<em>').replace(/\[\/em\]/g, '</em>')
  bannerText = bannerText.replace(/\n/g, '<br>')

  if (banner.value.stylizeForAll) {
    bannerText = bannerText.replace(/for all/gi, `<em class="for-all">for ${all}</em>`)
  }

  return DOMPurify.sanitize(bannerText)
})

const colorfulLogo = computed(() => {
  const isBeige = banner.value.color === 'beige';
  const isFullLayoutWithPicture = banner.value.layout === 'full' && banner.value.picture;
  const isLeftOrBottomLayout = ['left', 'bottom'].includes(banner.value.layout);

  return isBeige && !isFullLayoutWithPicture && !isLeftOrBottomLayout;
})
</script>

<template>
  <div v-if="banner" :class="[
    `banner`, 'slogan', `layout-${banner.layout}`, `color-${banner.color}`,
    { 'has-picture': !!banner.picture }, { 'has-wordmark': banner.showForAll }
  ]">
    <div class="slogan-picture">
      <img v-if="banner.picture" :src="banner.picture.crop.result">
    </div>
    <div class="slogan-text banner-headline" :style="{ fontSize: headlineFontSize }">
      <h1 v-html="text" />
    </div>
    <div v-if="banner.showForAll" class="slogan-wordmark">
      Forall
    </div>
    <div class="banner-footer">
      <BannerLogos :colorful="colorfulLogo" :append="banner.logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-purple {
  --text-color: var(--black);
  --highlight-color: var(--white);
}

.color-orange {
  --text-color: var(--black);
  --highlight-color: var(--white);
}

.color-beige {
  --text-color: var(--black);
  --highlight-color: var(--purple);
}

.layout-full.has-picture {
  --text-color: var(--white);
  --highlight-color: var(--white);
}

.slogan {
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
  
  &-text {
    grid-area: text;
    padding: var(--banner-padding);
    line-height: .9;
    color: var(--text-color);

    h1 {
      padding-top: .05em;
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
  .slogan-text {
    h1 {
      font-size: .55em;
    }
  }
}
</style>
