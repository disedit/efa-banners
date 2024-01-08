<script setup>
const aspect = useState('aspect')

const banner = useState('quote', () => ({
  layout: 'top',
  text: '',
  author: '',
  description: '',
  textSize: 100,
  picture: null,
  color: 'purple',
  textColor: 'beige',
  showForAll: true,
  showLogos: true,
  logo: null
}))

/* Ratios */
const ratio = useRatio(banner, {
  11: { left: 1, top: 2, bottom: .5, right: .75 },
  45: { top: 2, bottom: 1 },
  916: { top: 2, bottom: 1 }
})

/* Layout Options */
const layouts = useLayouts(banner, [
  { label: 'Top', value: 'top', aspects: ['11', '45', '916'], icon: 'fluent-textbox-align-top-24-regular' },
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
    <UFormGroup label="Quote" name="quote">
      <UTextarea autoresize v-model="banner.text" placeholder="We believe in a Europe for all" :rows="4" />
    </UFormGroup>
    <UFormGroup label="Author" name="author">
      <UTextarea autoresize v-model="banner.author" placeholder="Raül Romeva" :rows="1" />
    </UFormGroup>
    <UFormGroup label="Description" name="description">
      <UTextarea autoresize v-model="banner.description" placeholder="Spitzenkandidat" :rows="1" />
    </UFormGroup>
    <PaneField label="Text size" name="textSize">
      <URange v-model="banner.textSize" :min="50" :max="150" />
    </PaneField>
    <PaneField label="Picture">
      <PanePicture v-model="banner.picture" :ratio="ratio" name="picture" />
    </PaneField>
    <PaneField label="Background Color">
      <PaneColors v-model="banner.color" name="color" />
    </PaneField>
    <PaneField label="Text Color">
      <PaneColors v-model="banner.color" name="color" />
    </PaneField>
    <PaneToggle label="Show For All wordmark" borderless>
      <UToggle v-model="banner.showForAll" />
    </PaneToggle>
    <PaneToggle label="Show logo(s)">
      <UToggle v-model="banner.showLogos" />
    </PaneToggle>
    <PaneField label="Add-on Logo" borderless>
      <PaneLogo v-model="banner.logo" />
    </PaneField>
  </aside>
</template>