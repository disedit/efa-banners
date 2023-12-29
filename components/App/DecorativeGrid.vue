<template>
  <div class="grid grid-cols-4 fixed left-[1.5rem] right-[1.5rem] top-0 bottom-0 z-0 pointer-events-none border-r border-gray-800">
    <div
      v-for="i in 4"
      :key="i"
      class="border-l border-gray-800"
    />
  </div>
  <div class="fixed z-0 top-0 h-[3.4rem] left-0 right-0 border-b border-gray-800" />
</template>