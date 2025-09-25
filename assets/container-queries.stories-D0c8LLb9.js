const n={title:"TESTS/Container Queries",parameters:{layout:"fullwidth"}},o=()=>`
        <style>
            main {
                padding: 1rem;
                container-name: main;
                container-type: inline-size;
            }

            footer {
                background-color: rgb(0 0 0 / 10%);
                padding: 1rem;
            }

            .test-footer-grid {
                display: grid;
                grid-template-columns: 1fr;
                grid-gap: 1rem;
                max-width: 1440px;
                margin-inline: auto;
            }

            .test-footer-grid__column {
                container-name: footer-column;
                container-type: inline-size;
            }

            .test-card {
                --card-highlight-color: black;
                --card-bg-color: white;

                border: 4px solid var(--card-highlight-color);
                background-color: var(--card-bg-color);
                padding: .5rem;
                margin: 0;                margin-inline: auto;
            }

            .test-card__figure {
                margin-bottom: 1rem;
            }

            .test-card__image {
                aspect-ratio: 16 / 9;
                object-fit: cover;
            }

            .test-card__content {
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .test-card__headline {
                color: var(--card-highlight-color);
            }

            .test-card__text {
                margin: 0;
            }

            @media screen and (min-width: 640px) {
                main {
                    padding: 3rem;
                }

                footer {
                    padding: 3rem;
                }

                .test-footer-grid {
                    grid-template-columns: 2fr 1fr;
                }
            }

            @container (min-width: 480px) {
                .test-card {
                    --card-highlight-color: tomato;
                    --card-bg-color: rgb(255 140 0 / 10%);
                }
            }

            @container (min-width: 640px) {
                .test-card {
                    --card-highlight-color: purple;
                    --card-bg-color: rgb(128 0 128 / 10%);

                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 1rem;
                    padding: 2rem;
                }
            }

            @container (min-width: 840px) {
                .test-card {
                    --card-highlight-color: dodgerblue;
                    --card-bg-color: rgb(30 144 255 / 10%);

                    grid-template-columns: 2fr 1fr;
                }


                .test-card__image {
                    aspect-ratio: 1 / 1;
                    border-radius: 4rem;
                }
            }

            @container (min-width: 1240px) {
                .test-card {
                    --card-highlight-color: indianred;
                    --card-bg-color: rgb(205 92 92 / 10%);

                    grid-template-columns: 4fr 1fr;
                }

                .test-card__image {
                    aspect-ratio: 4 / 1;
                    border-radius: 4px;
                }
            }

            @container (min-width: 1440px) {
                .test-card {
                    --card-highlight-color: lightseagreen;
                    --card-bg-color: rgb(32 178 170 / 10%);

                    grid-template-columns: 3fr 1fr;
                }

                .test-card__image {
                    aspect-ratio: 4 / 1;
                    border-radius: 4px;
                }
            }
        </style>
    `,e=()=>`
        <article class="test-card">
            <figure class="test-card__figure">
                <img src="https://picsum.photos/1880" alt="nice image" class="test-card__image">
            </figure>
            <div class="test-card__content">
                <h3 class="test-card__headline">Nice card</h3>
                <p class="test-card__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </article>
    `,d=()=>`
        ${o()}

        <main>
            ${e()}
        </main>

        <footer>
            <div class="test-footer-grid">
                <div class="test-footer-grid__column">
                    ${e()}
                </div>

                <div class="test-footer-grid__column">
                    ${e()}
                </div>
            </div>
        </footer>
    `,r=d.bind({});var t,i,a;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  return \`
        \${styles()}

        <main>
            \${renderCard()}
        </main>

        <footer>
            <div class="test-footer-grid">
                <div class="test-footer-grid__column">
                    \${renderCard()}
                </div>

                <div class="test-footer-grid__column">
                    \${renderCard()}
                </div>
            </div>
        </footer>
    \`;
}`,...(a=(i=r.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};const c=["ContainerQueries"];export{r as ContainerQueries,c as __namedExportsOrder,n as default};
