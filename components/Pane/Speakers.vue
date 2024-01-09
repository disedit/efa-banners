<script setup>
defineProps({
  max: { type: Number, default: 8 }
})

const speakers = defineModel()

function addSpeaker () {
  speakers.value.push({ name: '', description: '', picture: null, id: Math.random().toString(16).slice(2) })
}

function clear (i) {
  speakers.value.splice(i, 1)
}

function moveUp (i) {
  speakers.value.splice(i - 1, 0, speakers.value.splice(i, 1)[0])
}

function moveDown (i) {
  speakers.value.splice(i + 1, 0, speakers.value.splice(i, 1)[0])
}
</script>

<template>
  <TransitionGroup name="list" tag="ul" class="relative flex flex-col gap-3 mb-3">
    <li
      v-for="(speaker, i) in speakers"
      :key="speaker.id"
      class="relative group w-full"
    >
      <div class="overflow-clip border border-gray-500 bg-gray-900 rounded-md">
        <UFormGroup label="Name" :name="`name-${speaker.id}`">
          <UInput v-model="speaker.name" :name="`name-${speaker.id}`" placeholder="Maylis Roßberg" />
        </UFormGroup>
        <UFormGroup label="Description" :name="`description-${speaker.id}`">
          <UInput v-model="speaker.description" :name="`description-${speaker.id}`" placeholder="Spitzenkandidat" />
        </UFormGroup>
        <PaneField label="Picture" borderless>
          <PanePicture v-model="speaker.picture" :name="`picture-${speaker.id}`" />
        </PaneField>
      </div>
      <div class="opacity-0 group-hover:opacity-100 absolute right-0 top-3 flex flex-col gap-2 translate-x-[45%] transition-opacity">
        <button class="side-button" v-if="speakers.length > 1" @click="clear(i)" title="Clear">
          <UIcon name="i-heroicons-minus-20-solid" />
        </button>
        <button class="side-button" v-if="i !== 0" @click="moveUp(i)" title="Move up">
          <UIcon name="i-heroicons-arrow-up-20-solid" />
        </button>
        <button class="side-button" v-if="i !== speakers.length - 1" @click="moveDown(i)" title="Move down">
          <UIcon name="i-heroicons-arrow-down-20-solid" />
        </button>
      </div>
    </li>
  </TransitionGroup>
  <UButton
    v-if="speakers.length < max"
    @click="addSpeaker"
    icon="i-heroicons-user-plus"
    variant="solid"
    color="gray"
    block
  >
    Add Speaker
  </UButton>
</template>

<style lang="scss" scoped>
.side-button {
  @apply w-5 h-5 flex items-center justify-center bg-gray-900 rounded-full border border-gray-500;

  &:hover {
    @apply bg-gray-700;
  }

  &:active {
    @apply bg-gray-500 text-black;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all .25s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

.list-leave-active {
  position: absolute;
}
</style>