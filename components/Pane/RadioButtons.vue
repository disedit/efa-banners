<script setup>
const props = defineProps({
  modelValue: { type: String, required: true },
  options: { type: Array, required: true },
})

const emit = defineEmits(['update:modelValue'])

const selected = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div role="group" class="flex">
    <button
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      @click="selected = option.value"
      :aria-pressed="selected === option.value ? 'true' : 'false'"
      :class="[
        'relative w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 cursor-default',
        'text-sm px-2.5 py-1.5 bg-gray-900 text-white ring-1 ring-inset focus:ring-2 focus:ring-primary-400',
        'first:rounded-s-md last:rounded-e-md',
        { 'bg-purple-800 hover:bg-purple-900 ring-purple-800': selected === option.value },
        { 'ring-gray-700': selected !== option.value }
      ]"
    >
      {{ option.label }}
    </button>
  </div>
</template>