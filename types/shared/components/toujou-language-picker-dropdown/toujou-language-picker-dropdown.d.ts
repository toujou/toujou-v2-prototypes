declare class ToujouLanguagePickerDropdown extends HTMLElement {
    private static readonly SELECT_SELECTOR;
    private _select;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _onSelectChange;
}
