import{T as o}from"./badgeCustomConfig-oxGPBDYz.js";import{M as n}from"./topbar.docs-BOX7uLUy.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const f={title:"COMPONENTS/Topbar",parameters:{badges:[o.DONE],docs:{page:n},layout:"fullscreen"},argTypes:{},tags:["autodocs"]},l=()=>`
        <nav aria-label="Topbar Logo" class="test-topbar-logo">
            <a aria-label="Zur Startseite" class="test-topbar-logo__link" href="/">
                <img class="test-topbar-logo__logo test-topbar-logo__logo--svg" src="https://picsum.photos/300/150" alt="Topbar Logo"/>
            </a>
        </nav>
    `,u=()=>`
        <ul class="test-topbar-actions">
            <li class="test-topbar-actions__item">
                <a href="#" class="test-topbar-actions__link">
                    <span class="test-topbar-actions__text">Contact</span>
                </a>
            </li>
            <li class="test-topbar-actions__item">
                <a href="#" class="test-topbar-actions__link">
                    <span class="test-topbar-actions__text">Like</span>
                </a>
            </li>
            <li class="test-topbar-actions__item">
                <a href="#" class="test-topbar-actions__link">
                    <span class="test-topbar-actions__text">Suche</span>
                </a>
            </li>
        </ul>
    `,s=()=>`
        <nav class="test-language-picker" aria-label="Language picker">
            <ul class="test-language-picker__list">
                <li class="test-language-picker__item">
                    <a href="#" class="test-language-picker__link" lang="en" hreflang="en" aria-current="true" aria-label="English">
                        <span class="test-language-picker__ico-code">EN</span>
                    </a>
                </li>
                <li class="test-language-picker__item">
                    <a href="#" class="test-language-picker__link" lang="de" hreflang="de" aria-label="Deutsch">
                        <span class="test-language-picker__ico-code">DE</span>
                    </a>
                </li>
                <li class="test-language-picker__item">
                    <a href="#" class="test-language-picker__link" lang="pt" hreflang="pt" aria-label="Português">
                        <span class="test-language-picker__ico-code">PT</span>
                    </a>
                </li>
            </ul>
        </nav>
    `,r=()=>`
        <nav class="test-main-nav">
            <ul class="test-main-nav__list" nav-level="1">
                <li class="test-main-nav__item" id="lev-1-id-1" is="t-main-nav-li-with-popover-subnav">
                    <a href="#" class="test-main-nav__link">One</a>
                    <button
                        class="test-main-nav__subnav-toggle"
                        is="t-main-nav-toggle"
                    >
                        <toujou-icon class="icon" icon-name="chevron-down" icon-color="font" icon-size="normal"></toujou-icon>
                    </button>
                    <ul
                        id="sub-nav-level-2-id-1"
                        class="test-main-nav__list"
                        nav-level="2"
                        popover
                    >
                        <li class="test-main-nav__item" id="lev-2-id-1">
                            <a href="#" class="test-main-nav__link">Porto</a>
                        </li>
                        <li class="test-main-nav__item" id="lev-2-id-2" is="t-main-nav-li-with-popover-subnav">
                            <a href="#" class="test-main-nav__link">Munich</a>
                            <button
                                class="test-main-nav__subnav-toggle"
                                is="t-main-nav-toggle"
                            >
                                <toujou-icon class="icon" icon-name="chevron-down" icon-color="font" icon-size="normal"></toujou-icon>
                            </button>
                            <ul
                                id="sub-nav-level-2-id-2"
                                class="test-main-nav__list" nav-level="3"
                                popover
                            >
                                <li class="test-main-nav__item">
                                    <a href="#" class="test-main-nav__link">Dark Blue</a>
                                </li>
                                <li class="test-main-nav__item">
                                    <a href="#" class="test-main-nav__link">Dark yellow</a>
                                </li>
                                <li class="test-main-nav__item">
                                    <a href="#" class="test-main-nav__link">Light Green</a>
                                </li>
                                <li class="test-main-nav__item">
                                    <a href="#" class="test-main-nav__link">Purple</a>
                                </li>
                            </ul>
                        </li>
                        <li class="test-main-nav__item" id="lev-2-id-3">
                            <a href="#" class="test-main-nav__link">London</a>
                        </li>
                        <li class="test-main-nav__item" id="lev-2-id-4">
                            <a href="#" class="test-main-nav__link">New York</a>
                        </li>
                    </ul>
                </li>
                <li class="test-main-nav__item" id="lev-1-id-2">
                    <a href="#" class="test-main-nav__link">Two</a>
                </li>
                <li class="test-main-nav__item" id="lev-1-id-3">
                    <a href="#" class="test-main-nav__link">Three</a>
                </li>
                <li class="test-main-nav__item" id="lev-1-id-4" is="t-main-nav-li-with-popover-subnav">
                    <a href="#" class="test-main-nav__link">A very long 4th item</a>
                    <button
                        class="test-main-nav__subnav-toggle"
                        is="t-main-nav-toggle"
                    >
                        <toujou-icon class="icon" icon-name="chevron-down" icon-color="font" icon-size="normal"></toujou-icon>
                    </button>
                    <ul
                        id="sub-nav-level-2-id-5"
                        class="test-main-nav__list"
                        nav-level="2"
                        popover
                    >
                        <li class="test-main-nav__item" id="lev-2-id-5">
                            <a href="#" class="test-main-nav__link">Porto</a>
                        </li>
                        <li class="test-main-nav__item" id="lev-2-id-6" is="t-main-nav-li-with-popover-subnav">
                            <a href="#" class="test-main-nav__link">Munich</a>
                            <button
                                class="test-main-nav__subnav-toggle"
                                is="t-main-nav-toggle"
                            >
                                <toujou-icon class="icon" icon-name="chevron-down" icon-color="font" icon-size="normal"></toujou-icon>
                            </button>
                            <ul
                                id="sub-nav-level-2-id-8"
                                class="test-main-nav__list" nav-level="3"
                                popover
                            >
                                <li class="test-main-nav__item">
                                    <a href="#" class="test-main-nav__link">Very Very Dark Blue</a>
                                </li>
                                <li class="test-main-nav__item">
                                    <a href="#" class="test-main-nav__link">Very Very Dark yellow</a>
                                </li>
                                <li class="test-main-nav__item">
                                    <a href="#" class="test-main-nav__link">Light Green</a>
                                </li>
                                <li class="test-main-nav__item">
                                    <a href="#" class="test-main-nav__link">Purple</a>
                                </li>
                            </ul>
                        </li>
                        <li class="test-main-nav__item" id="lev-2-id-7">
                            <a href="#" class="test-main-nav__link">London</a>
                        </li>
                        <li class="test-main-nav__item" id="lev-2-id-8">
                            <a href="#" class="test-main-nav__link">New York</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    `,c=()=>`
        <toujou-topbar-test class="test-topbar">
            ${l()}
            ${u()}
            ${s()}
            ${r()}
        </toujou-topbar-test>
    `,m=()=>`
        ${c()}

        <main>
            <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
                </button>

                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
                </button>

                <ol class="breadcrumb__list" slot="list">
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Home</a>
                    </li>
                </ol>
            </toujou-breadcrumb>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </main>
    `,i=m.bind({});var e,t,a;i.parameters={...i.parameters,docs:{...(e=i.parameters)==null?void 0:e.docs,source:{originalSource:`() => {
  // @ts-ignore
  // document.documentElement.style.setProperty('--topbar-height', \`var(--topbar-height-\${args.logoSize})\`);

  return \`
        \${renderTestTopbar()}

        <main>
            <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
                </button>

                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
                </button>

                <ol class="breadcrumb__list" slot="list">
                    <li class="breadcrumb__item">
                        <a href="#" class="breadcrumb__link">Home</a>
                    </li>
                </ol>
            </toujou-breadcrumb>
            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <toujou-text-block class="text-block" text-block-column-count="1">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h1>Left aligned H1 headline</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <h2>Left aligned H1 headline</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>
        </main>
    \`;
}`,...(a=(t=i.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const q=["TopbarDesktopTest"];export{i as TopbarDesktopTest,q as __namedExportsOrder,f as default};
