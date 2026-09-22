/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('chapter', () => {
    beforeEach(() => {
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:default');
    });

    it('has correct class and tag name', () => {
        cy.get('section').should('have.prop', 'tagName').should('eq', 'SECTION');
        cy.get('section').invoke('attr', 'class').should('eq', 'chapter');
    });
});

/*
 * BACKGROUND COLOR
 */
describe('chapter bg-color default', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:default');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorBg);
        });
    });
});

describe('chapter bg-color background', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:background');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorBg);
        });
    });
});

describe('chapter bg-color primary', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:primary');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorPrimary);
        });
    });
});

describe('chapter bg-color primary-light', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:primary-light');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorPrimaryLight);
        });
    });
});

describe('chapter bg-color primary-dark', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:primary-dark');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorPrimaryDark);
        });
    });
});

describe('chapter bg-color secondary', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:secondary');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorSecondary);
        });
    });
});

describe('chapter bg-color secondary-light', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:secondary-light');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorSecondaryLight);
        });
    });
});

describe('chapter bg-color secondary-dark', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:secondary-dark');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorSecondaryDark);
        });
    });
});

describe('chapter bg-color font', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:font');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorFont);
        });
    });
});

describe('chapter bg-color font-light', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:font-light');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorFontLight);
        });
    });
});

describe('chapter bg-color font-dark', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:font-dark');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorFontDark);
        });
    });
});

/*
 * FONT COLOR
 */

describe('chapter font-color default', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:default');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorFont);
        });
    });
});

describe('chapter font-color background', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:background');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorBg);
        });
    });
});

describe('chapter font-color primary', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:primary');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorPrimary);
        });
    });
});

describe('chapter font-color primary-light', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:primary-light');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorPrimaryLight);
        });
    });
});

describe('chapter font-color primary-dark', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:primary-dark');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorPrimaryDark);
        });
    });
});

describe('chapter font-color secondary', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:secondary');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorSecondary);
        });
    });
});

describe('chapter font-color secondary-light', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:secondary-light');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorSecondaryLight);
        });
    });
});

describe('chapter font-color secondary-dark', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:secondary-dark');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorSecondaryDark);
        });
    });
});

describe('chapter font-color font', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:font');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorFont);
        });
    });
});

describe('chapter font-color font-light', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:font-light');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorFontLight);
        });
    });
});

describe('chapter font-color font-dark', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:font-dark');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorFontDark);
        });
    });
});

/*
 * PADDINGS
 */
describe('chapter default paddings', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter');
    });

    it('has correct padding', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('padding-top').equal('0px');
            expect(chapter).to.have.css('padding-bottom').equal('0px');
        });
    });
});

describe('chapter with background paddings', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:primary');
    });

    it('has correct padding when chapter has background', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('padding-top').equal(tokens.spacing.xxxl);
            expect(chapter).to.have.css('padding-bottom').equal(tokens.spacing.xxxl);
        });
    });
});

/*
 * MIN HEIGHT
 */
describe('chapter min-height auto', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter');
    });

    it('has correct auto min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('166px');
        });
    });
});

describe('chapter min-height full', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:full');
    });

    it('has correct full min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('960px');
        });
    });
});

describe('chapter min-height half', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:half');
    });

    it('has correct half min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('480px');
        });
    });
});

describe('chapter min-height third', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:third');
    });

    it('has correct third min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('320px');
        });
    });
});

describe('chapter min-height fourth', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:fourth');
    });

    it('has correct fourth min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('166px');
        });
    });
});

/*
 * VERTICAL POSITION
 */
describe('chapter vertical-position default', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter');
    });

    it('has correct default vertical position', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('justify-content').equal('normal');
        });
    });
});

describe('chapter vertical-position top', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:full;verticalPosition:top');
    });

    it('has correct middle vertical position', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('justify-content').equal('normal');
        });
    });
});

describe('chapter vertical-position middle', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:full;verticalPosition:middle');
    });

    it('has correct middle vertical position', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('justify-content').equal('center');
        });
    });
});

describe('chapter vertical-position bottom', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:full;verticalPosition:bottom');
    });

    it('has correct bottom vertical position', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('justify-content').equal('flex-end');
        });
    });
});

/*
 * BACKGROUND ATTACHMENT TYPE
 */
describe('chapter scroll bg attachment type', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=showBackgroundImage:!true');
    });

    it('has correct scroll bg attachment type', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-attachment').equal('scroll');
        });
    });
});

describe('chapter scroll bg attachment type', () => {
    beforeEach(() => {
        cy.viewport('macbook-16');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=showBackgroundImage:!true;attachmentType:fixed');
    });

    it('has correct scroll bg attachment type', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-attachment').equal('fixed');
        });
    });
});

export {}
