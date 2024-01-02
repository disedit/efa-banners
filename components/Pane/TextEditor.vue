<script setup>
const text = defineModel()
const textarea = ref(null)

function emphasize () {
  const input = textarea.value.$refs.textarea
  const start = input.selectionStart
  const end = input.selectionEnd
  const selectedText = input.value.substring(start, end)
  const emphasizedText = '[em]' + selectedText + '[/em]'
  text.value = text.value.substring(0, start) + emphasizedText + text.value.substring(end)
}
</script>

<template>
  <UTextarea
    ref="textarea"
    v-model="text"
    autoresize
    placeholder="We believe in a Europe for all"
    :rows="4"
  />
  <div class="p-3 pt-0">
    <UTooltip text="Select text to emphasise">
      <UButton variant="solid" color="gray" title="Emphasize text" @click="emphasize">
        <UIcon name="i-clarity-highlighter-line" dynamic />
      </UButton>
    </UTooltip>
  </div>
</template>
