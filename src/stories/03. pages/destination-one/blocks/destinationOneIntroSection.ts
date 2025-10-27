export const renderDi1PageIntroSection = (pageType: string) => {
    return `
        <section class="chapter fragment__section" background-color="background">
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <img class=fragment__intro-logo src="https://picsum.photos/600" alt=""/>
                        <h1 class="fragment__intro-title" type-alignment="center">Destination One ${pageType} page</h1>
                        <p class="fragment__intro-description" type-alignment="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    `;
}
