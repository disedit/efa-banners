<script setup>
const banner = useState('slogan', () => ({
  title: ''
}))
</script>

<template>
  <div>
    Slogan:
    <UInput v-model="banner.title" />
  </div>
</template>