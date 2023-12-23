<script setup>
import templates from '~/templates/templates.js'
</script>

<template>
  <main class="mt-20">
    <h2 class="font-headline text-8xl uppercase">
      Select a starting template
    </h2>

    <ul class="grid grid-cols-4 border-r border-white">
      <li v-for="template in templates" :key="template.id">
        <HomeTemplate :template="template" />
      </li>
    </ul>
  </main>
</template>
