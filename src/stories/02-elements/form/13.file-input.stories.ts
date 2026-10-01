import { StoryFn, Meta } from '@storybook/web-components-vite';

export default {
    title: 'COMPONENTS/Forms',
    argTypes: {
        state: {
            table: {
                category: "Inputs settings",
                defaultValue: { summary: 'default' },
            },
            name: 'Input state',
            description: "Set the visible input state",
            options: ['default', 'disabled', 'success', 'error'],
            control: { type: 'radio' },
            required: true,
        },
    },
} satisfies Meta;

interface ToujouFileInputStoryProps {
    state: string;
}

const Template: StoryFn<ToujouFileInputStoryProps> = (args: ToujouFileInputStoryProps) => {
    const disabledAttribute = args.state === 'disabled' ? 'disabled' : '';

    return `
        <style>
            body {
                background-color: var(--color-bg);
            }
        </style>
        <form
            enctype="multipart/form-data"
            method="post"
            class="form"
            id="testform-1000091"
            action="#"
            novalidate="true">

            <toujou-input-group class="input-group input-group--file-upload ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
				<label class="input-label" for="testform-1000091-fileupload-1">File upload</label>
				<span class="input-description">This is a description</span>
		        <input data-pristine-required-message-de="The given subject was empty."
		               class="input input--file-upload"
		               id="testform-1000091-fileupload-1"
		               accept="application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.oasis.opendocument.text,application/pdf"
		               type="file"
		               name="tx_form_formframework[testform-1000091][fileupload-1]"
		               ${disabledAttribute}>
                   <span class="pristine-error form__error">The given subject was empty.</span>
        	</toujou-input-group>

        	<toujou-input-group class="input-group input-group--image-upload ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
				<label class="input-label" for="testform-1000091-imageupload-2">Image upload</label>
				<span class="input-description">This is a description</span>
		        <input data-pristine-required-message-de="The given subject was empty."
		               class="input input--imageupload image-upload"
		               id="testform-1000091-imageupload-2"
		               accept="image/jpeg,image/png,image/bmp"
		               type="file"
		               name="tx_form_formframework[testform-1000091][imageupload-2]"
		               ${disabledAttribute}>
               <span class="pristine-error form__error">The given subject was empty.</span>
        	</toujou-input-group>

        	<toujou-input-group class="input-group input-group--image-upload ${args.state === 'error' ? 'input-group--has-error' : ''} ${args.state === 'success' ? 'input-group--has-success' : ''} ${args.state === 'disabled' ? 'input-group--disabled' : ''}">
				<label class="input-label" for="testform-1000091-imageupload-3">Image upload with clear button</label>
				<span class="input-description">This is a description</span>
				<toujou-input-file-clearable class="input-file-clearable">
				    <input data-pristine-required-message-de="The given subject was empty."
		               class="input input--imageupload image-upload"
		               id="testform-1000091-imageupload-3"
		               accept="image/jpeg,image/png,image/bmp"
		               type="file"
		               name="tx_form_formframework[testform-1000091][imageupload-3]"
		               slot="input"
		               ${disabledAttribute}>
                   <button id="clear_button" class="input-file-clearable__button input-file-clearable__button--clear" slot="clear-button" aria-label="Clear file input" type="button">
                        <toujou-icon class="icon" icon-name="close" icon-size="normal" icon-color="font"></toujou-icon>
                    </button>
                </toujou-input-file-clearable>
                <span class="pristine-error form__error">The given subject was empty.</span>
        	</toujou-input-group>
        </form>
    `
};

export const FileInputs = Template.bind({});

FileInputs.args = {
    state: 'default'
}