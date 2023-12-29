<script setup>
const props = defineProps({
  modelValue: { type: Object, default: null },
  name: { type: String, default: 'picture' },
  ratio: { type: Number, default: 1 }
})

const emit = defineEmits(['update:modelValue'])

const input = ref(null)
const isDragging = ref(false)

const file = computed({
  get () {
    return props.modelValue
  },

  async set (value) {
    emit('update:modelValue', await getPictureObject(value))
  }
})

async function getPictureObject (picture) {
  if (!picture) return null
  const blob = URL.createObjectURL(picture)
  const { height, width } = await createImageBitmap(picture)

  return {
    blob,
    width,
    height,
    aspect: (width / height > props.ratio) ? 'horizontal' : 'vertical',
    crop: { scale: 100, x: 50, y: 50 }
  }
}

function onDrop (e, clicked) {
    isDragging.value = false
    file.value = clicked ? e.target.files[0] : e.dataTransfer.files[0]
}

function selectFile () {
  if (file.value) return
  input.value.click()
}

function clearFile () {
  file.value = null
}
</script>

<template>
  <div
    @drop.prevent="onDrop"
    @dragstart.prevent="isDragging = true"
    @dragend.prevent="isDragging = false"
    @dragover.prevent="isDragging = true"
    @dragleave.prevent="isDragging = false"
    @dragenter.prevent="isDragging = true"
    :class="[
      'flex h-[7rem] items-center justify-center border border-dashed rounded-md text-sm cursor-pointer transition',
      {'border-purple-500 text-primary-500 bg-purple-900/25' : isDragging },
      {'border-gray-600 text-gray-600 hover:border-purple-500 hover:text-primary-500 hover:bg-purple-900/25' : !isDragging }
    ]"
  >
    <input
      :id="name"
      ref="input"
      type="file"
      :name="name"
      accept="image/*"
      class="sr-only"
      @change="onDrop($event, true)">
      <div
        @click="selectFile"
        v-if="!file || isDragging"
        class="flex flex-col items-center justify-center w-full h-full"
      >
        <UIcon name="i-heroicons-arrow-up-tray-20-solid" class="text-2xl mb-2" />
        <span>Drag and Drop Picture</span>
      </div>
      <div v-else class="flex w-full p-3">
        <img :src="file.blob" alt="" class="h-20 w-20 rounded-sm object-cover">
        <button
          @click="clearFile"
          class="ms-auto"
        >
          Clear
        </button>
      </div>
  </div>
</template>