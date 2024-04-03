/// <reference types="cypress" />
/// <reference types="cypress-axe" />

describe('collection item default a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-default');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item primary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-default&args=elementDesign:primary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item secondary a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-default&args=elementDesign:secondary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item inverted a11y', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-default&args=elementDesign:inverted');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item type blog', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-blog');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item type trip', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-trip');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item type product', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-product');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item type product primary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-product&args=elementDesign:primary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item type product secondary', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-product&args=elementDesign:secondary');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item type product inverted', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-product&args=elementDesign:inverted');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})

describe('collection item type person', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-collections--card-person');
        cy.injectAxe();
    });

    it('has no detectable a11y violation on load', () => {
        cy.get('.card-collection__item');
        cy.checkA11y('.card-collection__item', {
            rules: {
                'landmark-no-duplicate-banner': { enabled: false }
            }
        });
    });
})


export {}
