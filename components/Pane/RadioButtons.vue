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
  <div role="group" class="flex gap-3">
    <UTooltip
      v-for="option in options"
      :key="option.value"
      :text="option.label"
      class="w-full"
    >
      <button
        :value="option.value"
        @click="selected = option.value"
        :aria-pressed="selected === option.value ? 'true' : 'false'"
        :aria-label="option.label"
        :class="[
          'relative flex items-center justify-center w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none cursor-default',
          'border text-xl py-2 text-white rounded-md ring-offset-2 ring-offset-black focus-visible:ring',
          { 'border-purple-700 bg-purple-700 hover:bg-purple-800 ring ring-2 ring-white focus-visible:ring-white-800 ': selected === option.value },
          { 'border-gray-600 bg-gray-900 hover:bg-gray-800 focus-visible:ring-purple-800': selected !== option.value }
        ]"
      >
        <UIcon :name="`i-${option.icon}`" dynamic />
      </button>
    </UTooltip>
  </div>
</template>