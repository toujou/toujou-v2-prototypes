// import type { IWindow } from 'happy-dom';
// import { expect, describe, it, beforeEach, } from 'vitest';
//
// import '../toujou-details-accordion';
//
// declare global {
//     interface Window extends IWindow {}
// }
//
// describe('Toujou details accordion', async () => {
//     let accordionEl: Element | null = null;
//
//     beforeEach(async () => {
//         document.body.innerHTML = `
//             <toujou-details-accordion class="details-accordion">
//                 <toujou-details id="details-1" class="details" is-open="">
//                     <h3 slot="summary" class="details__title">This is the summary</h3>
//                     <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
//                     <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                     <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                 </toujou-details>
//
//                 <toujou-details id="details-2" class="details">
//                     <h3 slot="summary" class="details__title">I am just another simple title</h3>
//                     <p slot="summary" class="details__subtitle">I am a subtitle which complements the title</p>
//                     <toujou-icon class="icon details__chevron" icon-name="chevron-down" slot="chevron"></toujou-icon>
//                     <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                     <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//                 </toujou-details>
//             </toujou-details-accordion>
//         `;
//         await window.happyDOM.whenAsyncComplete();
//         await new Promise(resolve => setTimeout(resolve, 0));
//         accordionEl = document.body.querySelector('.details-accordion') || null;
//     });
//
//     it('can create element', () => {
//         expect(accordionEl).to.not.be.null;
//         expect(accordionEl?.nodeName).to.equal('TOUJOU-DETAILS-ACCORDION');
//     });
// });
