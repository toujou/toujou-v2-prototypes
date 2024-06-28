/// <reference types="cypress" />

const colors = Cypress.env('colors');
const tokens = Cypress.env('tokens');

describe('chapter [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=variant:default');
    });

    it('has correct class and tag name', () => {
        cy.get('section').should('have.prop', 'tagName').should('eq', 'SECTION');
        cy.get('section').invoke('attr', 'class').should('eq', 'chapter');
    });

    it('has correct styles', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('padding-top').equal('0px');
            expect(chapter).to.have.css('padding-bottom').equal('0px');
            expect(chapter).to.have.css('margin').equal('0px');
        });
    });
});

/*
 * BACKGROUND COLOR
 */
describe('chapter bg-color default [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:default');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorBg);
        });
    });
});

describe('chapter bg-color background [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:background');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorBg);
        });
    });
});

describe('chapter bg-color primary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:primary');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorPrimary);
        });
    });
});

describe('chapter bg-color primary-light [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:primary-light');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorPrimaryLight);
        });
    });
});

describe('chapter bg-color primary-dark [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:primary-dark');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorPrimaryDark);
        });
    });
});

describe('chapter bg-color secondary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:secondary');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorSecondary);
        });
    });
});

describe('chapter bg-color secondary-light [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:secondary-light');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorSecondaryLight);
        });
    });
});

describe('chapter bg-color secondary-dark [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:secondary-dark');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorSecondaryDark);
        });
    });
});

describe('chapter bg-color font [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:font');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorFont);
        });
    });
});

describe('chapter bg-color font-light [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:font-light');
    });

    it('has correct background color', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-color').equal(colors.colorFontLight);
        });
    });
});

describe('chapter bg-color font-dark [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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

describe('chapter font-color default [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:default');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorFont);
        });
    });
});

describe('chapter font-color background [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:background');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorBg);
        });
    });
});

describe('chapter font-color primary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:primary');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorPrimary);
        });
    });
});

describe('chapter font-color primary-light [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:primary-light');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorPrimaryLight);
        });
    });
});

describe('chapter font-color primary-dark [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:primary-dark');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorPrimaryDark);
        });
    });
});

describe('chapter font-color secondary [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:secondary');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorSecondary);
        });
    });
});

describe('chapter font-color secondary-light [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:secondary-light');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorSecondaryLight);
        });
    });
});

describe('chapter font-color secondary-dark [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:secondary-dark');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorSecondaryDark);
        });
    });
});

describe('chapter font-color font [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:font');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorFont);
        });
    });
});

describe('chapter font-color font-light [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=fontColor:font-light');
    });

    it('has correct font color', () => {
        cy.get('.chapter[is-test-target] p').then((chapter) => {
            expect(chapter).to.have.css('color').equal(colors.colorFontLight);
        });
    });
});

describe('chapter font-color font-dark [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
describe('chapter default paddings [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter');
    });

    it('has correct padding', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('padding-top').equal('0px');
            expect(chapter).to.have.css('padding-bottom').equal('0px');
        });
    });
});

describe('chapter with background paddings [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=backgroundColor:primary');
    });

    it('has correct padding when chapter has background', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('padding-top').equal(tokens.spacing.xl);
            expect(chapter).to.have.css('padding-bottom').equal(tokens.spacing.xl);
        });
    });
});

/*
 * MIN HEIGHT
 */
describe('chapter min-height auto [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter');
    });

    it('has correct auto min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('334px');
        });
    });
});

describe('chapter min-height full [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:full');
    });

    it('has correct full min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('667px');
        });
    });
});

describe('chapter min-height half [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:half');
    });

    it('has correct half min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('334px');
        });
    });
});

describe('chapter min-height third [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:third');
    });

    it('has correct third min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('334px');
        });
    });
});

describe('chapter min-height fourth [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:fourth');
    });

    it('has correct fourth min-height', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('height').equal('334px');
        });
    });
});

/*
 * VERTICAL POSITION
 */
describe('chapter vertical-position default [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter');
    });

    it('has correct default vertical position', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('justify-content').equal('normal');
        });
    });
});

describe('chapter vertical-position top [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:full;verticalPosition:top');
    });

    it('has correct middle vertical position', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('justify-content').equal('normal');
        });
    });
});

describe('chapter vertical-position middle [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=minHeight:full;verticalPosition:middle');
    });

    it('has correct middle vertical position', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('justify-content').equal('center');
        });
    });
});

describe('chapter vertical-position bottom [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
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
describe('chapter scroll bg attachment type [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=showBackgroundImage:!true');
    });

    it('has correct scroll bg attachment type', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-attachment').equal('scroll');
        });
    });
});

describe('chapter scroll bg attachment type [mobile]', () => {
    beforeEach(() => {
        cy.viewport('iphone-6');
        cy.visit('/iframe.html?viewMode=story&id=components-chapter--chapter&args=showBackgroundImage:!true;attachmentType:fixed');
    });

    it('has correct scroll bg attachment type', () => {
        cy.get('.chapter[is-test-target]').then((chapter) => {
            expect(chapter).to.have.css('background-attachment').equal('fixed');
        });
    });
});

export {}
