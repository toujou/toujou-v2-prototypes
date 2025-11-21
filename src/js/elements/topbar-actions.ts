// --- Create the necessary augmented Types ---
/**
 * @interface TopbarActionElement
 * Augments the standard HTMLElement interface to include an instance of TopbarActionLinkWithKeyboardBehaviour.
 */
declare global {
    interface TopbarActionElement extends HTMLElement {
        topbarActionLinkWithKeyboardBehaviourInstance?: TopbarActionLinkWithKeyboardBehaviour;
    }
}

/**
 * @class TopbarActionLinkWithKeyboardBehaviour
 * Enhances a focusable <label> element with keyboard activation (Enter/Space)
 * This mimics standard button/link activation behavior for accessibility.
 */
class TopbarActionLinkWithKeyboardBehaviour {
    private element: TopbarActionElement;

    /**
     * @constructor
     * @param {TopbarActionElement} element - The '.topbar__actions-link' DOM element (expected to be a <label>
     */
    constructor(element: TopbarActionElement) {
        this.element = element;

        if (this.isFocusableLabelElement()) {
            this.enableKeyboardActivation();
        }
    }

    /**
     * @private
     * @returns {boolean} True if the element is a <label> tag.
     */
    private isFocusableLabelElement(): boolean {
        return this.element.tagName.toLowerCase() === 'label';
    }

    /**
     * @private
     * Ensures the element is focusable (tabindex="0") and adds a keydown listener to handle Enter and Space keys.
     * @returns {void}
     */
    private enableKeyboardActivation(): void {
        // 1. Ensure the element is keyboard-focusable
        if (this.element.getAttribute('tabindex') === null) {
            this.element.setAttribute('tabindex', '0');
        }

        // 2. Add keyboard event handling
        this.element.addEventListener('keydown', (event: KeyboardEvent) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                this.activateAssociatedControl();
            }
        });
    }

    /**
     * @private
     * Finds the associated form control using the 'for' attribute and dispatches a synthetic click event on it.
     * @returns {void}
     */
    private activateAssociatedControl(): void {
        const forId = this.element.getAttribute("for");
        if (!forId) return;

        const targetInput = document.getElementById(forId);

        if (targetInput) {
            // Use a synthetic click event to trigger the associated contro
            // This does not add focus to the targetInput (which using .click() would do)
            const event = new MouseEvent("click", {
                bubbles: true,
                cancelable: true,
                composed: true
            });

            targetInput.dispatchEvent(event);
        }
    }
}

/**
 * @function initTopbarActionsKeyboardBehavior
 * Get all '.topbar__actions-link' elements and initializes the keyboard behavior class for them.
 * @returns {void}
 */
export function initTopbarActionsKeyboardBehavior() {
    console.log('1');
    const topbarActionElements = document.querySelectorAll<TopbarActionElement>('.topbar__actions-link');

    // Iterate over elements and initialize the behavior if not already present
    topbarActionElements.forEach((element: TopbarActionElement) => {
        if (!element.topbarActionLinkWithKeyboardBehaviourInstance) {
            element.topbarActionLinkWithKeyboardBehaviourInstance = new TopbarActionLinkWithKeyboardBehaviour(element);
        }
    })
}
