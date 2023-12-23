<script setup>
const template = useTemplate()
const { aspect, aspects } = useAspect()

watchEffect(() => {
  aspect.value = aspects[template.value.aspects[0]]
})
</script>

<template>
  <main class="workspace grid grid-cols-4">
    <div class="border border-white border-r-0">
      <Component :is="`${template.id}Pane`" />
    </div>
    <div class="col-span-3 border border-white flex flex-col">
      <div class="flex border-b border-white p-3 gap-3">
        <WorkspaceAspectMenu class="w-full" />
        <WorkspaceDownload />
      </div>
      <div class="h-full">
        <CanvasContainer>
          <pre>{{ template }}</pre>
          <Component :is="`${template.id}Canvas`" />
        </CanvasContainer>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.workspace {
  height: calc(100vh - var(--nav-safe-area) - 2rem);
}
</style>