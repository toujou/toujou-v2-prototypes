class ToujouContactDialog {
    private readonly dialogEl: HTMLDialogElement;

    constructor(dialogEl: HTMLDialogElement) {
        this.dialogEl = dialogEl;
        console.log('111', this.dialogEl);
        window.addEventListener('open-contact-dialog', this._onOpenContactDialog.bind(this));
    }

    _onOpenContactDialog(): void {
        console.log('OPEN!!!!!!')
        this.dialogEl.showModal();
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const contactStateInput = document.querySelector('input[name="contact-state"]') as HTMLInputElement;
    if (!contactStateInput) return;

    const contactDialog = document.querySelector('#contact-dialog') as HTMLDialogElement;
    if (!contactDialog) return;

    new ToujouContactDialog(contactDialog);

    contactStateInput.addEventListener('change', () => {
        console.log(contactStateInput.checked)
        contactStateInput.dispatchEvent(new CustomEvent('open-contact-dialog', {bubbles: true, composed: true}));
    })
});
