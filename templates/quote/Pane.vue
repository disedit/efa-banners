<script setup>
const banner = useState('quote', () => ({
  title: ''
}))
</script>

<template>
  <div>
    Quote:
    <UInput v-model="banner.title" />
  </div>
</template>