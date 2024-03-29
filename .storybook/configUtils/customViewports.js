/**
 * Create a list of custom viewports, so we can test for relevant device sizes
 * @type {{Mobile2: {name: string, styles: {width: string, height: string}}, Tablet1: {name: string, styles: {width: string, height: string}}, Web1: {name: string, styles: {width: string, height: string}}, Tablet2: {name: string, styles: {width: string, height: string}}, Mobile1: {name: string, styles: {width: string, height: string}}}}
 */
export const customViewports = {
    Mobile1: {
        name: 'mobile - small',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    Mobile2: {
        name: 'mobile - large',
        styles: {
            width: '414px',
            height: '736px',
        },
    },
    Tablet1: {
        name: 'tablet - small',
        styles: {
            width: '768px',
            height: '1024px',
        },
    },
    Tablet2: {
        name: 'tablet - large',
        styles: {
            width: '1024px',
            height: '1366px',
        },
    },
    Web1: {
        name: 'web - wide',
        styles: {
            width: '1440px',
            height: '1280px',
        },
    },
};
