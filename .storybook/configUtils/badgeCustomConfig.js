import { BADGE } from '@geometricpanda/storybook-addon-badges';

/**
 * Create custom badges to the used on the stories
 * @type {{blocked: {styles: {backgroundColor: string, borderColor: string, color: string}, title: string}, testing: {styles: {backgroundColor: string, borderColor: string, color: string}, title: string}, progress: {styles: {backgroundColor: string, borderColor: string, color: string}, title: string}, refinement: {styles: {backgroundColor: string, borderColor: string, color: string}, title: string}, done: {styles: {backgroundColor: string, borderColor: string, color: string}, title: string}}}
 */
export const badgeCustomConfig = {
    progress: {
        styles: {
            backgroundColor: '#7a17da',
            borderColor: '#7a17da',
            color: '#e3d4ef',
        },
        title: 'In progress',
    },
    done: {
        styles: {
            backgroundColor: '#3bde69',
            borderColor: '#3bde69',
            color: '#345b37',
        },
        title: 'Done',
    },
    blocked: {
        styles: {
            backgroundColor: '#cb1100',
            borderColor: '#cb1100',
            color: '#eaeaea',
        },
        title: 'Blocked',
    },
    testing: {
        styles: {
            backgroundColor: '#67e8d0',
            borderColor: '#67e8d0',
            color: '#026453',
        },
        title: 'Testing',
    },
    refinement: {
        styles: {
            backgroundColor: '#e8c767',
            borderColor: '#e8c767',
            color: '#734900',
        },
        title: 'Needs refinement',
    },
}

/**
 * Export list of badges containing the new custom badges
 * @type {*&{REFINEMENT: string, DONE: string, TESTING: string, PROGRESS: string, BLOCKED: string}}
 */
export const TOUJOU_BADGES = {
    ...BADGE,
    PROGRESS: 'progress',
    DONE: 'done',
    BLOCKED: 'blocked',
    TESTING: 'testing',
    REFINEMENT: 'refinement',
};


