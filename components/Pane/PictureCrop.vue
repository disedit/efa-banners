<script setup>
import { Cropper } from "vue-advanced-cropper"
import "vue-advanced-cropper/dist/style.css"

defineProps({
  modelValue: { type: Object, required: true },
  picture: { type: Object, default: null },
  ratio: { type: Number, default: 1 },
})

const emit = defineEmits(['update:modelValue'])

function onChange({ coordinates, canvas, }) {
  emit('update:modelValue', { coordinates, result: canvas.toDataURL() })
}
</script>


<template>
  <Cropper
    ref="cropper"
    :src="picture.blob"
    :stencilProps="{
      aspectRatio: ratio
    }"
    @change="onChange"
  />
</template>

<style lang="scss">
.vue-advanced-cropper__image-wrapper {
  border-radius: .25rem;
}
</style>
