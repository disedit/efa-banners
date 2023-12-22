<script setup>
import templates from '~/templates/templates.js'
</script>

<template>
  <div>
    <h2 class="font-headline uppercase">Select your template</h2>
    <ul>
      <li v-for="template in templates">
        <NuxtLink :to="`/workspace/${template.id}`">
          {{ template.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
