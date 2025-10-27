const o=e=>`
        <section class="chapter fragment__section" background-color="background">
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <img class=fragment__intro-logo src="https://picsum.photos/600" alt=""/>
                        <h1 class="fragment__intro-title" type-alignment="center">Destination One ${e} page</h1>
                        <p class="fragment__intro-description" type-alignment="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </section>
    `,t=()=>`
        <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open" aria-label="Open breadcrumb menu">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
            </button>

            <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close" aria-label="Close breadcrumb menu">
                <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
            </button>

            <ol class="breadcrumb__list" slot="list">
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Home</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item One</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link">Item Two</a>
                </li>
                <li class="breadcrumb__item">
                    <a href="#" class="breadcrumb__link" aria-current="page">Item Three</a>
                </li>
            </ol>
        </toujou-breadcrumb>
    `;export{o as a,t as r};
