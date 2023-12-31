<script setup>
const template = useTemplate()
const { aspect, aspects } = useAspect()

watchEffect(() => {
  aspect.value = aspects[template.value.aspects[0]]
})

useHead({
  title: `${template.value.name} - EFA Banner Generator`
})
</script>

<template>
  <main class="fill-height grid grid-cols-[350px_1fr]">
    <div class="border border-gray-500 border-r-0 overflow-y-auto">
      <Component :is="`${template.id}Pane`" />
    </div>
    <div class="border border-gray-500 flex flex-col">
      <div class="flex border-b border-gray-500 p-3 gap-3">
        <WorkspaceAspectMenu class="w-full" />
        <WorkspaceDownload />
      </div>
      <div class="h-full">
        <CanvasContainer>
          <Component :is="`${template.id}Canvas`" />
        </CanvasContainer>
      </div>
    </div>
  </main>
</template>
