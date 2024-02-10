<script setup>
const aspect = useState('aspect')

/* Banner properties */
const banner = useState('event', () => ({
  layout: 'top',
  type: 0,
  title: '',
  titleSize: 100,
  overtitle: '',
  date: '',
  time: '',
  customDate: null,
  picture: null,
  venue: '',
  address: '',
  municipality: '',
  country: '',
  info: '',
  medium: '',
  medium_logo: '',
  color: 'purple',
  titleOverPicture: false,
  accentOnTitle: false,
  showForAll: true,
  logos: [],
  disclaimer: null
}))

/* Ratios */
const ratio = useRatio(banner, {
  11: { top: 2, bottom: 2, left: .5, right: .5 },
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
      <UTextarea autoresize v-model="banner.title" :rows="1" />
    </UFormGroup>
    <PaneField label="Text size" name="titleSize">
      <URange v-model="banner.titleSize" :min="50" :max="150" />
    </PaneField>
    <UFormGroup label="Type of Event" name="overtitle">
      <UTextarea autoresize v-model="banner.overtitle" :rows="1" />
    </UFormGroup>
    <PaneField label="Picture" v-if="aspect.id !== '169'">
      <PanePicture v-model="banner.picture" :ratio="ratio" name="picture" />
    </PaneField>
    <PaneDateTime
      v-model:date="banner.date"
      v-model:time="banner.time"
      v-model:custom="banner.customDate"
    />
    <PaneField>
      <UTabs :items="tabs" v-model="banner.type">
        <template #event>
          <div class="border border-gray-500 rounded-md overflow-hidden">
            <UFormGroup label="Venue" name="venue">
              <UTextarea autoresize v-model="banner.venue" :rows="1" />
            </UFormGroup>
            <UFormGroup label="Address" name="address">
              <UTextarea autoresize v-model="banner.address" :rows="1" />
            </UFormGroup>
            <UFormGroup label="City / Town" name="municipality">
              <UTextarea autoresize v-model="banner.municipality" :rows="1" />
            </UFormGroup>
            <UFormGroup label="Country / Region" name="country" class="border-b-0">
              <UTextarea autoresize v-model="banner.country" :rows="1" />
            </UFormGroup>
          </div>
        </template>
        <template #interview>
          <div class="border border-gray-500 rounded-md">
            <UFormGroup label="Medium" name="medium">
              <UTextarea autoresize v-model="banner.medium" :rows="1" />
            </UFormGroup>
            <PaneField label="Medium logo" borderless>
              <PaneLogo :presets="[]" v-model="banner.medium_logo" />
            </PaneField>
          </div>
        </template>
      </UTabs>
    </PaneField>
    <UFormGroup label="Extra Details" name="info"  v-if="aspect.id !== '169'">
      <UTextarea autoresize v-model="banner.info" :rows="1" />
    </UFormGroup>
    <PaneField label="Color">
      <PaneColors v-model="banner.color" name="color" />
    </PaneField>
    <PaneToggle v-if="banner.layout === 'top' && aspect.id !== '169' && banner.picture" label="Title over Picture" borderless>
      <UToggle v-model="banner.titleOverPicture" />
    </PaneToggle>
    <PaneToggle label="Accent Color on Title" borderless>
      <UToggle v-model="banner.accentOnTitle" />
    </PaneToggle>
    <PaneToggle label="Show For All Logo">
      <UToggle v-model="banner.showForAll" />
    </PaneToggle>
    <PaneMultiLogo v-model="banner.logos" />
    <PaneDisclaimer v-model="banner.disclaimer" />
  </aside>
</template>