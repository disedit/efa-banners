export const useLayouts = (banner, layouts) => {
  const aspect = useState('aspect')

  watch(aspect, (nextAspect) => {
    /* If current layout is available in next aspect, leave as is */
    const currentLayout = layouts.find(layout => layout.value === banner.value.layout)
    if (currentLayout.aspects.includes(nextAspect.id)) return
  
    /* Otherwise, revert back to default layout */
    const defaultLayout = layouts.find(layout => !!layout.default)

    if (defaultLayout) {
      banner.value.layout = defaultLayout.value
    } else {
      banner.value.layout = layouts[0].value
    }
  })

  return computed(() => {
    return layouts.filter(layout => layout.aspects.includes(aspect.value.id))
  })

}