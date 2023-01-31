import { Meta } from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

// @ts-ignore
import blogPostDocs from './blog-post.docs.mdx';

export default {
    title: 'PAGES/BlogPost',
    parameters: {
        badges: [TOUJOU_BADGES.TESTING],
        docs: {
            page: blogPostDocs,
        },
    },
} as Meta;

const Template = () => {
    return `
        <section class="blog-post">
            <div class="blog-post__data">
                <time class="blog-post__date" datetime="T09:00P11H">
                    <toujou-icon class="icon" icon-size="ms" icon-color="font" icon-name="calendar-day"></toujou-icon>
                    <span class="blog-post__date-time">30.01.2023</span>
                </time>
                <p class="blog-post__author">
                    <toujou-icon class="icon" icon-size="ms" icon-color="font" icon-name="account"></toujou-icon>
                    <span class="blog-post__author-name">Luke Skywalker</span>
                </p>
            </div> 
            
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
                            <button slot="open-button" class="media-info__toggle" aria-description="Toggle the image caption and / or copyright">
                                <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                            </button>
                            <button slot="close-button" class="media-info__toggle" aria-description="Toggle the image caption and / or copyright">
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
                            <button slot="open-button" class="media-info__toggle" aria-description="Toggle the image caption and / or copyright">
                                <toujou-icon class="icon" icon-color="background" icon-name="info" icon-size="ms"></toujou-icon>
                            </button>
                            <button slot="close-button" class="media-info__toggle" aria-description="Toggle the image caption and / or copyright">
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
            
            <section class="blog-post__comments">
                <h3 class="blog-post__categories-title">Comments</h3>
                <ul class="blog-post__comments-list">
                    <li class="blog-post__comments-item">
                        <div class="blog-post__comments-data">
                            <time class="blog-post__comments-date" datetime="T09:00P11H">30.01.2023, 14:32</time>
                            <p class="blog-post__comments-author">Luke Skywalker</p>
                        </div>
                        <p class="blog-post__comments-comment">
                            This is a comment made on the blog post
                        </p>
                    </li>
                    <li class="blog-post__comments-item">
                        <div class="blog-post__comments-data">
                            <time class="blog-post__comments-date" datetime="T09:00P11H">22.12.2022, 08:23</time>
                            <p class="blog-post__comments-author">Han Solo</p>
                        </div>
                        <p class="blog-post__comments-comment">
                            Now that we are approaching Christmas we can leave comments on blog post
                        </p>
                    </li>
                    <li class="blog-post__comments-item">
                        <div class="blog-post__comments-data">
                            <time class="blog-post__comments-date" datetime="T09:00P11H">14.11.2022, 20:17</time>
                            <p class="blog-post__comments-author">Jabba the Hutt</p>
                        </div>
                        <p class="blog-post__comments-comment">
                            Let us look up and enjoy the sun on our faces!
                        </p>
                    </li>
                </ul>
                
                <form class="form blog-post__comments-form">
                    <h4 class="blog-post__comments-title">Write comment</h4>
                    
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
            
            <section class="blog-post__categories">
                <h3 class="blog-post__categories-title">Categories</h3>
                <ul class="blog-post__categories-list">
                    <li class="blog-post__categories-item">
                        <a href="#" class="blog-post__categories-link">
                            <toujou-icon class="icon" icon-name="bookmark-filled" icon-color="font" icon-size="ms"></toujou-icon>
                            <span class="blog-post__categories-name">Category One</span>
                        </a>
                    </li>
                    <li class="blog-post__categories-item">
                        <a href="#" class="blog-post__categories-link">
                            <toujou-icon class="icon" icon-name="bookmark-filled" icon-color="font" icon-size="ms"></toujou-icon>
                            <span class="blog-post__categories-name">Category Two</span>
                        </a>
                    </li>
                    <li class="blog-post__categories-item">
                        <a href="#" class="blog-post__categories-link">
                            <toujou-icon class="icon" icon-name="bookmark-filled" icon-color="font" icon-size="ms"></toujou-icon>
                            <span class="blog-post__categories-name">Category Three</span>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    `;
};

export const BlogPost = Template.bind({});
