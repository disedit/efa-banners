<script setup>
const banner = useState('event')
</script>

<template>
  <div v-if="banner">
    <img v-if="banner.picture" :src="banner.picture.crop.result" width="100%" />
    <pre class="text-xs text-gray-500">
      {{ banner }}
    </pre>
  </div>
</template>