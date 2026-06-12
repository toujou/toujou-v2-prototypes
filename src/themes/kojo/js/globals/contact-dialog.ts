class ToujouContactDialog {
    private readonly dialogEl: HTMLDialogElement;
    private readonly closeButton: HTMLButtonElement | null;

    constructor(dialogEl: HTMLDialogElement) {
        this.dialogEl = dialogEl;
        this.closeButton = this.dialogEl.querySelector('.contact-dialog__close');

        this._onDialogClick = this._onDialogClick.bind(this);
        this._onOpenContactDialog = this._onOpenContactDialog.bind(this);
        this._closeDialog = this._closeDialog.bind(this);

        this._addEventListeners();
    }

    private _addEventListeners() {
        window.addEventListener('open-contact-dialog', this._onOpenContactDialog);
        this.closeButton?.addEventListener('click', this._closeDialog);
        this.dialogEl.addEventListener('click', this._onDialogClick);
    }

    private _onOpenContactDialog(): void {
        this.dialogEl.showModal();
    }

    private _closeDialog(): void {
        this.dialogEl.close();
    }

    private _onDialogClick(event: MouseEvent) {
        const cardRect = this.dialogEl.getBoundingClientRect();
        const isInDialog =
            event.clientX >= cardRect.left &&
            event.clientX <= cardRect.right &&
            event.clientY >= cardRect.top &&
            event.clientY <= cardRect.bottom;

        if (!isInDialog) {
            this._closeDialog();
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const contactStateInput = document.querySelector('input[name="contact-state"]') as HTMLInputElement;
    if (!contactStateInput) return;

    const contactDialog = document.querySelector('#contact-dialog') as HTMLDialogElement;
    if (!contactDialog) return;

    new ToujouContactDialog(contactDialog);

    contactStateInput.addEventListener('change', () => {
        contactStateInput.dispatchEvent(new CustomEvent('open-contact-dialog', { bubbles: true, composed: true }));
    })
});
