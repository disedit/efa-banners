import aspects from '~/templates/aspects.js'

export const useAspect = () => {
  return {
    aspect: useState('aspect'),
    aspects
  }
}
