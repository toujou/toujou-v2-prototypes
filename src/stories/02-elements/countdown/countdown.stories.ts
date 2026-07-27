import { StoryFn, Meta } from '@storybook/web-components-vite';

export default {
    title: 'COMPONENTS/Countdown',
    parameters: {},
    argTypes: {
        elementDesign: {
            table: {
                category: "Countdown Settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Countdown element design',
            description: "Set the element design for the countdown element",
            options: ['default', 'primary', 'secondary', 'inverted'],
            control: { type: 'radio' },
            required: true,
        },
        hideLabels: {
            table: {
                category: "Countdown Settings",
            },
            name: 'Hide labels',
            description: "Hide the countdown labels",
            control: { type: 'boolean' },
            required: true,
        },
        hideFinishedDays: {
            table: {
                category: "Countdown Settings",
            },
            name: 'Hide finished days',
            description: "Hide the days element once it reaches 00",
            control: { type: 'boolean' },
            required: true,
        },
        hideCounterOnFinished: {
            table: {
                category: "Countdown Settings",
            },
            name: 'Hide counter when finished',
            description: "Hide the counter element once the target date has been reached",
            control: { type: 'boolean' },
            required: true,
        },
    },
} satisfies Meta;

interface CountdownStoryProps {
    elementDesign: string,
    hideLabels: boolean,
    hideFinishedDays: boolean,
    hideCounterOnFinished: boolean,
}

const countdownTemplate = (targetDate: string, label: string, args: CountdownStoryProps) => `
    <h2>${label}</h2>

    <toujou-countdown
        class="countdown"
        target-date="${targetDate}"
        role="timer"
        aria-label="Countdown to ${targetDate}"
        element-design="${args.elementDesign}"
        ${args.hideLabels ? 'hide-labels' : ''}
        ${args.hideFinishedDays ? 'hide-finished-days' : ''}
        ${args.hideCounterOnFinished ? 'hide-counter-when-finished' : ''}
    >
        <div class="countdown__counter" aria-hidden="true">
            <span class="countdown__item" data-unit="days">
                <span class="countdown__value">00</span>
                ${args.hideLabels ? '' : '<span class="countdown__label">Days</span>'}
            </span>
        
            <span class="countdown__separator"></span>
    
            <span class="countdown__item" data-unit="hours">
                <span class="countdown__value">00</span>
                ${args.hideLabels ? '' : '<span class="countdown__label">Hours</span>'}
            </span>
    
            <span class="countdown__separator"></span>
    
            <span class="countdown__item" data-unit="minutes">
                <span class="countdown__value">00</span>
                ${args.hideLabels ? '' : '<span class="countdown__label">Minutes</span>'}
            </span>
    
            <span class="countdown__separator"></span>
    
            <span class="countdown__item" data-unit="seconds">
                <span class="countdown__value">00</span>
                ${args.hideLabels ? '' : '<span class="countdown__label">Seconds</span>'}
            </span>
        </div>
        
        <p class="countdown__message">This is the countdown success message!!!</p>
    </toujou-countdown>
    
    <br>
    <br>
   
`;

const Template: StoryFn<CountdownStoryProps> = (args: CountdownStoryProps) => {
    const now = new Date();

    const sixMonthsFromNow = new Date(now);
    sixMonthsFromNow.setMonth(now.getMonth() + 6);

    const twoHoursFromNow = new Date(now);
    twoHoursFromNow.setHours(now.getHours() + 2);

    const fiveSecondsFromNow = new Date(now);
    fiveSecondsFromNow.setSeconds(now.getSeconds() + 5);

    return `
        <main class="main">
            ${countdownTemplate(
                sixMonthsFromNow.toISOString(),
                'Six months countdown',
                args
            )}
    
            ${countdownTemplate(
                twoHoursFromNow.toISOString(),
                'Two hours countdown', 
                args
            )}
            
            ${countdownTemplate(
                fiveSecondsFromNow.toISOString(),
                'Five seconds countdown',
                args
            )}
        </main>
    `;
};

export const Countdown = Template.bind({});

Countdown.args = {
    elementDesign: 'default',
    hideLabels: false,
    hideFinishedDays: false,
    hideCounterOnFinished: false
}
