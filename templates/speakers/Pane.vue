<script setup>
const banner = useState('speakers', () => ({
  title: ''
}))
</script>

<template>
  <div>
    Speakers:
    <UInput v-model="banner.title" />
  </div>
</template>