/**
 * Add custom css to the page's head so we can hide some stories from the sidebar
 * (for instance the Modal Content story)
 */
export function hidePagesFromSidebar() {
    const SELECTORS_TO_HIDE_FROM_SIDEBAR = `
        #components-modalcontent--modal-content {
          display: none !important;
        }
    `;

    const head = document.head || document.getElementsByTagName('head')[0];
    const style = document.createElement('style');
    head.appendChild(style);
    style.appendChild(
        document.createTextNode(SELECTORS_TO_HIDE_FROM_SIDEBAR)
    );
}