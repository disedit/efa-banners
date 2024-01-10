<script setup>
import domtoimage from 'dom-to-image'
import pkg from 'file-saver'
const { saveAs } = pkg

const template = useTemplate()
const aspect = useState('aspect')
const loading = ref(false)

async function download () {
  loading.value = true
  const toast = useToast()
  const { width, height, downloadScale } = aspect.value
  try {
    const blob = await domtoimage.toPng(
      document.getElementById('Banner'),
      {
        bgcolor: 'black',
        width: width * downloadScale,
        height: height * downloadScale,
        style: {
          transform: `scale(${downloadScale})`,
          transformOrigin: 'top left'
        }
      }
    )

    // Download banner on browser
    saveAs(blob, template.value.name + '.png')

    toast.add({ title: 'Banner generated and downloaded', icon: 'i-heroicons-check-circle' })
  } catch(e) {
    toast.add({ title: 'Error downloading banner', description: 'Refresh and try again', color: 'red' })
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <UButton
      icon="i-heroicons-arrow-down-tray"
      @click="download"
      color="purple"
      class="font-bold"
      :loading="loading">
      Download
    </UButton>
  </div>
</template>