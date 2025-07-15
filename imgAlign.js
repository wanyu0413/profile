function updateDivLeftMargin() {
  const mainContainer = document.querySelector('.container');
  if (mainContainer) {
    const computedStyle = getComputedStyle(mainContainer);
    const leftMargin = computedStyle.marginLeft;
    document.documentElement.style.setProperty('--container-left-margin', leftMargin);
  }
}

document.addEventListener("DOMContentLoaded", updateDivLeftMargin);
window.addEventListener("resize", updateDivLeftMargin);
