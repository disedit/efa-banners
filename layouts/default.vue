<script setup>

</script>

<template>
  <div>
    <AppNav />

    <slot />
  </div>
</template>

<style>
@font-face {
  font-family: "Franklin Gothic Std";
  src:
    url('~/assets/fonts/franklin-gothic-std-extra-condensed.woff2') format('woff2'),
    url('~/assets/fonts/franklin-gothic-std-extra-condensed.woff') format('woff');
}

@font-face {
  font-family: "DM Sans";
  src:
    url('~/assets/fonts/DMSans-VariableFont_opsz,wght.ttf') format('truetype-variations');
  font-weight: 1 999;
}
</style>