export declare class ToujouSlidingNav extends HTMLElement {
    startingActiveLevel: number;
    maximalLevel: number;
    _backButtonEl: HTMLButtonElement | null;
    _mainNavEl: HTMLUListElement | null;
    _subtitleEl: HTMLParagraphElement | null;
    _subtitleText: string;
    _activeLevel: number | null;
    _chevrons: HTMLSpanElement[];
    _currentOpenItems: HTMLLIElement[];
    ATTRIBUTES: {
        NAV_OPEN_LEVEL: string;
        LI_OPEN_ITEM: string;
    };
    constructor();
    set activeLevel(value: number | null);
    get activeLevel(): number | null;
    connectedCallback(): void;
    _getElements(): void;
    _updateUI(): void;
    _handleBackButtonClick(): void;
    _handleChevronClick(event: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-sliding-nav': ToujouSlidingNav;
    }
}
