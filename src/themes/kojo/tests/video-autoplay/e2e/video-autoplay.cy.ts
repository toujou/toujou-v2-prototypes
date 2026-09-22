describe('video autoplay – autoplay OFF', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--video-autoplay');
    });

    it('does not set autoplay or controls attributes', () => {
        cy.get('.video').should('not.have.attr', 'autoplay')
        cy.get('.video').should('have.attr', 'controls');
    });
});

describe('video autoplay – autoplay ON', () => {
    const visitWithMotionSetting = (reduceMotion: boolean) => {
        cy.visit('/iframe.html?viewMode=story&id=components-media--video-autoplay&args=autoplay:!true', {
            onBeforeLoad(win) {
                cy.stub(win, 'matchMedia').callsFake((query) => ({
                    matches: query === '(prefers-reduced-motion: reduce)' ? reduceMotion : false,
                    media: query,
                    onchange: null,
                    addEventListener: () => {},
                    removeEventListener: () => {},
                    addListener: () => {},
                    removeListener: () => {},
                    dispatchEvent: () => false,
                }));
            },
        });
    };

    it('autoplays video when reduced motion is off', () => {
        visitWithMotionSetting(false);

        cy.get('.video').should('have.attr', 'autoplay')
        cy.get('.video').should('have.attr', 'muted');
    });

    it('adds controls instead of autoplay when reduced motion is on', () => {
        visitWithMotionSetting(true);

        cy.get('.video').should('not.have.attr', 'autoplay')
        cy.get('.video').should('have.attr', 'controls');
    });
});
