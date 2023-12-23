<script setup>
import domtoimage from 'dom-to-image'
import { saveAs } from 'file-saver'

const template = useTemplate()
const aspect = useState('aspect')

async function download () {
  const { width, height, downloadScale } = aspect.value
  console.log('Download at ', width * downloadScale, template)
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
  saveAs(blob, template.name + '.png')
}
</script>

<template>
  <div>
    <UButton @click="download">Download</UButton>
  </div>
</template>