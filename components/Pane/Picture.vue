<script setup>
const props = defineProps({
  modelValue: { type: Object, default: null },
  name: { type: String, default: 'picture' },
  ratio: { type: Number, default: 1 },
  croppable: { type: Boolean, default: true }
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
    crop: { coordinates: null, result: null }
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

const lowResolution = computed(() => {
  return file.value && (file.value.height < 500 || file.value.width < 800)
})
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
      'flex min-h-[7rem] items-center justify-center border border-dashed rounded-md text-sm transition',
      { 'border-purple-500 text-primary-500 bg-purple-900/25' : isDragging },
      { 'border-gray-600 text-gray-600' : !isDragging },
      { 'cursor-pointer hover:border-purple-500 hover:text-primary-500 hover:bg-purple-900/25' : !file || !croppable }
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
        v-if="!file"
        class="flex flex-col items-center justify-center w-full h-full text-center"
      >
        <UIcon name="i-heroicons-arrow-up-tray-20-solid" class="text-2xl mb-2 pointer-events-none" />
        <span class="pointer-events-none">Drag and drop a picture<br>or click to select one</span>
      </div>
      <div v-else-if="!croppable" class="flex w-full p-3">
        <img :src="file.blob" alt="" class="h-20 w-20 rounded-sm object-cover">
        <button
          @click="clearFile"
          class="ms-auto hover:underline"
        >
          Clear
        </button>
      </div>
      <div v-else class="flex flex-col p-3 w-full">
        <PanePictureCrop
          :picture="file"
          :ratio="ratio"
          v-model="file.crop"
          class="w-full mb-3"
        />
        <button
          @click="clearFile"
          class="hover:text-red-500 hover:bg-red-900/25 rounded-md p-1.5 transition"
        >
          <UIcon name="i-heroicons-trash" />
          Remove image
        </button>
      </div>
  </div>
  <UAlert
    v-if="lowResolution"
    icon="i-heroicons-exclamation-circle"
    description="Picture will be pixelated. You should choose a picture that is at least 800px wide."
    title="Low resolution"
    color="amber"
    variant="subtle"
    class="mt-3"
  />
</template>