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
declare class TopbarActionLinkWithKeyboardBehaviour {
    private element;
    /**
     * @constructor
     * @param {TopbarActionElement} element - The '.topbar__actions-link' DOM element (expected to be a <label>
     */
    constructor(element: TopbarActionElement);
    /**
     * @private
     * @returns {boolean} True if the element is a <label> tag.
     */
    private isFocusableLabelElement;
    /**
     * @private
     * Ensures the element is focusable (tabindex="0") and adds a keydown listener to handle Enter and Space keys.
     * @returns {void}
     */
    private enableKeyboardActivation;
    /**
     * @private
     * Finds the associated form control using the 'for' attribute and dispatches a synthetic click event on it.
     * @returns {void}
     */
    private activateAssociatedControl;
}
/**
 * @function initTopbarActionsKeyboardBehavior
 * Get all '.topbar__actions-link' elements and initializes the keyboard behavior class for them.
 * @returns {void}
 */
export declare function initTopbarActionsKeyboardBehavior(): void;
export {};
