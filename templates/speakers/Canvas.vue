<script setup>
const banner = useState('speakers')
const titleFontSize = useFontSize(banner, 'title', { min: 40, max: 80, maxLength: 100 })
const { colorfulLogo } = useBannerUtils(banner)
const formatDate = (date) => useDate(date)
</script>

<template>
  <div v-if="banner" :class="[
    `banner`, 'speakers', `color-${banner.color}`,
    `has-${banner.speakers.length}-speakers`,
    { 'has-wordmark': banner.showForAll },
    { 'accent-on-title': banner.accentOnTitle },
    { 'has-addon-logo': !!banner.logo },
  ]">
    <div class="profiles">
      <div v-for="speaker in banner.speakers" :key="speaker.name" class="profile">
        <div class="profile-picture">
          <img v-if="speaker.picture" :src="speaker.picture.crop.result" />
        </div>
        <div class="profile-details">
          <h2 v-if="speaker.name" class="profile-name">
            <span>{{ speaker.name }}</span>
          </h2>
          <div v-if="speaker.description" class="profile-description">
            <span>{{ speaker.description }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="event">
      <div class="event-details">
        <div class="event-overtitle" v-if="banner.overtitle">{{ banner.overtitle }}</div>
        <div class="event-datetime">
          <div class="event-datetime-date" v-if="banner.date">{{ formatDate(banner.date) }}</div>
          <div class="event-datetime-time" v-if="banner.time">{{ banner.time }}</div>
        </div>
      </div>
      <div class="event-title" :style="{ fontSize: titleFontSize }">
        <h1 class="banner-headline">{{ banner.title }}</h1>
      </div>
      <div class="event-venue">
        <div class="event-venue-name" v-if="banner.venue">{{ banner.venue }}</div>
        <div class="event-venue-address" v-if="banner.address">{{ banner.address }}</div>
      </div>
      <div class="event-region">
        <div class="event-region-municipality" v-if="banner.municipality">{{ banner.municipality }}</div>
        <div class="event-region-country" v-if="banner.country">{{ banner.country }}</div>
      </div>
      <div class="event-info">{{ banner.info }}</div>
    </div>
    <div v-if="banner.showForAll" class="speakers-wordmark">
      <LogosForAll />
    </div>
    <div class="banner-footer"> 
      <BannerLogos :colorful="colorfulLogo" :append="banner.logo" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.color-purple {
  --text-color: var(--beige);
  --title-color: var(--white);
  --secondary-color: var(--orange);
  --profile-name-background: var(--black);
  --profile-description-background: var(--beige);

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
  --profile-name-background: var(--black);
  --profile-description-background: var(--beige);

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
  --profile-name-background: var(--black);
  --profile-description-background: var(--white);

  &.accent-on-title {
    --title-color: var(--purple);
    --accent-color: var(--black);
  }
}

.speakers {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;
  grid-template-areas: "profiles" "event";
  background: var(--banner-color);

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

.profiles {
  grid-area: profiles;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  margin-right: -1px;
}

.profile {
  display: grid;
  border-right: 1px var(--black) solid;
  border-bottom: 1px var(--black) solid;

  &-picture {
    position: relative;
    grid-area: 1 / 1;
    z-index: 10;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      inset: 0;
      object-fit: cover;
    }
  }

  &-details {
    position: relative;
    display: flex;
    grid-area: 1 / 1;
    padding: 20px;
    font-size: 18px;
    flex-direction: column;
    justify-content: flex-end;
    z-index: 20;
  }

  &-name {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: -0.01em;

    span {
      background: var(--profile-name-background);
      color: var(--white);
      box-decoration-break: clone;
      padding: 4px 7px;
    }
  }

  &-description {
    font-size: 0.75em;
    margin-top: .75em;

    span {
      background: var(--profile-description-background);
      color: var(--black);
      box-decoration-break: clone;
      padding: 3px 7px;
    }
  }
}

.event {
  position: relative;
  grid-area: event;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto auto auto;
  grid-template-areas: "details" "title" "venue" "region" "info";
  padding: var(--banner-padding);
  line-height: .9;
  color: var(--text-color);
  z-index: 10;
  gap: 20px;
  font-size: 21px;
  margin-bottom: 70px;

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
      font-weight: bold;
      margin-bottom: 8px;
      white-space: pre-wrap;
    }

    &-address {
      font-size: .8em;
      white-space: pre-wrap;
    }
  }

  &-region {
    grid-area: region;
    font-weight: bold;
    line-height: 1.1;
    white-space: pre-wrap;
  }

  &-info {
    grid-area: info;
    font-size: .8em;
    white-space: pre-wrap;
  }
}

.has-5-speakers,
.has-6-speakers {
  .profiles {
    grid-template-columns: repeat(3, 1fr);
  }
}

.aspect-45 {
  .has-4-speakers {
    .profiles {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.aspect-916 {
  .banner {
    --banner-padding: 20px;
  }

  .profile {
    &-details {
      padding: 10px;
      font-size: .85em;
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