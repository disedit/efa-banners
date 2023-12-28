<script setup>

</script>

<template>
  <div class="p-6">
    <AppNav />

    <slot />
  </div>
</template>

<style lang="scss">
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

:root {
  --nav-safe-area: 4.85rem;
  --purple: #652B80;
  --orange: #FB7959;
  --beige: #E9D5CA;
  --black: #000;
  --white: #fff;
}
</style>