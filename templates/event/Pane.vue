<script setup>
const aspect = useState('aspect')
const banner = useState('event', () => ({
  layout: 'top',
  title: '',
  subtitle: '',
  date: '',
  time: '',
  picture: null,
  venue: '',
  address: '',
  municipality: '',
  country: '',
  info: '',
  color: 'purple',
  textOnImage: false,
  accentOnTitle: false,
  showForAll: true,
  logo: null
}))

/* Layout Options */
const baseOptions = [
  { label: 'Top', value: 'top', icon: 'fluent-textbox-align-top-24-regular' },
  { label: 'Bottom', value: 'bottom', icon: 'fluent-textbox-align-bottom-24-regular' }
]

const extraOptions = [
  { label: 'Left', value: 'left', icon: 'fluent-textbox-align-bottom-rotate-90-24-regular' },
  { label: 'Right', value: 'right', icon: 'fluent-textbox-align-top-rotate-90-24-regular' }
]

const options = computed(() => {
  if (aspect.value.id === '11') {
    return [...baseOptions, ...extraOptions]
  }

  return [...baseOptions]
})

watch(aspect, () => {
  banner.value.layout = options.value[0].value
})
</script>

<template>
  <aside>
    <PaneField label="Layout">
      <PaneRadioButtons
        v-model="banner.layout"
        :options="options"
      />
    </PaneField>
    <UFormGroup label="Event Title" name="title">
      <UTextarea autoresize v-model="banner.title" placeholder="Chat with the Spitzenkandidaten!" :rows="1" />
    </UFormGroup>
    <UFormGroup label="Type of Event" name="subtitle">
      <UTextarea autoresize v-model="banner.subtitle" :rows="1" placeholder="Meet & Greet" />
    </UFormGroup>
    <PaneField label="Picture">
      <PanePicture v-model="banner.picture" name="picture" />
    </PaneField>
    <PaneDateTime
      v-model:date="banner.date"
      v-model:time="banner.time"
    />
    <UFormGroup label="Venue" name="venue">
      <UTextarea autoresize v-model="banner.venue" :rows="1" placeholder="Town Hall" />
    </UFormGroup>
    <UFormGroup label="Address" name="address">
      <UTextarea autoresize v-model="banner.address" :rows="1" placeholder="123 Fake Street" />
    </UFormGroup>
    <UFormGroup label="City / Town" name="municipality">
      <UTextarea autoresize v-model="banner.municipality" :rows="1" placeholder="Brussels" />
    </UFormGroup>
    <UFormGroup label="Country / Region" name="country">
      <UTextarea autoresize v-model="banner.country" :rows="1" placeholder="Belgium" />
    </UFormGroup>
    <UFormGroup label="Extra Details" name="info">
      <UTextarea autoresize v-model="banner.info" :rows="2" />
    </UFormGroup>
    <PaneField label="Color">
      <PaneColors v-model="banner.color" name="color" />
    </PaneField>
    <PaneToggle label="Title over Picture" borderless>
      <UToggle v-model="banner.textOnImage" />
    </PaneToggle>
    <PaneToggle label="Accent Color on Title" borderless>
      <UToggle v-model="banner.accentOnTitle" />
    </PaneToggle>
    <PaneToggle label="Show For All logo">
      <UToggle v-model="banner.showForAll" />
    </PaneToggle>
    <PaneField label="Add-on Logo">
      <PaneLogo v-model="banner.logo" />
    </PaneField>
  </aside>
</template>