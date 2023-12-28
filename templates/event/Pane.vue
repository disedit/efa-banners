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
  textOnImage: false
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
    <PaneField label="Title" name="title">
      <UInput v-model="banner.title" />
    </PaneField>
    <PaneField label="Subtitle" name="subtitle">
      <UInput v-model="banner.subtitle" />
    </PaneField>
    <PaneField label="Color" name="date">
      <PaneColors v-model="banner.color" />
    </PaneField>
    <PaneField label="Text on top of picture" name="date">
      <UToggle v-model="banner.textOnImage" />
    </PaneField>
  </aside>
</template>