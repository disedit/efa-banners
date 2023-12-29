<script setup>
defineProps({
  template: { type: Object, required: true }
})
</script>

<template>
  <NuxtLink
    :to="`/workspace/${template.id}`"
    class="
      flex flex-col p-6 aspect-[1/1] w-full h-full
      border border-white border-r-0
      hover:bg-white/10
      transition duration-200
    "
  >
    <Component
      :is="`${template.id}Icon`"
      class="h-[4rem] w-[4rem] xl:h-[6rem] xl:w-[6rem]"
    />
    <span class="text-xl lg:text-2xl xl:text-4xl font-bold mt-auto">
      {{ template.name }}
    </span>
  </NuxtLink>
</template>
