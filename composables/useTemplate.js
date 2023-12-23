import templates from '~/templates/templates.js'

export const useTemplate = () => {
  const route = useRoute()
  const template = computed(() => templates.find(t => t.id === route.params?.template))
  return template
}
