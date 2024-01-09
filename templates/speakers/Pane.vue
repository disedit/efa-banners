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
  logo: null
}))
</script>

<template>
  <aside>
    <UFormGroup label="Event Title" name="title">
      <UTextarea autoresize v-model="banner.title" placeholder="Chat with the Spitzenkandidaten!" :rows="1" />
    </UFormGroup>
    <PaneField label="Text size" name="titleSize">
      <URange v-model="banner.titleSize" :min="50" :max="150" />
    </PaneField>
    <UFormGroup label="Type of Event" name="overtitle">
      <UTextarea autoresize v-model="banner.overtitle" :rows="1" placeholder="Meet & Greet" />
    </UFormGroup>
    <PaneField label="Speakers">
      <PaneSpeakers v-model="banner.speakers" />
    </PaneField>
    <PaneDateTime
      v-model:date="banner.date"
      v-model:time="banner.time"
    />
    <UFormGroup label="Venue" name="venue">
      <UTextarea autoresize v-model="banner.venue" :rows="1" placeholder="Town Hall" />
    </UFormGroup>
    <UFormGroup label="Address" name="address">
      <UTextarea autoresize v-model="banner.address" :rows="1" placeholder="123 Fake Street" />
    </UFormGroup>
    <UFormGroup label="City / Town" name="municipality">
      <UTextarea autoresize v-model="banner.municipality" :rows="1" placeholder="Brussels" />
    </UFormGroup>
    <UFormGroup label="Country / Region" name="country">
      <UTextarea autoresize v-model="banner.country" :rows="1" placeholder="Belgium" />
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
    <PaneToggle label="Show For All wordmark">
      <UToggle v-model="banner.showForAll" />
    </PaneToggle>
    <PaneField label="Add-on Logo" borderless>
      <PaneLogo v-model="banner.logo" />
    </PaneField>
  </aside>
</template>