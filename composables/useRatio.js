export const useRatio = (banner, ratios) => {
  const aspect = useState('aspect')
  
  const ratio = computed(() => {
    return ratios[aspect.value.id]?.[banner.value.layout]
  })

  return ratio
}