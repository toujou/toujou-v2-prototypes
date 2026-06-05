import { LitElement } from 'lit';
export declare class ToujouTabs extends LitElement {
    private tabsButtons;
    private tabsPanels;
    private currentActiveId;
    private scrollPrevButton;
    private scrollNextButton;
    private tabsButtonsContainer;
    private resizeObserver;
    connectedCallback(): void;
    disconnectedCallback(): void;
    createRenderRoot(): this;
    set _currentActiveId(id: string);
    get _currentActiveId(): string | undefined;
    _onButtonClick: (event: Event) => void;
    _onKeyDown: (event: KeyboardEvent) => void;
    _onScrollPrevClick: () => void;
    _onScrollNextClick: () => void;
    _scrollTabs: (direction: "prev" | "next") => void;
    _scrollButtonIntoView: (button: HTMLButtonElement) => void;
    _updateScrollButtonVisibility: () => void;
    _updateUI: () => void;
}
declare global {
    interface HTMLElementTagNameMap {
        'toujou-tabs': ToujouTabs;
    }
}
