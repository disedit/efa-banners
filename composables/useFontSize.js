export const useFontSize = (banner, propName, { min, max, maxLength, returnInt }) => {
  return computed(() => {
    const text = banner.value[propName]
    const scale = banner.value[`${propName}Size`] || 100
    if (!text) return
    const adjust = scale / 100
    const textLength = text.length > maxLength ? maxLength : text.length
    const propTextLength = textLength / maxLength
    const fontSize = (max * adjust) + propTextLength * ((min * adjust) - (max * adjust))
    return returnInt ? fontSize : `${fontSize}px`
  })
}