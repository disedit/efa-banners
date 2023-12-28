<script setup>
const banner = useState('event', () => ({
  title: '',
  subtitle: '',
  date: new Date(),
  venue: '',
  municipality: '',
  country: '',
  disposition: 0,
  color: 'purple',
  textOnImage: false,
  accentOnTitle: false,
  showForAll: true
}))
</script>

<template>
  <aside>
    <!--
      <PaneColors ?>
      <PaneRadioButtons />
      <PanePicture />
      <PanePicturePosition />
      <PaneDateTime />
      <PaneLogos /> and <PaneMedia />
    -->
    <UFormGroup label="Title" name="title">
      <UTextarea autoresize v-model="banner.title" placeholder="Title of the event" :rows="1" />
    </UFormGroup>
    <UFormGroup label="Subtitle" name="subtitle">
      <UTextarea autoresize v-model="banner.subtitle" :rows="1" />
    </UFormGroup>
    <PaneField label="Color">
      <PaneColors v-model="banner.color" name="color" />
    </PaneField>
    <PaneToggle label="Text on top of picture" borderless>
      <UToggle v-model="banner.textOnImage" />
    </PaneToggle>
    <PaneToggle label="Accent color on title" borderless>
      <UToggle v-model="banner.accentOnTitle" />
    </PaneToggle>
    <PaneToggle label="Show For All logo">
      <UToggle v-model="banner.showForAll" />
    </PaneToggle>
  </aside>
</template>