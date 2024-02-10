<script setup>
const logos = defineModel()

function addLogo () {
  logos.value.push({ logo: null })
}

function deleteLogo (i) {
  logos.value.splice(i, 1)
}
</script>

<template>
  <PaneField label="Add-on logos">
    <ul class="flex flex-col gap-3 mb-3">
      <li v-for="(logo, i) in logos" :key="i" class="flex gap-2">
        <div class="w-full">
          <PaneLogo v-model="logo.logo" />
        </div>
        <UButton
          icon="i-heroicons-minus"
          color="gray"
          @click="deleteLogo(i)"
          title="Delete logo"
          class="self-start"
        >
          <span class="sr-only">Delete logo</span>
        </UButton>
      </li>
    </ul>

    <UButton
      icon="i-heroicons-plus"
      variant="solid"
      color="gray"
      block
      @click="addLogo"
    >
      Add logo
    </UButton>
  </PaneField>
</template>