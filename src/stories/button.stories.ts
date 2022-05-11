import { Meta } from '@storybook/web-components';

export default {
    title: 'Toujou/Button',
    argTypes: {
        buttonType: {
            name: 'Button type',
            options: ['primary', 'secondary', 'font'],
            control: { type: 'radio' },
            defaultValue: ['primary']
        },
        isShadow: {
            name: 'Shadow button',
            type: 'boolean',
        },
        isExpanded: {
            name: 'Expanded button',
            type: 'boolean',
        },
        isDisabled: {
            name: 'Disabled',
            type: 'boolean',
            required: true,
        },
        buttonText: {
            name: 'Button text',
            type: 'string',
            required: true,
        },
    }
} as Meta;


const Template = (args) => {
    const buttonClasses = `button button--${args.buttonType} ${args.isShadow ? 'button--shadow' : ''} ${args.isExpanded ? 'button--expanded' : ''}`

    return `<button class="${buttonClasses}" ${args.isDisabled ? 'disabled' : ''}>${args.buttonText}</button>`;
}

export const Button = Template.bind({});
Button.args = {
    buttonType: 'primary',
    isShadow: false,
    isExpanded: false,
    isDisabled: false,
    buttonText: "Nice button",
}

