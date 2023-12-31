<script setup>
const banner = useState('speakers', () => ({
  title: '',
  speakers: [
    { name: '', description: '', picture: null }
  ]
}))
</script>

<template>
  <aside>
    <PaneField label="Speakers">
      <PaneSpeakers v-model="banner.speakers" />
    </PaneField>
  </aside>
</template>