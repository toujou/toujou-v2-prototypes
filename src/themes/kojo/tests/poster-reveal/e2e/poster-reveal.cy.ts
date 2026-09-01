/// <reference types="cypress" />

describe('poster-reveal', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-poster-reveal--poster-reveal');

        cy.get('toujou-poster-reveal')
            .should('exist');
    });

    it('should render the component', () => {
        cy.get('toujou-poster-reveal').should('exist');
        cy.get('.poster-reveal__image').should('be.visible');
        cy.get('.poster-reveal__button').should('exist');
        cy.get('iframe').should('exist');
    });

    it('should render the poster image', () => {
        cy.get('.poster-reveal__image')
            .should('have.attr', 'src')
            .and('not.be.empty');

        cy.get('.poster-reveal__image')
            .should('have.attr', 'alt');
    });

    it('should render the trigger button', () => {
        cy.get('.poster-reveal__button')
            .should('be.visible')
            .and('have.attr', 'aria-label');
    });

    it('should contain a YouTube iframe', () => {
        cy.get('iframe')
            .should('have.attr', 'src')
            .and('include', 'youtube');
    });

    it('should add the required permissions when activated', () => {
        cy.get('iframe')
            .invoke('attr', 'allow')
            .then((allowBefore) => {

                cy.get('.poster-reveal__button')
                    .click();

                cy.get('iframe')
                    .invoke('attr', 'allow')
                    .should((allowAfter) => {
                        expect(allowAfter).to.include('autoplay');
                        expect(allowAfter).to.include('encrypted-media');
                        expect(allowAfter).to.include('picture-in-picture');

                        if (allowBefore) {
                            expect(allowAfter!.length)
                                .to.be.greaterThan(allowBefore.length);
                        }
                    });
            });
    });

    it('should reload the iframe after activation', () => {
        cy.get('iframe')
            .invoke('attr', 'src')
            .then((originalSrc) => {

                cy.get('.poster-reveal__button')
                    .click();

                cy.get('iframe')
                    .invoke('attr', 'src')
                    .should((newSrc) => {
                        expect(newSrc)
                            .to.not.equal(originalSrc);

                        expect(newSrc)
                            .to.include('_r=');
                    });
            });
    });

    it('should keep only one iframe after activation', () => {
        cy.get('.poster-reveal__button')
            .click();

        cy.get('iframe')
            .should('have.length', 1);
    });

    it('should support multiple activations', () => {
        cy.get('.poster-reveal__button')
            .click();

        cy.get('iframe')
            .invoke('attr', 'allow')
            .should('include', 'autoplay');
    });

    it('should dispatch video play requested event when activated', () => {
        cy.get('toujou-poster-reveal')
            .then(($component) => {
                cy.spy($component[0], 'dispatchEvent')
                    .as('dispatchEvent');
            });

        cy.get('.poster-reveal__button')
            .click();

        cy.get('@dispatchEvent')
            .should('have.been.calledWithMatch',
                Cypress.sinon.match.has(
                    'type',
                    'toujou-poster-reveal-video-play-requested',
                ),
            );
    });

    it('should include the video provider in the event detail', () => {
        cy.get('toujou-poster-reveal')
            .then(($component) => {
                cy.spy($component[0], 'dispatchEvent')
                    .as('dispatchEvent');
            });

        cy.get('.poster-reveal__button')
            .click();

        cy.get('@dispatchEvent')
            .should('have.been.calledWithMatch',
                Cypress.sinon.match.has(
                    'type',
                    'toujou-poster-reveal-video-play-requested',
                ),
            )
            .and('have.been.calledWithMatch',
                Cypress.sinon.match.has(
                    'detail',
                    Cypress.sinon.match({
                        provider: 'youtube',
                    }),
                ),
            );
    });
});

export {};
