import { Meta } from '@storybook/web-components';

export default {
    title: 'TESTS/Type Spacing Tests',
} as Meta;

const Template = () => {
    return `
        <main id="main" skippy-links-label="Inhaltsbereich">
            <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>
                </button>
                <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close">
                    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>
                </button>

                <ol class="breadcrumb__list" slot="list">
                    <li class="breadcrumb__item">
                        <a class="breadcrumb__link">Home</a>
                    </li>
                    <li class="breadcrumb__item">
                        <a href="/spacing-text-elements/" class="breadcrumb__link" aria-current="page" is-current="true">Spacing text elements</a>
                    </li>
                </ol>
            </toujou-breadcrumb>

            <span id="c2301"></span>

            <h2>Lorem ipsum dolor sit amet - h2</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h3>Lorem ipsum dolor sit amet - h3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h4>Lorem ipsum dolor sit amet - h4</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <h5>Lorem ipsum dolor sit amet - h5</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <span id="c2302"></span>

            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit - new element</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <span id="c2303"></span>

            <toujou-text-block class="text-block" text-block-media-position="inside-left">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img class="text-block__image" src="/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_8bcad544c1.png" width="433" height="289" data-width="1920" data-height="1280" srcset="/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_8bcad544c1.png 433w,/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_57fdb8c6ba.png 456w,/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_1f8542ab6c.png 593w,/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_dac55b2236.png 720w" sizes="(min-width: 960px) 720px,(min-width: 768px) 720px,(min-width: 480px) 720px,500px" data-focus-area="{&quot;x&quot;:640,&quot;y&quot;:426.66666666666663,&quot;width&quot;:640,&quot;height&quot;:426.66666666666663}" alt="" loading="lazy">
                    </figure>
                    <div class="text-block__content">
                        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit&nbsp;lorem ipsum dolor sit amet</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <span id="c2304"></span>

            <toujou-text-block class="text-block" text-block-column-count="2" text-block-media-position="">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit&nbsp;ipsum dolor sit amet</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <span id="c2305"></span>

            <toujou-text-block class="text-block" text-block-column-count="4" text-block-media-position="above">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img class="text-block__image" src="/fileadmin/_processed_/5/7/csm_test-chucks-ga5561e7fa_1920_a37d1d757d.jpg" width="366" height="206" data-width="1920" data-height="1080" srcset="/fileadmin/_processed_/5/7/csm_test-chucks-ga5561e7fa_1920_a37d1d757d.jpg 366w,/fileadmin/_processed_/5/7/csm_test-chucks-ga5561e7fa_1920_c423cdbaad.jpg 433w,/fileadmin/_processed_/5/7/csm_test-chucks-ga5561e7fa_1920_af9daa3bae.jpg 593w,/fileadmin/_processed_/5/7/csm_test-chucks-ga5561e7fa_1920_be1298ef7a.jpg 792w" sizes="(min-width: 960px) 792px,(min-width: 640px) 792px,(min-width: 480px) 640px,480px" data-focus-area="{&quot;x&quot;:640,&quot;y&quot;:457,&quot;width&quot;:640,&quot;height&quot;:457}" alt="" loading="lazy">
                    </figure>
                    <div class="text-block__content">
                        <h5>Lorem ipsum dolor sit amet consectetur&nbsp;</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
                        <p><a href="/" class="button button--primary button--shadow">Mehr Information</a></p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img class="text-block__image" src="/fileadmin/_processed_/4/6/csm_test-converse-g99a3bb276_1920_a485a910fc.jpg" width="366" height="206" data-width="1920" data-height="1080" srcset="/fileadmin/_processed_/4/6/csm_test-converse-g99a3bb276_1920_a485a910fc.jpg 366w,/fileadmin/_processed_/4/6/csm_test-converse-g99a3bb276_1920_4135a8972e.jpg 433w,/fileadmin/_processed_/4/6/csm_test-converse-g99a3bb276_1920_5e021a3085.jpg 593w,/fileadmin/_processed_/4/6/csm_test-converse-g99a3bb276_1920_7f2d3b3727.jpg 792w" sizes="(min-width: 960px) 792px,(min-width: 640px) 792px,(min-width: 480px) 640px,480px" data-focus-area="{&quot;x&quot;:640,&quot;y&quot;:425,&quot;width&quot;:640,&quot;height&quot;:425}" alt="" loading="lazy">
                    </figure>
                    <div class="text-block__content">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                        <p><a href="/" class="button button--primary button--shadow">Mehr Information</a></p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img class="text-block__image" src="/fileadmin/_processed_/c/7/csm_test-converse-ge9ee337c6_1920_9223c721b2.jpg" width="366" height="206" data-width="1920" data-height="1080" srcset="/fileadmin/_processed_/c/7/csm_test-converse-ge9ee337c6_1920_9223c721b2.jpg 366w,/fileadmin/_processed_/c/7/csm_test-converse-ge9ee337c6_1920_5aaf7b534c.jpg 433w,/fileadmin/_processed_/c/7/csm_test-converse-ge9ee337c6_1920_54ef10dcc7.jpg 593w,/fileadmin/_processed_/c/7/csm_test-converse-ge9ee337c6_1920_4a7fc818df.jpg 792w" sizes="(min-width: 960px) 792px,(min-width: 640px) 792px,(min-width: 480px) 640px,480px" data-focus-area="{&quot;x&quot;:640,&quot;y&quot;:425,&quot;width&quot;:640,&quot;height&quot;:425}" alt="" loading="lazy">
                    </figure>
                    <div class="text-block__content">
                        <h5>Lorem ipsum dolor sit amet</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
                        <p><a href="/" class="button button--primary button--shadow">Mehr Information</a></p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img class="text-block__image" src="/fileadmin/_processed_/e/5/csm_test-footwear-gae5db160e_1920_60106b4b19.jpg" width="366" height="206" data-width="1920" data-height="1080" srcset="/fileadmin/_processed_/e/5/csm_test-footwear-gae5db160e_1920_60106b4b19.jpg 366w,/fileadmin/_processed_/e/5/csm_test-footwear-gae5db160e_1920_9d66004e53.jpg 433w,/fileadmin/_processed_/e/5/csm_test-footwear-gae5db160e_1920_7943a51fa1.jpg 593w,/fileadmin/_processed_/e/5/csm_test-footwear-gae5db160e_1920_99f6872883.jpg 792w" sizes="(min-width: 960px) 792px,(min-width: 640px) 792px,(min-width: 480px) 640px,480px" data-focus-area="{&quot;x&quot;:640,&quot;y&quot;:640,&quot;width&quot;:640,&quot;height&quot;:640}" alt="" loading="lazy">
                    </figure>
                    <div class="text-block__content">
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing&nbsp;</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p><a href="/" class="button button--primary button--shadow">Mehr Information</a></p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <span id="c2307"></span>

            <toujou-text-block class="text-block" text-block-column-count="2" text-block-media-position="" text-block-third-direction="left">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h2>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.&nbsp;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <span id="c2308"></span>

            <h2 class="font--align-center">Frequently asked questions</h2>

            <span id="c2309"></span>

            <toujou-details-accordion class="details-accordion" single-expand-mode="">
                <toujou-details id="details-0" class="details" element-design="default">
                    <h3 slot="summary" class="details__title">Question 1</h3>
                    <p slot="summary" class="details__subtitle">Subtitle</p>
                    <toujou-icon class="icon " icon-name="chevron-down" slot="chevron"></toujou-icon>

                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <figure class="text-block__figure">
                                    <img class="text-block__image" src="/fileadmin/_processed_/3/5/csm_test-shoes-g83ed89960_1920_3f7c256a2a.jpg" width="401" height="266" data-width="1920" data-height="1272" srcset="/fileadmin/_processed_/3/5/csm_test-shoes-g83ed89960_1920_3f7c256a2a.jpg 401w,/fileadmin/_processed_/3/5/csm_test-shoes-g83ed89960_1920_32b2a567df.jpg 456w,/fileadmin/_processed_/3/5/csm_test-shoes-g83ed89960_1920_e41ecaf3d6.jpg 561w,/fileadmin/_processed_/3/5/csm_test-shoes-g83ed89960_1920_8d4b094e07.jpg 688w" sizes="(min-width: 768px) 688px,(min-width: 640px) 688px,(min-width: 480px) 640px,480px" data-focus-area="{&quot;x&quot;:640,&quot;y&quot;:424,&quot;width&quot;:640,&quot;height&quot;:424}" alt="" loading="lazy">
                                </figure>
                                <div class="text-block__content">
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.&nbsp;Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-1" class="details" element-design="default">
                    <h3 slot="summary" class="details__title">Question 2</h3>
                    <toujou-icon class="icon " icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <div class="text-block__content">
                                    <h3>With Headline</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

                <toujou-details id="details-2" class="details" element-design="default">
                    <h3 slot="summary" class="details__title">Question 3</h3>
                    <toujou-icon class="icon " icon-name="chevron-down" slot="chevron"></toujou-icon>
                    <div slot="content">
                        <toujou-text-block class="text-block" text-block-media-position="inside-right">
                            <toujou-text-block-column class="text-block-column">
                                <div class="text-block__content">
                                    <h3>With Headline</h3>
                                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                </div>
                            </toujou-text-block-column>
                        </toujou-text-block>
                    </div>
                </toujou-details>

            </toujou-details-accordion>

            <span id="c2310"></span>

            <h2 type-size="" type-color="font--grey" type-alignment="left">More about Chucks</h2>

            <span id="c2311"></span>

            <toujou-text-block class="text-block" text-block-column-count="3" text-block-media-position="">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h4>They</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.&nbsp;</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h4>look</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h4>good</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <span id="c2312"></span>

            <toujou-text-block class="text-block" text-block-column-count="4" text-block-media-position="">
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>What happens when this headline is way too long and the other columns have a less long length</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>Just a headline</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>Just a headline</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et&nbsp;</p>
                    </div>
                </toujou-text-block-column>
                <toujou-text-block-column class="text-block-column">
                    <div class="text-block__content">
                        <h3>Just a headline</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <span id="c2314"></span>

            <toujou-text-block class="text-block" text-block-media-position="beside-right">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                    </figure>
                    <div class="text-block__content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <span id="c2313"></span>

            <toujou-text-block class="text-block" text-block-media-position="beside-right">
                <toujou-text-block-column class="text-block-column">
                    <figure class="text-block__figure">
                        <img class="text-block__image" src="/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_8bcad544c1.png" width="433" height="289" data-width="1920" data-height="1280" srcset="/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_8bcad544c1.png 433w,/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_57fdb8c6ba.png 456w,/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_1f8542ab6c.png 593w,/fileadmin/_processed_/e/e/csm_test-sneakers-ge23e1ad74_1920_dac55b2236.png 720w" sizes="(min-width: 960px) 720px,(min-width: 768px) 720px,(min-width: 480px) 720px,500px" data-focus-area="{&quot;x&quot;:640,&quot;y&quot;:426.66666666666663,&quot;width&quot;:640,&quot;height&quot;:426.66666666666663}" alt="" loading="lazy">
                    </figure>
                    <div class="text-block__content">
                        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </toujou-text-block-column>
            </toujou-text-block>

            <span id="c2392"></span>

            <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. H1</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. H2</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. H3</h3>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. H4</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. H5</h5>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

        </main>
    `;
};

export const TypeSpacingTests = Template.bind({});


