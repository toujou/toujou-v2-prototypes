import{T as n}from"./badgeCustomConfig-oxGPBDYz.js";import{M as s}from"./blog-post.docs-i9NIhF1E.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const g={title:"PAGES/BlogPost",parameters:{badges:[n.DONE],docs:{page:s}},argTypes:{hasAvatar:{table:{category:"Blog post Settings",defaultValue:{summary:"true"}},name:"Author has avatar",description:"Toggle between a post page where author avatar is or isn't available",control:{type:"boolean"},defaultValue:["true"],required:!0}},tags:["autodocs"]},c=o=>(console.log(o),`
        <div class="blog-post">
            <section>
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h1>Teaser section</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </section>

            <div class="post-data">
                <a href="#" class="post-data__author">
                    ${o.hasAvatar?`
                        <figure class="post-data__author-figure">
                            <img src="https://i.pravatar.cc/80?img=27" alt="Post author avatar" class="post-data__author-avatar">
                        </figure>
                        `:'<toujou-icon class="icon" icon-size="ms" icon-color="font" icon-name="account"></toujou-icon>'}

                    <span class="post-data__author-name">Luke Skywalker</span>
                </a>
                <time class="post-data__date" datetime="T09:00P11H">
                    <toujou-icon class="icon" icon-size="ms" icon-color="font" icon-name="calendar-day"></toujou-icon>
                    <span class="post-data__date-time">30.01.2023</span>
                </time>
                <ul class="post-data__categories">
                    <li class="post-data__category">
                        <a href="#" class="post-data__category-link">
                        <toujou-icon class="icon" icon-size="ms" icon-color="font" icon-name="bookmark-filled"></toujou-icon>
                            <span class="post-data__category-name">Category 1</span>
                        </a>
                    </li>
                    <li class="post-data__category">
                        <a href="#" class="post-data__category-link">
                            <span class="post-data__category-name">Category 2</span>
                        </a>
                    </li>
                </ul>
            </div>

            <section>
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h1>Blog post content</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>

                <toujou-text-block class="text-block" text-block-column-count="2" text-block-media-position="above">
                    <toujou-text-block-column class="text-block-column">
                        <figure class="text-block__figure">
                            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--16-9">
                            <toujou-media-info class="media-info">
                                <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                                </button>
                                <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                                </button>
                                <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                                <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                            </toujou-media-info>
                        </figure>
                        <div class="text-block__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                        <figure class="text-block__figure">
                            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--16-9">
                            <toujou-media-info class="media-info">
                                <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                                </button>
                                <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                                </button>
                                <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                                <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                            </toujou-media-info>
                        </figure>
                        <div class="text-block__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </section>

            <ul class="post-tags">
                <li class="post-tags__item">
                    <a href="#" class="post-tags__link">
                        <toujou-icon class="icon" icon-name="tag-filled" icon-color="font" icon-size="ms"></toujou-icon>
                        <span class="post-tags__name">Tag 1</span>
                    </a>
                </li>
                <li class="post-tags__item">
                    <a href="#" class="post-tags__link">
                        <span class="post-tags__name">Tag 2</span>
                    </a>
                </li>
                <li class="post-tags__item">
                    <a href="#" class="post-tags__link">
                        <span class="post-tags__name">Tag 3</span>
                    </a>
                </li>
            </ul>

            <section class="post-comments">
                <h3 class="post-comments__title">Comments</h3>
                <ul class="post-comments__list">
                    <li class="post-comments__item">
                        <div class="post-comments__data">
                            <p class="post-comments__author">Luke Skywalker</p>
                            <time class="post-comments__date" datetime="T09:00P11H">30.01.2023, 14:32</time>
                        </div>
                        <p class="post-comments__comment">
                            This is a comment made on the blog post
                        </p>
                    </li>
                    <li class="post-comments__item">
                        <div class="post-comments__data">
                            <p class="post-comments__author">Han Solo</p>
                            <time class="post-comments__date" datetime="T09:00P11H">22.12.2022, 08:23</time>
                        </div>
                        <p class="post-comments__comment">
                            Now that we are approaching Christmas we can leave comments on blog post
                        </p>
                    </li>
                    <li class="post-comments__item">
                        <div class="post-comments__data">
                            <p class="post-comments__author">Jabba the Hutt</p>
                            <time class="post-comments__date" datetime="T09:00P11H">14.11.2022, 20:17</time>
                        </div>
                        <p class="post-comments__comment">
                            Let us look up and enjoy the sun on our faces!
                        </p>
                    </li>
                </ul>

                <form class="form post-comments__form">
                    <h4 class="post-comments__title">Write comment</h4>

                    <toujou-input-group class="input-group input-group--text input-group--required">
                        <label for="testform-1000091-text-1" class="input-label">Name</label>
                        <input placeholder="Max Mustermann"
                               required="required"
                               data-pristine-required-message-de="The given subject was empty."
                               class="input input--text"
                               id="testform-1000091-text-1"
                               type="text" name="tx_form_formframework[testform-1000091][text-1]"
                               value="">
                    </toujou-input-group>

                    <toujou-input-group class="input-group input-group--text input-group--required">
                        <label for="testform-1000091-text-2" class="input-label">Email</label>
                        <input placeholder="max.mustermann@mail.com"
                               required="required"
                               data-pristine-required-message-de="The given subject was empty."
                               class="input input--text"
                               id="testform-1000091-text-2"
                               type="email" name="tx_form_formframework[testform-1000091][text-2]"
                               value="">
                    </toujou-input-group>

                    <toujou-input-group class="input-group input-group--textarea">
                        <label class="input-label" for="testform-1000091-textarea-1">Comment</label>
                        <textarea placeholder="Your comment"
                                  required="required"
                                  data-pristine-required-message-de="The given subject was empty."
                                  class="form-control input input--textarea"
                                  id="testform-1000091-textarea-1"
                                  name="tx_form_formframework[testform-1000091][textarea-1]"></textarea>
                    </toujou-input-group>

                    <nav class="form-navigation" role="toolbar">
                        <span class="form-navigation__submit">
                            <button is="toujou-button"
                                    class="button form-navigation__button"
                                    button-variant="primary"
                                    button-icon-position="right"
                                    type="submit"
                                    name="tx_form_formframework[kontaktformular-8][__currentPage]"
                                    value="2">
                                Submit
                            </button>
                        </span>
                    </nav>
                </form>

            </section>

        </div>

    `),t=c.bind({});t.args={hasAvatar:!0};var e,a,i;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`(args: BlogPostStoryProps) => {
  console.log(args);
  return \`
        <div class="blog-post">
            <section>
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h1>Teaser section</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </section>

            <div class="post-data">
                <a href="#" class="post-data__author">
                    \${args.hasAvatar ? \`
                        <figure class="post-data__author-figure">
                            <img src="https://i.pravatar.cc/80?img=27" alt="Post author avatar" class="post-data__author-avatar">
                        </figure>
                        \` : \`<toujou-icon class="icon" icon-size="ms" icon-color="font" icon-name="account"></toujou-icon>\`}

                    <span class="post-data__author-name">Luke Skywalker</span>
                </a>
                <time class="post-data__date" datetime="T09:00P11H">
                    <toujou-icon class="icon" icon-size="ms" icon-color="font" icon-name="calendar-day"></toujou-icon>
                    <span class="post-data__date-time">30.01.2023</span>
                </time>
                <ul class="post-data__categories">
                    <li class="post-data__category">
                        <a href="#" class="post-data__category-link">
                        <toujou-icon class="icon" icon-size="ms" icon-color="font" icon-name="bookmark-filled"></toujou-icon>
                            <span class="post-data__category-name">Category 1</span>
                        </a>
                    </li>
                    <li class="post-data__category">
                        <a href="#" class="post-data__category-link">
                            <span class="post-data__category-name">Category 2</span>
                        </a>
                    </li>
                </ul>
            </div>

            <section>
                <toujou-text-block class="text-block" text-block-column-count="1">
                    <toujou-text-block-column class="text-block-column">
                        <div class="text-block__content">
                            <h1>Blog post content</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>

                <toujou-text-block class="text-block" text-block-column-count="2" text-block-media-position="above">
                    <toujou-text-block-column class="text-block-column">
                        <figure class="text-block__figure">
                            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--16-9">
                            <toujou-media-info class="media-info">
                                <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                                </button>
                                <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                                </button>
                                <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                                <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                            </toujou-media-info>
                        </figure>
                        <div class="text-block__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </toujou-text-block-column>
                    <toujou-text-block-column class="text-block-column">
                        <figure class="text-block__figure">
                            <img src="https://picsum.photos/1200/1200" alt="beautiful image" class="text-block__image text-block__image--16-9">
                            <toujou-media-info class="media-info">
                                <button slot="open-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                                </button>
                                <button slot="close-button" class="media-info__toggle" aria-label="Toggle the image caption and / or copyright">
                                    <toujou-icon class="icon" icon-color="background" icon-name="close" icon-size="ms"></toujou-icon>
                                </button>
                                <figpaction slot="figcaption" class="media-info__figcaption">This is a beautiful description</figpaction>
                                <small slot="copyright" class="media-info__copyright">@Nice photographer</small>
                            </toujou-media-info>
                        </figure>
                        <div class="text-block__content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </toujou-text-block-column>
                </toujou-text-block>
            </section>

            <ul class="post-tags">
                <li class="post-tags__item">
                    <a href="#" class="post-tags__link">
                        <toujou-icon class="icon" icon-name="tag-filled" icon-color="font" icon-size="ms"></toujou-icon>
                        <span class="post-tags__name">Tag 1</span>
                    </a>
                </li>
                <li class="post-tags__item">
                    <a href="#" class="post-tags__link">
                        <span class="post-tags__name">Tag 2</span>
                    </a>
                </li>
                <li class="post-tags__item">
                    <a href="#" class="post-tags__link">
                        <span class="post-tags__name">Tag 3</span>
                    </a>
                </li>
            </ul>

            <section class="post-comments">
                <h3 class="post-comments__title">Comments</h3>
                <ul class="post-comments__list">
                    <li class="post-comments__item">
                        <div class="post-comments__data">
                            <p class="post-comments__author">Luke Skywalker</p>
                            <time class="post-comments__date" datetime="T09:00P11H">30.01.2023, 14:32</time>
                        </div>
                        <p class="post-comments__comment">
                            This is a comment made on the blog post
                        </p>
                    </li>
                    <li class="post-comments__item">
                        <div class="post-comments__data">
                            <p class="post-comments__author">Han Solo</p>
                            <time class="post-comments__date" datetime="T09:00P11H">22.12.2022, 08:23</time>
                        </div>
                        <p class="post-comments__comment">
                            Now that we are approaching Christmas we can leave comments on blog post
                        </p>
                    </li>
                    <li class="post-comments__item">
                        <div class="post-comments__data">
                            <p class="post-comments__author">Jabba the Hutt</p>
                            <time class="post-comments__date" datetime="T09:00P11H">14.11.2022, 20:17</time>
                        </div>
                        <p class="post-comments__comment">
                            Let us look up and enjoy the sun on our faces!
                        </p>
                    </li>
                </ul>

                <form class="form post-comments__form">
                    <h4 class="post-comments__title">Write comment</h4>

                    <toujou-input-group class="input-group input-group--text input-group--required">
                        <label for="testform-1000091-text-1" class="input-label">Name</label>
                        <input placeholder="Max Mustermann"
                               required="required"
                               data-pristine-required-message-de="The given subject was empty."
                               class="input input--text"
                               id="testform-1000091-text-1"
                               type="text" name="tx_form_formframework[testform-1000091][text-1]"
                               value="">
                    </toujou-input-group>

                    <toujou-input-group class="input-group input-group--text input-group--required">
                        <label for="testform-1000091-text-2" class="input-label">Email</label>
                        <input placeholder="max.mustermann@mail.com"
                               required="required"
                               data-pristine-required-message-de="The given subject was empty."
                               class="input input--text"
                               id="testform-1000091-text-2"
                               type="email" name="tx_form_formframework[testform-1000091][text-2]"
                               value="">
                    </toujou-input-group>

                    <toujou-input-group class="input-group input-group--textarea">
                        <label class="input-label" for="testform-1000091-textarea-1">Comment</label>
                        <textarea placeholder="Your comment"
                                  required="required"
                                  data-pristine-required-message-de="The given subject was empty."
                                  class="form-control input input--textarea"
                                  id="testform-1000091-textarea-1"
                                  name="tx_form_formframework[testform-1000091][textarea-1]"></textarea>
                    </toujou-input-group>

                    <nav class="form-navigation" role="toolbar">
                        <span class="form-navigation__submit">
                            <button is="toujou-button"
                                    class="button form-navigation__button"
                                    button-variant="primary"
                                    button-icon-position="right"
                                    type="submit"
                                    name="tx_form_formframework[kontaktformular-8][__currentPage]"
                                    value="2">
                                Submit
                            </button>
                        </span>
                    </nav>
                </form>

            </section>

        </div>

    \`;
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const _=["BlogPost"];export{t as BlogPost,_ as __namedExportsOrder,g as default};
