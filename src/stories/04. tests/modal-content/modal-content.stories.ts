import { Meta } from '@storybook/web-components';

export default {
    title: 'TESTS/Modal Content',
} satisfies Meta;

function renderDummyTextContent() {
    return `
        <h2>Some more information</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <h3>Nice headline</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    `
}

const Template = () => {

    window.addEventListener('click', (event: Event) => {
        const clickTarget = event.target as HTMLElement;
        if (clickTarget.getAttribute('id') === "add-more-content-button") {
            const extraContentContainer = document.querySelector('#extra-content-container');
            const newContent = renderDummyTextContent();

            if (!extraContentContainer || !newContent) return;

            extraContentContainer.insertAdjacentHTML('beforeend', newContent);
        }
    })

    return `
        <h1>MODAL content</h1>
        <p>Dummy page to test the toujou-modal element.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        ${renderDummyTextContent()}
        ${renderDummyTextContent()}

        <div id="extra-content-container" style="border: 2px solid var(--color-secondary); padding: var(--spacing-normal); margin-bottom: var(--spacing-normal);">
            <h2>Click the button to add extra content to the page</h2>
            <p>This is a good way to test if the modal window can resize correctly</p>
        </div>

        <button id="add-more-content-button" button-variant="primary" class="button">Add more content</button>
    `;

};

export const ModalContent = Template.bind({});


