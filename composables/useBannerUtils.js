export const useBannerUtils = (banner) => {
  const colorfulLogo = computed(() => {
    const isBeige = banner.value.color === 'beige';
    const isFullLayoutWithPicture = banner.value.layout === 'full' && banner.value.picture;
    const isLeftOrBottomLayout = ['left', 'bottom'].includes(banner.value.layout);
  
    return isBeige && !isFullLayoutWithPicture && !isLeftOrBottomLayout;
  })
  
  return {
    colorfulLogo
  }
}