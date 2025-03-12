class ToujouLanguagePickerDropdown extends HTMLElement {
    private static readonly SELECT_SELECTOR = 'select.language-picker-dropdown__select';

    private _select: HTMLSelectElement | null = null;

    constructor() {
        super();
        this._onSelectChange = this._onSelectChange.bind(this);
    }

    connectedCallback() {
        this._select = this.querySelector(ToujouLanguagePickerDropdown.SELECT_SELECTOR);

        this._select?.addEventListener('change', this._onSelectChange);
    }

    disconnectedCallback() {
        this._select?.removeEventListener('change', this._onSelectChange);
    }

    // When the select value changes, redirect the user to the select language URL
    private _onSelectChange() {
        const langUrl = this._select!.value;
        if (langUrl) {
            window.location.href = langUrl;
        }
    }
}

customElements.define('toujou-language-picker-dropdown', ToujouLanguagePickerDropdown);
