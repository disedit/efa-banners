<script setup>
const aspect = useState('aspect')

const banner = useState('slogan', () => ({
  layout: 'top',
  text: '',
  textSize: 100,
  picture: null,
  color: 'purple',
  showForAll: false,
  stylizeForAll: true,
  logos: [],
  disclaimer: null
}))

/* Ratios */
const ratio = useRatio(banner, {
  11: { full: 1, left: 1 / 2, top: 2, bottom: 2, right: 1 / 2 },
  45: { full: 4 / 5, top: 1.6, bottom: 1.6 },
  916: { full: 9 / 16, top: 1.13, bottom: 1.13 }
})

/* Layout Options */
const layouts = useLayouts(banner, [
  { label: 'Full picture', value: 'full', aspects: ['11', '45', '916'], icon: 'fluent-textbox-align-middle-24-regular' },
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
      <PaneTextEditor v-model="banner.text" />
    </UFormGroup>
    <PaneField label="Text size" name="textSize">
      <URange v-model="banner.textSize" :min="50" :max="150" />
    </PaneField>
    <PaneField label="Picture">
      <PanePicture v-model="banner.picture" :ratio="ratio" name="picture" />
    </PaneField>
    <Transition name="slide">
      <div v-if="banner.layout != 'full'">
        <PaneField label="Color">
          <PaneColors v-model="banner.color" name="color" />
        </PaneField>
      </div>
    </Transition>
    <PaneToggle label="Show For All Logo" borderless>
      <UToggle v-model="banner.showForAll" />
    </PaneToggle>
    <PaneToggle label="Stylize “for all”" help="If checked, this will replace any instance of “for all” in the text with the For All wordmark.">
      <UToggle v-model="banner.stylizeForAll" />
    </PaneToggle>
    <PaneMultiLogo v-model="banner.logos" />
    <PaneDisclaimer v-model="banner.disclaimer" />
  </aside>
</template>