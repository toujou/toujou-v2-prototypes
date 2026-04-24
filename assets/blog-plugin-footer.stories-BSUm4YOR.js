const n={title:"COMPONENTS/Blog Plugin",parameters:{layout:"fullwidth"}},l=()=>`
        <div class="blog-footer" number-of-columns="2">
            <div class="blog-footer__content">
                <div class="chips-list categories-list">
                    <h3 class="chips-list__title">Categories</h3>
                    <ul class="chips-list__list">
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Tutorials
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    TYPO3
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Content Management
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Elements
                                </toujou-chip>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="chips-list tags-list">
                    <h3 class="chips-list__title">Tags</h3>
                    <ul class="chips-list__list">
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Tutorials
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    TYPO3
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Content Management
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="small" is-clickable>
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                    Elements
                                </toujou-chip>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    `,i=l.bind({});var o,c,s;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  return \`
        <div class="blog-footer" number-of-columns="2">
            <div class="blog-footer__content">
                <div class="chips-list categories-list">
                    <h3 class="chips-list__title">Categories</h3>
                    <ul class="chips-list__list">
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Tutorials
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    TYPO3
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Content Management
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="bookmark-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Elements
                                </toujou-chip>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="chips-list tags-list">
                    <h3 class="chips-list__title">Tags</h3>
                    <ul class="chips-list__list">
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Tutorials
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    TYPO3
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="normal" is-clickable>
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="ms" icon-color="bg"></toujou-icon>
                                    Content Management
                                </toujou-chip>
                            </a>
                        </li>
                        <li class="chips-list__item">
                            <a href="#" class="chips-list__link">
                                <toujou-chip class="chip" chip-icon-position="left" chip-bg-color="primary-light" chip-border-radius="round" chip-size="small" is-clickable>
                                    <toujou-icon class="icon" icon-name="tag-filled" icon-size="normal" icon-color="bg"></toujou-icon>
                                    Elements
                                </toujou-chip>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    \`;
}`,...(s=(c=i.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const t=["Footer"];export{i as Footer,t as __namedExportsOrder,n as default};
