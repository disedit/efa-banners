<script setup>
const banner = useState('speakers', () => ({
  title: '',
  titleSize: 100,
  overtitle: '',
  speakers: [
    { name: '', description: '', picture: null }
  ],
  date: '',
  time: '',
  venue: '',
  address: '',
  municipality: '',
  country: '',
  info: '',
  color: 'purple',
  accentOnTitle: false,
  showForAll: true,
  logos: [],
  disclaimer: null
}))
</script>

<template>
  <aside>
    <UFormGroup label="Event Title" name="title">
      <UTextarea autoresize v-model="banner.title" :rows="1" />
    </UFormGroup>
    <PaneField label="Text size" name="titleSize">
      <URange v-model="banner.titleSize" :min="50" :max="150" />
    </PaneField>
    <UFormGroup label="Type of Event" name="overtitle">
      <UTextarea autoresize v-model="banner.overtitle" :rows="1" />
    </UFormGroup>
    <PaneField label="Speakers">
      <PaneSpeakers v-model="banner.speakers" />
    </PaneField>
    <PaneDateTime
      v-model:date="banner.date"
      v-model:time="banner.time"
    />
    <UFormGroup label="Venue" name="venue">
      <UTextarea autoresize v-model="banner.venue" :rows="1" />
    </UFormGroup>
    <UFormGroup label="Address" name="address">
      <UTextarea autoresize v-model="banner.address" :rows="1" />
    </UFormGroup>
    <UFormGroup label="City / Town" name="municipality">
      <UTextarea autoresize v-model="banner.municipality" :rows="1" />
    </UFormGroup>
    <UFormGroup label="Country / Region" name="country">
      <UTextarea autoresize v-model="banner.country" :rows="1" />
    </UFormGroup>
    <UFormGroup label="Extra Details" name="info">
      <UTextarea autoresize v-model="banner.info" :rows="1" />
    </UFormGroup>
    <PaneField label="Color">
      <PaneColors v-model="banner.color" name="color" />
    </PaneField>
    <PaneToggle label="Accent Color on Title" borderless>
      <UToggle v-model="banner.accentOnTitle" />
    </PaneToggle>
    <PaneToggle label="Show For All Logo">
      <UToggle v-model="banner.showForAll" />
    </PaneToggle>
    <PaneMultiLogo v-model="banner.logos" />
    <PaneDisclaimer v-model="banner.disclaimer" />
  </aside>
</template>