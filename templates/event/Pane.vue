<script setup>
const aspect = useState('aspect')

/* Banner properties */
const banner = useState('event', () => ({
  layout: 'top',
  type: 0,
  title: '',
  overtitle: '',
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

/* Ratios */
const ratio = useRatio(banner, {
  11: { left: 1, top: 2, bottom: .5, right: .75 },
  45: { top: 2, bottom: 1 },
  916: { top: 2, bottom: 1 },
  169: { top: 1 }
})

/* Layout Options */
const layouts = useLayouts(banner, [
  { label: 'Top', value: 'top', aspects: ['11', '45', '916', '169'], icon: 'fluent-textbox-align-top-24-regular' },
  { label: 'Bottom', value: 'bottom', aspects: ['11', '45', '916'], icon: 'fluent-textbox-align-bottom-24-regular' },
  { label: 'Left', value: 'left', aspects: ['11'], icon: 'fluent-textbox-align-bottom-rotate-90-24-regular' },
  { label: 'Right', value: 'right', aspects: ['11'], icon: 'fluent-textbox-align-top-rotate-90-24-regular' }
])

/* Banner type */
const tabs = [
  { slot: 'event', label: 'Event' },
  { slot: 'interview', label: 'Interview' }
]
</script>

<template>
  <aside>
    <PaneField label="Layout">
      <PaneRadioButtons
        v-model="banner.layout"
        :options="layouts"
      />
    </PaneField>
    <UFormGroup label="Event Title" name="title">
      <UTextarea autoresize v-model="banner.title" placeholder="Chat with the Spitzenkandidaten!" :rows="1" />
    </UFormGroup>
    <UFormGroup label="Type of Event" name="overtitle">
      <UTextarea autoresize v-model="banner.overtitle" :rows="1" placeholder="Meet & Greet" />
    </UFormGroup>
    <PaneField label="Picture">
      <PanePicture v-model="banner.picture" :ratio="ratio" name="picture" />
    </PaneField>
    <PaneDateTime
      v-model:date="banner.date"
      v-model:time="banner.time"
    />
    <PaneField>
      <UTabs :items="tabs" v-model="banner.type">
        <template #event>
          <div class="border border-gray-500 rounded-md overflow-hidden">
            <UFormGroup label="Venue" name="venue">
              <UTextarea autoresize v-model="banner.venue" :rows="1" placeholder="Town Hall" />
            </UFormGroup>
            <UFormGroup label="Address" name="address">
              <UTextarea autoresize v-model="banner.address" :rows="1" placeholder="123 Fake Street" />
            </UFormGroup>
            <UFormGroup label="City / Town" name="municipality">
              <UTextarea autoresize v-model="banner.municipality" :rows="1" placeholder="Brussels" />
            </UFormGroup>
            <UFormGroup label="Country / Region" name="country" class="border-b-0">
              <UTextarea autoresize v-model="banner.country" :rows="1" placeholder="Belgium" />
            </UFormGroup>
          </div>
        </template>
        <template #interview>
          <div class="border border-gray-500 rounded-md">
            <UFormGroup label="Medium" name="medium">
              <UTextarea autoresize v-model="banner.medium" :rows="1" placeholder="BBC" />
            </UFormGroup>
            <PaneField label="Medium logo">
              <PaneLogo :presets="[{ key: 'test', label: 'rest' }]" v-model="banner.media" />
            </PaneField>
          </div>
        </template>
      </UTabs>
    </PaneField>
    <UFormGroup label="Extra Details" name="info">
      <UTextarea autoresize v-model="banner.info" :rows="1" />
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
    <PaneToggle label="Show For All wordmark">
      <UToggle v-model="banner.showForAll" />
    </PaneToggle>
    <PaneField label="Add-on Logo" borderless>
      <PaneLogo v-model="banner.logo" />
    </PaneField>
  </aside>
</template>