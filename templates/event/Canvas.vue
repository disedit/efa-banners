<script setup>
const aspect = useState('aspect')
const banner = useState('event')
const titleFontSize = useFontSize(banner, 'title', { min: 40, max: 80, maxLength: 100 })
const { colorfulLogo } = useBannerUtils(banner)
const formatDate = (date) => useDate(date)
const titleOverPicture = computed(() => {
  return banner.value.titleOverPicture && banner.value.layout === 'top' && aspect.value.id !== '169' && banner.value.picture
})
</script>

<template>
  <div v-if="banner" :class="[
    `banner`, 'event', `layout-${banner.layout}`, `color-${banner.color}`,
    { 'has-picture': !!banner.picture },
    { 'has-wordmark': banner.showForAll },
    { 'title-over-picture': titleOverPicture },
    { 'accent-on-title': banner.accentOnTitle },
    { 'has-addon-logo': !!banner.logo }
  ]">
    <div class="event-picture">
      <img v-if="banner.picture" :src="banner.picture.crop.result">
      <div v-if="titleOverPicture" class="event-title">
        <div class="event-overtitle" v-if="banner.overtitle">{{ banner.overtitle }}</div>
        <div :style="{ fontSize: titleFontSize }">
          <h1 class="banner-headline">{{ banner.title }}</h1>
        </div>
      </div>
    </div>
    <div class="event-content">
      <div class="event-details">
        <div class="event-datetime">
          <div class="event-datetime-date" v-if="banner.date">{{ formatDate(banner.date) }}</div>
          <div class="event-datetime-time" v-if="banner.time">{{ banner.time }}</div>
        </div>
      </div>
      <div v-if="!titleOverPicture" class="event-title">
        <div :style="{ fontSize: titleFontSize }">
          <h1 class="banner-headline">{{ banner.title }}</h1>
        </div>
        <div class="event-overtitle" v-if="banner.overtitle">{{ banner.overtitle }}</div>
      </div>
      <div class="event-venue" v-if="banner.type === 0">
        <div class="event-venue-name" v-if="banner.venue">{{ banner.venue }}</div>
        <div class="event-venue-address" v-if="banner.address">{{ banner.address }}</div>
      </div>
      <div v-else class="event-medium">
        <span v-if="banner.medium_logo && banner.medium_logo.key !== 'none'" class="event-medium-logo">
          <img :src="banner.medium_logo.url" alt="">
        </span>
        <span class="event-medium-name">{{ banner.medium }}</span>
      </div>
      <div v-if="banner.type === 0" class="event-region">
        <div class="event-region-municipality" v-if="banner.municipality">{{ banner.municipality }}</div>
        <div class="event-region-country" v-if="banner.country">{{ banner.country }}</div>
      </div>
      <div class="event-info">{{ banner.info }}</div>
    </div>
    <div v-if="banner.showForAll" class="event-wordmark">
      <LogosForAll />
    </div>
    <div class="banner-footer"> 
      <BannerLogos :colorful="colorfulLogo" :append="banner.logos" :disclaimer="banner.disclaimer" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  --big-wordmark: scale(1.3) translate(-10%, -10%);
  --bigger-wordmark: scale(1.4) translate(-10%, -10%);
}

.color-purple {
  --text-color: var(--beige);
  --title-color: var(--white);
  --secondary-color: var(--orange);

  &.accent-on-title {
    --title-color: var(--orange);
    --secondary-color: var(--beige);
  }
}

.color-orange {
  --text-color: var(--white);
  --title-color: var(--white);
  --secondary-color: var(--purple);
  --accent-color: var(--purple);

  &.accent-on-title {
    --title-color: var(--purple);
    --accent-color: var(--white);
  }
}

.color-beige {
  --text-color: var(--black);
  --title-color: var(--black);
  --secondary-color: var(--purple);
  --accent-color: var(--purple);

  &.accent-on-title {
    --title-color: var(--purple);
    --accent-color: var(--black);
  }
}

.layout-bottom,
.layout-right {
  --secondary-color: var(--white) !important;

  &.color-purple:not(.accent-on-title) {
    --accent-color: var(--orange);
  }
}

.event {
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

    .event-title {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: var(--banner-padding);
      line-height: .9;
    }
  }
  
  &-content {
    position: relative;
    grid-area: text;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr auto auto;
    padding: var(--banner-padding);
    line-height: .9;
    color: var(--text-color);
    z-index: 10;
    gap: 20px;
    font-size: 21px;
  }

  &-title {
    grid-area: title;
    color: var(--title-color);

    h1 {
      white-space: pre-wrap;
      transform: translateY(.1em);
    }
  }

  &-details {
    grid-area: details;
    display: flex;
    color: var(--accent-color, var(--secondary-color));
    gap: 20px;
    font-weight: bold;
  }

  &-overtitle {
    flex-grow: 4;
    font-weight: bold;
    margin-bottom: 20px;
    color: var(--text-color);
  }

  &-datetime {
    display: flex;
    gap: 20px;
    flex-grow: 1;
    white-space: nowrap;

    &-date {
      margin-right: auto;
    }
  }

  &-venue {
    grid-area: venue;

    &-name {
      white-space: pre-wrap;
      font-weight: bold;
      margin-bottom: 8px;
    }

    &-address {
      white-space: pre-wrap;
      font-size: .8em;
    }
  }

  &-region {
    grid-area: region;
    font-weight: bold;
    line-height: 1.1;
    white-space: pre-wrap;
  }

  &-medium {
    display: flex;
    gap: 10px;
    align-items: center;
    grid-area: venue;
    grid-row: span 2;
    align-self: start;

    img {
      height: 20px;
    }
  }

  &-info {
    grid-area: info;
    font-size: .8em;
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

    /* Title on block with wordmark */
    .event-content {
      margin-bottom: 70px;
      grid-template-rows: auto auto 1fr auto;
      grid-template-areas:
        "details details"
        "title venue"
        "title region"
        "info .";
    }

    /* Title on block without wordmark */
    &:not(.title-over-picture):not(.has-wordmark) {
      .event-content {
        grid-template-rows: auto 1fr auto auto;
        grid-template-areas:
          "details details"
          "title venue"
          "title region"
          "info region";
      }
    }

    /* Title over picture with or without wordmark */
    &.title-over-picture {
      grid-template-rows: 1fr 1fr;

      .event-content {
        grid-template-rows: auto auto auto 1fr;
        grid-template-areas:
          "details details"
          "venue venue"
          "region region"
          "info .";
        font-size: 24px;
      }

      .event-overtitle {
        color: var(--title-color);
      }

      .event-wordmark {
        transform: var(--big-wordmark);
      }
    }

    /* Title on block generic */
    &:not(.title-over-picture) {
      .event-venue,
      .event-region {
        text-align: right;
      }

      .event-medium-name {
        order: -1;
      }

      .event-overtitle {
        margin-top: 18px;
      }
    }
  }

  &-bottom {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "text" "picture";

    .event-content {
      grid-template-rows: 1fr auto auto auto;
      grid-template-areas:
        "details details"
        "title venue"
        "title region"
        "title info";
    }

    .event-title {
      display: flex;
      flex-direction: column;

      .event-overtitle {
        order: -1;
      }
    }

    .event-title,
    .event-info {
      align-self: end;
    }

    .event-venue,
    .event-region,
    .event-info {
      text-align: right;
    }

    &:not(.has-picture) {
      .event-content {
        grid-template-rows: 1fr auto auto auto auto !important;
        margin-bottom: 70px;
      }
    }
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

  &-left,
  &-right {
    .event-content {
      grid-template-columns: 1fr;
      grid-template-rows: auto auto auto auto 1fr;
      grid-template-areas:
        "details"
        "title"
        "venue"
        "region"
        "info";
      font-size: 24px;
    }

    .event-overtitle {
      margin-top: 18px;
    }

    .event-wordmark {
      transform: var(--bigger-wordmark);
    }
  }
}

.banner:not(.has-picture) {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "text";

  .event-content {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto 1fr auto;
    grid-template-areas:
      "details"
      "title"
      "venue"
      "region"
      "info";
    font-size: 25px;
  }

  .event-title {
    h1 {
      font-size: 1.5em;
    }
  }

  .event-region,
  .event-venue,
  .event-info {
    text-align: left;
  }

  .event-medium {
    &-name {
      order: 1;
    }
  }

  .event-wordmark {
    transform: var(--bigger-wordmark);
  }
}

.aspect-45 {
  .event-content {
    font-size: 23px;
  }

  .layout-top.title-over-picture {
    grid-template-rows: 1.5fr 1fr;
  }
}

.aspect-916 {
  .banner {
    --banner-padding: 20px;
  }

  .event-content,
  :not(.title-over-picture):not(.has-wordmark) .event-content {
    grid-template-columns: 1fr;
    grid-template-areas:
      "details"
      "title"
      "venue"
      "region"
      "info";
    font-size: 18px;
  }

  :not(.title-over-picture) {
    .event-venue,
    .event-region,
    .event-info {
      text-align: left;
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

.aspect-169 {
  .event-picture {
    display: none;
  }
}
</style>
