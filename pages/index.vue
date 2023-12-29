<script setup>
import templates from '~/templates/templates.js'

useHead({
  title: "EFA Banner Generator"
})
</script>

<template>
  <main class="fill-height flex items-center">
    <div class="w-full">
      <h2 class="font-headline text-7xl/[0.5] xl:text-8xl/[0.5] uppercase mb-10 border-b border-gray-800 -mx-6 px-6">
        Select a starting template
      </h2>

      <div class="border-y border-gray-800 -mx-6 px-6">
        <ul class="grid grid-cols-4 border-r border-white">
          <li v-for="template in templates" :key="template.id">
            <HomeTemplate :template="template" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
