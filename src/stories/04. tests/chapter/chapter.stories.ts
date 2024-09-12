import {Meta} from '@storybook/web-components';
// @ts-ignore
import { TOUJOU_BADGES } from '../../../../.storybook/configUtils/badgeCustomConfig.js'

export default {
    title: 'TESTS/Chapter',
    parameters: {
        badges: [TOUJOU_BADGES.DONE],
    },
} satisfies Meta;

const Template = () => {
    return `
<main id="main" skippy-links-label="Inhaltsbereich">








    <toujou-breadcrumb role="navigation" aria-label="Breadcrumb" class="breadcrumb">
        <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--open" aria-label="breadcrumb-Navigation öffnen">



    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="arrow-left"></toujou-icon>




        </button>

        <button slot="toggle-buttons" class="breadcrumb__toggle breadcrumb__toggle--close" aria-label="Breadcrumb-Navigation schließen">



    <toujou-icon class="icon breadcrumb__toggle-icon" icon-name="close"></toujou-icon>




        </button>

        <ol class="breadcrumb__list" slot="list">


                    <li class="breadcrumb__item" page-designation="">

                                <a class="breadcrumb__link" href="/">Home</a>

                    </li>



                    <li class="breadcrumb__item" page-designation="">

                                <a aria-current="page" is-current="true" class="breadcrumb__link" href="/start-of-chapter-new/">Start of chapter new</a>

                    </li>


        </ol>
    </toujou-breadcrumb>





        <!--TYPO3SEARCH_begin-->

\t

\t
\t\t
\t


















<span id="c0"></span>
<section id="initial" class="chapter " style="" attachment-type="">









<span id="c3387"></span>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>





    </section>


























<span id="c3383"></span>
<section id="default-713ed1c929897d6b282d2b34ae8591b6" class="chapter " style="" background-color="primary" font-color="primary-light" min-height="quarter" vertical-position="middle" attachment-type="fixed">



<h1>sdgsdgsfh</h1>






<toujou-teaser class="teaser" teaser-type="cinema" image-width="50" image-side="left" element-design="default">
    <div class="teaser__figure">








                <img class="teaser__image" src="https://picsum.photos/1800" alt="" title="" loading="lazy">

















    <toujou-media-info class="media-info">
        <button slot="open-button" class="media-info__toggle" aria-label="Medien Beschriftung / Copyright umschalten">



    <toujou-icon class="icon " icon-name="info" icon-color="background" icon-size="ms"></toujou-icon>




        </button>
        <button slot="close-button" class="media-info__toggle" aria-label="Medien Beschriftung / Copyright umschalten">



    <toujou-icon class="icon " icon-name="close" icon-color="background" icon-size="ms"></toujou-icon>




        </button>
        <figpaction slot="figcaption" class="media-info__figcaption">This is the image description in fileadmin</figpaction>

            <small slot="copyright" class="media-info__copyright">© Cool photographer</small>

    </toujou-media-info>





    </div>

    <div class="teaser__content"><p>This is a simple element containing a headline and this text. There are no restrictions for the amount of content. So feel free to add as much information as long as it helps your story or your customer.</p></div>
</toujou-teaser>





<toujou-blockquote-grid class="blockquote-grid" blockquote-grid-count="3">










<toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical" element-design="inverted">

        <img slot="image" class="blockquote__image" src="/fileadmin/_processed_/9/3/csm_author-female_092e2f79a3.png" width="89" height="89" data-width="89.999999999999" data-height="89.999999999999" data-focus-area="{&quot;x&quot;:53.33333333333333,&quot;y&quot;:53.33333333333333,&quot;width&quot;:53.33333333333333,&quot;height&quot;:53.33333333333333}" alt="" title="" loading="lazy">



        <blockquote slot="quote" class="blockquote__blockquote">
            <div class="blockquote__content"><p>Mit der Containerabfragespezifikation können Sie auch die Stilwerte eines übergeordneten Containers abfragen. Dies ist derzeit teilweise in Chrome 111 implementiert. Dort können Sie benutzerdefinierte CSS-Eigenschaften verwenden, um Containerstile anzuwenden.</p></div>
        </blockquote>



        <figcaption slot="author" class="blockquote__author">Martina Mustermann</figcaption>

</toujou-blockquote>














<toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical" element-design="inverted">

        <img slot="image" class="blockquote__image" src="/fileadmin/_processed_/3/a/csm_author-male_7e3d74c56b.png" width="89" height="89" data-width="89.999999999999" data-height="89.999999999999" data-focus-area="{&quot;x&quot;:53.33333333333333,&quot;y&quot;:53.33333333333333,&quot;width&quot;:53.33333333333333,&quot;height&quot;:53.33333333333333}" alt="" title="" loading="lazy">



        <blockquote slot="quote" class="blockquote__blockquote">
            <div class="blockquote__content"><p>Mit der Containerabfragespezifikation können Sie auch die Stilwerte eines übergeordneten Containers abfragen. Dies ist derzeit teilweise in Chrome 111 implementiert. Dort können Sie benutzerdefinierte CSS-Eigenschaften verwenden, um Containerstile anzuwenden.</p></div>
        </blockquote>



        <figcaption slot="author" class="blockquote__author">Max Mustermann</figcaption>

</toujou-blockquote>














<toujou-blockquote role="figure" class="blockquote" blockquote-direction="vertical" element-design="inverted">

        <img slot="image" class="blockquote__image" src="/fileadmin/_processed_/9/3/csm_author-female_092e2f79a3.png" width="89" height="89" data-width="89.999999999999" data-height="89.999999999999" data-focus-area="{&quot;x&quot;:53.33333333333333,&quot;y&quot;:53.33333333333333,&quot;width&quot;:53.33333333333333,&quot;height&quot;:53.33333333333333}" alt="" title="" loading="lazy">



        <blockquote slot="quote" class="blockquote__blockquote">
            <div class="blockquote__content"><p>Mit der Containerabfragespezifikation können Sie auch die Stilwerte eines übergeordneten Containers abfragen. Dies ist derzeit teilweise in Chrome 111 implementiert. Dort können Sie benutzerdefinierte CSS-Eigenschaften verwenden, um Containerstile anzuwenden.</p></div>
        </blockquote>



        <figcaption slot="author" class="blockquote__author">Martina Mustermann</figcaption>

</toujou-blockquote>





</toujou-blockquote-grid>















<span id="c3391"></span>

<toujou-content-card-grid class="content-card-grid">












                <a href="/" card-direction="vertical" card-variant="default" class="content-card">


        <figure class="content-card__figure">
            <img class="content-card__image" src="/fileadmin/_processed_/e/7/csm_forest1_c4d307774b.jpg" width="336" height="207" data-width="2004.75" data-height="1237.5" srcset="/fileadmin/_processed_/e/7/csm_forest1_c4d307774b.jpg 336w,/fileadmin/_processed_/e/7/csm_forest1_2ec388cffa.jpg 433w,/fileadmin/_processed_/e/7/csm_forest1_4e6d5dc5e2.jpg 440w,/fileadmin/_processed_/e/7/csm_forest1_c63563233d.jpg 592w" sizes="(min-width: 960px) 336px,(min-width: 640px) 440px,(min-width: 480px) 592px,433px" data-focus-area="{&quot;x&quot;:733.3333333333333,&quot;y&quot;:550,&quot;width&quot;:733.3333333333333,&quot;height&quot;:550}" alt="" title="" loading="lazy">
        </figure>

    <div class="content-card__content">

            <h3 class="content-card__title">Lorem Ipsum</h3>


            <p class=" content-card__text">Mit der Containerabfragespezifikation können Sie auch die Stilwerte eines übergeordneten Containers abfragen. Dies ist derzeit teilweise in Chrome 111 implementiert. Dort können Sie benutzerdefinierte CSS-Eigenschaften verwenden, um Containerstile anzuwenden.</p>


            <span class="content-card__button" aria-hidden="true">



    <toujou-icon class="icon " icon-name="arrow-right" icon-color="primary"></toujou-icon>




                weitere Informationen
            </span>

    </div>

                </a>






















                <a href="/" card-direction="vertical" card-variant="primary" class="content-card">


        <figure class="content-card__figure">
            <img class="content-card__image" src="/fileadmin/_processed_/3/8/csm_forest2_cef5500b82.jpg" width="336" height="207" data-width="1336.80375" data-height="825.18749999999" srcset="/fileadmin/_processed_/3/8/csm_forest2_cef5500b82.jpg 336w,/fileadmin/_processed_/3/8/csm_forest2_c44fffa8da.jpg 433w,/fileadmin/_processed_/3/8/csm_forest2_6096c07b4a.jpg 440w,/fileadmin/_processed_/3/8/csm_forest2_d1ce9b1593.jpg 592w" sizes="(min-width: 960px) 336px,(min-width: 640px) 440px,(min-width: 480px) 592px,433px" data-focus-area="{&quot;x&quot;:489,&quot;y&quot;:733.3333333333333,&quot;width&quot;:489,&quot;height&quot;:733.3333333333333}" alt="" title="" loading="lazy">
        </figure>

    <div class="content-card__content">

            <h3 class="content-card__title">Title</h3>


            <p class=" content-card__text">Mit der Containerabfragespezifikation können Sie auch die Stilwerte eines übergeordneten Containers abfragen. Dies ist derzeit teilweise in Chrome 111 implementiert. Dort können Sie benutzerdefinierte CSS-Eigenschaften verwenden, um Containerstile anzuwenden.</p>


            <span class="content-card__button" aria-hidden="true">



    <toujou-icon class="icon " icon-name="arrow-right" icon-color="primary"></toujou-icon>




                weiter
            </span>

    </div>

                </a>






















                <a href="/" card-direction="vertical" card-variant="secondary" class="content-card">


    <div class="content-card__content">

            <h3 class="content-card__title">Title</h3>


            <p class=" content-card__text">Mit der Containerabfragespezifikation können Sie auch die Stilwerte eines übergeordneten Containers abfragen. Dies ist derzeit teilweise in Chrome 111 implementiert. Dort können Sie benutzerdefinierte CSS-Eigenschaften verwenden, um Containerstile anzuwenden.</p>


            <span class="content-card__button" aria-hidden="true">



    <toujou-icon class="icon " icon-name="arrow-right" icon-color="primary"></toujou-icon>




                more
            </span>

    </div>

                </a>





















        <toujou-content-card class="content-card" card-direction="vertical" card-variant="inverted" role="article">


        <figure class="content-card__figure">
            <img class="content-card__image" src="/fileadmin/_processed_/3/c/csm_forest4_b380de21d5.jpg" width="336" height="207" data-width="2004.75" data-height="1237.5" srcset="/fileadmin/_processed_/3/c/csm_forest4_b380de21d5.jpg 336w,/fileadmin/_processed_/3/c/csm_forest4_67f6e4ee5d.jpg 433w,/fileadmin/_processed_/3/c/csm_forest4_813f3a587e.jpg 440w,/fileadmin/_processed_/3/c/csm_forest4_d11bd63fdd.jpg 592w" sizes="(min-width: 960px) 336px,(min-width: 640px) 440px,(min-width: 480px) 592px,433px" data-focus-area="{&quot;x&quot;:733.3333333333333,&quot;y&quot;:489,&quot;width&quot;:733.3333333333333,&quot;height&quot;:489}" alt="" title="" loading="lazy">
        </figure>

    <div class="content-card__content">

            <h3 class="content-card__title">Lorem Ipsum</h3>


            <p class=" content-card__text">Mit der Containerabfragespezifikation können Sie auch die Stilwerte eines übergeordneten Containers abfragen. Dies ist derzeit teilweise in Chrome 111 implementiert. Dort können Sie benutzerdefinierte CSS-Eigenschaften verwenden, um Containerstile anzuwenden.</p>


    </div>

        </toujou-content-card>









</toujou-content-card-grid>







<span id="c3384"></span>

<h1 class="font--align-center">EINE TOLLE HEADLINE</h1>





    </section>


























<span id="c3385"></span>
<section id="default-7e81afef9c5a4f90bb3aa70008a5d203" class="chapter " style="" background-color="default" font-color="default" min-height="auto" vertical-position="top" attachment-type="scroll">









<span id="c3386"></span>

<h2>Noch ein Text-element</h2>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>





    </section>






\t

\t

\t





        <!--TYPO3SEARCH_end-->
    </main>
    `;
};

export const Chapter = Template.bind({});


