// TOUJOU SMOOTH SCROLL
// Calculate and set CSS variables for the smooth scroll
// Docs: https://guide.dfau.de/doc/smooth-scroll-vuoCqfeMJP/

// GLOBAL VARIABLES
let calculatedScrollPaddingTop = 0;
let fixedElementsHeight = 0;

const docCStyle = getComputedStyle(document.documentElement);
const SELECTORS = '.topbar, .inpage-nav, .navigation--inpage';

enum CSS_VAR_NAMES {
    DEFINED_OFFSET = '--toujou-scroll-padding-offset',
    CALCULATED_PADDING = '--toujou-calculated-scroll-padding-top',
}

function calculateScrollPaddingTop(): void {
    // Get css variables values
    const toujouScrollPaddingTopOffset = parseInt(docCStyle.getPropertyValue(CSS_VAR_NAMES.DEFINED_OFFSET));

    if (toujouScrollPaddingTopOffset) {
        calculatedScrollPaddingTop += toujouScrollPaddingTopOffset;
    }

    // Calculate height of all fixed elements
    const fixedElements = Array.from(document.querySelectorAll(SELECTORS)) as HTMLElement[];
    if (fixedElements) {
        fixedElements.forEach((fixedElement => {
            fixedElementsHeight += fixedElement.offsetHeight;
        }));

        calculatedScrollPaddingTop += fixedElementsHeight;
    }

    // set css variable
    document.documentElement.style
        .setProperty(CSS_VAR_NAMES.CALCULATED_PADDING, `${calculatedScrollPaddingTop}px`);
}

export function initSmoothScroll() {
    const hasCssOverride = docCStyle.getPropertyValue(CSS_VAR_NAMES.CALCULATED_PADDING) || undefined;

    // If the smooth scroll padding override variable is set we don't need to do any calculations
    if (!hasCssOverride) {
        calculateScrollPaddingTop();
    }
}