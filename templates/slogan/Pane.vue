<script setup>
const aspect = useState('aspect')

const banner = useState('slogan', () => ({
  layout: 'top',
  text: '',
  picture: null,
  color: 'purple',
  showForAll: true,
  logo: null
}))

/* Ratios */
const ratio = useRatio(banner, {
  11: { full: 1, left: 1, top: 2, bottom: .5, right: .75 },
  45: { full: 1, top: 2, bottom: 1 },
  916: { full: 1, top: 2, bottom: 1 }
})

/* Layout Options */
const layouts = useLayouts(banner, [
  { label: 'Full picture', value: 'full', aspects: ['11', '45', '916'], icon: 'fluent-textbox-align-top-24-regular' },
  { label: 'Top', value: 'top', aspects: ['11', '45', '916'], default: true, icon: 'fluent-textbox-align-top-24-regular' },
  { label: 'Bottom', value: 'bottom', aspects: ['11', '45', '916'], icon: 'fluent-textbox-align-bottom-24-regular' },
  { label: 'Left', value: 'left', aspects: ['11'], icon: 'fluent-textbox-align-bottom-rotate-90-24-regular' },
  { label: 'Right', value: 'right', aspects: ['11'], icon: 'fluent-textbox-align-top-rotate-90-24-regular' }
])
</script>

<template>
  <aside>
    <PaneField label="Layout">
      <PaneRadioButtons
        v-model="banner.layout"
        :options="layouts"
      />
    </PaneField>
    <UFormGroup label="Text" name="text">
      <UTextarea autoresize v-model="banner.text" placeholder="We believe in a Europe for all" :rows="4" />
    </UFormGroup>
    <PaneField label="Picture">
      <PanePicture v-model="banner.picture" :ratio="ratio" name="picture" />
    </PaneField>
    <PaneField label="Color">
      <PaneColors v-model="banner.color" name="color" />
    </PaneField>
    <PaneToggle label="Show For All logo">
      <UToggle v-model="banner.showForAll" />
    </PaneToggle>
    <PaneField label="Add-on Logo" borderless>
      <PaneLogo v-model="banner.logo" />
    </PaneField>
  </aside>
</template>