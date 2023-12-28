<script setup>
const banner = useState('event', () => ({
  title: '',
  subtitle: '',
  date: new Date(),
  venue: '',
  municipality: '',
  country: '',
  disposition: 'top',
  color: 'purple',
  textOnImage: false,
  accentOnTitle: false,
  showForAll: true
}))
</script>

<template>
  <aside>
    <!--
      <PaneRadioButtons />
      <PanePicture />
      <PanePicturePosition />
      <PaneDateTime />
      <PaneLogos /> and <PaneMedia />
    -->
    <PaneField label="Layout">
      <PaneRadioButtons
        v-model="banner.disposition"
        :options="[
          { label: 'Top', value: 'top' },
          { label: 'Bottom', value: 'bottom' },
          { label: 'Left', value: 'left' },
          { label: 'Right', value: 'right' }
        ]"
      />
    </PaneField>
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