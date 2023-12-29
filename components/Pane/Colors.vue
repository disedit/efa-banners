<script setup>
const props = defineProps({
  name: { type: String, required: true },
  modelValue: { type: String, required: true },
  colors: { type: Array, default: () => ['purple', 'orange', 'beige'] }
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
  <div class="flex gap-3 -mt-1 mb-2">
    <label
      v-for="color in colors"
      :key="color"
      class="h-5 w-5 rounded-full relative bg-[--color]"
      :style="{
        '--color': `var(--${color})`
      }"
    >
      <input
        type="radio"
        :name="name"
        :value="color"
        v-model="selected"
        class="appearance-none m-0 outline-none focus:ring-2 focus-visible:ring-purple-500 checked:ring-2 ring-white ring-offset-2 rounded-full ring-offset-black absolute inset-0" />
      <span class="sr-only">{{ color }}</span>
    </label>
  </div>
</template>