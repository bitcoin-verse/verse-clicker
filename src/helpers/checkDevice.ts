export const checkIsMobile = () => {
  const regexp =
    /Mobi|Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regexp.test(navigator.userAgent);
};
