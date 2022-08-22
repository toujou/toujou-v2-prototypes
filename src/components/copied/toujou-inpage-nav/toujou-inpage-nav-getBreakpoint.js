/**
 * Get combined width of all navigation items
 *
 * @returns {number}
 * @private
 */

function getNavItemsWidth(navItems) {
  let navWidth = 0;
  Object.keys(navItems).forEach((navItem) => {
    const itemCS = getComputedStyle(navItems[navItem].item);
    const horizontalPadding = parseFloat(itemCS.paddingLeft) + parseFloat(itemCS.paddingRight);
    navWidth += navItems[navItem].item.offsetWidth + horizontalPadding;
  });
  return navWidth;
}

/**
 * Get width of an element
 *
 * @returns {number}
 * @private
 */
function getElementWidth(element) {
  if (!element) {
    return 0;
  }
  if (element.classList.contains('inpage-nav__label')) {
    const itemCS = getComputedStyle(element);
    const horizontalPadding = parseFloat(itemCS.paddingLeft) + parseFloat(itemCS.paddingRight);
    return element.offsetWidth + horizontalPadding;
  }
  return element.offsetWidth;
}

/**
 * Get inpage nav breakpoint
 * If the nav is centered we have to account for the cta button ("on each side" + a little buffer)
 *
 * @returns {number}
 * @private
 */
export default function getNavBreakpoint(navItems, navLabel, ctaElement, isCentered) {
  const navItemsWidth = getNavItemsWidth(navItems);
  const navLabelWidth = getElementWidth(navLabel);
  const ctaElementWidth = getElementWidth(ctaElement);
  // eslint-disable-next-line max-len
  return navItemsWidth + navLabelWidth + ctaElementWidth * (isCentered ? 3 : 1);
}
