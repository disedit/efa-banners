<script setup>
const banner = useState('event', () => ({
  title: ''
}))
</script>

<template>
  <div>
    Pane:
    <UInput v-model="banner.title" />
  </div>
</template>