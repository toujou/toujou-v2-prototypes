import{T as r}from"./badgeCustomConfig-DUXiHpL4.js";import{M as e}from"./blog-plugins.docs-CxrdAfcw.js";import"./jsx-runtime-DPda6Ybg.js";import"./index-DhrokLn_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-4_AlzpT7.js";const _={title:"COMPONENTS/Blog Plugin",parameters:{badges:[r.DONE],docs:{page:e}},argTypes:{hasAvatar:{table:{category:"Author Settings",defaultValue:{summary:"true"}},name:"Has avatar",description:"Toggle between view with and without user avatar",control:{type:"boolean"},defaultValue:["true"],required:!0}},tags:["autodocs"]},n=o=>`
        <div class="post-authors">
            <div class="post-author" itemprop="author" itemscope="" itemtype="http://schema.org/Person" ${o.hasAvatar?"":"no-avatar"}>
                ${o.hasAvatar?`
                    <figure class="post-author__figure">
                        <img src="https://i.pravatar.cc/80?img=27" alt="author avatar" class="post-author__avatar">
                    </figure>
                `:""}

                <div class="post-author__meta">
                    <span class="post-author__name" itemprop="name">Han Solo</span>
                    <span class="post-author__info">
                        <span class="post-author__meta-parentesis">(</span>
                        <span class="post-author__title" itemprop="jobTitle">Pilot</span>
                        <span class="post-author__meta-separator">/</span>
                        <span class="post-author__location" itemprop="homeLocation">Tatooine</span>
                        <span class="post-author__meta-parentesis">)</span>
                    </span>
                </div>
                <p class="post-author__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                <toujou-social-media-bar class="social-media-bar post-author__socials" element-design="default" no-headline inline no-margins>
                    <div class="social-media-bar__links">
                        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                            <toujou-icon class="icon" icon-name="sm-instagram" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                            <toujou-icon class="icon" icon-name="sm-youtube" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                    </div>
                </toujou-social-media-bar>
            </div>

            <div class="post-author" itemprop="author" itemscope="" itemtype="http://schema.org/Person" ${o.hasAvatar?"":"no-avatar"}>
                ${o.hasAvatar?`
                    <figure class="post-author__figure">
                        <img src="https://i.pravatar.cc/80?img=27" alt="author avatar" class="post-author__avatar">
                    </figure>
                `:""}
                <div class="post-author__meta">
                    <span class="post-author__name" itemprop="name">Han Solo</span>
                    <span class="post-author__info">
                        <span class="post-author__meta-parentesis">(</span>
                        <span class="post-author__title" itemprop="jobTitle">Pilot</span>
                        <span class="post-author__meta-separator">/ </span>
                        <span class="post-author__location" itemprop="homeLocation">Tatooine</span>
                        <span class="post-author__meta-parentesis">)</span>
                    </span>
                </div>
                <p class="post-author__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                <toujou-social-media-bar class="social-media-bar post-author__socials" element-design="default" no-headline inline no-margins>
                    <div class="social-media-bar__links">
                        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                            <toujou-icon class="icon" icon-name="sm-instagram" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                            <toujou-icon class="icon" icon-name="sm-youtube" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                    </div>
                </toujou-social-media-bar>
            </div>
        </div>
    `,a=n.bind({});a.args={hasAvatar:!0};var i,s,t;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`(args: BlogPluginAuthorsStoryProps) => {
  return \`
        <div class="post-authors">
            <div class="post-author" itemprop="author" itemscope="" itemtype="http://schema.org/Person" \${args.hasAvatar ? '' : 'no-avatar'}>
                \${args.hasAvatar ? \`
                    <figure class="post-author__figure">
                        <img src="https://i.pravatar.cc/80?img=27" alt="author avatar" class="post-author__avatar">
                    </figure>
                \` : ''}

                <div class="post-author__meta">
                    <span class="post-author__name" itemprop="name">Han Solo</span>
                    <span class="post-author__info">
                        <span class="post-author__meta-parentesis">(</span>
                        <span class="post-author__title" itemprop="jobTitle">Pilot</span>
                        <span class="post-author__meta-separator">/</span>
                        <span class="post-author__location" itemprop="homeLocation">Tatooine</span>
                        <span class="post-author__meta-parentesis">)</span>
                    </span>
                </div>
                <p class="post-author__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                <toujou-social-media-bar class="social-media-bar post-author__socials" element-design="default" no-headline inline no-margins>
                    <div class="social-media-bar__links">
                        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                            <toujou-icon class="icon" icon-name="sm-instagram" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                            <toujou-icon class="icon" icon-name="sm-youtube" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                    </div>
                </toujou-social-media-bar>
            </div>

            <div class="post-author" itemprop="author" itemscope="" itemtype="http://schema.org/Person" \${args.hasAvatar ? '' : 'no-avatar'}>
                \${args.hasAvatar ? \`
                    <figure class="post-author__figure">
                        <img src="https://i.pravatar.cc/80?img=27" alt="author avatar" class="post-author__avatar">
                    </figure>
                \` : ''}
                <div class="post-author__meta">
                    <span class="post-author__name" itemprop="name">Han Solo</span>
                    <span class="post-author__info">
                        <span class="post-author__meta-parentesis">(</span>
                        <span class="post-author__title" itemprop="jobTitle">Pilot</span>
                        <span class="post-author__meta-separator">/ </span>
                        <span class="post-author__location" itemprop="homeLocation">Tatooine</span>
                        <span class="post-author__meta-parentesis">)</span>
                    </span>
                </div>
                <p class="post-author__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                <toujou-social-media-bar class="social-media-bar post-author__socials" element-design="default" no-headline inline no-margins>
                    <div class="social-media-bar__links">
                        <a href="#" class="social-media-bar__link" aria-label="Our facebook account">
                            <toujou-icon class="icon" icon-name="sm-facebook" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our twitter account">
                            <toujou-icon class="icon" icon-name="sm-twitter" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our instagram account">
                            <toujou-icon class="icon" icon-name="sm-instagram" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                        <a href="#" class="social-media-bar__link" aria-label="Our youtube account">
                            <toujou-icon class="icon" icon-name="sm-youtube" icon-size="l" icon-color="primary" aria-hidden=""></toujou-icon>
                        </a>
                    </div>
                </toujou-social-media-bar>
            </div>
        </div>
    \`;
}`,...(t=(s=a.parameters)==null?void 0:s.docs)==null?void 0:t.source}}};const h=["Authors"];export{a as Authors,h as __namedExportsOrder,_ as default};
