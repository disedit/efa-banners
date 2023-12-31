export const useRatio = ({ aspect, banner}, ratios) => {
  const ratio = computed(() => {
    return ratios[aspect.value.id]?.[banner.value.layout]
  })

  return ratio
}