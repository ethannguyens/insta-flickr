export function mobileOS() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i)) return 'iOS';
  else if (userAgent.match(/Android/i)) return 'Android';
  else return 'unknown';
}

export function mobileDevice() {
  if (navigator.userAgent.match(/iPad|webOS|iPhone|iPod|Blackberry/i)) return true;
  else return false;
}

export function isTouchDevice() {
  return (('ontouchstart' in window)
  || (navigator.MaxTouchPoints > 0)
  || (navigator.msMaxTouchPoints > 0));
}
